<script lang="ts">
  export let url: string, title: string, download: string;
</script>

<div class="border-2 border-black w-auto rounded-md">
  <img class="rounded-sm" src={url} alt={title} />
  <div>
    <!-- <h5>Title</h5> -->
    <div
      class="text-center bg-cyan-400 m-3 w-24 border-2 border-black rounded-md"
    >
      <a href={download}>Go</a>
    </div>
  </div>
</div>
