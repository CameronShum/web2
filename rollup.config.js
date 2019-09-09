import alias from "rollup-plugin-alias";
import commonjs from "rollup-plugin-commonjs";
import json from "rollup-plugin-json";
import resolve from "rollup-plugin-node-resolve";
import path from "path";

const plugins = [
  alias({
    resolve: [".js", "/index.js"],
    "@": path.resolve("src")
  }),
  resolve(),
  commonjs({ include: "node_modules/**" }),
  json()
];

export default {
  input: "./src/index.js",
  plugins
};
