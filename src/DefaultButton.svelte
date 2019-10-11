<script>
  export let toggleDrawer;
  export let drawerIsOpen;
</script>

<style>
  .svelte-fluid-header--button {
    height: 2rem;
    width: 2rem;
    background-color: inherit;
    border: none;
    display: block;
    cursor: pointer;
  }
  svg {
    fill: currentColor;
  }
</style>

<button
  type="button"
  on:click={toggleDrawer}
  class="svelte-fluid-header--button">
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
    {#if !drawerIsOpen}
      <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
    {:else}
      <path
        d="M10 8.586L2.929 1.515 1.515 2.929 8.586 10l-7.071 7.071 1.414
        1.414L10 11.414l7.071 7.071 1.414-1.414L11.414
        10l7.071-7.071-1.414-1.414L10 8.586z" />
    {/if}
  </svg>
</button>
