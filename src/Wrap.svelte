<script>
  export let as = "div";
  export let containerClass = "";
</script>

{#if as === 'header'}
  <header class={containerClass}>
    <slot />
  </header>
{:else if as === 'section'}
  <section class={containerClass}>
    <slot />
  </section>
{:else}
  <div class={containerClass}>
    <slot />
  </div>
{/if}
