import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
  site: 'https://tandir-demo.pages.dev',
  output: 'static',
  trailingSlash: 'always',
  devToolbar: { enabled: false },
  vite: { plugins: [tailwindcss()] },
});
