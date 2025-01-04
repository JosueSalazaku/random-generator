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



<main>
  <Nav />
  <Router {routes} />
</main>