# svelte-fluid-header

##### Work in Progress

`svelte-fluid-header` is a responsive and customizable header component for [Svelte](https://svelte.dev/).

On **smaller screens**, use a horizontal menu inside your header. On **larger screens**, use a collapsible vertical menu below the header.

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

The `right` slot goes into the right side of the header, usually for a horizontal menu.

It is hidden on smaller screens.

#### `drawer`

The `drawer` slot goes below the header, usually to place a vertical menu. It can be toggled into view (with a customizable animation).

It is hidden on larger screens.

#### `right-collapsed` optional

The `right-collapsed` slot goes to the right of the header on smaller screens, usually for a hamburger button to reveal the drawer.
It is hidden on larger screens.

It is optional as `svelte-fluid-header` provides a default slot including hamburger and close buttons (which you can style). See the Bind section below to create a custom button.

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

Slots give you control of your content and your style.

To style the container element of the header, you can hook into the `fluid-header-container` class. To style the default button, there is `fluid-header-button`;

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
  let toggleDrawer; // from bind below
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
    toggleDrawer();
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
