<script>
	import Globe from 'lucide-svelte/icons/globe';
	import ExternalLink from 'lucide-svelte/icons/external-link';

	/**
	 * Migrated from TimFord-Mats/src/components/admin/PagesTab.jsx.
	 *
	 * Pure UI — the original has no data dependency, so this is a complete,
	 * working port with no backend needed.
	 *
	 * NOTE: the PAGES list is copied verbatim from the original. These paths are
	 * the *Base44* app's routes; most do not exist in the TimFord SvelteKit site
	 * yet, so the "Open Page" links will 404 until those routes are built.
	 * Rewriting the list to TimFord's own pages is a content decision for the
	 * team, not part of a faithful migration, so it is left as-is.
	 */
	const PAGES = [
		{
			name: 'Landing / Home',
			path: '/',
			desc: 'Main marketing page — hero, templates, pricing, and hosting.'
		},
		{
			name: 'Templates',
			path: '/templates',
			desc: 'Browse website, app, and game templates with live previews.'
		},
		{ name: 'Builder', path: '/builder', desc: 'AI-powered builder workspace powered by Chloe.' },
		{ name: 'Media Studio', path: '/media-studio', desc: 'Generate images, logos, and video ads.' },
		{
			name: 'Hosting Dashboard',
			path: '/hosting',
			desc: 'Domain search and project deployment.'
		},
		{ name: 'Account', path: '/account', desc: 'User account settings and credits.' },
		{ name: 'Dashboard', path: '/dashboard', desc: 'User projects overview.' },
		{ name: 'Support', path: '/support', desc: 'Support ticket submission form.' },
		{ name: 'Admin Apply', path: '/admin-apply', desc: 'Public admin application form.' }
	];
</script>

<div>
	<h3 class="mb-1 flex items-center gap-2 text-lg font-bold text-white">
		<Globe class="h-5 w-5 text-cyan-400" /> Website Pages
	</h3>
	<p class="mb-5 text-sm text-slate-400">See and open every main page of the site from one place.</p>
	<div class="grid gap-3 sm:grid-cols-2">
		{#each PAGES as page (page.path)}
			<div class="flex flex-col rounded-xl border border-slate-700 bg-slate-700/40 p-4">
				<div class="flex items-center justify-between gap-2">
					<p class="text-sm font-semibold text-white">{page.name}</p>
					<span class="font-mono text-xs text-slate-400">{page.path}</span>
				</div>
				<p class="mt-1 flex-1 text-xs text-slate-300">{page.desc}</p>
				<a
					href={page.path}
					target="_blank"
					rel="noopener noreferrer"
					class="mt-3 inline-flex items-center gap-1.5 self-start rounded-md border border-slate-600 px-3 py-1.5 text-xs font-medium text-slate-200 transition-colors hover:bg-slate-600 hover:text-white"
				>
					<ExternalLink class="h-3.5 w-3.5" /> Open Page
				</a>
			</div>
		{/each}
	</div>
</div>
