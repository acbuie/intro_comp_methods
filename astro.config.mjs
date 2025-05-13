// @ts-check
import { defineConfig } from "astro/config";
import starlight from "@astrojs/starlight";

// https://astro.build/config
export default defineConfig({
  integrations: [
    starlight({
      title: "EPS ###",
      social: [
        {
          icon: "github",
          label: "GitHub",
          href: "https://github.com/acbuie/intro_comp_methods",
        },
      ],
      sidebar: [
        {
          label: "Modules",
          autogenerate: { directory: "modules" },
        },
      ],
    }),
  ],
});
