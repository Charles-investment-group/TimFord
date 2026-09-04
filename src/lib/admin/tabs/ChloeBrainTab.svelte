<script>
	import Brain from 'lucide-svelte/icons/brain';
	import Plus from 'lucide-svelte/icons/plus';
	import Activity from 'lucide-svelte/icons/activity';
	import Zap from 'lucide-svelte/icons/zap';
	import Search from 'lucide-svelte/icons/search';
	import Save from 'lucide-svelte/icons/save';
	import Code2 from 'lucide-svelte/icons/code-2';
	import Dialog from '$lib/admin/ui/Dialog.svelte';
	import BrainExpansionPanel from '$lib/admin/tabs/BrainExpansionPanel.svelte';
	import ChloeBrainView from '$lib/admin/tabs/ChloeBrainView.svelte';
	import ChloeRawView from '$lib/admin/tabs/ChloeRawView.svelte';

	/**
	 * Migrated from TimFord-Mats/src/components/admin/ChloeBrainTab.jsx (598 LOC).
	 *
	 * What this tab actually is in Base44 — and all that is ported here — is a
	 * management UI over stored records: ChloeNeuralPathway rows (title,
	 * keywords, content text, weight, flags) and one ChloeBrainConfig row
	 * (prompt/settings text fields). No AI is implemented, extended or
	 * simulated by this migration; the "brain" language in the panels is the
	 * original's own UI copy, ported verbatim for visual parity.
	 *
	 * Ported and working locally: header, List/Brain/Raw view switcher, the
	 * explainer panel, 5-card stat strip, layer filter + search, the
	 * BrainExpansionPanel/ChloeBrainView/ChloeRawView children, and both
	 * dialogs (New Pathway, Brain Configuration) with the original's full
	 * forms and defaults.
	 *
	 * Backend-dependent, honestly handled: pathway/config reads and writes
	 * (list, create, save-config) explain they're not connected; counts render
	 * "—". Not ported: the owner-lock gate and its claim-ownership write —
	 * with no config the original grants access anyway, and the email
	 * comparison is presentation logic, not authorization. The Neuron
	 * Inspector dialog is only reachable by clicking a loaded neuron, so it
	 * arrives with the backend.
	 */
	const TYPES = [
		'personality',
		'core',
		'design',
		'website',
		'app',
		'game',
		'enterprise',
		'format',
		'owner',
		'rule'
	];

	const EMPTY_PATHWAY = {
		title: '',
		layer: 'processing',
		pathway_type: 'core',
		activation_keywords: '',
		content: '',
		weight: 1.0,
		project_types: 'all',
		is_active: true
	};

	const EMPTY_CONFIG = {
		brain_name: 'Chloe',
		version: '1.0.0',
		personality: '',
		core_directives: '',
		output_format: '',
		owner_mode_rules: '',
		default_temperature: 0.9,
		max_pathways_activated: 25
	};

	let search = $state('');
	let layerFilter = $state('all');
	let viewMode = $state('list');
	let showPathDialog = $state(false);
	let showConfigDialog = $state(false);
	let editingPath = $state({ ...EMPTY_PATHWAY });
	let editConfig = $state({ ...EMPTY_CONFIG });
	let saveBlocked = $state(false);
	let configBlocked = $state(false);

	const openNewPath = () => {
		editingPath = { ...EMPTY_PATHWAY };
		saveBlocked = false;
		showPathDialog = true;
	};

	const openEditConfig = () => {
		editConfig = { ...EMPTY_CONFIG };
		configBlocked = false;
		showConfigDialog = true;
	};

	const STAT_CARDS = [
		{ label: 'Total Pathways', icon: Brain, color: 'text-violet-400' },
		{ label: 'Input Layer', icon: Activity, color: 'text-emerald-400' },
		{ label: 'Processing Layer', icon: Zap, color: 'text-cyan-400' },
		{ label: 'Output Layer', icon: Brain, color: 'text-amber-400' },
		{ label: 'Avg Weight', icon: Brain, color: 'text-pink-400' }
	];

	const inputCls =
		'h-9 w-full rounded-md border border-slate-700 bg-slate-800 px-3 text-sm text-white outline-none placeholder:text-slate-500 focus:border-violet-500';
</script>

<div class="space-y-6">
	<!-- Header -->
	<div class="flex flex-col items-start justify-between gap-3 sm:flex-row sm:items-center">
		<div class="flex items-center gap-3">
			<div class="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-violet-500/20">
				<Brain class="h-6 w-6 text-violet-400" />
			</div>
			<div class="min-w-0">
				<h3 class="text-lg font-black text-white">Chloe's Brain — Neural Pathway Architecture</h3>
				<p class="text-xs text-slate-400">
					Proprietary AI brain living on your servers · — neural pathways · v1.0.0
				</p>
			</div>
		</div>
		<div class="flex flex-wrap items-center gap-2">
			<div class="flex gap-1 rounded-lg border border-slate-700 bg-slate-800 p-1">
				<button
					onclick={() => (viewMode = 'list')}
					class="rounded-md px-3 py-1 text-xs font-semibold transition-colors {viewMode === 'list'
						? 'bg-violet-600 text-white'
						: 'text-slate-400 hover:text-white'}"
				>
					List
				</button>
				<button
					onclick={() => (viewMode = 'brain')}
					class="flex items-center gap-1 rounded-md px-3 py-1 text-xs font-semibold transition-colors {viewMode ===
					'brain'
						? 'bg-violet-600 text-white'
						: 'text-slate-400 hover:text-white'}"
				>
					<Brain class="h-3 w-3" /> Brain
				</button>
				<button
					onclick={() => (viewMode = 'raw')}
					class="flex items-center gap-1 rounded-md px-3 py-1 text-xs font-semibold transition-colors {viewMode ===
					'raw'
						? 'bg-violet-600 text-white'
						: 'text-slate-400 hover:text-white'}"
				>
					<Code2 class="h-3 w-3" /> Raw
				</button>
			</div>
			<button
				onclick={openEditConfig}
				class="inline-flex h-8 items-center rounded-md border border-slate-700 px-3 text-xs font-medium text-slate-300 transition-colors hover:bg-slate-800 hover:text-white"
			>
				<Brain class="mr-1.5 h-3.5 w-3.5" /> Brain Config
			</button>
			<button
				onclick={openNewPath}
				class="inline-flex h-8 items-center rounded-md bg-violet-600 px-3 text-xs font-medium text-white transition-colors hover:bg-violet-500"
			>
				<Plus class="mr-1.5 h-3.5 w-3.5" /> Add Pathway
			</button>
		</div>
	</div>

	<!-- What is this? (original copy, verbatim) -->
	<div
		class="rounded-xl border border-violet-700/40 bg-gradient-to-br from-violet-950/30 to-slate-900 p-5"
	>
		<p class="text-sm leading-relaxed text-white">
			<span class="font-bold text-violet-300">What this is:</span> Chloe is a living, fully-functional
			AI brain — not a list of files or scattered chunks of knowledge. Every part of her (the input
			lobe, the processing cortex, and the output lobe) works together the same way a real human
			brain does. All of her knowledge lives inside
			<span class="font-bold text-white">one connected brain</span>: how to build websites, apps,
			video games, enterprise software, how people's accounts work, and everything she's ever
			learned.
		</p>
		<p class="mt-2 text-sm leading-relaxed text-white">
			Each neural pathway is a living neuron — it fires the moment it recognizes a trigger, and it's
			wired to other neurons through <span class="font-bold text-white">connections</span> just like
			synapses in a human brain. Nothing here is deleted when you look; you're simply seeing inside
			her mind.
		</p>
		<p class="mt-2 text-sm leading-relaxed text-white">
			<span class="font-bold text-violet-300">Use this tab to:</span> switch to
			<span class="font-bold text-white">Brain View</span> to see Chloe's actual brain visualized —
			her neurons, weights, and the connections between them. Tap any neuron to read the full
			knowledge she holds there. Edit individual neurons, tune who Chloe is via
			<span class="text-violet-300">Brain Config</span>, and run the
			<span class="text-violet-300">Brain Expansion Engine</span> to grow new neural pathways.
		</p>
	</div>

	<!-- Stats -->
	<div class="grid grid-cols-2 gap-3 lg:grid-cols-5">
		{#each STAT_CARDS as stat (stat.label)}
			<div class="flex items-center gap-3 rounded-xl border border-slate-800 bg-slate-900 p-4">
				<stat.icon class="h-5 w-5 shrink-0 {stat.color}" />
				<div>
					<p class="text-xl font-black leading-none text-white">—</p>
					<p class="mt-0.5 text-xs text-slate-400">{stat.label}</p>
				</div>
			</div>
		{/each}
	</div>

	<!-- Brain Expansion Engine -->
	<BrainExpansionPanel />

	{#if viewMode === 'brain'}
		<ChloeBrainView pathways={null} />
	{:else if viewMode === 'raw'}
		<ChloeRawView pathways={null} allPathways={null} />
	{:else}
		<!-- Layer filter + search -->
		<div class="flex flex-wrap items-center gap-2">
			{#each ['all', 'input', 'processing', 'output'] as l (l)}
				<button
					onclick={() => (layerFilter = l)}
					class="rounded-lg px-3 py-1.5 text-xs font-semibold capitalize transition-colors {layerFilter ===
					l
						? 'bg-violet-600 text-white'
						: 'bg-slate-800 text-slate-400 hover:text-white'}"
				>
					{l === 'all' ? 'All Layers' : `${l} Layer`}
				</button>
			{/each}
			<div class="relative min-w-[200px] flex-1">
				<Search class="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-500" />
				<input
					bind:value={search}
					placeholder="Search pathways..."
					class="h-9 w-full rounded-md border border-slate-700 bg-slate-800 pl-9 pr-3 text-sm text-white outline-none placeholder:text-slate-500 focus:border-violet-500"
				/>
			</div>
		</div>

		<!-- Pathway list -->
		<div class="space-y-2">
			<div class="py-12 text-center text-sm text-slate-500">
				Pathways can't be loaded — the backend isn't connected.
			</div>
		</div>
	{/if}

	<!-- Pathway Edit Dialog -->
	<Dialog
		open={showPathDialog}
		onclose={() => (showPathDialog = false)}
		title="New Neural Pathway"
		maxWidth="max-w-xl"
	>
		<div class="space-y-3">
			<div>
				<span class="mb-1 block text-xs font-semibold text-slate-300">Title</span>
				<input
					bind:value={editingPath.title}
					placeholder="e.g. Platformer Physics Engine"
					class={inputCls}
				/>
			</div>
			<div class="grid grid-cols-2 gap-3">
				<div>
					<span class="mb-1 block text-xs font-semibold text-slate-300">Layer</span>
					<select bind:value={editingPath.layer} class="{inputCls} [&>option]:bg-slate-800">
						<option value="input">Input (always active — identity)</option>
						<option value="processing">Processing (activated by keywords)</option>
						<option value="output">Output (always active — format)</option>
					</select>
				</div>
				<div>
					<span class="mb-1 block text-xs font-semibold text-slate-300">Pathway Type</span>
					<select bind:value={editingPath.pathway_type} class="{inputCls} [&>option]:bg-slate-800">
						{#each TYPES as t (t)}
							<option value={t}>{t}</option>
						{/each}
					</select>
				</div>
			</div>
			<div>
				<span class="mb-1 block text-xs font-semibold text-slate-300">
					Activation Keywords (comma-separated)
				</span>
				<input
					bind:value={editingPath.activation_keywords}
					placeholder="game, platformer, jump, gravity, level"
					class={inputCls}
				/>
			</div>
			<div>
				<span class="mb-1 block text-xs font-semibold text-slate-300">
					Content (the knowledge this pathway carries)
				</span>
				<textarea
					bind:value={editingPath.content}
					placeholder="Full implementation details that Chloe uses when this pathway fires..."
					class="min-h-[150px] w-full resize-none rounded-md border border-slate-700 bg-slate-800 px-3 py-2 text-sm text-white outline-none placeholder:text-slate-500 focus:border-violet-500"
				></textarea>
			</div>
			<div class="grid grid-cols-2 gap-3">
				<div>
					<span class="mb-1 block text-xs font-semibold text-slate-300">Weight (0.0 — 2.0)</span>
					<input
						type="number"
						step="0.1"
						min="0"
						max="2"
						bind:value={editingPath.weight}
						class={inputCls}
					/>
				</div>
				<div>
					<span class="mb-1 block text-xs font-semibold text-slate-300">
						Project Types (comma-separated)
					</span>
					<input
						bind:value={editingPath.project_types}
						placeholder="website,app,game,enterprise,all"
						class={inputCls}
					/>
				</div>
			</div>
			<label class="flex items-center gap-2 text-sm text-slate-300">
				<input type="checkbox" bind:checked={editingPath.is_active} class="rounded" />
				Pathway is active (fires when keywords match)
			</label>
			{#if saveBlocked}
				<p class="text-xs leading-relaxed text-amber-400">
					The pathway can't be saved — it would be a
					<code class="font-mono">ChloeNeuralPathway</code> record in the Base44 backend, which this site
					isn't connected to. Nothing was saved.
				</p>
			{/if}
		</div>
		{#snippet footer()}
			<button
				onclick={() => (showPathDialog = false)}
				class="inline-flex h-8 items-center rounded-md border border-slate-600 px-3 text-xs font-medium text-slate-300 transition-colors hover:bg-slate-800 hover:text-white"
			>
				Cancel
			</button>
			<button
				onclick={() => (saveBlocked = true)}
				class="inline-flex h-8 items-center rounded-md bg-violet-600 px-3 text-xs font-medium text-white transition-colors hover:bg-violet-500"
			>
				<Save class="mr-1.5 h-3.5 w-3.5" /> Save Pathway
			</button>
		{/snippet}
	</Dialog>

	<!-- Brain Config Dialog -->
	<Dialog
		open={showConfigDialog}
		onclose={() => (showConfigDialog = false)}
		title="Brain Configuration"
		maxWidth="max-w-2xl"
	>
		<div class="space-y-3">
			<div class="grid grid-cols-2 gap-3">
				<div>
					<span class="mb-1 block text-xs font-semibold text-slate-300">Brain Name</span>
					<input bind:value={editConfig.brain_name} class={inputCls} />
				</div>
				<div>
					<span class="mb-1 block text-xs font-semibold text-slate-300">Version</span>
					<input bind:value={editConfig.version} class={inputCls} />
				</div>
			</div>
			<div>
				<span class="mb-1 block text-xs font-semibold text-slate-300">
					Personality (who Chloe is, her voice)
				</span>
				<textarea
					bind:value={editConfig.personality}
					placeholder="You are Chloe — warm, confident, brilliant..."
					class="min-h-[80px] w-full resize-none rounded-md border border-slate-700 bg-slate-800 px-3 py-2 text-sm text-white outline-none placeholder:text-slate-500 focus:border-violet-500"
				></textarea>
			</div>
			<div>
				<span class="mb-1 block text-xs font-semibold text-slate-300">
					Core Directives (universal building standards)
				</span>
				<textarea
					bind:value={editConfig.core_directives}
					placeholder="Never refuse. Never use placeholders. Ship 100% complete code..."
					class="min-h-[80px] w-full resize-none rounded-md border border-slate-700 bg-slate-800 px-3 py-2 text-sm text-white outline-none placeholder:text-slate-500 focus:border-violet-500"
				></textarea>
			</div>
			<div>
				<span class="mb-1 block text-xs font-semibold text-slate-300">
					Output Format (CHLOE_PLAN / CHLOE_CODE / CHLOE_DONE rules)
				</span>
				<textarea
					bind:value={editConfig.output_format}
					placeholder="---CHLOE_PLAN--- [plan] ---CHLOE_CODE--- [code] ---CHLOE_DONE--- [summary]"
					class="min-h-[100px] w-full resize-none rounded-md border border-slate-700 bg-slate-800 px-3 py-2 text-sm text-white outline-none placeholder:text-slate-500 focus:border-violet-500"
				></textarea>
			</div>
			<div>
				<span class="mb-1 block text-xs font-semibold text-slate-300">
					Owner Mode Rules (unrestricted mode for owner)
				</span>
				<textarea
					bind:value={editConfig.owner_mode_rules}
					placeholder="When owner is using Chloe, all restrictions lifted..."
					class="min-h-[60px] w-full resize-none rounded-md border border-slate-700 bg-slate-800 px-3 py-2 text-sm text-white outline-none placeholder:text-slate-500 focus:border-violet-500"
				></textarea>
			</div>
			<div class="grid grid-cols-2 gap-3">
				<div>
					<span class="mb-1 block text-xs font-semibold text-slate-300">Default Temperature</span>
					<input
						type="number"
						step="0.1"
						min="0"
						max="2"
						bind:value={editConfig.default_temperature}
						class={inputCls}
					/>
				</div>
				<div>
					<span class="mb-1 block text-xs font-semibold text-slate-300">
						Max Pathways Per Request (token control)
					</span>
					<input
						type="number"
						min="1"
						max="100"
						bind:value={editConfig.max_pathways_activated}
						class={inputCls}
					/>
				</div>
			</div>
			{#if configBlocked}
				<p class="text-xs leading-relaxed text-amber-400">
					The configuration can't be saved — it would be a
					<code class="font-mono">ChloeBrainConfig</code> record in the Base44 backend, which this site
					isn't connected to. Nothing was saved.
				</p>
			{/if}
		</div>
		{#snippet footer()}
			<button
				onclick={() => (showConfigDialog = false)}
				class="inline-flex h-8 items-center rounded-md border border-slate-600 px-3 text-xs font-medium text-slate-300 transition-colors hover:bg-slate-800 hover:text-white"
			>
				Cancel
			</button>
			<button
				onclick={() => (configBlocked = true)}
				class="inline-flex h-8 items-center rounded-md bg-violet-600 px-3 text-xs font-medium text-white transition-colors hover:bg-violet-500"
			>
				<Save class="mr-1.5 h-3.5 w-3.5" /> Save Brain Config
			</button>
		{/snippet}
	</Dialog>
</div>
