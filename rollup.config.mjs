import terser from "@rollup/plugin-terser";
import babel from "@rollup/plugin-babel";
// import json from "@rollup/plugin-json";
import { nodeResolve } from "@rollup/plugin-node-resolve";
import commonjs from "@rollup/plugin-commonjs";
import replace from "@rollup/plugin-replace";
import scss from "rollup-plugin-scss";
import dotenv from "rollup-plugin-dotenv";

const devMode = process.env.NODE_ENV === "development";

export default {
  input: "src/index.jsx",
  output: {
    file: "public/bundle.js",
    format: "cjs",
  },
  plugins: [
    nodeResolve(),
    // json(),
    dotenv(),
    replace({
      preventAssignment: false,
      "process.env.NODE_ENV": devMode ? '"development"' : '"production"',
    }),
    commonjs(),
    babel({
      babelHelpers: "bundled",
      exclude: "node_modules/**",
      presets: [["@babel/preset-react", { runtime: "automatic" }]],
    }),
    scss({ fileName: "bundle.css" }),
    !devMode &&
      terser({
        ecma: 2020,
        mangle: { toplevel: true },
        compress: {
          module: true,
          toplevel: true,
          unsafe_arrows: true,
          drop_console: true,
          drop_debugger: true,
        },
        output: { quote_style: 1 },
      }),
  ],
};
