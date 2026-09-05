<script>
	import Brain from 'lucide-svelte/icons/brain';
	import Activity from 'lucide-svelte/icons/activity';
	import Zap from 'lucide-svelte/icons/zap';

	/**
	 * Migrated from TimFord-Mats/src/components/admin/ChloeBrainView.jsx.
	 *
	 * Pure presentation: renders the "Brain" view — hero, knowledge-type
	 * legend and the three lobe panels — from whatever `pathways` it is given.
	 * This visualizes stored records; nothing here is or builds an AI.
	 *
	 * `pathways === null` means the data could not be fetched (no backend):
	 * counts render "—" and the count/empty lines say so, because rendering the
	 * original's "0 pathways" / "No neurons yet" would assert an emptiness we
	 * can't know. With a real array (when a backend lands) the original
	 * behaviour applies unchanged, including orbital neurons and node sizing.
	 *
	 * @type {{ pathways?: Array<any> | null, onselect?: (p: any) => void }}
	 */
	let { pathways = null, onselect = () => {} } = $props();

	const NODE_COLOR = {
		personality: '#ec4899',
		core: '#64748b',
		design: '#f59e0b',
		website: '#3b82f6',
		app: '#22c55e',
		game: '#a855f7',
		enterprise: '#f97316',
		format: '#06b6d4',
		owner: '#ef4444',
		rule: '#94a3b8'
	};
	const LAYER_TEXT = {
		input: 'text-emerald-400',
		processing: 'text-violet-400',
		output: 'text-cyan-400'
	};
	const LAYER_BORDER = {
		input: 'border-emerald-800/40',
		processing: 'border-violet-800/40',
		output: 'border-cyan-800/40'
	};
	const LAYERS = [
		{
			id: 'input',
			label: 'Input Lobe',
			desc: 'Senses — always active (identity & personality)',
			icon: Activity
		},
		{
			id: 'processing',
			label: 'Processing Cortex',
			desc: 'Knowledge & reasoning — fires on matching triggers',
			icon: Brain
		},
		{ id: 'output', label: 'Output Lobe', desc: 'Format & response — always active', icon: Zap }
	];

	const nodeSize = (w) => Math.max(8, Math.min(34, 8 + (w || 1) * 12));

	const loaded = $derived(pathways !== null);
	const list = $derived(pathways ?? []);
	const active = $derived(list.filter((p) => p.is_active !== false).length);

	// Representative orbit including every knowledge type (verbatim port).
	const orbital = $derived.by(() => {
		if (list.length === 0) return [];
		const byType = {};
		list.forEach((p) => {
			(byType[p.pathway_type] = byType[p.pathway_type] || []).push(p);
		});
		const types = Object.keys(byType);
		const sample = [];
		let i = 0;
		const max = Math.min(16, list.length);
		while (sample.length < max) {
			let added = false;
			for (const t of types) {
				if (byType[t][i] && sample.length < max) {
					sample.push(byType[t][i]);
					added = true;
				}
				if (sample.length >= max) break;
			}
			if (!added) break;
			i++;
		}
		return sample;
	});
</script>

<div class="space-y-5">
	<!-- Living brain hero -->
	<div
		class="relative overflow-hidden rounded-2xl border border-violet-700/40 bg-gradient-to-br from-violet-950/40 via-slate-900 to-slate-900 p-6"
	>
		<div class="relative flex flex-col items-center text-center">
			<div class="relative flex h-40 w-40 items-center justify-center">
				<div class="animate-pulse-glow absolute inset-0 rounded-full bg-violet-500/20 blur-3xl"></div>
				<div class="absolute inset-6 animate-pulse rounded-full border border-violet-400/20"></div>
				<div
					class="relative flex h-24 w-24 items-center justify-center rounded-full border border-violet-400/40 bg-gradient-to-br from-violet-500/30 to-violet-900/50"
				>
					<Brain class="h-12 w-12 text-violet-200" />
				</div>
				{#each orbital as p, i (p.id || i)}
					{@const angle = (i / orbital.length) * Math.PI * 2}
					<span
						class="absolute h-2.5 w-2.5 rounded-full ring-2 ring-white/10"
						style="background: {NODE_COLOR[p.pathway_type] ||
							'#a78bfa'}; left: calc(50% + {Math.cos(angle) * 72}px - 5px); top: calc(50% + {Math.sin(
							angle
						) * 72}px - 5px); opacity: {p.is_active === false ? 0.35 : 1};"
					></span>
				{/each}
			</div>
			<h3 class="mt-4 text-xl font-black text-white">Chloe's Living Brain</h3>
			<p class="mt-1 max-w-lg text-sm text-violet-200/80">
				{#if loaded}
					One connected brain — every pathway a living neuron. {list.length} neural pathways, {active}
					active and firing right now.
				{:else}
					Pathways can't be loaded — the backend isn't connected, so the brain can't be visualized
					yet.
				{/if}
			</p>
		</div>
	</div>

	<!-- Legend -->
	<div class="flex flex-wrap items-center gap-3 text-xs text-slate-400">
		<span class="font-semibold text-slate-300">Knowledge type:</span>
		{#each Object.entries(NODE_COLOR) as [k, c] (k)}
			<span class="flex items-center gap-1.5">
				<span class="h-3 w-3 rounded-full" style="background: {c}"></span>
				{k}
			</span>
		{/each}
		<span class="ml-2 font-semibold text-slate-300">Size = weight</span>
	</div>

	<!-- Three lobes -->
	<div class="grid grid-cols-1 gap-4 md:grid-cols-3">
		{#each LAYERS as layer (layer.id)}
			{@const lobe = list.filter((p) => p.layer === layer.id)}
			<div class="rounded-xl border {LAYER_BORDER[layer.id]} bg-slate-900/60 p-4">
				<div class="mb-1 flex items-center gap-2">
					<layer.icon class="h-4 w-4 {LAYER_TEXT[layer.id]}" />
					<h4 class="text-sm font-bold text-white">{layer.label}</h4>
					<span class="ml-auto text-xs text-slate-400">{loaded ? lobe.length : '—'}</span>
				</div>
				<p class="mb-3 text-[11px] text-slate-500">{layer.desc}</p>
				{#if !loaded}
					<p class="py-6 text-center text-xs text-slate-600">Can't load — backend not connected</p>
				{:else if lobe.length === 0}
					<p class="py-6 text-center text-xs text-slate-600">No neurons yet</p>
				{:else}
					<div class="flex flex-wrap content-start gap-2">
						{#each lobe as p (p.id)}
							<button
								title="{p.title} · weight {p.weight || 1} · {p.pathway_type}"
								aria-label={p.title}
								onclick={() => onselect(p)}
								style="width: {nodeSize(p.weight)}px; height: {nodeSize(
									p.weight
								)}px; background: {NODE_COLOR[p.pathway_type] || '#a78bfa'};"
								class="rounded-full ring-2 ring-white/10 transition-transform hover:scale-125 hover:ring-violet-400 {p.is_active ===
								false
									? 'opacity-30 grayscale'
									: 'shadow-lg'}"
							></button>
						{/each}
					</div>
				{/if}
			</div>
		{/each}
	</div>

	<p class="text-center text-xs text-slate-500">
		Tap any neuron to read the full knowledge Chloe holds there — her weights, connections, and
		code.
	</p>
</div>
