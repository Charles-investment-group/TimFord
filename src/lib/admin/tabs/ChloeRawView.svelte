<script>
	import Search from 'lucide-svelte/icons/search';
	import Code2 from 'lucide-svelte/icons/code-2';
	import Download from 'lucide-svelte/icons/download';

	/**
	 * Migrated from TimFord-Mats/src/components/admin/ChloeRawView.jsx.
	 *
	 * Pure presentation: formats stored pathway records as one annotated
	 * source-style document (the buildCode/weightBin logic is ported verbatim —
	 * it's display formatting, nothing more). Search and layer filters work
	 * locally.
	 *
	 * `pathways === null` = data unavailable (no backend): the code page says
	 * so, the neuron count renders "—", and Export ZIP (which needs the full
	 * dataset plus the original's zipExport helper) explains itself instead of
	 * downloading an empty archive.
	 *
	 * @type {{ pathways?: Array<any> | null, allPathways?: Array<any> | null }}
	 */
	let { pathways = null, allPathways = null } = $props();

	const weightBin = (w) =>
		Math.round((Number(w) || 0) * 65535)
			.toString(2)
			.padStart(16, '0');

	// Verbatim port of the original's document builder.
	const buildCode = (list, all) => {
		const indexById = {};
		all.forEach((p, i) => {
			if (p.pathway_id) indexById[p.pathway_id] = i + 1;
		});
		const tag = (p) => `NEURON_${String(indexById[p.pathway_id] || 0).padStart(4, '0')}`;

		const active = list.filter((p) => p.is_active !== false).length;
		const totalWeight = list.reduce((s, p) => s + (Number(p.weight) || 0), 0);
		const totalLinks = list.reduce(
			(s, p) => s + (p.connections || '').split(',').filter((x) => x.trim()).length,
			0
		);

		const header = [
			'// ================================================================',
			'//  CHLOE — LIVING NEURAL BRAIN  ·  complete connected source',
			`//  neurons: ${list.length}   active: ${active}   synapses: ${totalLinks}   sum(weights): ${totalWeight.toFixed(2)}`,
			"//  Every neuron is wired to the others it links to (see 'synapses').",
			'//  Every weight is shown as a number AND as the 16-bit binary that',
			'//  encodes its strength — the zeros & ones that decide how strongly',
			'//  that part of Chloe fires.',
			'// ================================================================',
			''
		];

		const body = list
			.map((p) => {
				const linked = (p.connections || '')
					.split(',')
					.map((s) => s.trim())
					.filter(Boolean);
				const linkedPaths = all.filter((pp) => linked.includes(pp.pathway_id));
				const synapses = linkedPaths.length
					? linkedPaths.map((lp) => `→ ${tag(lp)} :: ${lp.title}`)
					: linked.map((id) => `→ ${id}`);

				return [
					`// ━━ ${tag(p)} ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━`,
					`// id:          ${p.pathway_id || '(none)'}`,
					`// title:       ${p.title || 'Untitled neuron'}`,
					`// layer:       ${p.layer || '?'}     type: ${p.pathway_type || '?'}`,
					`// weight:      ${p.weight ?? 1}`,
					`// weight_bin:  ${weightBin(p.weight)}    <- zeros & ones encoding this neuron's strength`,
					`// active:      ${p.is_active === false ? 0 : 1}${p.project_types && p.project_types !== 'all' ? `     applies: ${p.project_types}` : ''}`,
					p.activation_keywords ? `// triggers:    ${p.activation_keywords}` : null,
					linked.length
						? `// synapses:    ${synapses.join('    ')}`
						: '// synapses:    (standalone neuron — not yet wired)',
					'// ── knowledge / code this neuron holds ──',
					p.content || '// (no knowledge stored in this neuron yet)',
					''
				]
					.filter((l) => l !== null)
					.join('\n');
			})
			.join('\n');

		return [...header, body].join('\n');
	};

	let q = $state('');
	let layer = $state('all');
	let exportBlocked = $state(false);

	const loaded = $derived(pathways !== null);
	const list = $derived(
		(pathways ?? []).filter((p) => {
			const matchQ =
				!q ||
				p.title?.toLowerCase().includes(q.toLowerCase()) ||
				p.activation_keywords?.toLowerCase().includes(q.toLowerCase()) ||
				p.content?.toLowerCase().includes(q.toLowerCase()) ||
				String(p.weight ?? '').includes(q);
			const matchL = layer === 'all' || p.layer === layer;
			return matchQ && matchL;
		})
	);
	const code = $derived(loaded ? buildCode(list, allPathways ?? []) : '');
</script>

<div class="space-y-4">
	<div class="rounded-xl border border-violet-700/40 bg-violet-950/20 p-4">
		<div class="flex flex-wrap items-start gap-2">
			<Code2 class="mt-0.5 h-4 w-4 text-violet-300" />
			<div class="min-w-0 flex-1">
				<h3 class="text-sm font-bold text-white">Raw Brain — Complete Connected Source</h3>
				<p class="mt-0.5 text-xs leading-relaxed text-slate-300">
					Chloe's whole brain as one continuous, connected source file. Each neuron shows its weight
					as a number and as the real 16-bit binary that encodes it, plus the synapses wiring it to
					the rest of her brain.
				</p>
			</div>
			<button
				onclick={() => (exportBlocked = true)}
				class="flex shrink-0 items-center gap-1.5 rounded-lg bg-violet-600 px-3 py-1.5 text-xs font-semibold text-white transition-colors hover:bg-violet-500"
			>
				<Download class="h-3.5 w-3.5" /> Export ZIP
			</button>
		</div>
		{#if exportBlocked}
			<p class="mt-2 text-xs leading-relaxed text-amber-400">
				Nothing to export — the pathway records live in the Base44 backend, which this site isn't
				connected to.
			</p>
		{/if}
	</div>

	<!-- Search + layer filter -->
	<div class="flex flex-wrap items-center gap-2">
		<div class="relative min-w-[180px] flex-1">
			<Search class="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-400" />
			<input
				bind:value={q}
				placeholder="Search neurons, keywords, code, or a weight..."
				class="h-9 w-full rounded-lg border border-slate-700 bg-slate-800 pl-9 pr-3 text-sm text-white outline-none placeholder:text-slate-500 focus:border-violet-500"
			/>
		</div>
		{#each ['all', 'input', 'processing', 'output'] as l (l)}
			<button
				onclick={() => (layer = l)}
				class="rounded-lg px-3 py-1.5 text-xs font-semibold transition-colors {layer === l
					? 'bg-violet-600 text-white'
					: 'bg-slate-800 text-slate-300 hover:text-white'}"
			>
				{l === 'all' ? 'All Layers' : l}
			</button>
		{/each}
	</div>

	<p class="text-xs text-slate-400">
		<span class="font-semibold text-white">{loaded ? list.length : '—'}</span> neurons ·
		{loaded ? code.length.toLocaleString() : '—'} characters of connected source
	</p>

	<!-- Single white code page, black text -->
	<div class="overflow-hidden rounded-xl border border-slate-300 shadow-lg">
		<div class="flex items-center gap-2 border-b border-slate-300 bg-slate-100 px-4 py-2">
			<span class="h-3 w-3 rounded-full bg-red-400"></span>
			<span class="h-3 w-3 rounded-full bg-amber-400"></span>
			<span class="h-3 w-3 rounded-full bg-green-400"></span>
			<span class="ml-2 font-mono text-xs text-slate-500">chloe_brain.source</span>
			<span class="ml-auto font-mono text-xs text-slate-400">
				{loaded ? list.length : '—'} neurons
			</span>
		</div>
		<pre
			class="max-h-[75vh] overflow-y-auto overflow-x-hidden whitespace-pre-wrap break-words bg-white p-5 font-mono text-[12px] leading-relaxed text-black">{loaded
				? code || '// No neurons match.'
				: "// Neurons can't be loaded — the Base44 backend isn't connected to this site."}</pre>
	</div>
</div>
