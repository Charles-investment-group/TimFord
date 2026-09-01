<script>
	import Wrench from 'lucide-svelte/icons/wrench';

	/**
	 * Placeholder for an Admin Portal section that CAN work without a backend
	 * (the original stores its state in localStorage, or is pure UI) but has not
	 * been migrated yet — it is scheduled for a later batch.
	 *
	 * Deliberately distinct from BackendRequired.svelte: this one is a
	 * "not done yet", not a "cannot be done".
	 *
	 * @type {{ title: string, detail?: string }}
	 */
	let { title, detail = '' } = $props();
</script>

<div class="rounded-xl border border-dashed border-[#3a5a9a] bg-[#15295c]/60 p-10 text-center">
	<div class="mx-auto mb-3 flex h-12 w-12 items-center justify-center rounded-xl bg-cyan-500/15">
		<Wrench class="h-6 w-6 text-cyan-400/80" />
	</div>
	<p class="mb-1 text-sm font-bold text-white">{title} — not migrated yet</p>
	<p class="mx-auto max-w-md text-xs leading-relaxed text-slate-400">
		{detail ||
			'This section works without a backend and is scheduled for a later migration batch.'}
	</p>
</div>
