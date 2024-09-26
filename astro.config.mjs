// @ts-check
import { defineConfig } from "astro/config";

import react from "@astrojs/react";
import sanity from "@sanity/astro";
import { loadEnv } from "vite";
const { PUBLIC_SANITY_PROJECT_ID: projectId, PUBLIC_SANITY_DATASET: dataset } =
  loadEnv(process.env.NODE_ENV || "development", process.cwd(), "");

// Use projectId and dataset later in your config
// https://astro.build/config
export default defineConfig({
  output: "hybrid",
  integrations: [
    sanity({
      projectId,
      dataset,
      useCdn: false,
      apiVersion: "2024-09-25",
      studioBasePath: "/studio",
      stega: {
        studioUrl: "/studio",
      },
    }),
    react(),
  ],
});
