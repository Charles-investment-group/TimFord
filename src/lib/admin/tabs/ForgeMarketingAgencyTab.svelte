<script>
	import Sparkles from 'lucide-svelte/icons/sparkles';
	import Cpu from 'lucide-svelte/icons/cpu';
	import UserCog from 'lucide-svelte/icons/user-cog';
	import CheckCircle2 from 'lucide-svelte/icons/check-circle-2';
	import Brain from 'lucide-svelte/icons/brain';
	import Users from 'lucide-svelte/icons/users';
	import Radio from 'lucide-svelte/icons/radio';
	import DollarSign from 'lucide-svelte/icons/dollar-sign';
	import RefreshCw from 'lucide-svelte/icons/refresh-cw';
	import Megaphone from 'lucide-svelte/icons/megaphone';

	/**
	 * Migrated from TimFord-Mats/src/components/admin/ForgeMarketingAgencyTab.jsx
	 * (271 LOC).
	 *
	 * Ported UI: the gradient agency banner with its three badges, the 4-card
	 * stat strip ("AI Swarm — Chloe + 83" is the original's hardcoded copy, not
	 * data), the Campaign Collaboration Queue header + Refresh, and the empty
	 * queue area with the original's megaphone illustration.
	 *
	 * Backend-dependent (base44.entities.MediaPlacement + User), honestly
	 * handled: badge/stat counts render "—"; the queue shows a can't-load line
	 * instead of "No campaigns yet…" (which asserts an empty queue we never
	 * fetched); Refresh explains itself. Campaign rows and the collaboration
	 * detail dialog (assign-to, status, payment, fulfillment, go-live, notes)
	 * are only reachable with rows — they arrive with the backend.
	 */
	let refreshBlocked = $state(false);
	let noteTimer;
	const refresh = () => {
		refreshBlocked = true;
		clearTimeout(noteTimer);
		noteTimer = setTimeout(() => (refreshBlocked = false), 3000);
	};

	const stats = [
		{ label: 'AI Swarm', value: 'Chloe + 83', icon: Brain, color: 'text-cyan-400' },
		{ label: 'Human Staff', value: '—', icon: Users, color: 'text-blue-400' },
		{ label: 'Active Campaigns', value: '—', icon: Radio, color: 'text-emerald-400' },
		{ label: 'Agency Revenue', value: '$—', icon: DollarSign, color: 'text-amber-400' }
	];
</script>

<div>
	<!-- Agency banner -->
	<div
		class="mb-5 rounded-2xl border border-cyan-800/40 bg-gradient-to-br from-[#1e3a5f] to-[#1e2a45] p-5"
	>
		<div class="mb-1 flex items-center gap-3">
			<div class="flex h-10 w-10 items-center justify-center rounded-xl bg-cyan-500/20">
				<Sparkles class="h-5 w-5 text-cyan-400" />
			</div>
			<div>
				<h3 class="text-lg font-black text-white">Forge Marketing Agency</h3>
				<p class="text-xs text-slate-400">
					Chloe and her 83 AIs create and run your ads, commercials &amp; billboards — humans assist
					behind the scenes
				</p>
			</div>
		</div>
		<div class="mt-3 flex flex-wrap gap-2">
			<span
				class="inline-flex items-center rounded-full border border-cyan-800/40 bg-cyan-900/40 px-2.5 py-0.5 text-xs font-semibold text-cyan-300"
			>
				<Cpu class="mr-1 h-3 w-3" /> — AI-handled
			</span>
			<span
				class="inline-flex items-center rounded-full border border-blue-800/40 bg-blue-900/40 px-2.5 py-0.5 text-xs font-semibold text-blue-300"
			>
				<UserCog class="mr-1 h-3 w-3" /> — human-handled
			</span>
			<span
				class="inline-flex items-center rounded-full border border-emerald-800/40 bg-emerald-900/40 px-2.5 py-0.5 text-xs font-semibold text-emerald-300"
			>
				<CheckCircle2 class="mr-1 h-3 w-3" /> AIs do 99% of the work · humans assist with TV &amp; billboards
			</span>
		</div>
	</div>

	<!-- Stats -->
	<div class="mb-5 grid grid-cols-2 gap-3 lg:grid-cols-4">
		{#each stats as stat (stat.label)}
			<div class="flex items-center gap-3 rounded-xl border border-[#34466e] bg-[#3c4f78]/50 p-3">
				<div class="shrink-0 rounded-lg bg-[#34466e] p-2">
					<stat.icon class="h-4 w-4 {stat.color}" />
				</div>
				<div class="min-w-0">
					<p class="text-lg font-black leading-none text-white">{stat.value}</p>
					<p class="mt-0.5 truncate text-[11px] text-slate-400">{stat.label}</p>
				</div>
			</div>
		{/each}
	</div>

	<div class="mb-3 flex items-center justify-between">
		<h3 class="text-sm font-bold text-white">Campaign Collaboration Queue</h3>
		<button
			onclick={refresh}
			class="inline-flex h-8 items-center rounded-md border border-slate-700 px-3 text-xs font-medium text-slate-300 transition-colors hover:bg-slate-700 hover:text-white"
		>
			<RefreshCw class="mr-1.5 h-4 w-4" /> Refresh
		</button>
	</div>

	{#if refreshBlocked}
		<p class="mb-3 text-xs leading-relaxed text-amber-400">
			Campaigns can't be refreshed — the <code class="font-mono">MediaPlacement</code> backend isn't connected
			to this site.
		</p>
	{/if}

	<div class="space-y-2">
		<div class="py-10 text-center">
			<Megaphone class="mx-auto mb-2 h-8 w-8 text-slate-600" />
			<p class="text-sm text-slate-500">
				Campaigns can't be loaded — the backend isn't connected.
			</p>
		</div>
	</div>
</div>
