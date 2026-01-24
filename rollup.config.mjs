import json from "@rollup/plugin-json";
import terser from "@rollup/plugin-terser";
import nodeResolve from "@rollup/plugin-node-resolve";
import typescript from "@rollup/plugin-typescript";
import serve from "rollup-plugin-serve";
import styles from "rollup-plugin-styler";

const production = !process.env.ROLLUP_WATCH;

const serveOptions = {
  contentBase: ["./dist"],
  host: "0.0.0.0",
  port: 4000,
  allowCrossOrigin: true,
  headers: {
    "Access-Control-Allow-Origin": "*",
  },
};

export default {
  input: "src/card.ts",
  output: [
    {
      file: "dist/brink-renovent-hru-card.js",
      format: "iife",
      name: "version",
      plugins: [terser()],
      sourcemap: true,
    },
  ],
  plugins: [
    styles({
      modules: false,
      // Behavior of inject mode, without actually injecting style into <head>.
      mode: ['inject', () => undefined],
    }),
    json(),
    nodeResolve(),
    typescript(),
    ...(production ? [terser()] : [serve(serveOptions)]),
  ],
};