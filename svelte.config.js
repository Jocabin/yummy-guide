import adapter from '@sveltejs/adapter-netlify';
import preprocess from 'svelte-preprocess';
import { dirname } from 'path';
import { fileURLToPath } from 'url';

const __dirname = dirname(fileURLToPath(import.meta.url));

/** @type {import('@sveltejs/kit').Config} */
const config = {
	// Consult https://github.com/sveltejs/svelte-preprocess
	// for more information about preprocessors
	preprocess : preprocess({
		sass: {
			prependData: `@import '${__dirname}/src/styles/env'`,
			renderSync: true,
		},
	}),
	kit: {
		adapter: adapter()
	}
};

export default config;
