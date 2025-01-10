<script lang="ts">
    import FileImport from "../components/FileImport.svelte";
  </script>
  
  <div class="flex flex-col items-center justify-center w-full gap-3 py-12">
    <h1 class="py-5 text-4xl font-bold text-center">
      Create a QR Code for Your Menu Randomizer
    </h1>
    <p class="text-lg leading-relaxed text-center">
      Upload your menu file, and we'll provide a unique QR code linking 
      directly to your custom randomizer page for customers to explore.
    </p>
    <FileImport />
  </div>
  