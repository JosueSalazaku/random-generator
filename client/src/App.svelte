<script lang="ts">
  import Router from "svelte-spa-router";
  import About from "./routes/About.svelte";
  import Login from "./routes/Login.svelte";
  import Nav from "./components/Nav.svelte";
  import Home from "./routes/Home.svelte";
  
  const routes = {
    "/": Home,
    "/about": About,
    "/login": Login,
  };
  
</script>

<main class="flex flex-col items-center justify-start min-h-screen px-4 text-white bg-violet-500">
  <Nav />
    <Router {routes} />
</main>
