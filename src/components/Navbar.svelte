<script lang="ts">
  import TailwindCss from "../lib/TailwindCSS.svelte";
  import ActiveRoute from "./ActiveRoute.svelte";
  import { page } from "$app/stores";

  /* $: isActive = $page.url.pathname = "/"; */

  /* $: isActive = $page.url.pathname; */

  const nav = [
    { title: "Home", path: "/" },
    { title: "About", path: "/about" },
    { title: "Search", path: "/search" },
  ];
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
      <a class:active={($page.url.pathname = "/")} href="/">Home</a>
      <!-- <ActiveRoute route="/">Home</ActiveRoute> -->
    </li>
    <li class="p-4 cursor-pointer">
      <a href="/about">About</a>
      <!--  <a class:active={($page.url.pathname = "/about")} href="/about">About</a> -->
      <!-- <ActiveRoute route="/">Home</ActiveRoute> -->
    </li>
    <li class="p-4 cursor-pointer">
      <!-- <ActiveRoute route="/search">Search</ActiveRoute> -->
      <a class:active={($page.url.pathname = "/search")} href="/search"
        >Search</a
      >
    </li>
  </ul>
</nav>

<style>
  li:hover {
    text-decoration: underline;
  }
</style>
