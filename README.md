# svelte-fluid-header

Work In Progress!

`svelte-fluid-header` is a responsive and customizable header bar component for [Svelte](https://svelte.dev/).

On **smaller screens**, the right side of the header shows a hamburger button which clicks to reveal a drawer of content (vertical menu) below. On **larger screens**, the hamburger button is hidden and a horizontal menu is put in its place.

## Install

`npm install svelte-fluid-header`

## Usage

```html
<script>
  import Header from "svelte-fluid-header"
</script>

<Header
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

### left

The `left` slot goes into the left side of the header, usually a logo and/or page title.

### right

The `right` slot goes into the right side of the header on large screens, usually a list of horizontal links.

### drawer

The `drawer` slot goes into the section below the header. It is hidden and can be toggled, usually to reveal a list a vertical list of links.

### right-collapsed (optional)

The `right-collapsed` slot replaces the `right` slot on smaller screen, usually for a button to open or close the drawer below. It is optional because you can leave it out and you get default hamburger and close buttons, which are customizable.

## Props

### `bp`

The breakpoint at which the hamburger button and drawer are hidden. Values are `sm`, `md`, `lg`, `xl`. Default is `sm`.

### `duration`

The duration of the drawer slider effect in milliseconds. The default is `200`.

### `as`

The HTML tag that wraps the component. Valid values are `header`, `section`, `div`. The default is `div`.

## Custom Styling

```html
<style>
  :global(.fluid-header-container) {
    background-color: lightblue;
    padding: 10px;
  }
  :global(.fluid-header-button:hover) {
    font-size: 1.1rem;
  }
</style>
```

## Events

Events are emitted from the component

### `open`

When the drawer opens:

```html
<Header
  on:open={() => {
    console.log('drawer will open');
  }}
  <!-- slots -->
</Header>

```

### `close`

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

Coming Soon
