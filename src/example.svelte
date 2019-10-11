<script>
  import FluidHeader from "./index.svelte";

  let toggleDrawer;
  const handleClick = () => {
    toggleDrawer();
  };
</script>

<style>
  header {
    background-color: lightblue;
    height: 50px;
    padding: 0 10px;
  }
  :global(.svelte-fluid-header--button) {
    color: grey;
  }
  :global(.svelte-fluid-header--button:hover) {
    color: black;
  }
</style>

<header>
  <FluidHeader
    bind:toggleDrawer
    on:open={() => {
      console.log('open');
    }}>
    <div slot="left">My app</div>
    <div slot="right">My Horizontal Menu</div>
    <div slot="drawer">My Vertical Menu</div>
    <!-- <div slot="right-collapsed">
    <button on:click={handleClick}>Toggle</button>
  </div> -->
  </FluidHeader>
</header>
