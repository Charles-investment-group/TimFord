<script>
	import Users from 'lucide-svelte/icons/users';
	import TrendingUp from 'lucide-svelte/icons/trending-up';
	import AlertCircle from 'lucide-svelte/icons/alert-circle';
	import Search from 'lucide-svelte/icons/search';

	/**
	 * Migrated from TimFord-Mats/src/components/admin/UserCreditsTab.jsx (122 LOC).
	 *
	 * Ported UI: the three summary cards and the full-width search input.
	 *
	 * Backend-dependent (base44.entities.UserSubscription), honestly handled:
	 * stat values render "—"; the list shows a can't-load line instead of
	 * "No subscriptions found." The per-subscription rows (status/plan badges,
	 * credit bar with color thresholds, billing column) arrive with the backend.
	 */
	let search = $state('');
</script>

<div class="space-y-6">
	<!-- Summary stats -->
	<div class="grid grid-cols-2 gap-4 sm:grid-cols-3">
		<div class="rounded-xl border border-border bg-card p-4">
			<div class="mb-1 flex items-center gap-2">
				<Users class="h-4 w-4 text-primary" />
				<span class="text-xs font-medium text-muted-foreground">Active Subs</span>
			</div>
			<p class="text-2xl font-black text-foreground">—</p>
		</div>
		<div class="rounded-xl border border-border bg-card p-4">
			<div class="mb-1 flex items-center gap-2">
				<TrendingUp class="h-4 w-4 text-green-600" />
				<span class="text-xs font-medium text-muted-foreground">Total Revenue</span>
			</div>
			<p class="text-2xl font-black text-foreground">$—</p>
		</div>
		<div class="col-span-2 rounded-xl border border-border bg-card p-4 sm:col-span-1">
			<div class="mb-1 flex items-center gap-2">
				<AlertCircle class="h-4 w-4 text-amber-500" />
				<span class="text-xs font-medium text-muted-foreground">Low Credits</span>
			</div>
			<p class="text-2xl font-black text-foreground">—</p>
			<p class="text-xs text-muted-foreground">users below 20%</p>
		</div>
	</div>

	<!-- Search -->
	<div class="relative">
		<Search class="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
		<input
			bind:value={search}
			placeholder="Search by email, name, or plan..."
			class="h-9 w-full rounded-md border border-input bg-transparent pl-9 pr-3 text-sm text-white outline-none placeholder:text-muted-foreground focus:border-primary"
		/>
	</div>

	<div class="py-12 text-center text-sm text-muted-foreground">
		Subscriptions can't be loaded — the backend isn't connected.
	</div>
</div>
