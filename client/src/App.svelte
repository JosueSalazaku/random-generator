<script lang="ts">
  import Router from "svelte-spa-router";
  import About from "./routes/About.svelte";
  import Login from "./routes/Login.svelte";
  import Nav from "./components/Nav.svelte";
  
  const routes = {
    "/about": About,
    "/login": Login,
  };
  
  let file: File | null = null;
  let dragActive: boolean = false;
  
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
        file = event.dataTransfer.files[0];
        console.log("Dropped file", file);
    }
  }
  
  function handleFileChange(event: Event) {
    const input = event.target as HTMLInputElement;
    if (input.files && input.files.length > 0) {
      file = input.files[0];
    }
  }

  function triggerFileInput() {
    const inputElement = document.getElementById("file-input") as HTMLInputElement;
    inputElement?.click();
  }
</script>

<main class="flex flex-col items-center justify-start min-h-screen px-4 text-white bg-violet-500">
  <Nav />
  <div class="flex flex-col items-center justify-center w-full gap-3 py-12">
    <h1 class="py-5 text-4xl font-bold text-center">Create a QR Code for Your Menu Randomizer</h1>
    <p class="text-lg leading-relaxed text-center">
      Upload your menu file, and we'll provide a unique QR code linking 
      directly to your custom randomizer page for customers to explore.
    </p>
  </div>
  
  <section
    role="region"
    on:dragover={handleDragOver}
    on:dragleave={handleDragLeave}
    on:drop={handleDrop}
    class:bg-violet-700={dragActive}
    class="flex flex-col items-center justify-center gap-2 border rounded-full bg-violet-600 w-96 h-96 hover:border-violet-800 hover:border-4"
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
    
    <h2>Menu/ data in XLS file</h2>
    <h2 class="font-bold">Drag and drop your file here</h2>

    <button type="button" on:click={triggerFileInput} class="underline">Or, Choose file</button>
    
    <input
      id="file-input"
      type="file"
      hidden
      on:change={handleFileChange}
    />
    
    {#if file}
      <p class="mt-2 text-sm text-center text-indigo-950">Selected File:</p>
      <h1 class="text-bold">{file.name}</h1>
    {/if}
  </section>
</main>
