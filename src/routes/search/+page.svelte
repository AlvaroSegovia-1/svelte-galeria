<script lang="ts">
  import TailwindCss from "../../lib/TailwindCSS.svelte";
  import Card from "../../components/Card.svelte";
  import Loading from "../../components/Loading.svelte";

  let ref: any;

  let actualPage: number = 1;
  let searchParam: string = "";
  /* let data = "" */

  const APIKEY = import.meta.env.VITE_ACCESSKEY;

  const getImages = async (page: number = 1, searchParam = "") => {
    /*  if (searchParam.trim() = "") {
      return;
    } */

    const res = await fetch(
      `https://api.unsplash.com/search/collections/?query=${searchParam}&page=${page}&per_page=12&client_id=${APIKEY}`
    );

    /*  const res = await fetch(
      "https://api.unsplash.com/collections/?client_id=uWxbRo6Q-1BpcTfEmlWAqBkJZL82yXZhXxzsrOLWLrM"
    ); */

    const data = await res.json();

    console.log(data);

    return data;
  };

  let promise = getImages();

  const handleSubmit = (e: any) => {
    actualPage = 1;
    promise = getImages(actualPage, searchParam);
  };

  const handleNextPage = () => {
    actualPage++;
    promise = getImages(actualPage, searchParam);
  };

  const handlePrevPage = () => {
    actualPage--;
    promise = getImages(actualPage, searchParam);
  };
</script>

<svelte:head>
  <title>Search </title>
</svelte:head>
<!--  {searchParam.trim()= ""
  ? ""
  : `${searchParam } Page ${actualPage}`
  } -->
<div class="bg-[#F6E8B5] h-full">

    <form
    on:submit|preventDefault={handleSubmit}
    class="flex items-center justify-center pt-10 mb-6 "
    >
      <label class="">
        <input
          bind:value={searchParam}
          bind:this={ref}
          type="text"
          placeholder="Search"
          class="input input-bordered w-full max-w-xs"
          on:focus={() => ref.select()}
        />
      </label>

  <button class="btn btn-accent ml-5" type="submit">Search</button>
    </form>

  <div class=" flex flex-wrap place-content-center gap-10">
  {#await promise}
    <Loading />
  {:then images}
    {#each images.results as image}
      <div class="mt-10">
        <Card
          url={image.cover_photo.urls.thumb}
          title={image.cover_photo.alt_description}
          download={image.cover_photo.urls.full}
        />
      </div>
    {/each}

    <div class="w-1/2 p-4 mx-auto text-center">
      {#if actualPage != 1}
        <button
          on:click={handlePrevPage}
          type="button"
          class="text-white bg-yellow-400 hover:bg-yellow-500 focus:outline-none focus:ring-4 focus:ring-yellow-300 font-medium rounded-full text-sm px-5 py-2.5 text-center mr-2 mb-2 dark:focus:ring-yellow-900"
          >Prev</button
        >
      {/if}

      {#if images.results !=""}
              
        <button
        on:click={handleNextPage}
        type="button"
        class="text-white bg-blue-600 hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        >Next</button>
        {/if}
     
    </div>
      {:catch}
    <h3>Error</h3>
  {/await}
  </div>




 </div> 

