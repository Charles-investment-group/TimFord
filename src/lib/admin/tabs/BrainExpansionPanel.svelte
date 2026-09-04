<script>
	import Network from 'lucide-svelte/icons/network';
	import Sparkles from 'lucide-svelte/icons/sparkles';
	import Layers from 'lucide-svelte/icons/layers';
	import Lock from 'lucide-svelte/icons/lock';
	import Rocket from 'lucide-svelte/icons/rocket';
	import Zap from 'lucide-svelte/icons/zap';

	/**
	 * Migrated from TimFord-Mats/src/components/admin/BrainExpansionPanel.jsx
	 * (226 LOC).
	 *
	 * Ported UI: header, the three tier cards (Foundation / Deep Knowledge /
	 * Omni-Brain with its original locked notice) and the "How scaling works"
	 * footer — all copy verbatim from the original.
	 *
	 * Deliberately NOT ported (per instruction — no building or simulating an
	 * AI brain): the lib/pathwayGenerator content generator and the
	 * bulkCreate insertion loop. Their only function is mass-writing
	 * ChloeNeuralPathway records into the Base44 backend, which this site
	 * isn't connected to. The Expand buttons say so; the "~N pathways"
	 * estimates that the original computes by running the generator render
	 * "~—". The generator remains in the Base44 export for a backend batch.
	 */
	const TIERS = [
		{
			id: 'seed',
			label: 'Foundation',
			desc: 'Dense high-quality core — domain overviews, sub-domains, features, techniques, all integrations & UI components.',
			icon: Sparkles,
			color: 'text-cyan-400',
			border: 'border-cyan-700/40',
			bg: 'bg-cyan-950/20',
			locked: false
		},
		{
			id: 'expanded',
			label: 'Deep Knowledge',
			desc: 'Every sub-domain × every UI component + every sub-domain × every integration. Full coverage of how to build anything anywhere.',
			icon: Layers,
			color: 'text-violet-400',
			border: 'border-violet-700/40',
			bg: 'bg-violet-950/20',
			locked: false
		},
		{
			id: 'mega',
			label: 'Omni-Brain',
			desc: 'Full combinatorial expansion — feature × technique × integration matrices. Chloe understands everything: websites, apps, games, enterprise, consumer, templates, integrations.',
			icon: Network,
			color: 'text-amber-400',
			border: 'border-amber-700/40',
			bg: 'bg-amber-950/20',
			locked: true,
			lockNote:
				'Requires your own dedicated servers and GPUs to activate. Available once ForgeAI is running on private infrastructure.'
		}
	];

	let expandBlocked = $state(null);
</script>

<div class="space-y-5 rounded-2xl border border-slate-800 bg-slate-900 p-6">
	<div class="flex items-start gap-3">
		<div class="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-violet-500/20">
			<Network class="h-6 w-6 text-violet-400" />
		</div>
		<div>
			<h3 class="flex items-center gap-2 text-lg font-black text-white">
				Brain Expansion Engine
				<span class="text-xs font-normal text-slate-400">Procedural neural-pathway generator</span>
			</h3>
			<p class="mt-0.5 text-xs text-slate-400">
				Generates pathways combinatorially from the knowledge genome — websites, apps, games,
				enterprise, consumer, templates, integrations &amp; UI components. Inserts in batches of
				450. The inference engine queries server-side by keyword, so millions of pathways won't
				slow Chloe down.
			</p>
		</div>
	</div>

	<!-- Tier cards -->
	<div class="grid gap-3">
		{#each TIERS as tier (tier.id)}
			<div class="rounded-xl border {tier.border} {tier.bg} flex items-start gap-4 p-4">
				<div class="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-slate-800">
					<tier.icon class="h-5 w-5 {tier.color}" />
				</div>
				<div class="min-w-0 flex-1">
					<div class="flex flex-wrap items-center gap-2">
						<h4 class="text-sm font-bold text-white">{tier.label}</h4>
						{#if tier.locked}
							<span class="flex items-center gap-1 font-mono text-xs text-amber-500/80">
								<Lock class="h-3 w-3" /> Locked
							</span>
						{:else}
							<span class="font-mono text-xs text-slate-400">~— pathways</span>
						{/if}
					</div>
					<p class="mt-1 text-xs leading-relaxed text-slate-400">{tier.desc}</p>
					{#if tier.locked}
						<div
							class="mt-3 flex items-start gap-2 rounded-lg border border-amber-800/30 bg-amber-950/30 p-2.5"
						>
							<Lock class="mt-0.5 h-3.5 w-3.5 shrink-0 text-amber-500" />
							<p class="text-xs leading-relaxed text-amber-300/80">{tier.lockNote}</p>
						</div>
					{:else}
						<button
							onclick={() => (expandBlocked = tier.id)}
							class="mt-3 inline-flex h-8 items-center rounded-md bg-violet-600 px-3 text-xs font-medium text-white transition-colors hover:bg-violet-500"
						>
							<Rocket class="mr-1.5 h-3.5 w-3.5" /> Expand to {tier.label}
						</button>
						{#if expandBlocked === tier.id}
							<p class="mt-2 text-xs leading-relaxed text-amber-400">
								Expansion can't run — it bulk-creates
								<code class="font-mono">ChloeNeuralPathway</code> records in the Base44 backend, which
								this site isn't connected to. Nothing was generated or written.
							</p>
						{/if}
					{/if}
				</div>
			</div>
		{/each}
	</div>

	<div class="flex items-start gap-2 rounded-xl border border-slate-700/50 bg-slate-800/50 p-3">
		<Zap class="mt-0.5 h-4 w-4 shrink-0 text-amber-400" />
		<p class="text-xs leading-relaxed text-slate-400">
			<span class="font-semibold text-slate-300">How scaling works:</span> The Mega tier combinatorially
			expands the knowledge genome (domains × sub-domains × features × techniques × integrations ×
			components) into a deep pathway graph. To reach 200,000+, re-run the Mega tier — each run adds
			the full combinatorial set, and the inference engine dedupes by keyword relevance at query time
			so there's no performance penalty.
		</p>
	</div>
</div>
