<script>
  export let as = "div";
  export let wrapperClass = "";
</script>

{#if as === 'header'}
  <header class={wrapperClass}>
    <slot />
  </header>
{:else if as === 'section'}
  <section class={wrapperClass}>
    <slot />
  </section>
{:else}
  <div class={wrapperClass}>
    <slot />
  </div>
{/if}
