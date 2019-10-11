# svelte-fluid-header

`svelte-fluid-header` is a **responsive** and **customizable** header component for [Svelte](https://svelte.dev/).

On **smaller screens**, use a horizontal menu inside your header. On **larger screens**, replace it for a collapsible vertical menu.

![](http://g.recordit.co/StDfeVYJRp.gif)

`svelte-fluid-header` has **no production dependencies**.

# Demo

[Example](https://xuyfx.csb.app/) |  [Code Sandbox](https://codesandbox.io/s/svelte-fluid-header-demo-xuyfx?view=preview)

## Install

`npm install svelte-fluid-header`

## Usage

```html
<script>
  import Fluid from "svelte-fluid-header"
</script>

<header>
  <Fluid>
    <div slot="left">
      My Header Title
    </div>
    <div slot="right">
      My Horizontal Menu
    </div>
     <div slot="drawer">
       My Vertical Menu
     </div>
  </Fluid>
</head

```

Make sure to wrap your `<Fluid> ` component in another HTML tag (as in the `<header>` in the example above).

## Slots

#### `left`

The `left` slot goes into the left side of the header, usually for a logo and/or page title.

#### `right`

The `right` slot goes into the right side of the header, usually for a horizontal menu.

*It is hidden on smaller screens.*

#### `drawer`

The `drawer` slot goes below the header, usually to place a vertical menu. It can be toggled into view (with a customizable slide animation).

*It is hidden on larger screens.*

#### `right-collapsed` optional

The `right-collapsed` slot goes to the right of the header on smaller screens, usually for a hamburger button to reveal the drawer.

It is optional as `svelte-fluid-header` provides a default slot (including hamburger and close buttons, which may be styled). See the Binding section below to create a custom button.

*`right-collapsed` is hidden on larger screens.*

## Props

#### `breakpoint`

The breakpoint at which the `right` slot is displayed, and the `right-collapsed` and `drawer` slots are hidden.
Possible values are:
 - `sm` (640px)
 - `md`(768px),
 - `lg`(1024px),
 - `xl`(1200px).
 
 The default value is `sm`.

#### `duration`

The duration of the drawer slider animation in milliseconds.
The default is `200`.

## Styling

Slots give you control of your content and your style.

To style the default button, you can hook into the `svelte-fluid-header--button` class;

```html
<style>
  :global(.svelte-fluid-header--button) {
    color: grey
  }
</style>
```
A few CSS properties such as `background-color` will need an `!important` flag.

## Binding

You can bind to the `toggleDrawer` function of your `svelte-fluid-header` component. This is especially handy if you implement your own toggle button:

```html
<script>
  let toggleDrawer; // from bind below
  const handleClick = () => {
    toggleDrawer();
  };
</script>

<Fluid bind:toggleDrawer>
  <!-- other slots -->
  <div slot="right-collapsed">
    <button on:click={handleClick}>Toggle</button>
  </div>
</Fluid>

```

## Events

Two events are emitted from the component when the drawer is toggled, `open` and `close`:

```html
<Fluid
  on:open={() => {
    console.log('drawer will open');
  }}
  <FluidHeader
  on:close={() => {
    console.log('drawer will close');
  }}
  <!-- slots -->
</Fluid>

```

## Kitchen Sink

All the options available:

```html
<script>
  import Fluid from 'svelte-fluid-header';
  let toggleDrawer;
  const handleClick = () => {
    toggleDrawer();
  };
</script>

<style>
  :global(.svelte-fluid-header--button) {
    color: grey
  }
  :global(.svelte-fluid-header--button:hover) {
    color: grey
  }
</style>

<header>
  <FluidHeader
    breakpoint='md'
    duration={250}
    bind:toggleDrawer
    on:open={ () => {} }
    on:close={ ()=> {} }>
    <div slot="left"><h1>My app</h1></div>
    <div slot="right">My Horizontal Menu</div>
    <div slot="drawer">My Vertical Menu</div>
    <div slot="right-collapsed">
      <button on:click={handleClick}>Toggle</button>
    </div>
  </FluidHeader>
</header>
```
