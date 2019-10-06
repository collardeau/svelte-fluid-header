<script>
  import "./main.css";
  import { createEventDispatcher } from "svelte";
  import { slide } from "svelte/transition";
  import Wrap from "./Wrap.svelte";
  import DefaultButton from "./DefaultButton.svelte";
  import validate from "./validation";

  export let containerClass = "fluid-header-container";
  export let defaultButtonClass = "fluid-header-button";
  export let breakpoint = "sm";
  export let duration = 200;
  export let as = "header";
  export let drawerIsOpen = false;

  let dispatch = createEventDispatcher();
  export let toggleDrawer = () => {
    dispatch(drawerIsOpen ? "close" : "open");
    return (drawerIsOpen = !drawerIsOpen);
  };

  $: validate({ duration, as, breakpoint, containerClass, defaultButtonClass });
</script>

<Wrap {as} {containerClass}>
  <div
    class="{breakpoint}:flex {breakpoint}:justify-between {breakpoint}:items-center">
    <div class="flex justify-between items-center">
      <slot name="left">left</slot>
      <div class="{breakpoint}:hidden">
        <slot name="right-collapsed">
          <DefaultButton {toggleDrawer} {drawerIsOpen} {defaultButtonClass} />
        </slot>
      </div>
    </div>
    <div class="hidden {breakpoint}:block">
      <slot name="right">right</slot>
    </div>
    {#if drawerIsOpen}
      <div transition:slide={{ duration }} class="{breakpoint}:hidden">
        <slot name="drawer">drawer</slot>
      </div>
    {/if}
  </div>
</Wrap>
