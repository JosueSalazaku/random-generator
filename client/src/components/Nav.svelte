<script lang="ts">
import { link } from 'svelte-spa-router';
import { onMount } from 'svelte';
import { X } from 'lucide-svelte';
import { AlignJustify } from 'lucide-svelte';

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
<nav class="flex flex-row items-center justify-between w-screen px-4 py-4 text-2xl">
    <a use:link href="/" class="font-bold">BiteSpin</a>
    <button on:click={handleDropDownCLick}><AlignJustify size="30" /></button>

    {#if isOpen}
    <div class="fixed inset-0 z-50 flex flex-col items-center justify-center opacity-100 ju jus jush-screen bg-violet-800">
        <div class="absolute flex flex-row items-center justify-between w-screen px-4 top-4 ">
            <a use:link href="/" class="font-bold">BiteSpin</a>
            <button class="" on:click={handleDropDownCLick}><X size="30" /></button>
        </div>
        <div class="flex flex-col items-center justify-center gap-4 text-4xl">
            <a on:click={handleDropDownCLick} use:link href="/">BiteSpin</a>
            <!-- <a on:click={handleDropDownCLick} use:link href="/about">About</a>
            <a on:click={handleDropDownCLick} use:link href="/login">Login/ Sign Up</a> -->
        </div>
    </div>
    {/if}

</nav>
{:else}
<nav class="flex justify-between w-screen gap-3 px-4 py-4 text-2xl">
    <a use:link href="/"  class="font-bold">BiteSpin</a>
    <div class="space-x-4">
        <!-- <a use:link href="/about">About</a>
        <a use:link href="/login">Login/ Sign Up</a> -->
    </div>
</nav>
{/if}
