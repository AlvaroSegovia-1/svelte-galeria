<script>
  import TailwindCss from "../lib/TailwindCSS.svelte";
  import Navbar from "../components/Navbar.svelte";
</script>

<Navbar />

<div class="  bg-[#F6E8B5] w-full mx-auto pt-5 pb-20 mb-10">
  <slot><!-- optional fallback --></slot>
</div>



<!-- outline outline-2 -->
