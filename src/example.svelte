<script>
  import Fluid from "./index.svelte";
  const links = [...new Array(5)].map((_, i) => `Page ${i + 1}`);
</script>

<style>
  header {
    background-color: lightblue;
    height: 50px;
    padding: 0 15px;
  }
  :global(.svelte-fluid-header--button) {
    color: grey;
  }
  :global(.svelte-fluid-header--button:hover) {
    color: black;
  }
  .h-menu a {
    padding-right: 15px;
  }
  .v-menu {
    background-color: lightblue;
    padding: 15px;
  }
  .v-menu a {
    display: block;
    padding-bottom: 15px;
  }
  main {
    padding: 15px;
    height: 200vh;
  }
</style>

<header>
  <Fluid breakpoint="md">
    <div slot="left">My Header Title</div>
    <nav class="h-menu" slot="right">
      {#each links as link}
        <a href="javascript:void(0)">{link}</a>
      {/each}
    </nav>
    <nav class="v-menu" slot="drawer">
      {#each links as link}
        <a href="javascript:void(0)">{link}</a>
      {/each}
    </nav>
  </Fluid>
</header>

<main>
  Resize the viewport horizontally to see
  <b>svelte-fluid-header</b>
  in action.
</main>
