<script>
	import CreditCard from 'lucide-svelte/icons/credit-card';
	import RefreshCw from 'lucide-svelte/icons/refresh-cw';
	import Plus from 'lucide-svelte/icons/plus';
	import CheckCircle from 'lucide-svelte/icons/check-circle';
	import XCircle from 'lucide-svelte/icons/x-circle';
	import Clock from 'lucide-svelte/icons/clock';
	import DollarSign from 'lucide-svelte/icons/dollar-sign';
	import Dialog from '$lib/admin/ui/Dialog.svelte';

	/**
	 * Migrated from TimFord-Mats/src/components/admin/RecurringPaymentsTab.jsx
	 * (260 LOC).
	 *
	 * Ported UI: header, Refresh + emerald Add Subscription buttons, the
	 * 3-card MRR strip, the AI Plans / Hosting Plans tab pills (working local
	 * state), both list areas, and the full Add Subscription dialog (email,
	 * name, plan select with prices, billing cycle, status, price, credits).
	 *
	 * Backend-dependent (UserSubscription / HostingOrder), honestly handled:
	 * stat values render "—"; both lists show can't-load states in the
	 * original's empty-state layout (icon + line); Refresh and "Create
	 * Subscription" explain themselves instead of pretending. Subscription and
	 * hosting-order rows plus row-click editing arrive with the backend.
	 */
	const PLAN_LABELS = {
		free: { label: 'Free', price: '$0' },
		starter: { label: 'Starter', price: '$9/mo' },
		builder: { label: 'Builder', price: '$29/mo' },
		architect: { label: 'Architect', price: '$79/mo' },
		studio: { label: 'Studio', price: '$149/mo' },
		titan: { label: 'Titan', price: '$499/mo' }
	};

	let activeTab = $state('subscriptions');
	let showModal = $state(false);
	let form = $state({
		user_email: '',
		user_name: '',
		plan_id: 'starter',
		billing_cycle: 'monthly',
		status: 'active',
		credits_total: 500,
		price_paid: 9
	});
	let createBlocked = $state(false);
	let refreshBlocked = $state(false);
	let noteTimer;

	const refresh = () => {
		refreshBlocked = true;
		clearTimeout(noteTimer);
		noteTimer = setTimeout(() => (refreshBlocked = false), 3000);
	};

	const openCreate = () => {
		form = {
			user_email: '',
			user_name: '',
			plan_id: 'starter',
			billing_cycle: 'monthly',
			status: 'active',
			credits_total: 500,
			price_paid: 9
		};
		createBlocked = false;
		showModal = true;
	};

	const stats = [
		{ label: 'Active Subscriptions', value: '—', icon: CheckCircle, color: 'text-emerald-400' },
		{ label: 'Monthly Revenue (MRR)', value: '$—', icon: DollarSign, color: 'text-blue-400' },
		{ label: 'Cancelled', value: '—', icon: XCircle, color: 'text-red-400' }
	];

	const inputCls =
		'h-9 w-full rounded-md border border-slate-600 bg-slate-800 px-3 text-sm text-white outline-none placeholder:text-slate-500 focus:border-emerald-500';
</script>

<div>
	<div class="mb-6 flex items-center justify-between">
		<div>
			<h3 class="flex items-center gap-2 text-lg font-bold text-white">
				<CreditCard class="h-5 w-5 text-emerald-400" /> Recurring Payments
			</h3>
			<p class="mt-0.5 text-sm text-slate-400">
				Manage subscriptions, billing cycles, and hosting plans
			</p>
		</div>
		<div class="flex items-center gap-2">
			<button
				onclick={refresh}
				class="inline-flex h-8 items-center rounded-md border border-slate-600 px-3 text-xs font-medium text-slate-300 transition-colors hover:bg-slate-700 hover:text-white"
			>
				<RefreshCw class="mr-1 h-3.5 w-3.5" /> Refresh
			</button>
			<button
				onclick={openCreate}
				class="inline-flex h-9 items-center gap-2 rounded-md bg-emerald-600 px-4 text-sm font-semibold text-white transition-colors hover:bg-emerald-700"
			>
				<Plus class="h-4 w-4" /> Add Subscription
			</button>
		</div>
	</div>

	{#if refreshBlocked}
		<p class="mb-3 text-xs leading-relaxed text-amber-400">
			Subscriptions can't be refreshed — the <code class="font-mono">UserSubscription</code> backend isn't
			connected to this site.
		</p>
	{/if}

	<!-- MRR Summary -->
	<div class="mb-6 grid grid-cols-3 gap-4">
		{#each stats as stat (stat.label)}
			<div class="flex items-center gap-3 rounded-xl border border-slate-700/50 bg-slate-800/50 p-4">
				<stat.icon class="h-5 w-5 shrink-0 {stat.color}" />
				<div>
					<p class="text-xl font-black text-white">{stat.value}</p>
					<p class="text-xs text-slate-400">{stat.label}</p>
				</div>
			</div>
		{/each}
	</div>

	<!-- Tabs -->
	<div class="mb-4 flex w-fit gap-1 rounded-lg bg-slate-800/50 p-1">
		{#each [['subscriptions', 'AI Plans'], ['hosting', 'Hosting Plans']] as [id, label] (id)}
			<button
				onclick={() => (activeTab = id)}
				class="rounded-md px-4 py-1.5 text-sm font-medium transition-colors {activeTab === id
					? 'bg-slate-700 text-white'
					: 'text-slate-400 hover:text-white'}"
			>
				{label}
			</button>
		{/each}
	</div>

	{#if activeTab === 'subscriptions'}
		<div class="py-12 text-center text-slate-500">
			<CreditCard class="mx-auto mb-3 h-10 w-10 opacity-30" />
			<p class="text-sm">Subscriptions can't be loaded — the backend isn't connected.</p>
		</div>
	{:else}
		<div class="py-12 text-center text-slate-500">
			<Clock class="mx-auto mb-3 h-10 w-10 opacity-30" />
			<p class="text-sm">Hosting orders can't be loaded — the backend isn't connected.</p>
		</div>
	{/if}

	<!-- Add Subscription dialog -->
	<Dialog open={showModal} onclose={() => (showModal = false)} title="Add Subscription">
		<div class="space-y-3">
			<div class="grid grid-cols-2 gap-3">
				<div>
					<p class="mb-1 text-xs font-semibold text-slate-300">User Email *</p>
					<input bind:value={form.user_email} placeholder="user@example.com" class={inputCls} />
				</div>
				<div>
					<p class="mb-1 text-xs font-semibold text-slate-300">User Name</p>
					<input bind:value={form.user_name} placeholder="Full name" class={inputCls} />
				</div>
			</div>
			<div class="grid grid-cols-2 gap-3">
				<div>
					<p class="mb-1 text-xs font-semibold text-slate-300">Plan</p>
					<select bind:value={form.plan_id} class="{inputCls} [&>option]:bg-slate-800">
						{#each Object.entries(PLAN_LABELS) as [id, plan] (id)}
							<option value={id}>{plan.label} — {plan.price}</option>
						{/each}
					</select>
				</div>
				<div>
					<p class="mb-1 text-xs font-semibold text-slate-300">Billing Cycle</p>
					<select bind:value={form.billing_cycle} class="{inputCls} [&>option]:bg-slate-800">
						<option value="monthly">Monthly</option>
						<option value="annual">Annual</option>
					</select>
				</div>
			</div>
			<div class="grid grid-cols-2 gap-3">
				<div>
					<p class="mb-1 text-xs font-semibold text-slate-300">Status</p>
					<select bind:value={form.status} class="{inputCls} [&>option]:bg-slate-800">
						{#each ['active', 'cancelled', 'expired', 'trialing'] as s (s)}
							<option value={s}>{s}</option>
						{/each}
					</select>
				</div>
				<div>
					<p class="mb-1 text-xs font-semibold text-slate-300">Price Paid ($)</p>
					<input type="number" bind:value={form.price_paid} class={inputCls} />
				</div>
			</div>
			<div>
				<p class="mb-1 text-xs font-semibold text-slate-300">Credits Total</p>
				<input type="number" bind:value={form.credits_total} class={inputCls} />
			</div>
			{#if createBlocked}
				<p class="text-xs leading-relaxed text-amber-400">
					The subscription can't be created — it would be a
					<code class="font-mono">UserSubscription</code> record in the Base44 backend, which this site
					isn't connected to. Nothing was saved.
				</p>
			{/if}
		</div>
		{#snippet footer()}
			<button
				onclick={() => (showModal = false)}
				class="inline-flex h-8 items-center rounded-md border border-slate-600 px-3 text-xs font-medium text-slate-300 transition-colors hover:bg-slate-700 hover:text-white"
			>
				Cancel
			</button>
			<button
				onclick={() => (createBlocked = true)}
				class="inline-flex h-8 items-center rounded-md bg-emerald-600 px-3 text-xs font-medium text-white transition-colors hover:bg-emerald-700"
			>
				Create Subscription
			</button>
		{/snippet}
	</Dialog>
</div>
