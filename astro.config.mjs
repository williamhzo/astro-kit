import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

// based on https://astro.build/config
export default defineConfig({
  // site: 'https://williamhzo.me/', TODO: Add actual domain name
  integrations: [sitemap()],
  experimental: {
    // see https://docs.astro.build/en/guides/content-collections/
    contentCollections: true,
  },
});
