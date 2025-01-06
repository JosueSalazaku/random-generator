<script lang="ts">
import  Router  from "svelte-spa-router";
import About from "./routes/About.svelte";
import Login from "./routes/Login.svelte";
import Nav from "./components/Nav.svelte";

const routes = {
  "/about": About,
  "/login": Login,
};

</script>

<main class="flex flex-col items-center min-h-screen px-4 text-white jusstify-center bg-violet-500">
  <header>
    <Nav />
  </header>
  <div class="flex flex-col items-center justify-center w-full gap-3 py-12">
    <h1 class="py-5 text-4xl font-bold text-center">Create a QR Code for Your Menu Randomizer</h1>
    <p class="text-lg leading-relaxed text-center">
      Upload your menu file, and we'll provide a unique QR code linking 
      directly to your custom randomizer page for customers to explore.
    </p>
  </div>
  <section class="flex items-center justify-center border-1">
    <input type="file" name="" id="" class="px-4 py-2 text-white bg-blue-500 rounded-full cursor-pointer hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-300">
  </section>
</main>
