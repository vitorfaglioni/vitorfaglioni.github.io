import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';

import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
	site: 'https://dentrodaminhacabeca.com.br',
	base: '/dentro-da-minha-cabeca',
	integrations: [mdx(), sitemap()]
});
