import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";

export default defineConfig({
  site: "https://HydraBor.github.io",
  base: "/sunset-town/",
  integrations: [tailwind()],
});