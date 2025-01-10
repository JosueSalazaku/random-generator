<script lang="ts">
  import { link } from 'svelte-spa-router';
  import { onMount } from 'svelte';

  let isMobile = false;
  let isOpen = false;

  const checkScreenSize = () => {
    isMobile = window.innerWidth <= 768;
  };

  const handleDropDownCLick = () => {
    isOpen = !isOpen;
  }

  onMount(() => {
    checkScreenSize();
    window.addEventListener('resize', checkScreenSize);
    return () => window.removeEventListener('resize', checkScreenSize);
  });
</script>

{#if isMobile}
  <nav class="py-4 text-2xl font-bold ">
    <a use:link href="/">BiteSpin</a>
    <button on:click={handleDropDownCLick}>X</button>
    
    {#if isOpen}
    <div class="fixed inset-0 z-50 flex flex-col items-center justify-center opacity-100 ju jus jush-screen bg-violet-800">
      <button on:click={handleDropDownCLick}>x</button>
      <div class="flex flex-col items-center justify-center gap-4">
        <a on:click={handleDropDownCLick} use:link href="/">BiteSpin</a>
        <a on:click={handleDropDownCLick} use:link href="/about">About</a>
        <a on:click={handleDropDownCLick} use:link href="/login">Login/ Sign Up</a>
      </div>
    </div>
    {/if}
    
  </nav>
{:else}
  <nav class="py-4 text-2xl font-bold ">
    <a use:link href="/">BiteSpin</a>
    <a use:link href="/about">About</a>
    <a use:link href="/login">Login/ Sign Up</a>
  </nav>
{/if}