const warn = (msg, val) => console.warn(`[svelte-fluid-header]:`, msg, val);

const validBp = ["sm", "md", "lg", "xl"];

export default function validate({ duration, breakpoint }) {
  if (typeof duration !== "number")
    warn("The `duration` prop is not a number: ", duration);
  if (!validBp.some(b => b === breakpoint))
    warn(
      "The `breakpoint` prop is not valid. It should be one of 'sm', 'md', 'lg' or 'xl' but is: ",
      breakpoint
    );
}
