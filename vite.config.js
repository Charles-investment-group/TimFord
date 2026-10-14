import adapter from '@sveltejs/adapter-vercel';
import { sveltekit } from '@sveltejs/kit/vite';
import { defineConfig } from 'vite';

export default defineConfig({
	plugins: [
		sveltekit({
			adapter: adapter({ runtime: 'nodejs24.x' }),
			alias: {
				$lib: './src/lib'
			}
		})
	]
});

