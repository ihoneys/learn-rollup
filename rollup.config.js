import path from "path";
import { terser } from "rollup-plugin-terser";
import resolve from "@rollup/plugin-node-resolve";
import commonjs from "@rollup/plugin-commonjs";

export default {
  input: ["src/index.js"],
  // dir: path.resolve(__dirname, "dist"),
  output: [
    {
      dir: "dist/es",
      format: "esm",
      plugins: [terser()],
    },
    {
      dir: "dist/cjs",
      format: "cjs",
      plugins: [terser()],
    },
  ],
  plugins: [resolve(), commonjs()],
};
