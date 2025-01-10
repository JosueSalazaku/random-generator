<script lang="ts">
    import axios from "axios";
    
    let file: File | null = null;
    let dragActive: boolean = false;
    let errorMessage: string = "";
    let successMessage: string = ""
    
    function handleDragOver(event: DragEvent) {
      event.preventDefault();
      dragActive = true;
    }
    
    function handleDragLeave() {
      dragActive = false;
    }
    
    function handleDrop(event: DragEvent) {
      event.preventDefault();
      dragActive = false;
      if (event.dataTransfer && event.dataTransfer.files.length > 0) {
        const droppedFile = event.dataTransfer.files[0];
        if (fileTypeCheck(droppedFile)) {
          file = droppedFile;
          errorMessage = "";
        } else {
          file = null;
          errorMessage = "Invalid file type. Please upload an .xls or xlsx file.";
        }
      }
    }
    
    function handleFileChange(event: Event) {
      const input = event.target as HTMLInputElement;
      if (input.files && input.files.length > 0) {
        const selectedFile = input.files[0];
        if (fileTypeCheck(selectedFile)) {
          file = selectedFile;
          errorMessage = "";
        } else {
          file = null;
          errorMessage = "Invalid file type. Please upload an .xls or xlsx file.";
        }
      }
    }
    
    function triggerFileInput() {
      const inputElement = document.getElementById("file-input") as HTMLInputElement;
      inputElement?.click();
    }
    
    function fileTypeCheck(file: File): boolean {
      const validMimeType = file.type === "application/vnd.ms-excel";
      const validExtension = file.name.toLowerCase().endsWith(".xls") || file.name.toLowerCase().endsWith(".xlsx")
      return validMimeType || validExtension;
    }

    async function HandleFileUpload() {
    if (!file) {
        errorMessage = "No file selected to upload.";
        successMessage = ""; 
        return;
    }
    
    const formData = new FormData();
    formData.append("file", file);
    
    try {
        const response = await axios.post("http://localhost:3000/files/uploads", formData);

        if (response.status === 200 || response.status === 201) {
            const data = response.data;
            console.log("File uploaded successfully:", data);
            successMessage = "File uploaded successfully";
            errorMessage = "";
        } else {
            throw new Error(`Server Error: ${response.status}`);
        }
    } catch (error) {
        console.error("Upload error:", error);
        errorMessage = "File upload failed.";
        successMessage = ""; 
    }
}

    </script>
    
    <main class="flex flex-col items-center justify-center gap-5 w-96 ">
        <!-- svelte-ignore a11y_no_static_element_interactions -->
        <section
            on:dragover={handleDragOver}
            on:dragleave={handleDragLeave}
            on:drop={handleDrop}
            class:bg-violet-700={dragActive}
            class="flex flex-col items-center justify-center gap-1 transition border rounded-full bg-violet-600 w-96 h-96 hover:bg-violet-800 hover:border-4 delay-2000"
        >
            <svg
                fill="#ffff"
                width="80px"
                height="80px"
                viewBox="0 0 256 256"
                id="Flat"
                xmlns="http://www.w3.org/2000/svg"
            >
                <path d="M210.82861,69.17139l-40-40A4.00116,4.00116,0,0,0,168,28H88A12.01375,12.01375,0,0,0,76,40V60H56A12.01375,12.01375,0,0,0,44,72V216a12.01375,12.01375,0,0,0,12,12H168a12.01375,12.01375,0,0,0,12-12V196h20a12.01375,12.01375,0,0,0,12-12V72A4.00116,4.00116,0,0,0,210.82861,69.17139ZM172,216a4.00458,4.00458,0,0,1-4,4H56a4.00458,4.00458,0,0,1-4-4V72a4.00458,4.00458,0,0,1,4-4h78.34326L172,105.65674Zm32-32a4.00458,4.00458,0,0,1-4,4H180V104a4.00116,4.00116,0,0,0-1.17139-2.82861l-40-40A4.00116,4.00116,0,0,0,136,60H84V40a4.00458,4.00458,0,0,1,4-4h78.34326L204,73.65674Zm-64-32a4.0002,4.0002,0,0,1-4,4H88a4,4,0,0,1,0-8h48A4.0002,4.0002,0,0,1,140,152Zm0,32a4.0002,4.0002,0,0,1-4,4H88a4,4,0,0,1,0-8h48A4.0002,4.0002,0,0,1,140,184Z"/>
            </svg>
        
            <h2>Menu/ data in xls or xlsx file</h2>
            <h2 class="font-bold">Drag and drop your file here</h2>
        
            <button type="button" on:click={triggerFileInput} class="underline">
                Or, Choose file
            </button>
        
            <input
                id="file-input"
                type="file"
                hidden
                on:change={handleFileChange}
            />
        {#if errorMessage}
          <p class="mt-2 text-sm text-center text-red-600">{errorMessage}</p>
        {:else if file}
          <p class="mt-2 text-sm text-center text-indigo-950">Selected File:</p>
          <h1 class="font-bold">{file.name}</h1>
        {/if}
        </section>
        {#if successMessage}
          <p class="mt-2 text-xl text-center text-blue-200">{successMessage}</p>
        {/if}
        <button on:click={HandleFileUpload} aria-label="Upload File" class="self-center w-24 px-4 py-2 transition border-2 rounded-xl hover:bg-violet-600 delay-2000">Upload</button>
    </main>
