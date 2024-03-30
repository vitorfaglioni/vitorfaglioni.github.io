import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';

import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
	site: 'https://vitorfaglioni.github.io',
	base: '/pelada-na-net',
	integrations: [mdx(), sitemap()]
});
