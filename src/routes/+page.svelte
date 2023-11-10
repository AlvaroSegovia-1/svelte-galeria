<script lang="ts">
  import Card from "../components/Card.svelte";
  import Loading from "../components/Loading.svelte";

  let actualPage: number = 1;

  const APIKEY = import.meta.env.VITE_ACCESSKEY;

  const getImages = async (page: number = 1) => {
    const res = await fetch(
      `https://api.unsplash.com/collections/?page=${page}&per_page=12&client_id=${APIKEY}`
    );

    /*  const res = await fetch(
      "https://api.unsplash.com/collections/?client_id=uWxbRo6Q-1BpcTfEmlWAqBkJZL82yXZhXxzsrOLWLrM"
    ); */

    const data = await res.json();

    console.log(data);

    return data;
  };

  let promise = getImages();

  const handleNextPage = () => {
    actualPage++;
    promise = getImages(actualPage);
  };

  const handlePrevPage = () => {
    actualPage--;
    promise = getImages(actualPage);
  };
</script>

<svelte:head>
  <title>Home - Page {actualPage}</title>
</svelte:head>

<h1 class="text-center">Galeria SK</h1>

<hr />

<div>
  <div class=" flex flex-wrap place-content-center gap-10">
    {#await promise}
      <Loading />
    {:then images}
      {#each images as image}
        <div class="mt-10">
          <Card
            url={image.cover_photo.urls.thumb}
            title={image.cover_photo.alt_description}
            download={image.cover_photo.urls.full}
          />
        </div>
      {/each}
    {/await}
  </div>

  <div class="w-1/2 p-4 mx-auto text-center border">
    {#if actualPage != 1}
      <button
        on:click={handlePrevPage}
        type="button"
        class="text-white bg-yellow-400 hover:bg-yellow-500 focus:outline-none focus:ring-4 focus:ring-yellow-300 font-medium rounded-full text-sm px-5 py-2.5 text-center mr-2 mb-2 dark:focus:ring-yellow-900"
        >Prev</button
      >
    {/if}

    <button
      on:click={handleNextPage}
      type="button"
      class="text-white bg-blue-700 hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 font-medium rounded-full text-sm px-5 py-2.5 text-center mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
      >Next</button
    >
  </div>
</div>
