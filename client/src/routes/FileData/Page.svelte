<script lang="ts">
import axios from "axios";
import type Product from './../../../type';
import {
    onMount
} from "svelte";

let products: Product[] = [];
let randomDrink: { name: string;price: number;baseLiquor: string } | null = null;

async function fetchProducts() {
    try {
        const response = await axios.get('http://localhost:3000/products');
        products = response.data as Product[];
        console.log(products[0].fileData);
        return products;
    } catch (error) {
        console.error('Error fetching products:', error);
    }
}

onMount(() => {
    fetchProducts();
    randomiseProducts()
});

function randomiseProducts() {
    if (products.length === 0) {
        console.error('No products available to randomise');
        return;
    }

    const drink = products[0].fileData;

    if (!Array.isArray(drink)) {
        console.error('fileData is not an array');
        return;
    }

    const randomIndex = Math.floor(Math.random() * drink.length);
    randomDrink = drink[randomIndex];
    console.log('Random drink:', randomDrink);
}
</script>

<main class="flex flex-col items-start justify-center w-screen h-screen px-4">
    {#if randomDrink}
    <div class="mt-4">
        <p><strong>Name:</strong> {randomDrink.name}</p>
        <p><strong>Price:</strong> {randomDrink.price}</p>
        <!-- <p><strong>Base Liquor:</strong> {randomDrink.baseLiquor}</p> -->
    </div>
    {/if}
    <button on:click={randomiseProducts}>Choose</button>
</main>
