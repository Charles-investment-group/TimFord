<script>
	import Database from 'lucide-svelte/icons/database';

	/**
	 * Placeholder for an Admin Portal section whose original Base44 implementation
	 * reads or writes `base44.entities.*`. Those calls hit the hosted Base44
	 * service, which this project has no access to, so the section cannot be
	 * connected yet.
	 *
	 * This exists so a blocked section is visibly, honestly blocked rather than
	 * showing invented data. When a backend is approved, the real component
	 * replaces this and talks to a service module — nothing else has to change.
	 *
	 * @type {{ title: string, entities?: string[], note?: string }}
	 */
	let { title, entities = [], note = '' } = $props();
</script>

<div class="rounded-xl border border-dashed border-[#3a5a9a] bg-[#15295c]/60 p-10 text-center">
	<div class="mx-auto mb-3 flex h-12 w-12 items-center justify-center rounded-xl bg-slate-500/20">
		<Database class="h-6 w-6 text-slate-400" />
	</div>
	<p class="mb-1 text-sm font-bold text-white">{title} is not connected yet</p>
	<p class="mx-auto mb-4 max-w-md text-xs leading-relaxed text-slate-400">
		The original Base44 version of this section reads its data from the hosted Base44 service. That
		backend is not available to this project, so no data can be shown here. Nothing is stored or
		faked — this section stays empty until a backend is approved and connected.
	</p>
	{#if entities.length}
		<p class="mb-2 text-[11px] text-slate-500">
			Requires: {#each entities as entity, i}<code
					class="font-mono text-slate-400">{entity}</code
				>{i < entities.length - 1 ? ', ' : ''}{/each}
		</p>
	{/if}
	{#if note}
		<p class="mx-auto max-w-md text-[11px] leading-relaxed text-amber-400/80">{note}</p>
	{/if}
</div>
