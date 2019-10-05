import svelte from "rollup-plugin-svelte";
import resolve from "rollup-plugin-node-resolve";
import postcss from "rollup-plugin-postcss";
import pkg from "./package.json";

const name = pkg.name
  .replace(/^(@\S+\/)?(svelte-)?(\S+)/, "$3")
  .replace(/^\w/, m => m.toUpperCase())
  .replace(/-\w/g, m => m[1].toUpperCase());

export default {
  input: "src/index.svelte",
  output: [
    { file: pkg.module, format: "es" },
    { file: pkg.main, format: "umd", name }
  ],
  plugins: [postcss(), svelte(), resolve()]
};
