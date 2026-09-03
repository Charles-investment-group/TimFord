<script>
	import Search from 'lucide-svelte/icons/search';
	import Layers from 'lucide-svelte/icons/layers';
	import Zap from 'lucide-svelte/icons/zap';
	import Plus from 'lucide-svelte/icons/plus';
	import Database from 'lucide-svelte/icons/database';
	import Mic from 'lucide-svelte/icons/mic';
	import Package from 'lucide-svelte/icons/package';
	import Dialog from '$lib/admin/ui/Dialog.svelte';

	/**
	 * Migrated from TimFord-Mats/src/components/admin/ForgeEngineTab.jsx
	 * (761 LOC — ~420 of which are the seed-data generator, see below).
	 *
	 * Ported UI: the full toolbar (search, category select, 4K+/Animated
	 * toggles, All/1D/2D/3D segmented control, Add Asset, Seed button), the
	 * 8-card stat strip, the engine-capability banner (static content,
	 * verbatim), the asset-grid area, and the complete Add Asset dialog.
	 *
	 * Backend-dependent — the library lives in base44.entities.GameAsset:
	 *   - Stat values and category counts are computed over fetched assets, so
	 *     they render "—". (With zero assets the original also shows no counts
	 *     in the category select, so that part matches exactly.)
	 *   - The grid shows a can't-load state instead of the original's "No
	 *     assets yet" (which asserts an empty library we never fetched).
	 *   - "Seed Full Asset Library" in the original generates 550+ asset
	 *     records client-side and creates them in Base44 five at a time. The
	 *     generator data is meaningless without somewhere to write it, so the
	 *     button explains that instead of pretending to seed. The generator
	 *     itself stays in the Base44 export, ready to port with the backend.
	 *   - "Add to Library" in the dialog explains it can't create records.
	 *   - Per-asset cards (badges, source links, delete) arrive with data.
	 *
	 * Toggle/filter state (4K+, Animated, dimension, category, search) is real
	 * local UI state, kept faithful even though there is nothing to filter yet.
	 */
	const CATEGORIES = [
		{ id: 'all', label: 'All Assets' },
		{ id: 'terrain', label: 'Terrain & Ground' },
		{ id: 'foliage', label: 'Foliage & Plants' },
		{ id: 'environment', label: 'Environments' },
		{ id: 'building', label: 'Buildings' },
		{ id: 'vehicle', label: 'Vehicles' },
		{ id: 'character', label: 'Characters' },
		{ id: 'npc', label: 'NPCs' },
		{ id: 'prop', label: 'Props' },
		{ id: 'material', label: 'Materials & Textures' },
		{ id: 'water', label: 'Water & Fluids' },
		{ id: 'skybox', label: 'Skies & Skyboxes' },
		{ id: 'vfx', label: 'VFX & Particles' },
		{ id: 'shader', label: 'Shaders' },
		{ id: 'audio_sfx', label: 'Sound FX' },
		{ id: 'audio_music', label: 'Music Tracks' },
		{ id: 'audio_ambient', label: 'Ambient Audio' },
		{ id: 'tts_model', label: 'TTS Voices' },
		{ id: 'stt_model', label: 'STT Models' },
		{ id: 'animation', label: 'Animations' },
		{ id: 'weapon', label: 'Weapons' },
		{ id: 'other', label: 'Other' }
	];

	const STATS = [
		{ label: 'Total Assets', color: 'text-primary' },
		{ label: 'Animated', color: 'text-green-600' },
		{ label: 'PBR Materials', color: 'text-cyan-600' },
		{ label: 'STT/TTS Models', color: 'text-purple-600' },
		{ label: 'Vehicles', color: 'text-blue-600' },
		{ label: 'Characters', color: 'text-violet-600' },
		{ label: 'Materials', color: 'text-teal-600' },
		{ label: 'Free Assets', color: 'text-emerald-600' }
	];

	const EMPTY_FORM = {
		name: '',
		category: 'prop',
		sub_category: '',
		engine_tier: 'pro',
		file_type: 'GLTF',
		dimension: '3d',
		description: '',
		tags: '',
		polygon_count: '',
		texture_resolution: '4K',
		is_free: true,
		is_animated: false,
		is_rigged: false,
		has_lod: false,
		has_pbr: true,
		source_name: '',
		source_url: ''
	};

	let search = $state('');
	let catFilter = $state('all');
	let only4k = $state(false);
	let onlyAnimated = $state(false);
	let dimFilter = $state('all');
	let showAdd = $state(false);
	let form = $state({ ...EMPTY_FORM });
	let seedBlocked = $state(false);
	let addBlocked = $state(false);

	const inputCls =
		'h-8 w-full rounded-md border border-input bg-transparent px-3 text-sm text-white outline-none placeholder:text-slate-500 focus:border-primary';
	const checkboxes = [
		['is_free', 'Free Asset'],
		['is_animated', 'Animated'],
		['is_rigged', 'Rigged'],
		['has_lod', 'Has LOD'],
		['has_pbr', 'PBR Materials']
	];
</script>

<div>
	<!-- Header actions -->
	<div class="mb-5 flex flex-col items-start gap-3 sm:flex-row sm:flex-wrap sm:items-center">
		<div class="relative max-w-xs flex-1">
			<Search class="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
			<input
				bind:value={search}
				placeholder="Search assets, tags, sub-category..."
				class="h-9 w-full rounded-md border border-input bg-transparent pl-9 pr-3 text-sm text-white outline-none placeholder:text-muted-foreground focus:border-primary"
			/>
		</div>
		<select
			bind:value={catFilter}
			class="h-9 w-52 rounded-md border border-input bg-transparent px-3 text-sm text-white outline-none focus:border-primary [&>option]:bg-[#0b1c4a]"
		>
			{#each CATEGORIES as cat (cat.id)}
				<option value={cat.id}>{cat.label}</option>
			{/each}
		</select>
		<button
			onclick={() => (only4k = !only4k)}
			class="inline-flex h-8 items-center gap-1.5 rounded-md px-3 text-xs font-medium transition-colors {only4k
				? 'bg-primary text-white hover:bg-primary/90'
				: 'border border-input text-slate-300 hover:bg-white/5 hover:text-white'}"
		>
			<Layers class="h-4 w-4" /> 4K+
		</button>
		<button
			onclick={() => (onlyAnimated = !onlyAnimated)}
			class="inline-flex h-8 items-center gap-1.5 rounded-md px-3 text-xs font-medium transition-colors {onlyAnimated
				? 'bg-primary text-white hover:bg-primary/90'
				: 'border border-input text-slate-300 hover:bg-white/5 hover:text-white'}"
		>
			<Zap class="h-4 w-4" /> Animated
		</button>
		<div class="flex items-center overflow-hidden rounded-lg border border-border">
			{#each [['all', 'All'], ['1d', '1D'], ['2d', '2D'], ['3d', '3D']] as [id, label] (id)}
				<button
					type="button"
					onclick={() => (dimFilter = id)}
					class="px-2.5 py-1 text-xs font-semibold transition-colors {dimFilter === id
						? 'bg-primary text-white'
						: 'text-muted-foreground hover:bg-white/5'}"
				>
					{label}
				</button>
			{/each}
		</div>
		<button
			onclick={() => {
				showAdd = true;
				addBlocked = false;
			}}
			class="inline-flex h-8 items-center gap-1.5 rounded-md border border-input px-3 text-xs font-medium text-slate-300 transition-colors hover:bg-white/5 hover:text-white"
		>
			<Plus class="h-4 w-4" /> Add Asset
		</button>
		<button
			onclick={() => (seedBlocked = true)}
			class="inline-flex h-8 items-center gap-1.5 rounded-md bg-gradient-to-r from-purple-600 to-pink-600 px-3 text-xs font-bold text-white transition-opacity hover:opacity-90"
		>
			<Database class="h-4 w-4" /> 🚀 Seed Full Asset Library (550+ assets)
		</button>
	</div>

	{#if seedBlocked}
		<div class="mb-5 rounded-xl border border-amber-800/40 bg-amber-950/20 p-4">
			<p class="text-xs leading-relaxed text-amber-400">
				The library can't be seeded — this button creates 550+ <code class="font-mono"
					>GameAsset</code
				> records in the Base44 backend, which this site isn't connected to. The seed catalog is preserved
				in the migration source and will work once a backend exists. Nothing was created.
			</p>
		</div>
	{/if}

	<!-- Stats -->
	<div class="mb-5 grid grid-cols-2 gap-2 sm:grid-cols-4 lg:grid-cols-8">
		{#each STATS as stat (stat.label)}
			<div class="rounded-xl border border-border bg-card p-3 text-center">
				<p class="text-lg font-black {stat.color}">—</p>
				<p class="text-[10px] leading-tight text-muted-foreground">{stat.label}</p>
			</div>
		{/each}
	</div>

	<!-- Engine capability banner (static content, verbatim from the original) -->
	<div class="mb-5 grid gap-4 rounded-xl border border-blue-200 bg-blue-50 p-4 text-sm sm:grid-cols-3">
		<div>
			<p class="mb-1 flex items-center gap-1.5 font-bold text-blue-800">
				<Zap class="h-4 w-4" /> ForgeEngine Features
			</p>
			<ul class="space-y-0.5 text-xs text-blue-700">
				<li>✓ Real-time PBR renderer + ray tracing</li>
				<li>✓ 4K/8K cinematic textures &amp; HDRP lighting</li>
				<li>✓ Full animation pipeline: mocap + blend trees</li>
				<li>✓ Full physics: rigid, soft, fluid, ragdoll</li>
				<li>✓ Multiplayer networking built-in</li>
				<li>✓ Open-world streaming + NPC AI</li>
			</ul>
		</div>
		<div>
			<p class="mb-1 flex items-center gap-1.5 font-bold text-blue-800">
				<Mic class="h-4 w-4" /> STT / TTS Integration
			</p>
			<ul class="space-y-0.5 text-xs text-blue-700">
				<li>✓ Whisper / Vosk STT — local, no API</li>
				<li>✓ Coqui TTS — 20+ voices, SSML support</li>
				<li>✓ In-game NPC voice interaction</li>
				<li>✓ Voice commands for software/tools</li>
			</ul>
		</div>
		<div>
			<p class="mb-1 flex items-center gap-1.5 font-bold text-blue-800">
				<Package class="h-4 w-4" /> Asset Sources
			</p>
			<ul class="space-y-0.5 text-xs text-blue-700">
				<li>✓ Poly Haven (CC0 — 100% free)</li>
				<li>✓ KenneyNL (CC0 — 100% free)</li>
				<li>✓ Mixamo animations (free account)</li>
				<li>✓ OpenGameArt (CC0/CC-BY)</li>
			</ul>
		</div>
	</div>

	<!-- Asset grid -->
	<div class="py-16 text-center text-muted-foreground">
		<Database class="mx-auto mb-3 h-10 w-10 opacity-30" />
		<p class="text-sm font-medium">Assets can't be loaded.</p>
		<p class="mt-1 text-xs">
			The ForgeEngine asset library lives in the Base44 backend, which this site isn't connected to.
		</p>
	</div>

	<!-- Add Asset Modal -->
	<Dialog
		open={showAdd}
		onclose={() => (showAdd = false)}
		title="Add ForgeEngine Asset"
		maxWidth="max-w-lg"
		panelClass="border-[#2a4a8c] bg-[#0b1c4a]"
	>
		<div class="space-y-3">
			<div class="grid grid-cols-2 gap-3">
				<div>
					<p class="mb-1 text-xs font-semibold">Asset Name *</p>
					<input bind:value={form.name} placeholder="e.g. Oak Tree Mature" class={inputCls} />
				</div>
				<div>
					<p class="mb-1 text-xs font-semibold">File Type</p>
					<input bind:value={form.file_type} placeholder="GLTF, FBX, WAV..." class={inputCls} />
				</div>
			</div>
			<div class="grid grid-cols-2 gap-3">
				<div>
					<p class="mb-1 text-xs font-semibold">Category</p>
					<select bind:value={form.category} class="{inputCls} [&>option]:bg-[#0b1c4a]">
						{#each CATEGORIES.filter((c) => c.id !== 'all') as cat (cat.id)}
							<option value={cat.id}>{cat.label}</option>
						{/each}
					</select>
				</div>
				<div>
					<p class="mb-1 text-xs font-semibold">Sub-Category</p>
					<input
						bind:value={form.sub_category}
						placeholder="e.g. grass, sand, car"
						class={inputCls}
					/>
				</div>
			</div>
			<div class="grid grid-cols-2 gap-3">
				<div>
					<p class="mb-1 text-xs font-semibold">Engine Tier</p>
					<select bind:value={form.engine_tier} class="{inputCls} [&>option]:bg-[#0b1c4a]">
						{#each ['lite', 'pro', 'advanced', 'studio', 'ultimate'] as tier (tier)}
							<option value={tier}>{tier}</option>
						{/each}
					</select>
				</div>
				<div>
					<p class="mb-1 text-xs font-semibold">Dimension</p>
					<select bind:value={form.dimension} class="{inputCls} [&>option]:bg-[#0b1c4a]">
						{#each ['1d', '2d', '3d'] as dim (dim)}
							<option value={dim}>{dim.toUpperCase()}</option>
						{/each}
					</select>
				</div>
				<div>
					<p class="mb-1 text-xs font-semibold">Texture Resolution</p>
					<select bind:value={form.texture_resolution} class="{inputCls} [&>option]:bg-[#0b1c4a]">
						{#each ['1K', '2K', '4K', '8K', '16K'] as res (res)}
							<option value={res}>{res}</option>
						{/each}
					</select>
				</div>
			</div>
			<div>
				<p class="mb-1 text-xs font-semibold">Polygon Count</p>
				<input
					type="number"
					bind:value={form.polygon_count}
					placeholder="e.g. 12500"
					class={inputCls}
				/>
			</div>
			<div>
				<p class="mb-1 text-xs font-semibold">Description</p>
				<input bind:value={form.description} placeholder="Brief description" class={inputCls} />
			</div>
			<div>
				<p class="mb-1 text-xs font-semibold">Tags</p>
				<input bind:value={form.tags} placeholder="grass, terrain, animated" class={inputCls} />
			</div>
			<div>
				<p class="mb-1 text-xs font-semibold">Source Name</p>
				<input bind:value={form.source_name} placeholder="Poly Haven, KenneyNL..." class={inputCls} />
			</div>
			<div>
				<p class="mb-1 text-xs font-semibold">Source URL</p>
				<input bind:value={form.source_url} placeholder="https://..." class={inputCls} />
			</div>
			<div class="flex flex-wrap gap-4">
				{#each checkboxes as [key, label] (key)}
					<label class="flex cursor-pointer items-center gap-1.5">
						<input type="checkbox" bind:checked={form[key]} class="rounded" />
						<span class="text-xs font-medium">{label}</span>
					</label>
				{/each}
			</div>
			{#if addBlocked}
				<p class="text-xs leading-relaxed text-amber-400">
					The asset can't be added — creating a <code class="font-mono">GameAsset</code> record needs
					the Base44 backend, which this site isn't connected to. Nothing was saved.
				</p>
			{/if}
		</div>
		{#snippet footer()}
			<button
				onclick={() => (showAdd = false)}
				class="inline-flex h-8 items-center rounded-md border border-slate-600 px-3 text-xs font-medium text-slate-300 transition-colors hover:bg-slate-700 hover:text-white"
			>
				Cancel
			</button>
			<button
				onclick={() => (addBlocked = true)}
				class="inline-flex h-8 items-center rounded-md bg-primary px-3 text-xs font-medium text-white transition-colors hover:bg-primary/90"
			>
				Add to Library
			</button>
		{/snippet}
	</Dialog>
</div>
