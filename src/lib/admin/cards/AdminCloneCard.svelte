<script>
	import Copy from 'lucide-svelte/icons/copy';
	import ArrowRight from 'lucide-svelte/icons/arrow-right';

	/**
	 * Migrated from TimFord-Mats/src/components/admin/AdminCloneCard.jsx.
	 *
	 * The original had no data dependency, but its action was
	 * `navigate("/builder?prompt=clone " + url)` via react-router. The TimFord
	 * site has no /builder route, so that navigation would land on the 404
	 * fallback.
	 *
	 * Rather than send the user to a dead URL (or pretend the clone ran), the
	 * card keeps its original appearance and input behaviour and reports that the
	 * builder target is not migrated yet. The prompt string that the original
	 * would have handed to the builder is shown, so the behaviour is inspectable.
	 */
	let url = $state('');
	let blocked = $state(false);

	const go = () => {
		if (!url.trim()) return;
		blocked = true;
	};

	const prompt = $derived('clone ' + url.trim());
</script>

<div class="rounded-2xl border border-violet-800/40 bg-[#15295c] p-4 sm:p-6">
	<div class="mb-4 flex items-center gap-3">
		<div class="flex h-10 w-10 items-center justify-center rounded-xl bg-violet-500/20">
			<Copy class="h-5 w-5 text-violet-400" />
		</div>
		<div>
			<h3 class="text-lg font-black text-white">Quick Clone — Website or App</h3>
			<p class="text-xs text-slate-400">Owner-only · paste a URL and Chloe rebuilds it</p>
		</div>
	</div>

	<p class="mb-4 text-sm leading-relaxed text-slate-300">
		Paste any website, app, or template-page URL (spicy or non-spicy). Chloe fetches it over the
		internet and rebuilds the whole thing in the builder — every section, copy, color, and a working
		backend. No toggles, no switches. Only your admin account can do this.
	</p>

	<div class="flex flex-col gap-2 sm:flex-row">
		<input
			bind:value={url}
			oninput={() => (blocked = false)}
			onkeydown={(e) => {
				if (e.key === 'Enter') go();
			}}
			placeholder="https://example.com or https://spicylabs.ai/..."
			class="flex-1 rounded-xl border border-slate-300 bg-white px-4 py-2.5 text-sm text-slate-900 outline-none placeholder:text-slate-400 focus:border-violet-500"
		/>
		<button
			onclick={go}
			disabled={!url.trim()}
			class="flex items-center justify-center gap-2 rounded-xl bg-violet-600 px-5 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-violet-500 disabled:cursor-not-allowed disabled:opacity-50"
		>
			Clone in Builder <ArrowRight class="h-4 w-4" />
		</button>
	</div>

	{#if blocked}
		<p class="mt-3 text-xs leading-relaxed text-amber-400">
			The builder route has not been migrated from Base44 yet, so this cannot run. The original
			would have opened the builder with the prompt
			<code class="font-mono text-amber-300">{prompt}</code>.
		</p>
	{/if}
</div>
