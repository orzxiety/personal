import adapter from '@sveltejs/adapter-auto';
import { sveltePreprocess } from 'svelte-preprocess';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	preprocess: [
		{
			name: 'strip-announcer',
			markup: ({ content: code }) => {
				code = code.replace(
					/<div id="svelte-announcer" [\s\S]*?<\/div>/,
                    '<svelte:component this={null} />'
				);

				return { code }
			}
		},
		sveltePreprocess()
	],
	kit: {
		adapter: adapter()
	}
};

export default config;
