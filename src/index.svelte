<script>
  import { createEventDispatcher } from "svelte";
  import { slide } from "svelte/transition";
  import Wrap from "./Wrap.svelte";
  import DefaultButton from "./DefaultButton.svelte";
  export let wrapperClass = "fluid-header-container";
  export let defaultButtonClass = "fluid-header-button";
  export let bp = "sm";
  export let duration = 300;
  export let as = "header";
  let navIsOpen = false;

  let dispatch = createEventDispatcher();
  export let toggleMenu = () => {
    dispatch(navIsOpen ? "close" : "open");
    return (navIsOpen = !navIsOpen);
  };
</script>

<Wrap {as} {wrapperClass}>
  <div class="{bp}:flex {bp}:justify-between {bp}:items-center">
    <div class="flex justify-between items-center">
      <slot name="left">left</slot>
      <div class="{bp}:hidden">
        <slot name="right-collapsed">
          <DefaultButton {toggleMenu} {navIsOpen} {defaultButtonClass} />
        </slot>
      </div>
    </div>
    <div class="hidden {bp}:block">
      <slot name="right">right</slot>
    </div>
    {#if navIsOpen}
      <div transition:slide={{ duration }} class="{bp}:hidden">
        <slot name="drawer">drawer</slot>
      </div>
    {/if}
  </div>
</Wrap>
