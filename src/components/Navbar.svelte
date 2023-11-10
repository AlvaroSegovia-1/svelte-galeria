<script lang="ts">
  import TailwindCss from "../lib/TailwindCSS.svelte";
  import ActiveRoute from "./ActiveRoute.svelte";
  import { page } from "$app/stores";
</script>

<nav
  class="header sticky top-0 bg-slate-600 text-white shadow-md flex flex-row items-center px-8 py-02"
>
  <!-- navigation -->

  <ul class=" flex items-center">
    <li>
      <!-- logo -->
      <h1 class="">
        <a href="/">Galeria SK </a>
      </h1>
    </li>
    <li class="p-4 cursor-pointer">
      <ActiveRoute route="/">Home</ActiveRoute>
    </li>
    <li class="p-4 cursor-pointer">
      <!-- <ActiveRoute route="/search">Search</ActiveRoute> -->
      <a class:active={$page.path === "/search"} href="/search">Buscar</a>
    </li>
  </ul>
</nav>
