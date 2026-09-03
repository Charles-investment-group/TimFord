<script>
	import CreditCard from 'lucide-svelte/icons/credit-card';
	import Key from 'lucide-svelte/icons/key';
	import CheckCircle2 from 'lucide-svelte/icons/check-circle-2';
	import Building2 from 'lucide-svelte/icons/building-2';
	import AlertTriangle from 'lucide-svelte/icons/alert-triangle';
	import Zap from 'lucide-svelte/icons/zap';
	import Globe from 'lucide-svelte/icons/globe';
	import ShieldCheck from 'lucide-svelte/icons/shield-check';
	import Trash2 from 'lucide-svelte/icons/trash-2';
	import ShieldOff from 'lucide-svelte/icons/shield-off';
	import KeyField from '$lib/admin/ui/KeyField.svelte';
	import { rawStorage } from '$lib/admin/services/settings.js';

	/**
	 * Migrated from TimFord-Mats/src/components/admin/StripeSettingsTab.jsx.
	 *
	 * ONE DELIBERATE OMISSION — THE SECRET KEY.
	 * The original rendered a third KeyField that wrote a Stripe SECRET key
	 * (sk_live_... / sk_test_...) into browser localStorage. A secret key grants
	 * full account access — charges, refunds, payouts — and anything in
	 * localStorage is readable by any script on the origin. It is not migrated.
	 * In its place is a disabled panel explaining what is needed instead.
	 *
	 * Everything else is a faithful, working port: the publishable key, the
	 * webhook signing secret, the five price IDs, the section tabs, and the
	 * "Delete All" button (which still clears a secret key left behind by the
	 * original Base44 portal in this browser).
	 */
	const STORAGE_KEYS = {
		publishable: 'forgeai_stripe_pk',
		secret: 'forgeai_stripe_sk',
		webhook: 'forgeai_stripe_webhook'
	};

	const sections = [
		{ id: 'keys', label: 'API Keys', icon: Key },
		{ id: 'bank', label: 'Bank Account', icon: Building2 },
		{ id: 'products', label: 'Products & Prices', icon: CreditCard },
		{ id: 'webhooks', label: 'Webhooks', icon: Globe }
	];

	const bankSteps = [
		{
			step: '1',
			title: 'Open Processor Dashboard',
			desc: 'Go to Settings → Payouts in your payment processor account'
		},
		{
			step: '2',
			title: 'Add Bank Account',
			desc: "Click 'Add bank account' and enter your routing + account numbers, or connect instantly via Plaid"
		},
		{
			step: '3',
			title: 'Verify Your Account',
			desc: 'Your processor sends 2 micro-deposits (< $1) to verify. Confirm the amounts within 1-2 business days'
		},
		{
			step: '4',
			title: 'Set Payout Schedule',
			desc: 'Choose daily, weekly, or manual payouts. Funds typically arrive in 2 business days'
		}
	];

	const PLANS = ['Starter', 'Builder', 'Architect', 'Studio', 'Titan'];

	const WEBHOOK_EVENTS = [
		'checkout completed',
		'subscription created',
		'subscription updated',
		'subscription canceled',
		'invoice paid',
		'invoice failed'
	];

	let activeSection = $state('keys');

	// --- Delete all keys ---------------------------------------------------
	let clearedAll = $state(false);
	let confirmAll = $state(false);
	let clearedTimer;

	const handleClearAll = () => {
		if (!confirmAll) {
			confirmAll = true;
			return;
		}
		// Includes STORAGE_KEYS.secret on purpose: this portal never writes it, but
		// a browser that used the original Base44 portal may still hold one, and
		// this button is the user's way to remove it.
		for (const k of Object.values(STORAGE_KEYS)) rawStorage.remove(k);
		for (const k of rawStorage.keys()) {
			if (k.startsWith('forgeai_stripe_price_')) rawStorage.remove(k);
		}
		clearedAll = true;
		confirmAll = false;
		clearTimeout(clearedTimer);
		clearedTimer = setTimeout(() => (clearedAll = false), 2500);
	};

	// --- Price ID fields ----------------------------------------------------
	let priceValues = $state(
		Object.fromEntries(
			PLANS.map((p) => [p, rawStorage.get(`forgeai_stripe_price_${p.toLowerCase()}`)])
		)
	);
	let priceSaved = $state(null);
	let priceTimer;

	const savePrice = (plan) => {
		const key = `forgeai_stripe_price_${plan.toLowerCase()}`;
		const v = priceValues[plan].trim();
		if (v) rawStorage.set(key, v);
		else rawStorage.remove(key);
		priceSaved = plan;
		clearTimeout(priceTimer);
		priceTimer = setTimeout(() => (priceSaved = null), 2000);
	};
</script>

<div class="rounded-2xl border border-[#2a4a8c] bg-[#15295c] p-4 sm:p-6">
	<div class="mb-6 flex items-center gap-3">
		<div class="flex h-10 w-10 items-center justify-center rounded-xl bg-violet-500/20">
			<CreditCard class="h-5 w-5 text-violet-400" />
		</div>
		<div>
			<h3 class="text-lg font-black text-white">Payment Processing</h3>
			<p class="text-xs text-slate-400">
				Connect your payment processor to handle all payments, subscriptions, and payouts
			</p>
		</div>
	</div>

	<!-- Section tabs -->
	<div class="mb-6 flex flex-wrap gap-1 rounded-xl bg-[#2f3f63] p-1">
		{#each sections as s (s.id)}
			<button
				onclick={() => (activeSection = s.id)}
				class="flex items-center gap-1.5 rounded-lg px-3 py-2 text-sm font-semibold transition-colors {activeSection ===
				s.id
					? 'bg-violet-600 text-white'
					: 'text-slate-400 hover:text-white'}"
			>
				<s.icon class="h-3.5 w-3.5" />
				{s.label}
			</button>
		{/each}
	</div>

	{#if activeSection === 'keys'}
		<div class="space-y-6">
			<!-- Delete all keys -->
			<div
				class="flex items-center justify-between gap-3 rounded-xl border border-red-800/40 bg-red-950/20 p-4"
			>
				<div class="flex items-start gap-3">
					<AlertTriangle class="mt-0.5 h-5 w-5 shrink-0 text-red-400" />
					<div>
						<p class="text-sm font-bold text-red-300">Delete All Payment Keys</p>
						<p class="mt-0.5 text-xs text-slate-400">
							Clears the public key, secret key, webhook secret, and saved price IDs from this
							browser. Use this if you entered keys incorrectly.
						</p>
					</div>
				</div>
				<button
					onclick={handleClearAll}
					class="flex shrink-0 items-center gap-1.5 whitespace-nowrap rounded-xl px-4 py-2.5 text-sm font-semibold transition-all {clearedAll
						? 'bg-emerald-600 text-white'
						: 'bg-red-600 text-white hover:bg-red-500'}"
				>
					{#if clearedAll}<CheckCircle2 class="h-4 w-4" />{:else}<Trash2 class="h-4 w-4" />{/if}
					{clearedAll ? 'Cleared!' : confirmAll ? 'Confirm Delete' : 'Delete All'}
				</button>
			</div>

			<div class="rounded-xl border border-violet-800/40 bg-violet-950/20 p-5">
				<div class="mb-5 flex items-start gap-3">
					<ShieldCheck class="mt-0.5 h-5 w-5 shrink-0 text-violet-400" />
					<div>
						<p class="text-sm font-bold text-white">Get your Payment Processor API Keys</p>
						<p class="mt-1 text-xs text-slate-400">
							Log in to your payment processor's dashboard → Developers / API Keys to find your
							keys. Works with Stripe or any other processor you choose.
						</p>
					</div>
				</div>
				<div class="space-y-5">
					<KeyField
						label="Publishable Key (Public)"
						storageKey={STORAGE_KEYS.publishable}
						placeholder="pk_live_... / pk_test_... or your processor's public key"
						hint="Safe to expose on frontend. Used to initialize the checkout on the frontend."
					/>

					<!-- Secret key: deliberately NOT migrated. See component header. -->
					<div class="space-y-2 rounded-xl border border-amber-800/40 bg-amber-950/20 p-4">
						<div class="flex items-center justify-between">
							<p class="text-sm font-semibold text-slate-200">Secret Key (Private)</p>
							<span
								class="flex items-center gap-1 rounded-full bg-amber-900/40 px-2 py-0.5 text-[10px] font-bold text-amber-300"
							>
								<ShieldOff class="h-3 w-3" /> Disabled
							</span>
						</div>
						<p class="text-xs leading-relaxed text-slate-400">
							The original Base44 portal saved the secret key into this browser's localStorage.
							A secret key can create charges, issue refunds and move payouts, and anything in
							localStorage is readable by any script on the page — so it is not migrated here.
						</p>
						<p class="text-xs leading-relaxed text-amber-400">
							Server-side payment calls need the key held by a backend and never sent to the
							browser. This field stays disabled until that exists. Use "Delete All" above to
							remove a key the original portal may have left in this browser.
						</p>
					</div>
				</div>
			</div>

			<div class="flex gap-3 rounded-xl border border-amber-800/30 bg-amber-950/10 p-4">
				<AlertTriangle class="mt-0.5 h-5 w-5 shrink-0 text-amber-400" />
				<div>
					<p class="text-sm font-bold text-amber-300">Use Test / Sandbox Keys While Building</p>
					<p class="mt-1 text-xs text-slate-400">
						Use your processor's test or sandbox keys during development, then switch to live keys
						when you go live. Refer to your processor's docs for their test card numbers.
					</p>
				</div>
			</div>
		</div>
	{:else if activeSection === 'bank'}
		<div class="space-y-5">
			<div class="rounded-xl border border-emerald-800/40 bg-emerald-950/20 p-5">
				<div class="mb-4 flex items-center gap-3">
					<Building2 class="h-5 w-5 text-emerald-400" />
					<div>
						<p class="text-sm font-bold text-white">Link Your Business Bank Account</p>
						<p class="mt-0.5 text-xs text-slate-400">
							Your payment processor handles bank connections securely through their verified
							payout system
						</p>
					</div>
				</div>
				<p class="mb-4 text-sm leading-relaxed text-slate-300">
					Bank account linking is done directly inside your
					<span class="font-semibold text-emerald-400">payment processor's dashboard</span> — most
					processors use bank-level encryption and verification (micro-deposits or instant via
					Plaid). Once linked, all payments collected on your platform will be automatically
					transferred to your account on your chosen payout schedule.
				</p>
				<div class="mb-5 space-y-3">
					{#each bankSteps as item (item.step)}
						<div class="flex items-start gap-3 rounded-lg bg-slate-800/60 p-3">
							<div
								class="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-emerald-600 text-xs font-black text-white"
							>
								{item.step}
							</div>
							<div>
								<p class="text-sm font-semibold text-white">{item.title}</p>
								<p class="text-xs text-slate-400">{item.desc}</p>
							</div>
						</div>
					{/each}
				</div>
				<div
					class="flex w-full items-center justify-center gap-2 rounded-xl bg-emerald-600/90 py-3 text-sm font-bold text-white"
				>
					<Building2 class="h-4 w-4" /> Open your processor's payout settings in their dashboard
				</div>
			</div>

			<div class="rounded-xl border border-blue-800/30 bg-blue-950/10 p-4">
				<p class="mb-2 flex items-center gap-2 text-sm font-bold text-blue-300">
					<Zap class="h-4 w-4" /> Instant Payouts
				</p>
				<p class="text-xs leading-relaxed text-slate-400">
					Many processors support <span class="font-semibold text-white">Instant Payouts</span>
					(funds in minutes, not days) for eligible accounts with a debit card on file. Check your
					processor's dashboard under Settings → Payouts to see if it's available.
				</p>
			</div>
		</div>
	{:else if activeSection === 'products'}
		<div class="space-y-4">
			<div class="rounded-xl border border-slate-700 bg-slate-800/50 p-5">
				<p class="mb-2 flex items-center gap-2 text-sm font-bold text-white">
					<CreditCard class="h-4 w-4 text-violet-400" /> Pricing Plans
				</p>
				<p class="mb-4 text-sm leading-relaxed text-slate-400">
					Create your subscription plans (Starter, Builder, Architect, Studio, Titan) as Products +
					Prices in your payment processor. Once created, paste the Price IDs below to wire them up
					to the checkout flow.
				</p>
				{#each PLANS as plan (plan)}
					<div class="mb-3 flex items-center gap-3">
						<span class="w-20 shrink-0 text-xs font-semibold text-slate-300">{plan}</span>
						<input
							bind:value={priceValues[plan]}
							placeholder="price_..."
							class="flex-1 rounded-lg border border-[#5b73a3] bg-[#2f3f63] px-3 py-2 font-mono text-xs text-white outline-none placeholder:text-slate-600 focus:border-violet-500"
						/>
						<button
							onclick={() => savePrice(plan)}
							class="shrink-0 rounded-lg px-3 py-2 text-xs font-semibold transition-colors {priceSaved ===
							plan
								? 'bg-emerald-600 text-white'
								: 'bg-violet-700 text-white hover:bg-violet-600'}"
						>
							{priceSaved === plan ? '✓' : 'Save'}
						</button>
					</div>
				{/each}
				<p class="mt-3 text-xs text-slate-500">
					Manage your products and prices inside your payment processor's dashboard.
				</p>
			</div>
		</div>
	{:else if activeSection === 'webhooks'}
		<div class="space-y-5">
			<div class="rounded-xl border border-slate-700 bg-slate-800/50 p-5">
				<p class="mb-2 flex items-center gap-2 text-sm font-bold text-white">
					<Globe class="h-4 w-4 text-violet-400" /> Webhook Configuration
				</p>
				<p class="mb-4 text-sm leading-relaxed text-slate-400">
					Webhooks let your payment processor notify your app when payments succeed, subscriptions
					renew, or charges fail. Set up a webhook endpoint in your processor's dashboard and paste
					the signing secret below.
				</p>
				<div class="mb-4 rounded-lg border border-slate-700 bg-slate-900 p-3">
					<p class="mb-1 text-xs font-semibold text-slate-300">Your Webhook Endpoint URL</p>
					<code class="break-all font-mono text-xs text-violet-300"
						>https://forgeai.app/api/webhooks/payments</code
					>
				</div>
				<div class="mb-4 space-y-3">
					<p class="text-xs font-semibold text-slate-300">Recommended Events to Listen To:</p>
					{#each WEBHOOK_EVENTS as e (e)}
						<div class="flex items-center gap-2 text-xs text-slate-400">
							<div class="h-1.5 w-1.5 shrink-0 rounded-full bg-violet-500"></div>
							<code class="font-mono">{e}</code>
						</div>
					{/each}
				</div>
				<KeyField
					label="Webhook Signing Secret"
					storageKey={STORAGE_KEYS.webhook}
					placeholder="whsec_... or your processor's signing secret"
					hint="Found in your processor's dashboard → Developers → Webhooks → your endpoint → Signing secret"
				/>
				<p class="mt-3 text-xs text-slate-500">
					Manage your webhooks inside your payment processor's dashboard.
				</p>
			</div>
		</div>
	{/if}
</div>
