<script>
	import Megaphone from 'lucide-svelte/icons/megaphone';
	import Clock from 'lucide-svelte/icons/clock';
	import Radio from 'lucide-svelte/icons/radio';
	import DollarSign from 'lucide-svelte/icons/dollar-sign';
	import RefreshCw from 'lucide-svelte/icons/refresh-cw';

	/**
	 * Migrated from TimFord-Mats/src/components/admin/AdminMediaPlacementsTab.jsx
	 * (201 LOC).
	 *
	 * Ported UI: the 4-card stat strip and the Distribution Requests header +
	 * Refresh button.
	 *
	 * Backend-dependent (base44.entities.MediaPlacement), honestly handled:
	 * stat values render "—"; the list shows a can't-load line instead of
	 * "No distribution requests yet." (an emptiness claim we can't make);
	 * Refresh explains itself. Placement rows and the detail dialog (status,
	 * payment, fulfillment, costs, go-live, live URL, notes) are only reachable
	 * with rows — they arrive with the backend.
	 */
	let refreshBlocked = $state(false);
	let noteTimer;
	const refresh = () => {
		refreshBlocked = true;
		clearTimeout(noteTimer);
		noteTimer = setTimeout(() => (refreshBlocked = false), 3000);
	};

	const stats = [
		{ label: 'Total Placements', value: '—', icon: Megaphone, color: 'text-cyan-400' },
		{ label: 'Pending Payment', value: '—', icon: Clock, color: 'text-amber-400' },
		{ label: 'Live Now', value: '—', icon: Radio, color: 'text-emerald-400' },
		{ label: 'Fees Earned', value: '$—', icon: DollarSign, color: 'text-emerald-400' }
	];
</script>

<div>
	<!-- Stats -->
	<div class="mb-5 grid grid-cols-2 gap-3 lg:grid-cols-4">
		{#each stats as stat (stat.label)}
			<div class="flex items-center gap-3 rounded-xl border border-[#34466e] bg-[#3c4f78]/50 p-3">
				<div class="shrink-0 rounded-lg bg-[#34466e] p-2">
					<stat.icon class="h-4 w-4 {stat.color}" />
				</div>
				<div>
					<p class="text-lg font-black leading-none text-white">{stat.value}</p>
					<p class="mt-0.5 text-[11px] text-slate-400">{stat.label}</p>
				</div>
			</div>
		{/each}
	</div>

	<div class="mb-3 flex items-center justify-between">
		<h3 class="text-sm font-bold text-white">Distribution Requests</h3>
		<button
			onclick={refresh}
			class="inline-flex h-8 items-center rounded-md border border-slate-700 px-3 text-xs font-medium text-slate-300 transition-colors hover:bg-slate-700 hover:text-white"
		>
			<RefreshCw class="mr-1.5 h-4 w-4" /> Refresh
		</button>
	</div>

	{#if refreshBlocked}
		<p class="mb-3 text-xs leading-relaxed text-amber-400">
			Distribution requests can't be refreshed — the <code class="font-mono">MediaPlacement</code> backend
			isn't connected to this site.
		</p>
	{/if}

	<div class="space-y-2">
		<p class="py-8 text-center text-sm text-slate-500">
			Distribution requests can't be loaded — the backend isn't connected.
		</p>
	</div>
</div>
