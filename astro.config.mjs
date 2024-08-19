import { defineConfig } from 'astro/config';

import preact from "@astrojs/preact";

// https://astro.build/config
export default defineConfig({
  site: "https://nimble-yeot-1dc5df.netlify.app/",
  integrations: [preact()]
});