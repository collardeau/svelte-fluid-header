const warn = (msg, val) => console.warn(`[svelte-fluid-header]:`, msg, val);

const validAs = ["div", "header", "section"];
const validBp = ["sm", "md", "lg", "xl"];

export default function validate({
  duration,
  breakpoint,
  as,
  containerClass,
  defaultButtonClass
}) {
  if (typeof duration !== "number")
    warn("The `duration` prop is not a number: ", duration);
  if (typeof containerClass !== "string")
    warn("The `containerClass` prop is not a string: ", containerClass);
  if (typeof defaultButtonClass !== "string")
    warn("The `defaultButtonClass` prop is not a string: ", defaultButtonClass);
  if (!validAs.some(a => a === as))
    warn(
      "The `as` prop is not valid. It should be one of 'div', 'header' or 'section' but is:",
      as
    );
  if (!validBp.some(b => b === breakpoint))
    warn(
      "The `breakpoint` prop is not valid. It should be one of 'sm', 'md', 'lg' or 'xl' but is: ",
      breakpoint
    );
}
