# svelte-fluid-header

Work In Progress!

`svelte-fluid-header` is a responsive and customizable header bar component for [Svelte](https://svelte.dev/).

On **smaller screens**, the right side of the header displays a hamburger button which clicks to reveal a drawer of content below (for a vertical menu).

On **larger screens**, the hamburger button is replaced by another slotted content (for a horizontal menu).

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

### `left`

The `left` slot goes into the left side of the header, usually a logo and/or page title.

### `right`

The `right` slot goes into the right side of the header (on larger screens), usually a list of horizontal links.

### `drawer`

The `drawer` slot goes into the section below the header (for larger screens). It is hidden and can be toggled, usually to reveal a vertical list of links.

### `right-collapsed` (optional)

The `right-collapsed` slot replaces the `right` slot on smaller screens, usually for a button to open or close the drawer below. It is optional as you can leave it out and you get default hamburger and close buttons, which are customizable. However you can replace the default and place whatever you want in the slot.

## Props

### `bp`

The breakpoint at which the `right-collapsed` and `drawer` slots are hidden, and the `right` slot is displayed.
Possible values are `sm` (640px), `md`(768px), `lg`(1024px), `xl`(1200px). Default is `sm`.

### `duration`

The duration of the drawer slider animation in milliseconds.
The default is `300`.

### `as`

The HTML tag that wraps the component.
Possible values are `header`, `section`, `div`.
The default is `div`.

## Styling

You have two classes that you can hook to style `svelte-fluid-header`: `fluid-header-container` and `fluid-header-button`;

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

You can replace the name of these classes with the `containerClass` and `defaultButtonClass` props;

## Events

Two events are emitted from the component.

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
