// @ts-check
import { defineConfig } from "astro/config";

import react from "@astrojs/react";
import sanityIntegration from "@sanity/astro";

// https://astro.build/config
export default defineConfig({
  output: "hybrid",
  integrations: [
    sanityIntegration({
      projectId: "8rkh2pji",
      dataset: "production",
      useCdn: false,
      apiVersion: "2024-09-25",
      studioBasePath: "/studio",
    }),
    react(),
  ],
});
