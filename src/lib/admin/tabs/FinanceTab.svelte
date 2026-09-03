<script>
	import DollarSign from 'lucide-svelte/icons/dollar-sign';
	import TrendingUp from 'lucide-svelte/icons/trending-up';
	import TrendingDown from 'lucide-svelte/icons/trending-down';
	import Receipt from 'lucide-svelte/icons/receipt';
	import CreditCard from 'lucide-svelte/icons/credit-card';
	import Building2 from 'lucide-svelte/icons/building-2';
	import Key from 'lucide-svelte/icons/key';
	import CheckCircle2 from 'lucide-svelte/icons/check-circle-2';
	import AlertTriangle from 'lucide-svelte/icons/alert-triangle';
	import { rawStorage } from '$lib/admin/services/settings.js';

	/**
	 * Migrated from TimFord-Mats/src/components/admin/FinanceTab.jsx (184 LOC).
	 *
	 * FULLY FUNCTIONAL parts (localStorage in the original, works unchanged):
	 *   - "Connected Payment Accounts": live status of the Stripe publishable
	 *     key, webhook secret and per-plan price IDs saved in Owner Settings →
	 *     Payment Processing (same forgeai_stripe_* keys, including the
	 *     Connected / Partial / Not connected logic).
	 *   - The "Estimated Tax %" input, persisted to forgeai_tax_rate with the
	 *     original's 0–100 clamp.
	 *
	 *   The "Stripe — Secret Key" row will always read "Not connected" here:
	 *   this migration deliberately does not store a secret key in the browser
	 *   (see StripeSettingsTab), so that status is truthful, not a stub. The
	 *   bank-account row keys off the secret key in the original and therefore
	 *   also stays "Not connected".
	 *
	 * Backend-dependent (UserSubscription / HostingOrder / MediaPlacement),
	 * honestly handled: every computed money figure renders "$—" (revenue,
	 * costs, gross/net profit, the tax amount), order counts "—", and the
	 * per-plan revenue rows plus "No active subscriptions yet." are replaced by
	 * a can't-load line. They arrive with the backend.
	 */
	const PRICE_PLANS = ['starter', 'builder', 'architect', 'studio', 'titan'];

	const stripePk = !!rawStorage.get('forgeai_stripe_pk');
	const stripeSk = !!rawStorage.get('forgeai_stripe_sk');
	const stripeWh = !!rawStorage.get('forgeai_stripe_webhook');
	const connectedPrices = PRICE_PLANS.filter((p) => rawStorage.get(`forgeai_stripe_price_${p}`));
	const pricesPartial =
		connectedPrices.length > 0 && connectedPrices.length < PRICE_PLANS.length;

	let taxRate = $state(Number(rawStorage.get('forgeai_tax_rate')) || 0);
	const saveTax = (v) => {
		const n = Math.max(0, Math.min(100, Number(v) || 0));
		taxRate = n;
		rawStorage.set('forgeai_tax_rate', String(n));
	};

	const summary = [
		{ label: 'Total Revenue', value: '$—', icon: DollarSign, color: 'text-emerald-400' },
		{ label: 'Total Costs', value: '$—', icon: TrendingDown, color: 'text-red-400' },
		{ label: 'Gross Profit', value: '$—', icon: TrendingUp, color: 'text-cyan-400' },
		{ label: 'After-Tax Profit', value: '$—', icon: Receipt, color: 'text-amber-400' }
	];

	const accountRows = [
		{ icon: Key, label: 'Stripe — Publishable Key', connected: stripePk, partial: false, hint: '' },
		{
			icon: Key,
			label: 'Stripe — Secret Key',
			connected: stripeSk,
			partial: false,
			hint: 'Not stored in this browser by design — needs a secure backend'
		},
		{ icon: Building2, label: 'Stripe — Webhook Secret', connected: stripeWh, partial: false, hint: '' },
		{
			icon: CreditCard,
			label: `Price IDs mapped (${connectedPrices.length}/${PRICE_PLANS.length})`,
			connected: connectedPrices.length === PRICE_PLANS.length,
			partial: pricesPartial,
			hint: ''
		},
		{
			icon: Building2,
			label: 'Business Bank Account (payouts)',
			connected: stripeSk,
			partial: false,
			hint: 'Linked inside your processor dashboard'
		}
	];
</script>

<div class="space-y-6">
	<!-- Summary -->
	<div class="grid grid-cols-2 gap-3 sm:gap-4 lg:grid-cols-4">
		{#each summary as s (s.label)}
			<div
				class="flex items-center gap-3 rounded-xl border border-[#2a4a8c] bg-[#15295c] p-3.5 sm:p-4"
			>
				<div class="shrink-0 rounded-lg bg-[#0b1c4a] p-2">
					<s.icon class="h-4 w-4 sm:h-5 sm:w-5 {s.color}" />
				</div>
				<div class="min-w-0">
					<p class="text-lg font-black leading-none text-white sm:text-2xl">{s.value}</p>
					<p class="mt-0.5 text-[11px] leading-tight text-slate-400 sm:text-xs">{s.label}</p>
				</div>
			</div>
		{/each}
	</div>

	<!-- Connected payment accounts -->
	<div>
		<h3 class="mb-3 flex items-center gap-2 text-sm font-bold text-white">
			<CreditCard class="h-4 w-4 text-violet-400" /> Connected Payment Accounts
		</h3>
		<div class="space-y-2 rounded-xl border border-[#2a4a8c] bg-[#15295c] p-3.5 sm:p-4">
			{#each accountRows as row (row.label)}
				<div class="flex items-center gap-3 rounded-lg border border-[#2a4a8c] bg-[#0b1c4a] p-2.5">
					<row.icon class="h-4 w-4 shrink-0 text-slate-400" />
					<div class="min-w-0 flex-1">
						<p class="text-sm font-semibold text-white">{row.label}</p>
						{#if row.hint}<p class="text-[11px] text-slate-500">{row.hint}</p>{/if}
					</div>
					<span
						class="flex shrink-0 items-center gap-1 text-xs font-bold {row.connected && !row.partial
							? 'text-emerald-400'
							: row.partial
								? 'text-amber-400'
								: 'text-slate-500'}"
					>
						<CheckCircle2 class="h-3.5 w-3.5" />
						{row.connected ? (row.partial ? 'Partial' : 'Connected') : 'Not connected'}
					</span>
				</div>
			{/each}
			{#if !stripeSk}
				<div class="mt-2 flex items-start gap-2 rounded-lg border border-amber-800/40 bg-amber-950/30 p-3">
					<AlertTriangle class="mt-0.5 h-4 w-4 shrink-0 text-amber-400" />
					<p class="text-xs text-amber-300">
						No payment processor connected yet. Add your keys in Owner Settings → Payment Processing
						to start collecting payments.
					</p>
				</div>
			{/if}
		</div>
	</div>

	<!-- Revenue by service -->
	<div>
		<h3 class="mb-3 flex items-center gap-2 text-sm font-bold text-white">
			<TrendingUp class="h-4 w-4 text-emerald-400" /> Revenue by Service
		</h3>
		<div class="rounded-xl border border-[#2a4a8c] bg-[#15295c] p-3.5 sm:p-4">
			<div class="space-y-2">
				<p class="py-3 text-center text-xs text-slate-400">
					Subscription revenue can't be loaded — the backend isn't connected.
				</p>
				<div
					class="flex items-center justify-between gap-3 rounded-lg border border-[#2a4a8c] bg-[#0b1c4a] p-3"
				>
					<span class="text-sm font-semibold text-white">Marketing &amp; Media Distribution</span>
					<span class="text-sm font-bold text-emerald-400">$—</span>
				</div>
				<div
					class="flex items-center justify-between gap-3 rounded-lg border border-[#2a4a8c] bg-[#0b1c4a] p-3"
				>
					<span class="text-sm font-semibold text-white">Hosting Orders</span>
					<span class="text-sm font-bold text-emerald-400">— order(s)</span>
				</div>
			</div>
			<div class="mt-3 flex items-center justify-between gap-3 border-t border-[#2a4a8c] pt-3">
				<span class="text-sm font-bold text-white">Total Revenue</span>
				<span class="text-base font-black text-emerald-400">$—</span>
			</div>
		</div>
	</div>

	<!-- Costs, tax & profit -->
	<div>
		<h3 class="mb-3 flex items-center gap-2 text-sm font-bold text-white">
			<Receipt class="h-4 w-4 text-red-400" /> Costs, Taxes &amp; Profit
		</h3>
		<div class="space-y-2 rounded-xl border border-[#2a4a8c] bg-[#15295c] p-3.5 sm:p-4">
			<div
				class="flex items-center justify-between gap-3 rounded-lg border border-[#2a4a8c] bg-[#0b1c4a] p-3"
			>
				<span class="text-sm font-semibold text-white">Ad spend (pass-through)</span>
				<span class="text-sm font-bold text-red-400">$—</span>
			</div>
			<div
				class="flex items-center justify-between gap-3 rounded-lg border border-[#2a4a8c] bg-[#0b1c4a] p-3"
			>
				<span class="text-sm font-semibold text-white">Actual platform / channel costs</span>
				<span class="text-sm font-bold text-red-400">$—</span>
			</div>
			<div class="flex items-center justify-between gap-3 border-t border-[#2a4a8c] pt-2">
				<span class="text-sm font-bold text-white">Total Costs</span>
				<span class="text-sm font-bold text-red-400">$—</span>
			</div>
			<div class="flex items-center justify-between gap-3 border-t border-[#2a4a8c] pt-2">
				<span class="text-sm font-bold text-white">Gross Profit</span>
				<span class="text-sm font-bold text-cyan-400">$—</span>
			</div>
			<div class="flex items-center justify-between gap-3 pt-2">
				<div class="flex items-center gap-2">
					<span class="text-sm font-semibold text-slate-200">Estimated Tax</span>
					<div class="flex items-center gap-1">
						<input
							type="number"
							min="0"
							max="100"
							value={taxRate}
							oninput={(e) => saveTax(e.currentTarget.value)}
							class="h-7 w-16 rounded-md border border-[#2a4a8c] bg-[#0b1c4a] px-2 text-xs text-white outline-none focus:border-primary"
						/>
						<span class="text-xs text-slate-400">%</span>
					</div>
				</div>
				<span class="text-sm font-semibold text-amber-400">$—</span>
			</div>
			<div class="flex items-center justify-between gap-3 border-t border-[#2a4a8c] pt-3">
				<span class="text-base font-black text-white">Net Profit (after tax)</span>
				<span class="text-base font-black text-amber-400">$—</span>
			</div>
		</div>
	</div>
</div>
