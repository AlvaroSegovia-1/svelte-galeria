<script lang="ts">
  export let route: string;
  import { page } from "$app/stores";
</script>

<a
  class:active={($page.url.pathname = route)}
  class=""
  aria-current="page"
  href={route}
>
  <slot /></a
>
