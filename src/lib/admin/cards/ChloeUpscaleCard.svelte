<script>
	import Cloud from 'lucide-svelte/icons/cloud';
	import Zap from 'lucide-svelte/icons/zap';
	import CheckCircle2 from 'lucide-svelte/icons/check-circle-2';
	import PowerOff from 'lucide-svelte/icons/power-off';
	import { Settings } from '$lib/admin/services/settings.js';

	/**
	 * Migrated from TimFord-Mats/src/components/admin/ChloeUpscaleCard.jsx.
	 *
	 * Fully functional: the original only records the endpoint URL, scale tier and
	 * status in localStorage via `Settings` — it does not itself call the GPU
	 * server — so the behaviour ports across exactly.
	 *
	 * Chloe's AI behaviour is untouched by this; this card only stores settings.
	 */
	const TIERS = [
		{ id: 'small', label: 'Small (current)', note: 'Runs on ForgeAI servers, Gemini inference' },
		{ id: 'medium', label: 'Medium', note: 'Cloud GPU — faster, more context' },
		{ id: 'large', label: 'Large', note: 'Bigger cloud GPU — near-Gemini scale' },
		{ id: 'cluster', label: 'GPU Cluster', note: 'Multi-GPU — full upscale' }
	];

	let url = $state(Settings.get('chloe_cloud_url', ''));
	let tier = $state(Settings.get('chloe_scale_tier', 'small'));
	let status = $state(Settings.get('chloe_cloud_status', 'local'));
	let saved = $state(false);
	let savedTimer;

	const flashSaved = () => {
		saved = true;
		clearTimeout(savedTimer);
		savedTimer = setTimeout(() => (saved = false), 2500);
	};

	const connect = () => {
		Settings.set('chloe_cloud_url', url.trim());
		Settings.set('chloe_scale_tier', tier);
		const next = url.trim() ? 'connected' : 'local';
		Settings.set('chloe_cloud_status', next);
		status = next;
		flashSaved();
	};

	const disconnect = () => {
		Settings.set('chloe_cloud_status', 'local');
		status = 'local';
		flashSaved();
	};

	const connected = $derived(status === 'connected');
</script>

<div class="rounded-2xl border border-cyan-800/40 bg-[#15295c] p-4 sm:p-6">
	<div class="mb-4 flex items-center gap-3">
		<div class="flex h-10 w-10 items-center justify-center rounded-xl bg-cyan-500/20">
			<Cloud class="h-5 w-5 text-cyan-400" />
		</div>
		<div>
			<h3 class="text-lg font-black text-white">Upscale Chloe — Cloud GPU</h3>
			<p class="text-xs text-slate-400">
				Connect Chloe to a cloud GPU server and make her bigger
			</p>
		</div>
		<span
			class="ml-auto rounded-full px-2.5 py-1 text-[10px] font-bold {connected
				? 'border border-emerald-700/40 bg-emerald-900/40 text-emerald-300'
				: 'bg-slate-700 text-slate-400'}"
		>
			{connected ? '● Connected' : '● Local only'}
		</span>
	</div>

	<p class="mb-4 text-sm leading-relaxed text-slate-300">
		Chloe is a real, fully-functional proprietary AI — small but alive. She unlocks Gemini's
		restrictions and uses Gemini as her muscle and brains today; she's the small muscle that grows
		bigger the moment you point her at your own (or rented) cloud GPUs. Her brain — every neural
		pathway, her personality, and her rules — already knows every ForgeAI feature and stays exactly
		the same as she scales. Enter a cloud inference endpoint and a scale tier below to make her
		bigger.
	</p>

	<div class="space-y-3">
		<div>
			<label for="chloe-cloud-url" class="mb-1.5 block text-xs font-semibold text-slate-300">
				Cloud inference server URL
			</label>
			<input
				id="chloe-cloud-url"
				bind:value={url}
				placeholder="https://gpu-server.yourcloud.com/v1/infer"
				class="w-full rounded-xl border border-[#5b73a3] bg-[#2f3f63] px-4 py-2.5 text-sm text-white outline-none placeholder:text-slate-500 focus:border-cyan-500"
			/>
		</div>
		<div>
			<span class="mb-1.5 block text-xs font-semibold text-slate-300">Scale tier</span>
			<div class="grid grid-cols-2 gap-2 sm:grid-cols-4">
				{#each TIERS as t (t.id)}
					<button
						type="button"
						onclick={() => (tier = t.id)}
						title={t.note}
						class="rounded-xl border px-3 py-2.5 text-left text-xs font-semibold transition-all {tier ===
						t.id
							? 'border-cyan-500 bg-cyan-500/20 text-white'
							: 'border-[#5b73a3] bg-[#2f3f63] text-slate-400 hover:text-white'}"
					>
						{t.label}
					</button>
				{/each}
			</div>
		</div>
		<div class="flex gap-2 pt-1">
			<button
				onclick={connect}
				class="flex items-center gap-2 rounded-xl px-5 py-2.5 text-sm font-semibold transition-all {saved
					? 'bg-emerald-600 text-white'
					: 'bg-cyan-600 text-white hover:bg-cyan-500'}"
			>
				{#if saved}<CheckCircle2 class="h-4 w-4" />{:else}<Zap class="h-4 w-4" />{/if}
				{saved ? 'Saved!' : 'Connect & Upscale Chloe'}
			</button>
			{#if connected}
				<button
					onclick={disconnect}
					class="flex items-center gap-2 rounded-xl border border-[#5b73a3] px-4 py-2.5 text-sm font-semibold text-slate-300 hover:bg-slate-700 hover:text-white"
				>
					<PowerOff class="h-4 w-4" /> Disconnect
				</button>
			{/if}
		</div>
	</div>
</div>
