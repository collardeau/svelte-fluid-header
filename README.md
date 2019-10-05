# svelte-fluid-header

`svelte-fluid-header` is a responsive and customizable header component for [Svelte](https://svelte.dev/).

On **smaller screens**, use a horizontal menu in your header. On **larger screens**, use a collapsible vertical menu below the header.

## Install

`npm install svelte-fluid-header`

## Usage

```html
<script>
  import Header from "svelte-fluid-header"
</script>

<Header>
  <div slot="left">
    My Header Title
  </div>
  <div slot="right">
    My Horizontal Menu
   </div>
   <div slot="drawer">
     My Vertical Menu
   </div>
</Header>

```

## Slots

#### `left`

The `left` slot goes into the left side of the header, usually for a logo and/or page title.

#### `right`

On larger screens, the `right` slot goes into the right side of the header, usually for a horizontal menu.

#### `drawer`

On smaller screens, the `drawer` slot goes into the section below the header. It is hidden and can be toggled (with a customizable animation). Here you can place a vertical menu.

#### `right-collapsed` (optional)

On smaller screens, the `right-collapsed` slot replaces the `right` slot. It is a good place for a button to open or close the drawer below. It is optional as `svelte-fluid-header` has a default slot with hamburger and close buttons (which you can further style). However you may place whatever you want in the slot. (see Bind section to create your own button.)

## Props

#### `bp`

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

#### `as`

The HTML tag that wraps the component.
Possible values are `header`, `section`, `div`.
The default is `div`.

## Styling

Slots give you control of your content and your style. To style the wrapper element and the default button of a `svelte-fluid-header` component, there are two classes that you can hook into: `fluid-header-container` and `fluid-header-button`;

```html
<style>
  :global(.fluid-header-container) {
    background-color: lightblue;
    padding: 10px;
  }
  :global(.fluid-header-button) {
    font-size: 1.1rem;
  }
</style>
```

You can replace the name of these classes via the `containerClass` and `defaultButtonClass` props;

```html
<style>
  :global(.my-header) {
    background-color: lightblue;
    padding: 10px;
  }
</style>

<Header containerClass="my-header">
  <!-- slots -->
</Header>

```
## Events

Two events are emitted from the component:

#### `open`

When the drawer opens:

```html
<Header
  on:open={() => {
    console.log('drawer will open');
  }}
  <!-- slots -->
</Header>

```

#### `close`

When the draw closes:

```html
<Header
  on:close={() => {
    console.log('drawer will close');
  }}
  <!-- slots -->
</Header>

```

## Bind

You can bind to the `toggleDrawer` function of your `svelte-fluid-header` component. This is especially handy if you implement your own toggle button:

```html
<script>
  let toggleDrawer; // from component binding
  const handleClick = () => {
    toggleDrawer();
  };
</script>

<Header bind:toggleDrawer>
  <!-- other slots -->
  <div slot="right-collapsed">
    <button on:click={handleClick}>Toggle</button>
  </div>
</Header>

```

## Kitchen Sink

All the options available:

```html
<script>
  let toggleDrawer;
  const handleClick = () => {
    toggleMenu();
  };
  const onDrawerOpen = () => {
    // do stuff
  }
  const onDrawerClose = () => {
    // do stuff
  }
</script>

<style>
  :global(.fluid-header-container) {
    background-color: lightblue;
    padding: 10px;
  }
  :global(.fluid-header-button:hover) {
    font-weight: bold;
  }
</style>

<Header
  as='header'
  bind:toggleDrawer
  on:open={onDrawerOpen}
  on:close={onDrawerClose}>
  <div slot="left">
    <h1>My app</h1>
  </div>
  <div slot="right">My Horizontal Menu</div>
  <div slot="drawer">My Vertical Menu</div>
  <div slot="right-collapsed">
    <button on:click={handleClick}>Toggle</button>
  </div>
</Header>
```
