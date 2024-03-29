import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';

import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
	site: 'https://vitorfaglioni.github.com',
	base: '/dentro-da-minha-cabeca',
	integrations: [mdx(), sitemap()]
});
