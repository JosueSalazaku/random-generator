<script lang="ts">
    import axios from "axios";
    import { FileUp } from "lucide-svelte";
    import * as qrcode from 'qrcode';
    import { Jumper } from 'svelte-loading-spinners';

    let file: File | null = null;
    let dragActive: boolean = false;
    let errorMessage: string = "";
    let successMessage: string = "";
    let qrCodeUrl = '';
    let loading = false;

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
        const validExtension = file.name.toLowerCase().endsWith(".xls") || file.name.toLowerCase().endsWith(".xlsx");
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

        loading = true;
        try {
            const response = await axios.post("http://localhost:3000/files/uploads", formData);

            if (response.status === 200 || response.status === 201) {
                const data = response.data;
                console.log("File uploaded successfully:", data);
                successMessage = "File uploaded successfully";
                errorMessage = "";

                const uniqId = data.uniqId;
                const url = `http://localhost:5173/#/fileData/${uniqId}`;
                qrCodeUrl = await qrcode.toDataURL(url);
            } else {
                throw new Error(`Server Error: ${response.status}`);
            }
        } catch (error) {
            console.error("Upload error:", error);
            errorMessage = "File upload failed.";
            successMessage = "";
        } finally {
            loading = false;
        }
    }
</script>

<main class="flex flex-col items-center justify-center gap-5 w-96">
    <!-- svelte-ignore a11y_no_redundant_roles -->
    <section
        role="region"
        aria-label="File upload area"
        on:dragover={handleDragOver}
        on:dragleave={handleDragLeave}
        on:drop={handleDrop}
        class:bg-violet-700={dragActive}
        class="flex flex-col items-center justify-center gap-1 transition border rounded-full bg-violet-600 w-96 h-96 hover:bg-violet-800 hover:border-4 delay-2000"
        class:bg-violet-800={file}
    >
        <FileUp strokeWidth={.7} size={110} />

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
    {#if loading}
        <Jumper size="60" color="#4B0082" unit="px" duration="1s" />
    {/if}
    {#if successMessage}
        <p class="mt-2 text-xl text-center text-blue-200">{successMessage}</p>
    {/if}
    {#if qrCodeUrl}
        <img src={qrCodeUrl} alt="QR Code" class="qr-code" />
    {/if}
    {#if !qrCodeUrl && !loading}
        <button on:click={HandleFileUpload} aria-label="Upload File" class="self-center w-24 px-4 py-2 transition border-2 rounded-xl hover:bg-violet-600 delay-2000">Upload</button>
    {/if}
</main>

<style>
    .qr-code {
        width: 300px; 
        height: 300px; 
        padding: 10px; 
        background-color: #fff; 
        border-radius: 10px;
    }
</style>