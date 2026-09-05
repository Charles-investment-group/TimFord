<script>
	import Boxes from 'lucide-svelte/icons/boxes';
	import Globe from 'lucide-svelte/icons/globe';
	import Smartphone from 'lucide-svelte/icons/smartphone';
	import Gamepad2 from 'lucide-svelte/icons/gamepad-2';
	import Lock from 'lucide-svelte/icons/lock';
	import Check from 'lucide-svelte/icons/check';
	import Toggle from '$lib/admin/ui/Toggle.svelte';
	import { Settings } from '$lib/admin/services/settings.js';

	/**
	 * Migrated from TimFord-Mats/src/components/admin/TemplateControlsTab.jsx.
	 * Fully functional: the original persists to localStorage via `Settings`,
	 * which works unchanged here.
	 */
	const CATEGORIES = [
		{
			id: 'websites',
			label: 'Website Templates',
			desc: 'E-commerce, business, portfolio & landing page templates',
			icon: Globe,
			color: 'text-primary'
		},
		{
			id: 'apps',
			label: 'App & Software Templates',
			desc: 'Mobile apps, SaaS, dashboards & enterprise tools',
			icon: Smartphone,
			color: 'text-pink-400'
		},
		{
			id: 'games',
			label: 'Game Templates',
			desc: '2D & 3D games — platformers, shooters, puzzles, RPGs',
			icon: Gamepad2,
			color: 'text-violet-400'
		}
	];

	let vals = $state({
		websites: Settings.templatesEnabled('websites'),
		apps: Settings.templatesEnabled('apps'),
		games: Settings.templatesEnabled('games')
	});
	let flash = $state(null);
	let flashTimer;

	const flashNow = (key) => {
		flash = key;
		clearTimeout(flashTimer);
		flashTimer = setTimeout(() => (flash = null), 1400);
	};

	const toggle = (cat) => {
		const next = !vals[cat];
		vals[cat] = next;
		Settings.setTemplatesEnabled(cat, next);
		flashNow(cat);
	};

	const setAll = (on) => {
		for (const key of ['websites', 'apps', 'games']) {
			vals[key] = on;
			Settings.setTemplatesEnabled(key, on);
		}
		flashNow('all');
	};

	const allOn = $derived(vals.websites && vals.apps && vals.games);
</script>

<div class="space-y-5">
	<div class="mb-1 flex items-center gap-3">
		<div class="flex h-10 w-10 items-center justify-center rounded-xl bg-cyan-500/20">
			<Boxes class="h-5 w-5 text-cyan-400" />
		</div>
		<div>
			<h3 class="text-lg font-black text-white">Template Controls</h3>
			<p class="text-xs text-slate-400">
				Turn template categories on or off. When off, users cannot see or purchase those templates.
			</p>
		</div>
	</div>

	<!-- Master toggle -->
	<div
		class="flex items-center justify-between gap-4 rounded-2xl border border-amber-800/40 bg-amber-950/20 p-4"
	>
		<div class="flex items-center gap-3">
			<div class="flex h-9 w-9 items-center justify-center rounded-xl bg-amber-500/20">
				<Lock class="h-4 w-4 text-amber-400" />
			</div>
			<div>
				<p class="text-sm font-bold text-white">All Templates</p>
				<p class="text-xs text-slate-400">
					{allOn ? 'All categories are visible' : 'One or more categories are disabled'}
				</p>
			</div>
		</div>
		<div class="flex items-center gap-2">
			<button
				onclick={() => setAll(true)}
				class="rounded-lg bg-emerald-600/80 px-3 py-1.5 text-xs font-semibold text-white transition-colors hover:bg-emerald-500"
				>Enable All</button
			>
			<button
				onclick={() => setAll(false)}
				class="rounded-lg bg-red-600/80 px-3 py-1.5 text-xs font-semibold text-white transition-colors hover:bg-red-500"
				>Disable All</button
			>
		</div>
	</div>

	<!-- Category cards -->
	<div class="grid gap-4 sm:grid-cols-3">
		{#each CATEGORIES as cat (cat.id)}
			{@const on = vals[cat.id]}
			<div
				class="flex flex-col gap-3 rounded-2xl border p-4 transition-colors {on
					? 'border-[#5b73a3] bg-[#34466e]'
					: 'border-red-900/40 bg-[#28365a]'}"
			>
				<div class="flex items-center justify-between">
					<div class="flex h-9 w-9 items-center justify-center rounded-xl bg-[#455a85]">
						<cat.icon class="h-4 w-4 {cat.color}" />
					</div>
					<Toggle {on} onclick={() => toggle(cat.id)} label={cat.label} />
				</div>
				<div>
					<p class="text-sm font-bold text-white">{cat.label}</p>
					<p class="mt-1 text-xs leading-relaxed text-slate-400">{cat.desc}</p>
				</div>
				<div class="flex items-center gap-1.5 text-xs">
					{#if on}
						<span class="flex items-center gap-1 font-semibold text-emerald-400">
							<Check class="h-3.5 w-3.5" /> Visible &amp; purchasable
						</span>
					{:else}
						<span class="flex items-center gap-1 font-semibold text-red-400">
							<Lock class="h-3.5 w-3.5" /> Hidden &amp; blocked
						</span>
					{/if}
					{#if flash === cat.id}
						<span class="ml-auto flex items-center gap-1 text-cyan-400">
							<Check class="h-3 w-3" /> Saved
						</span>
					{/if}
				</div>
			</div>
		{/each}
	</div>
</div>
