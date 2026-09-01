<script>
	import Crown from 'lucide-svelte/icons/crown';
	import Infinity from 'lucide-svelte/icons/infinity';
	import Server from 'lucide-svelte/icons/server';
	import CreditCard from 'lucide-svelte/icons/credit-card';
	import Globe from 'lucide-svelte/icons/globe';

	/**
	 * The "Owner / Super Admin" panel from the Owner Settings tab of
	 * TimFord-Mats/src/pages/AdminPortal.jsx (extracted here so the portal shell
	 * stays readable).
	 *
	 * Pure UI — the original content is entirely hardcoded, so this is a complete
	 * port. The figures below are the original's copy, not live data.
	 */
	const cards = [
		{
			icon: Infinity,
			title: 'Credits & Limits',
			items: [
				['AI Credits', 'Unlimited'],
				['Projects', 'Unlimited'],
				['AI Models', 'All 82 AIs'],
				['Team Seats', 'Unlimited'],
				['Custom Domains', 'Unlimited']
			]
		},
		{
			icon: Server,
			title: 'Server & Hosting',
			items: [
				['Web/App Hosting', 'Free / Internal'],
				['Game Servers', 'Free / Internal'],
				['Storage', 'Unlimited'],
				['CDN / Bandwidth', 'Unrestricted']
			]
		},
		{
			icon: CreditCard,
			title: 'Billing & Payments',
			items: [
				['Monthly Charge', '$0 — Owner'],
				['Payment Access', 'Full Dashboard']
			]
		},
		{
			icon: Globe,
			title: 'Platform Control',
			items: [
				['User Management', 'Full Access'],
				['Content Moderation', 'Full Access'],
				['Deployments', 'Unrestricted']
			]
		}
	];
</script>

<div class="rounded-2xl border border-amber-800/40 bg-[#15295c] p-6">
	<div class="mb-4 flex items-center gap-3">
		<div class="flex h-10 w-10 items-center justify-center rounded-xl bg-amber-500/20">
			<Crown class="h-5 w-5 text-amber-400" />
		</div>
		<div>
			<h3 class="text-lg font-black text-white">Owner / Super Admin</h3>
			<p class="text-xs text-slate-400">Full unrestricted access to all platform controls</p>
		</div>
	</div>
	<div class="grid gap-4 sm:grid-cols-2">
		{#each cards as card (card.title)}
			<div class="rounded-xl border border-amber-800/30 bg-[#091638] p-4">
				<div class="mb-2 flex items-center gap-2">
					<card.icon class="h-4 w-4 text-amber-400" />
					<span class="text-sm font-bold text-white">{card.title}</span>
				</div>
				<div class="space-y-1.5">
					{#each card.items as [key, value] (key)}
						<div class="flex items-center justify-between text-xs">
							<span class="text-slate-400">{key}</span>
							<span class="font-bold text-amber-400">{value}</span>
						</div>
					{/each}
				</div>
			</div>
		{/each}
	</div>
</div>
