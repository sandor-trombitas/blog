import { defineConfig } from "astro/config";
import mdx from "@astrojs/mdx";
import { remarkReadingTime } from "./src/plugins/remark-reading-time.ts";
import sitemap from "@astrojs/sitemap";

// https://astro.build/config
export default defineConfig({
  markdown: {
    remarkPlugins: [remarkReadingTime],
  },
  site: "https://example.com",
  integrations: [mdx(), sitemap()],
});
