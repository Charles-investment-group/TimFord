import adapter from '@sveltejs/adapter-static';

/** @type {import('@sveltejs/kit').Config} */
const base = process.env.BASE_PATH || (process.env.NODE_ENV === 'production' ? '/cig' : '');

const config = {
	kit: {
		adapter: adapter({
			fallback: 'index.html'
		}),
		paths: {
			base
		}
	}
};

export default config;
