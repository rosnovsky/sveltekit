import sveltePreprocess from 'svelte-preprocess';
import node from '@sveltejs/adapter-node';
import vercel from '@sveltejs/adapter-vercel';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	// Consult https://github.com/sveltejs/svelte-preprocess
	// for more information about preprocessors
	preprocess: sveltePreprocess(),
	kit: {
		// By default, `npm run build` will create a standard Node app.
		// You can create optimized builds for different platforms by
		// specifying a different adapter
		//adapter: node(),
		adapter: vercel(),
		hydrate: true,
		ssr: true,
		prerender: {
			crawl: true,
			enabled: true,
			entries: ['*'],
			onError: 'fail'
		},
		router: true,
			

		// Comment the paths if wants to run in dev mode.
// 		paths: {
// 			base: '/svelte-kit-blog-demo',
// 			assets: '/svelte-kit-blog-demo'
// 		},

		// hydrate the <div id="svelte"> element in src/app.html
		target: '#svelte',

	}
};

export default config;
