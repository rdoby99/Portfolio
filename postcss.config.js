/** @type {import('postcss-load-config').Config} */
import postcssImport from 'postcss-import';
import autoprefixer from 'autoprefixer';
import tailwindcss from 'tailwindcss';
import nesting from 'postcss-nesting';

const config = {
  plugins: [
    postcssImport,
    autoprefixer,
    nesting,
    tailwindcss,
  ]
}

export default config;