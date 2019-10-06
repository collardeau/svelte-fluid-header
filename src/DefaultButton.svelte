<script>
  export let toggleDrawer;
  export let drawerIsOpen;
  export let defaultButtonClass;
</script>

<button
  type="button"
  on:click={toggleDrawer}
  class="h-6 w-6 block text-gray-700 hover:text-gray-900 focus:text-gray-900
  focus:outline-none focus:shadow-outline active:bg-gray-900 {defaultButtonClass}">
  <svg
    class="fill-current"
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 20 20">
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
