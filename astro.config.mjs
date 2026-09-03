import { defineConfig } from "astro/config";
import sitemap from "@astrojs/sitemap";

export default defineConfig({
  site: "https://rob11304220-jpg.github.io",
  output: "static",
  integrations: [
    sitemap({
      filter: (page) => !page.endsWith("/404") && !page.endsWith("/404.html"),
      serialize(item) {
        const url = new URL(item.url);

        if (url.pathname === "/blog") url.pathname = "/blog/";
        if (url.pathname.startsWith("/blog/posts/") && !url.pathname.endsWith(".html")) {
          url.pathname += ".html";
        }

        return { ...item, url: url.href };
      },
    }),
  ],
  build: {
    format: "preserve",
  },
});
