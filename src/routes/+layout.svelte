<script>
  import TailwindCss from "../lib/TailwindCSS.svelte";
  import Navbar from "../components/Navbar.svelte";
</script>

<Navbar />

<div class="container w-full mx-auto my-3">
  <slot><!-- optional fallback --></slot>
</div>
