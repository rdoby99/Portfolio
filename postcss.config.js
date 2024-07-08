/** @type {import('postcss-load-config').Config} */
import postcssImport from "postcss-import";
import autoprefixer from "autoprefixer";
import tailwindcss from "tailwindcss";
import nesting from "postcss-nesting";
import cssnanoPlugin from "cssnano";

const config = {
  plugins: [postcssImport, autoprefixer, cssnanoPlugin, nesting, tailwindcss],
};

export default config;
