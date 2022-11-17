import adapter from '@sveltejs/adapter-netlify';
import preprocess from 'svelte-preprocess';
import { dirname } from 'path';
import { fileURLToPath } from 'url';

const __dirname = dirname(fileURLToPath(import.meta.url));

/** @type {import('@sveltejs/kit').Config} */
const config = {
	preprocess : preprocess({
		sass: {
			prependData: `@import './src/styles/env.sass'`,
			renderSync: true,
		},
	}),
	kit: {
		adapter: adapter()
	}
};

export default config;
