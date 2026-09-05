<script>
	import CheckCircle2 from 'lucide-svelte/icons/check-circle-2';
	import Eye from 'lucide-svelte/icons/eye';
	import EyeOff from 'lucide-svelte/icons/eye-off';
	import Save from 'lucide-svelte/icons/save';
	import Lock from 'lucide-svelte/icons/lock';
	import Trash2 from 'lucide-svelte/icons/trash-2';
	import { rawStorage } from '$lib/admin/services/settings.js';

	/**
	 * KeyField from TimFord-Mats/src/components/admin/StripeSettingsTab.jsx.
	 * Save / lock / unlock / clear-with-confirm / show-hide all behave as the
	 * original.
	 *
	 * Only used for values that are safe in a browser (publishable key, webhook
	 * signing secret). The original also used it for the Stripe SECRET key; that
	 * usage is deliberately not migrated — see StripeSettingsTab.svelte.
	 *
	 * @type {{ label: string, storageKey: string, placeholder?: string, hint?: string }}
	 */
	let { label, storageKey, placeholder = '', hint = '' } = $props();

	// Each field is mounted with a fixed storageKey and never re-keyed, so reading
	// it once here is deliberate rather than a missed reactive dependency.
	// svelte-ignore state_referenced_locally
	const key = storageKey;
	const stored = rawStorage.get(key);

	let value = $state(stored);
	let show = $state(false);
	let saved = $state(false);
	let confirm = $state(false);
	let cleared = $state(false);
	let locked = $state(!!stored);
	let isActive = $state(!!stored);
	let savedTimer, clearedTimer;

	const handleSave = () => {
		if (value.trim()) rawStorage.set(key, value.trim());
		else rawStorage.remove(key);
		isActive = !!value.trim();
		saved = true;
		confirm = false;
		locked = true;
		clearTimeout(savedTimer);
		savedTimer = setTimeout(() => (saved = false), 2500);
	};

	const handleClear = () => {
		if (!confirm) {
			confirm = true;
			saved = false;
			return;
		}
		rawStorage.remove(key);
		value = '';
		isActive = false;
		confirm = false;
		cleared = true;
		locked = true;
		clearTimeout(clearedTimer);
		clearedTimer = setTimeout(() => (cleared = false), 2500);
	};

	const unlock = () => {
		if (window.confirm(`Unlock the ${label} for editing? You'll be able to change or delete it.`))
			locked = false;
	};
</script>

<div class="space-y-2">
	<div class="flex items-center justify-between">
		<p class="text-sm font-semibold text-slate-200">{label}</p>
		{#if isActive}
			<span class="flex items-center gap-1 text-xs text-slate-400">
				<CheckCircle2 class="h-3 w-3" /> Saved locally
			</span>
		{/if}
	</div>
	{#if hint}<p class="text-xs text-slate-500">{hint}</p>{/if}
	<div class="flex gap-2">
		<div class="relative flex-1">
			<input
				type={show ? 'text' : 'password'}
				bind:value
				readonly={locked}
				{placeholder}
				class="w-full rounded-xl border bg-[#2f3f63] px-4 py-2.5 pr-10 font-mono text-sm text-white outline-none placeholder:text-slate-500 focus:border-violet-500 {locked
					? 'cursor-default border-[#5b73a3]'
					: 'border-violet-500'}"
			/>
			<button
				type="button"
				onclick={() => (show = !show)}
				aria-label={show ? 'Hide value' : 'Show value'}
				class="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 hover:text-white"
			>
				{#if show}<EyeOff class="h-4 w-4" />{:else}<Eye class="h-4 w-4" />{/if}
			</button>
		</div>

		{#if locked}
			<button
				onclick={unlock}
				class="flex shrink-0 items-center gap-1.5 rounded-xl bg-amber-600 px-4 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-amber-500"
			>
				<Lock class="h-4 w-4" /> Unlock to Edit
			</button>
		{:else}
			<button
				onclick={handleSave}
				class="flex shrink-0 items-center gap-1.5 rounded-xl px-4 py-2.5 text-sm font-semibold transition-all {saved
					? 'bg-emerald-600 text-white'
					: 'bg-violet-600 text-white hover:bg-violet-500'}"
			>
				{#if saved}<CheckCircle2 class="h-4 w-4" />{:else}<Save class="h-4 w-4" />{/if}
				{saved ? 'Saved!' : 'Save'}
			</button>
			<button
				onclick={() => (locked = true)}
				class="flex shrink-0 items-center gap-1.5 rounded-xl bg-slate-600 px-3 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-slate-500"
			>
				<Lock class="h-4 w-4" /> Lock
			</button>
			<button
				onclick={handleClear}
				class="flex shrink-0 items-center gap-1.5 rounded-xl px-3 py-2.5 text-sm font-semibold transition-all {cleared
					? 'bg-emerald-600 text-white'
					: confirm
						? 'bg-red-600 text-white hover:bg-red-500'
						: 'bg-slate-700 text-slate-200 hover:bg-slate-600'}"
			>
				{#if cleared}<CheckCircle2 class="h-4 w-4" />{:else}<Trash2 class="h-4 w-4" />{/if}
				{cleared ? 'Cleared' : confirm ? 'Confirm?' : 'Clear'}
			</button>
		{/if}
	</div>
	{#if locked && isActive}
		<p class="flex items-center gap-1 text-xs text-amber-400">
			<Lock class="h-3 w-3" /> Locked — unlock to edit or delete
		</p>
	{/if}
</div>
