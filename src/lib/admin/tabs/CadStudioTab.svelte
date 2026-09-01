<script>
	import Box from 'lucide-svelte/icons/box';
	import Lock from 'lucide-svelte/icons/lock';
	import Check from 'lucide-svelte/icons/check';
	import Home from 'lucide-svelte/icons/home';
	import Leaf from 'lucide-svelte/icons/leaf';
	import Car from 'lucide-svelte/icons/car';
	import Mountain from 'lucide-svelte/icons/mountain';
	import Sparkles from 'lucide-svelte/icons/sparkles';
	import Toggle from '$lib/admin/ui/Toggle.svelte';
	import { Settings } from '$lib/admin/services/settings.js';

	/**
	 * Migrated from TimFord-Mats/src/components/admin/CadStudioTab.jsx.
	 *
	 * The toggles are fully functional — they persist to localStorage via
	 * `Settings`, exactly as the original does.
	 *
	 * The one difference: the original's "Open CAD Studio" button is a
	 * react-router <Link to="/cad-studio">. TimFord has no /cad-studio route (its
	 * CadStudio.svelte is a landing-page marketing section, not a page), so the
	 * button reports that rather than navigating into the 404 fallback.
	 */
	const CATS = [
		{
			id: 'buildings',
			label: 'Buildings & Structures',
			desc: 'Houses, buildings, walls — architectural parts',
			icon: Home,
			color: 'text-amber-400'
		},
		{
			id: 'vegetation',
			label: 'Vegetation',
			desc: 'Trees, bushes, grass — outdoor environments',
			icon: Leaf,
			color: 'text-emerald-400'
		},
		{
			id: 'vehicles',
			label: 'Vehicles',
			desc: 'Cars, bikes, frames — wheeled & mechanical',
			icon: Car,
			color: 'text-sky-400'
		},
		{
			id: 'parts',
			label: 'Parts & Industrial',
			desc: 'Rocks, raw parts, mechanical components',
			icon: Mountain,
			color: 'text-violet-400'
		},
		{
			id: 'realistic',
			label: 'Realistic Presets',
			desc: 'Hyper-realistic PBR doors, windows, walls, roofs, trucks, SUVs, trees & grass — plus AI-generated objects',
			icon: Sparkles,
			color: 'text-fuchsia-400'
		}
	];

	let master = $state(Settings.get('cad_enabled', true) !== false);
	let vals = $state(
		Object.fromEntries(CATS.map((c) => [c.id, Settings.get(`cad_${c.id}_enabled`, true) !== false]))
	);
	let flash = $state(null);
	let launchBlocked = $state(false);
	let flashTimer;

	const flashNow = (key) => {
		flash = key;
		clearTimeout(flashTimer);
		flashTimer = setTimeout(() => (flash = null), 1400);
	};

	const toggleMaster = () => {
		master = !master;
		Settings.set('cad_enabled', master);
		flashNow('master');
	};

	const toggleCat = (id) => {
		vals[id] = !vals[id];
		Settings.set(`cad_${id}_enabled`, vals[id]);
		flashNow(id);
	};
</script>

<div class="space-y-5">
	<div class="mb-1 flex items-center gap-3">
		<div class="flex h-10 w-10 items-center justify-center rounded-xl bg-violet-500/20">
			<Box class="h-5 w-5 text-violet-400" />
		</div>
		<div>
			<h3 class="text-lg font-black text-white">Forge CAD Studio</h3>
			<p class="text-xs text-slate-400">
				Old-school 3D CAD + modern engine with a realistic render mode, hyper-realistic PBR presets,
				and an AI object generator — model 1D/2D/3D objects for any website, app, game, or
				enterprise software. Chloe and all 82 AIs can build from scratch here.
			</p>
		</div>
	</div>

	<div
		class="flex items-center justify-between gap-4 rounded-2xl border border-primary/40 bg-primary/10 p-4"
	>
		<div>
			<p class="text-sm font-bold text-white">Launch the CAD Studio</p>
			<p class="mt-0.5 text-xs text-slate-400">
				Open the live modeling workspace — drag to orbit, add primitives &amp; presets, edit and
				export.
			</p>
			{#if launchBlocked}
				<p class="mt-2 text-xs leading-relaxed text-amber-400">
					The CAD Studio workspace has not been migrated from Base44 yet, so there is no
					<code class="font-mono text-amber-300">/cad-studio</code> route to open.
				</p>
			{/if}
		</div>
		<button
			onclick={() => (launchBlocked = true)}
			class="flex shrink-0 items-center gap-2 rounded-xl bg-primary px-4 py-2.5 text-sm font-semibold text-white hover:bg-primary/90"
		>
			Open CAD Studio <Box class="h-4 w-4" />
		</button>
	</div>

	<div
		class="flex items-center justify-between gap-4 rounded-2xl border border-amber-800/40 bg-amber-950/20 p-4"
	>
		<div class="flex items-center gap-3">
			<div class="flex h-9 w-9 items-center justify-center rounded-xl bg-amber-500/20">
				<Lock class="h-4 w-4 text-amber-400" />
			</div>
			<div>
				<p class="text-sm font-bold text-white">CAD Studio Access</p>
				<p class="text-xs text-slate-400">
					{master ? 'Studio is open to users' : "Studio is locked — users can't open it"}
				</p>
			</div>
		</div>
		<Toggle on={master} onclick={toggleMaster} label="CAD Studio access" />
	</div>

	<div class="grid gap-4 sm:grid-cols-2">
		{#each CATS as cat (cat.id)}
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
					<Toggle {on} onclick={() => toggleCat(cat.id)} label={cat.label} />
				</div>
				<div>
					<p class="text-sm font-bold text-white">{cat.label}</p>
					<p class="mt-1 text-xs leading-relaxed text-slate-400">{cat.desc}</p>
				</div>
				<div class="flex items-center gap-1.5 text-xs">
					{#if on}
						<span class="flex items-center gap-1 font-semibold text-emerald-400">
							<Check class="h-3.5 w-3.5" /> Presets available
						</span>
					{:else}
						<span class="flex items-center gap-1 font-semibold text-red-400">
							<Lock class="h-3.5 w-3.5" /> Hidden in studio
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
