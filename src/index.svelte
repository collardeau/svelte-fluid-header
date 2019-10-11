<script>
  import { createEventDispatcher } from "svelte";
  import { slide } from "svelte/transition";
  import DefaultButton from "./DefaultButton.svelte";
  import validate from "./validation";

  const pre = "svelte-fluid-header--";

  export let breakpoint = "sm";
  export let duration = 200;
  export let drawerIsOpen = false;

  let dispatch = createEventDispatcher();
  export let toggleDrawer = () => {
    dispatch(drawerIsOpen ? "close" : "open");
    return (drawerIsOpen = !drawerIsOpen);
  };

  function dupParent(node, bp = "") {
    const { parentNode } = node;
    const clonedParent = parentNode.cloneNode(true);
    clonedParent.classList.add(`svelte-fluid-header--large-${bp}`);
    clonedParent.removeChild(clonedParent.children[1]);
    parentNode.classList.add(`svelte-fluid-header--small-${bp}`);
    parentNode.removeChild(parentNode.children[0]);
    parentNode.insertAdjacentElement("beforebegin", clonedParent);
  }

  const flexBetween =
    "display: flex; justify-content: space-between; align-items: center; height: 100%";

  $: validate({ duration, breakpoint });
</script>

<style>
  :global(.svelte-fluid-header--large-sm) {
    display: none;
  }
  :global(.svelte-fluid-header--large-md) {
    display: none;
  }
  :global(.svelte-fluid-header--large-lg) {
    display: none;
  }
  :global(.svelte-fluid-header--large-xl) {
    display: none;
  }

  @media (min-width: 640px) {
    :global(.svelte-fluid-header--small-sm) {
      display: none;
    }
    :global(.svelte-fluid-header--large-sm) {
      display: block;
    }
  }
  @media (min-width: 768px) {
    :global(.svelte-fluid-header--small-md) {
      display: none;
    }
    :global(.svelte-fluid-header--large-md) {
      display: block;
    }
  }
  @media (min-width: 1024px) {
    :global(.svelte-fluid-header--small-lg) {
      display: none;
    }
    :global(.svelte-fluid-header--large-lg) {
      display: block;
    }
  }
  @media (min-width: 1280px) {
    :global(.svelte-fluid-header--small-xl) {
      display: none;
    }
    :global(.svelte-fluid-header--large-xl) {
      display: block;
    }
  }
</style>

<div style={flexBetween}>
  <slot name="left">left</slot>
  <slot name="right">right</slot>
</div>

<div use:dupParent={breakpoint} style="height:100%">
  <div style={flexBetween}>
    <slot name="left">left</slot>
    <slot name="right-collapsed">
      <DefaultButton {toggleDrawer} {drawerIsOpen} />
    </slot>
  </div>
  {#if drawerIsOpen}
    <div
      transition:slide={{ duration }}
      style="position: absolute; left: 0; width: 100vw;">
      <slot name="drawer">drawer</slot>
    </div>
  {/if}
</div>
