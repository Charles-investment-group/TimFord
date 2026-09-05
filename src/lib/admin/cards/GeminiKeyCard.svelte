<script>
	import Key from 'lucide-svelte/icons/key';
	import Save from 'lucide-svelte/icons/save';
	import CheckCircle2 from 'lucide-svelte/icons/check-circle-2';
	import Eye from 'lucide-svelte/icons/eye';
	import EyeOff from 'lucide-svelte/icons/eye-off';
	import Lock from 'lucide-svelte/icons/lock';
	import Trash2 from 'lucide-svelte/icons/trash-2';
	import { getGeminiKey, setGeminiKey, testGeminiKey } from '$lib/admin/services/gemini.js';

	/**
	 * "Chloe's Gemini API Key" card, extracted from the Owner Settings tab of
	 * TimFord-Mats/src/pages/AdminPortal.jsx (it was inline there; a component
	 * here keeps the portal shell readable).
	 *
	 * Fully functional and faithful: save / lock / unlock / delete / show-hide /
	 * test-connection all behave as the original.
	 *
	 * On the key itself — this is the operator's OWN key, typed at runtime and
	 * held only in their browser's localStorage. It is never committed, never put
	 * in the bundle, and never sent anywhere but Google. That is the original
	 * design and it is why this card needs no backend.
	 */
	let geminiKey = $state(getGeminiKey());
	let showGeminiKey = $state(false);
	let geminiSaved = $state(false);
	let keyLocked = $state(!!getGeminiKey());
	let hasStoredKey = $state(!!getGeminiKey());
	let keyTest = $state({ status: '', msg: '' });
	let savedTimer;

	const saveGeminiKey = () => {
		setGeminiKey(geminiKey);
		hasStoredKey = !!geminiKey.trim();
		geminiSaved = true;
		clearTimeout(savedTimer);
		savedTimer = setTimeout(() => (geminiSaved = false), 2500);
	};

	const unlockKey = () => {
		if (
			window.confirm("Unlock the Gemini API key for editing? You'll be able to change or delete it.")
		)
			keyLocked = false;
	};

	const lockKey = () => (keyLocked = true);

	const deleteKey = () => {
		if (
			window.confirm(
				"Are you sure you want to delete the Gemini API key? Chloe won't work without it."
			)
		) {
			setGeminiKey('');
			geminiKey = '';
			hasStoredKey = false;
			keyLocked = true;
			geminiSaved = false;
		}
	};

	const runTest = async () => {
		keyTest = { status: 'testing', msg: 'Testing connection to Gemini...' };
		const r = await testGeminiKey(geminiKey.trim());
		keyTest = r.ok
			? { status: 'ok', msg: '✓ Connected — Chloe is online and the key works!' }
			: { status: 'fail', msg: '✗ ' + r.error };
	};
</script>

<div class="rounded-2xl border border-[#2a4a8c] bg-[#15295c] p-4 sm:p-6">
	<div class="mb-4 flex items-center gap-3">
		<div class="flex h-10 w-10 items-center justify-center rounded-xl bg-blue-500/20">
			<Key class="h-5 w-5 text-blue-400" />
		</div>
		<div>
			<h3 class="text-lg font-black text-white">Chloe's Gemini API Key</h3>
			<p class="text-xs text-slate-400">
				Powers Chloe's brain — stored locally, only visible to you
			</p>
		</div>
	</div>
	<p class="mb-4 text-sm leading-relaxed text-slate-300">
		Add your Google Gemini API key here to power Chloe. Get a free key from
		<a
			href="https://aistudio.google.com/app/apikey"
			target="_blank"
			rel="noopener noreferrer"
			class="text-blue-400 underline hover:text-blue-300">Google AI Studio</a
		>
		— no credit card required. This key is stored only in your browser.
	</p>
	<div class="flex flex-wrap gap-2">
		<div class="relative min-w-[200px] flex-1">
			<input
				type={showGeminiKey ? 'text' : 'password'}
				bind:value={geminiKey}
				readonly={keyLocked}
				placeholder="AIza..."
				class="w-full rounded-xl border bg-white px-4 py-2.5 pr-10 text-sm text-slate-900 outline-none placeholder:text-slate-400 focus:border-blue-500 {keyLocked
					? 'cursor-default border-slate-300'
					: 'border-blue-500'}"
			/>
			<button
				type="button"
				onclick={() => (showGeminiKey = !showGeminiKey)}
				aria-label={showGeminiKey ? 'Hide key' : 'Show key'}
				class="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-700"
			>
				{#if showGeminiKey}<EyeOff class="h-4 w-4" />{:else}<Eye class="h-4 w-4" />{/if}
			</button>
		</div>

		{#if keyLocked}
			<button
				onclick={unlockKey}
				class="flex items-center gap-2 rounded-xl bg-amber-600 px-5 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-amber-500"
			>
				<Lock class="h-4 w-4" /> Unlock to Edit
			</button>
		{:else}
			<button
				onclick={saveGeminiKey}
				class="flex items-center gap-2 rounded-xl px-5 py-2.5 text-sm font-semibold transition-all {geminiSaved
					? 'bg-emerald-600 text-white'
					: 'bg-blue-600 text-white hover:bg-blue-500'}"
			>
				{#if geminiSaved}<CheckCircle2 class="h-4 w-4" />{:else}<Save class="h-4 w-4" />{/if}
				{geminiSaved ? 'Saved!' : 'Save Key'}
			</button>
			<button
				onclick={lockKey}
				class="flex items-center gap-2 rounded-xl bg-slate-600 px-4 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-slate-500"
			>
				<Lock class="h-4 w-4" /> Lock
			</button>
			<button
				onclick={deleteKey}
				class="flex items-center gap-2 rounded-xl bg-red-700 px-4 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-red-600"
			>
				<Trash2 class="h-4 w-4" /> Delete
			</button>
		{/if}
	</div>
	<div class="mt-2 flex flex-wrap items-center gap-2">
		{#if hasStoredKey}
			<p class="flex items-center gap-1 text-xs text-slate-400">
				<CheckCircle2 class="h-3 w-3" /> Key saved locally
			</p>
		{/if}
		{#if keyLocked && hasStoredKey}
			<p class="flex items-center gap-1 text-xs text-amber-400">
				<Lock class="h-3 w-3" /> Locked — unlock to edit
			</p>
		{/if}
		<button
			type="button"
			disabled={keyTest.status === 'testing' || !geminiKey.trim()}
			onclick={runTest}
			class="ml-auto flex items-center gap-1.5 rounded-lg bg-blue-600 px-3 py-1.5 text-xs font-semibold text-white transition-colors hover:bg-blue-500 disabled:opacity-50"
		>
			{keyTest.status === 'testing' ? 'Testing…' : 'Test Connection'}
		</button>
	</div>
	{#if keyTest.msg}
		<p class="mt-2 text-xs {keyTest.status === 'ok' ? 'text-emerald-400' : 'text-red-400'}">
			{keyTest.msg}
		</p>
	{/if}
</div>
