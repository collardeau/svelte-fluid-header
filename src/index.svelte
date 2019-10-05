<script>
  import "./main.css";
  import { slide } from "svelte/transition";
  export let wrapperClass = "";
  export let toggleMenu = () => (navIsOpen = !navIsOpen);
  export let bp = "sm";
  export let duration = 500;
  let navIsOpen = false;
</script>

<header class="{bp}:flex {bp}:justify-between {bp}:items-center {wrapperClass}">
  <div class="flex justify-between items-center {bp}:p-0">
    <slot name="left">New Header</slot>
    <div class="{bp}:hidden">
      <slot name="right-small">
        <button
          on:click={toggleMenu}
          class="block text-gray-700 hover:text-gray-900 focus:text-gray-900
          focus:outline-none focus:shadow-outline">
          <svg
            class="h-6 w-6 fill-current"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20">
            {#if !navIsOpen}
              <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
            {:else}
              <path
                d="M10 8.586L2.929 1.515 1.515 2.929 8.586 10l-7.071 7.071 1.414
                1.414L10 11.414l7.071 7.071 1.414-1.414L11.414
                10l7.071-7.071-1.414-1.414L10 8.586z" />
            {/if}
          </svg>
        </button>
      </slot>
    </div>
  </div>
  <div class="hidden {bp}:block">
    <slot name="horizontal">Horizontal Menu</slot>
  </div>
  {#if navIsOpen}
    <div transition:slide={{ duration }} class="{bp}:hidden">
      <slot name="menu-slider">Vertical Menu</slot>
    </div>
  {/if}

</header>
