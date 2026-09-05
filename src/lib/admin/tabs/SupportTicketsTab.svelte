<script>
	import Search from 'lucide-svelte/icons/search';
	import RefreshCw from 'lucide-svelte/icons/refresh-cw';

	/**
	 * Support Tickets section, extracted from the tickets branch of
	 * TimFord-Mats/src/pages/AdminPortal.jsx (inline there; a component here
	 * keeps the shell readable).
	 *
	 * Ported UI: search input with icon, outlined Refresh button, and the list
	 * area. The data layer (base44.entities.SupportTicket) is unavailable, so:
	 *
	 *   - The list shows a can't-load line instead of the original's
	 *     "No tickets found." — that copy asserts an empty queue, which we cannot
	 *     know without fetching it.
	 *   - Refresh explains that there is nothing to refetch instead of silently
	 *     doing nothing.
	 *   - The ticket rows (subject/status/priority badges) and the detail dialog
	 *     with status updates + admin notes are ONLY reachable with ticket data,
	 *     so they arrive with the backend rather than as dead markup here.
	 */
	let search = $state('');
	let refreshBlocked = $state(false);
	let noteTimer;

	const refresh = () => {
		refreshBlocked = true;
		clearTimeout(noteTimer);
		noteTimer = setTimeout(() => (refreshBlocked = false), 3000);
	};
</script>

<div>
	<div class="mb-4 flex items-center gap-3">
		<div class="relative max-w-xs flex-1">
			<Search class="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-500" />
			<input
				bind:value={search}
				placeholder="Search tickets..."
				class="h-9 w-full rounded-md border border-[#3a5a9a] bg-white pl-9 pr-3 text-sm text-slate-900 outline-none placeholder:text-slate-400 focus:border-[#7088b8]"
			/>
		</div>
		<button
			onclick={refresh}
			class="inline-flex h-8 items-center rounded-md border border-slate-300 px-3 text-xs font-medium text-slate-700 transition-colors hover:bg-slate-100 hover:text-slate-900"
		>
			<RefreshCw class="mr-1.5 h-4 w-4" /> Refresh
		</button>
	</div>
	{#if refreshBlocked}
		<p class="mb-3 text-xs leading-relaxed text-amber-400">
			Tickets can't be refreshed — the <code class="font-mono">SupportTicket</code> backend isn't connected
			to this site.
		</p>
	{/if}
	<div class="space-y-2">
		<p class="py-8 text-center text-sm text-slate-400">
			Support tickets can't be loaded — the backend isn't connected.
		</p>
	</div>
</div>
