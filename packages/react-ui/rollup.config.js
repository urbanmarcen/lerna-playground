import Ts from "rollup-plugin-typescript2";
import postcss from "rollup-plugin-postcss";
import scss from "rollup-plugin-scss";
export default {
  input: ["src/index.ts"],
  output: {
    dir: "lib",
    format: "esm",
    sourcemap: true,
    preserveModules: true,
  },
  plugins: [
    Ts(),
    scss(),
    /*postcss({
      extract: false,
      modules: true,
      use: ["sass"],
    }),*/
  ],

  external: ["react", "react-dom"],
};
