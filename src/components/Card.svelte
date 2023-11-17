<script lang="ts">
  export let url: string, title: string, download: string;
</script>

<div class="border border-black rounded-md flex-col items-center justify-center">
  <img class="rounded-t-md" src={url} alt={title} />
   <!-- <div
      class="text-center bg-cyan-400 m-3 w-24 border border-black rounded-md"
    >
      <a class="text-white" href={download}>Ver Imagen</a>      
    </div> -->
    <!-- <button class="btn btn-accent ml-5">Search</button>
    <button class="btn btn-block">block</button> -->

    <button type="button" class="focus:outline-none w-full bg-green-700/30 hover:bg-green-800 focus:ring-4 focus:ring-green-300 font-medium text-sm px-5 py-2.5 me-2 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800">
      
      <a class=""href={download}>Ver Imagen</a> 
      </button>
  
</div>
