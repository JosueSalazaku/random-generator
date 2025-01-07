<script lang="ts">
  import Router from "svelte-spa-router";
  import About from "./routes/About.svelte";
  import Login from "./routes/Login.svelte";
  import Nav from "./components/Nav.svelte";
  import FileImport from "./components/FileImport.svelte";
  
  const routes = {
    "/about": About,
    "/login": Login,
  };
  
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
  <FileImport/>
</main>
