<script>
	let selectedBilling = $state('monthly');

	// Long plans run to 22 features, which made the section enormous. Collapse to a
	// preview and let the reader open the ones they care about.
	const VISIBLE_FEATURES = 6;
	let expandedPlans = $state({});

	function toggleFeatures(name) {
		expandedPlans[name] = !expandedPlans[name];
	}

	const billingOptions = [
		{ value: 'one-time', label: 'One-Time', detail: '1 month' },
		{ value: 'monthly', label: 'Monthly', detail: 'Recurring' },
		{ value: 'annual', label: 'Annual', detail: 'Save 20%' }
	];

	const billingMessages = {
		'one-time':
			'One-time payments give you a full month of credits with no recurring charges. Slightly higher than monthly recurring pricing.',
		monthly:
			'Monthly recurring keeps pricing lower upfront and renews automatically each billing cycle.',
		annual:
			'Annual billing charges once per year and saves 20% versus monthly pricing while keeping the same plan benefits.'
	};

	function getPriceValue(value) {
		return Number(value.replace(/[^0-9.]/g, ''));
	}

	const plans = [
		{
			name: 'Apprentice',
			tagline: 'Free Forever',
			monthlyPrice: '$0',
			oneTimePrice: '$0',
			annualPrice: '$0',
			description: 'Try AetherForge for free. Build your first project and explore what AI can create.',
			chipRows: [
				[{ label: 'Free social media ad & commercial creation', accent: true }],
				[{ label: '100 AI credits' }, { label: '25 integration' }]
			],
			features: [
				'Gemini Flash AI model',
				'ForgeEngine Basic web export',
				'Free templates only',
				'1 published project',
				'AetherForge subdomain',
				'Integrations hub, 25 credits/mo',
				'Standard analytics',
				'Community support'
			],
			cta: 'Start Free'
		},
		{
			name: 'Starter',
			tagline: 'Most Affordable',
			monthlyPrice: '$15',
			oneTimePrice: '$19',
			annualPrice: '$144',
			description: 'More credits, better AI models, and light support from our team. Great for side projects.',
			chipRows: [
				[{ label: '300 AI credits' }, { label: '50 integration' }]
			],
			features: [
				'Gemini Flash, Claude Haiku AI',
				'ForgeEngine Lite (2D & basic 3D)',
				'More templates unlocked',
				'3 published projects',
				'Custom subdomain',
				'Stripe payment integration',
				'Integrations hub - 50 credits/mo',
				'Advanced analytics',
				'Priority email support'
			],
			cta: 'Go Starter'
		},
		{
			name: 'Builder',
			tagline: 'Best for Creators',
			monthlyPrice: '$25',
			oneTimePrice: '$31',
			annualPrice: '$240',
			description: 'Built for serious creators. Pro engines, custom domain, team access, and multiple AI choices.',
			chipRows: [
				[{ label: '800 AI credits' }, { label: '150 integration' }, { label: '3 seats' }]
			],
			features: [
				'Gemini Pro, Claude Sonnet, GPT-4o',
				'ForgeEngine Pro (full 3D, physics, 5 platforms)',
				'All free templates',
				'10 published projects',
				'1 custom domain included',
				'Up to 3 team members (share plan credits)',
				'Stripe + PayPal integration',
				'Integrations hub - 150 credits/mo',
				'Advanced analytics',
				'Professional email setup',
				'Google Play / App Store deploy',
				'Priority support'
			],
			highlighted: true,
			badge: 'Most Popular',
			badgeTone: 'blue',
			cta: 'Start Building'
		},
		{
			name: 'Architect',
			tagline: 'Pro Power',
			monthlyPrice: '$39',
			oneTimePrice: '$49',
			annualPrice: '$374',
			description: 'Full power for agencies and freelancers. Multiple AI models, advanced engines, and client tools.',
			chipRows: [
				[{ label: '3,000 AI credits' }, { label: '400 integration' }, { label: '8 seats' }]
			],
			features: [
				'Gemini Ultra, Claude, GPT-4o + config',
				'ForgeEngine Advanced (ray tracing, multiplayer)',
				'All templates (free + premium)',
				'25 published projects',
				'3 custom domains',
				'Up to 8 team members (share plan credits)',
				'Full payment suite',
				'Integrations hub - 400 credits/mo',
				'Advanced analytics',
				'Client project management',
				'White-label option',
				'Custom AI model configuration',
				'Direct App Store publishing',
				'Dedicated support agent'
			],
			badge: 'Pro',
			cta: 'Go Architect'
		},
		{
			name: 'Studio',
			tagline: 'Team Power',
			monthlyPrice: '$79',
			oneTimePrice: '$99',
			annualPrice: '$758',
			description: 'For studios, agencies, and dev teams. Collaborate with up to 20 members and use multiple AIs at once.',
			chipRows: [
				[{ label: '7,000 AI credits' }, { label: '1000 integration' }, { label: '20 seats' }]
			],
			features: [
				'All AI models + multi-agent routing',
				'Build a custom AI from scratch',
				'ForgeEngine Studio (high-fidelity 3D)',
				'All templates (free + premium)',
				'Unlimited projects',
				'10 custom domains',
				'Up to 20 team members (share plan credits)',
				'Team roles & permissions',
				'Complete payment infrastructure',
				'Integrations hub - 1,000 credits/mo',
				'Advanced analytics',
				'White-label & reseller tools',
				'High-fidelity 3D graphics',
				'Professional email suites',
				'Cloud-based dedicated server (website/app)',
				'Dedicated game server hosting',
				'Enterprise CDN hosting',
				'Dedicated account manager'
			],
			badge: 'Team',
			cta: 'Build with Studio'
		},
		{
			name: 'Forge',
			tagline: 'Scale Power',
			monthlyPrice: '$109',
			oneTimePrice: '$136',
			annualPrice: '$1046',
			description: 'For growing teams that need more firepower. 12,000 credits, 30 seats, and dedicated infrastructure - without the Titan price tag.',
			chipRows: [
				[{ label: '12,000 AI credits' }, { label: '2000 integration' }, { label: '30 seats' }]
			],
			features: [
				'Every AI model available',
				'Build & fine-tune your own AI model',
				'ForgeEngine Ultimate (near-AAA)',
				'All templates (free + premium)',
				'Unlimited projects',
				'15 custom domains',
				'Up to 30 team members (share plan credits)',
				'Advanced team roles & permissions',
				'White-label platform option',
				'Integrations hub - 2,000 credits/mo',
				'Advanced analytics',
				'AAA-grade game graphics',
				'Dedicated game server (up to 500 concurrent players)',
				'Dedicated web/app server (cloud)',
				'Full payment + monetization suite',
				'Professional email suites',
				'Global edge CDN',
				'Priority 24/7 support'
			],
			badge: 'Scale',
			cta: 'Go Forge'
		},
		{
			name: 'Titan',
			tagline: 'Apex Tier',
			monthlyPrice: '$149',
			oneTimePrice: '$186',
			annualPrice: '$1430',
			description: 'The apex tier. ForgeEngine Ultimate, 20,000 credits, up to 50 team seats, and the most powerful AI stack available.',
			chipRows: [
				[{ label: '20,000 AI credits' }, { label: '3500 integration' }, { label: '50 seats' }]
			],
			features: [
				'Every AI model available',
				'Build & fine-tune your own AI model',
				'ForgeEngine Ultimate (near-AAA)',
				'All templates + exclusive Titan-only',
				'Unlimited projects',
				'Up to 20 custom domains',
				'Up to 50 team members (share plan credits)',
				'Advanced team roles & permissions',
				'White-label platform option',
				'Integrations hub - 3,500 credits/mo',
				'Advanced analytics',
				'AAA-grade game graphics',
				'Dedicated game server (up to 1,000 concurrent players)',
				'Dedicated web/app server (cloud or bare-metal)',
				'Full payment + monetization suite',
				'Professional email suites',
				'Global edge CDN',
				'24/7 dedicated support engineer',
				'Domain marketplace access'
			],
			badge: 'Ultimate',
			tone: 'dark',
			cta: 'Go Titan'
		},
		{
			name: 'Colossus',
			tagline: 'God Tier',
			monthlyPrice: '$249',
			oneTimePrice: '$311',
			annualPrice: '$2390',
			description: 'The ultimate power tier. 40,000 credits, 100 team seats, bare-metal infrastructure, and unlimited everything. For those who need absolute maximum.',
			chipRows: [
				[{ label: '40,000 AI credits' }, { label: '6000 integration' }, { label: '100 seats' }]
			],
			features: [
				'Every AI model + priority GPU inference',
				'Build & fine-tune unlimited custom AI models',
				'ForgeEngine Ultimate+ (AAA-grade)',
				'All templates + exclusive Colossus-only',
				'Unlimited projects',
				'Unlimited custom domains',
				'Up to 100 team members (share plan credits)',
				'Advanced team roles & permissions',
				'Full white-label + reseller platform',
				'Integrations hub - 6,000 credits/mo',
				'Advanced analytics',
				'AAA-grade game graphics + ray tracing',
				'Dedicated game server (up to 5,000 concurrent players)',
				'Bare-metal dedicated server (cloud or on-prem)',
				'Full payment + monetization suite',
				'Professional email suites',
				'Global edge CDN + dedicated bandwidth',
				'24/7 dedicated support team',
				'Domain marketplace access',
				'Early access to new AI models & features'
			],
			badge: 'God Tier',
			tone: 'dark',
			cta: 'Go Colossus'
		}
	];

	const displayPlans = $derived(
		plans.map((plan) => {
			const annualSavings = getPriceValue(plan.monthlyPrice) * 12 - getPriceValue(plan.annualPrice);

			return {
				...plan,
				price:
					selectedBilling === 'one-time'
						? plan.oneTimePrice
						: selectedBilling === 'annual'
							? plan.annualPrice
							: plan.monthlyPrice,
				priceSuffix:
					selectedBilling === 'monthly' && plan.monthlyPrice !== '$0'
						? '/mo'
						: selectedBilling === 'annual' && plan.annualPrice !== '$0'
							? '/year'
							: '',
				billingNote:
					selectedBilling === 'one-time' && plan.oneTimePrice !== '$0'
						? 'One-time payment • 1 month of credits'
						: selectedBilling === 'annual' && plan.annualPrice !== '$0'
							? `Billed once • saves $${annualSavings}/yr vs monthly`
							: ''
			};
		})
	);

	function setBilling(value) {
		selectedBilling = value;
	}
</script>

<section class="pricing-section" aria-labelledby="pricing-heading">
	<div class="container">
		<div class="intro">
			<p class="eyebrow">Plans &amp; Pricing</p>
			<h2 id="pricing-heading">Choose Your Power Level</h2>
			<p class="lede">
				Start free and scale into teams, premium engines, and dedicated infrastructure. Pay once
				for a month of credits, go monthly recurring, or save 20% with annual billing.
			</p>

			<div class="billing-toggle" role="tablist" aria-label="Billing period">
				{#each billingOptions as option}
					<button
						type="button"
						onclick={() => setBilling(option.value)}
						class:active={selectedBilling === option.value}
						role="tab"
						aria-selected={selectedBilling === option.value}
					>
						<span>{option.label}</span>
						<small>{option.detail}</small>
					</button>
				{/each}
			</div>

			<p class="billing-message">{billingMessages[selectedBilling]}</p>
		</div>

		<div class="plan-grid">
			{#each displayPlans as plan}
				<article class:dark={plan.tone === 'dark'} class:highlighted={plan.highlighted} class="plan-card">
					{#if plan.badge}
						<span class:badge-blue={plan.badgeTone === 'blue'} class="plan-badge">{plan.badge}</span>
					{/if}

					<div class="plan-header">
						<h3>{plan.name}</h3>
						<p class="tagline">{plan.tagline}</p>
						<div class="price-row">
							<span class="price">{plan.price}</span>
							{#if plan.priceSuffix}
								<span class="price-suffix">{plan.priceSuffix}</span>
							{/if}
						</div>
						{#if plan.billingNote}
							<p class="billing-note-row">{plan.billingNote}</p>
						{/if}
						<p class="description">{plan.description}</p>
					</div>

					<div class="chip-stack" aria-label={`${plan.name} quick highlights`}>
						{#each plan.chipRows as row}
							<div class:single-chip={row.length === 1} class="chip-row">
								{#each row as chip}
									<span class:accent={chip.accent} class="chip">{chip.label}</span>
								{/each}
							</div>
						{/each}
					</div>

					<div class="plan-body">
						<ul class="feature-list">
							{#each expandedPlans[plan.name] ? plan.features : plan.features.slice(0, VISIBLE_FEATURES) as feature}
								<li>{feature}</li>
							{/each}
						</ul>

						{#if plan.features.length > VISIBLE_FEATURES}
							<button
								type="button"
								class="feature-toggle"
								onclick={() => toggleFeatures(plan.name)}
								aria-expanded={Boolean(expandedPlans[plan.name])}
							>
								<span>
									{expandedPlans[plan.name]
										? 'Show less'
										: `+${plan.features.length - VISIBLE_FEATURES} more features`}
								</span>
								<span class="chevron" class:open={expandedPlans[plan.name]} aria-hidden="true">▾</span>
							</button>
						{/if}
					</div>

					<button type="button" class="plan-cta">{plan.cta}</button>
				</article>
			{/each}
		</div>
	</div>
</section>

<style>
	.pricing-section {
		width: 100%;
		padding: clamp(2.5rem, 5vw, 3.5rem) clamp(1rem, 4vw, 1.5rem) clamp(3rem, 5vw, 4rem);
		background:
			radial-gradient(circle at 50% 0%, rgba(37, 99, 235, 0.08), transparent 30%),
			linear-gradient(180deg, #ffffff 0%, #f4f7fc 100%);
		color: #0f172a;
		font-family:
			Inter, ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
	}

	.pricing-section,
	.pricing-section *,
	.pricing-section *::before,
	.pricing-section *::after {
		box-sizing: border-box;
	}

	.container {
		width: min(1040px, 100%);
		margin: 0 auto;
	}

	.intro {
		max-width: 760px;
		margin: 0 auto clamp(1.25rem, 2.2vw, 1.6rem);
		text-align: center;
	}

	.eyebrow {
		margin: 0 0 0.6rem;
		font-size: 0.74rem;
		font-weight: 800;
		letter-spacing: 0.16em;
		text-transform: uppercase;
		color: #2563eb;
	}

	h2 {
		margin: 0;
		font-size: clamp(1.6rem, 4vw, 2.4rem);
		line-height: 1.08;
		letter-spacing: -0.04em;
		font-weight: 900;
	}

	.lede {
		margin: 0.75rem auto 0;
		max-width: 46rem;
		font-size: clamp(0.85rem, 1.3vw, 0.92rem);
		line-height: 1.55;
		color: #334155;
	}

	.billing-message {
		margin: 0.5rem auto 0;
		max-width: 46rem;
		font-size: 0.8rem;
		line-height: 1.5;
		color: #64748b;
	}

	.billing-toggle {
		display: inline-grid;
		grid-template-columns: repeat(3, minmax(0, 1fr));
		gap: 0.3rem;
		margin-top: 1rem;
		padding: 0.28rem;
		border: 1px solid #94a3b8;
		border-radius: 1rem;
		background: #ffffff;
		box-shadow: 0 12px 35px -24px rgba(15, 23, 42, 0.35);
	}

	.billing-toggle button {
		appearance: none;
		border: 0;
		border-radius: 0.75rem;
		padding: 0.5rem 0.9rem;
		background: transparent;
		color: #0f172a;
		font: inherit;
		cursor: pointer;
		display: flex;
		flex-direction: column;
		align-items: center;
		gap: 0.1rem;
	}

	.billing-toggle button span {
		font-size: 0.95rem;
		font-weight: 700;
	}

	.billing-toggle button small {
		font-size: 0.72rem;
		font-weight: 500;
		color: #64748b;
	}

	.billing-toggle button.active {
		background: #2563eb;
		color: #ffffff;
		box-shadow: inset 0 0 0 1px rgba(255, 255, 255, 0.12);
	}

	.billing-toggle button.active small {
		color: rgba(255, 255, 255, 0.85);
	}

	.plan-grid {
		display: grid;
		grid-template-columns: repeat(4, minmax(0, 1fr));
		/* no grid-auto-rows: cards match within a row, rows size to their own content */
		gap: 0.75rem;
		align-items: stretch;
	}

	.plan-card {
		position: relative;
		min-width: 0;
		height: 100%;
		display: flex;
		flex-direction: column;
		padding: 0.85rem 0.8rem 0.75rem;
		border: 2px solid #0f172a;
		border-radius: 1rem;
		background: #ffffff;
		box-shadow: 0 18px 48px -34px rgba(15, 23, 42, 0.14);
	}

	.plan-card.highlighted {
		border-color: #3b82f6;
		box-shadow: 0 24px 60px -36px rgba(37, 99, 235, 0.34);
		background: linear-gradient(180deg, #edf5ff, #ffffff 16rem);
	}

	.plan-card.dark {
		border-color: #2563eb;
		background: linear-gradient(180deg, #111b31 0%, #111a2d 100%);
		color: #f8fafc;
	}

	.plan-badge {
		position: absolute;
		top: -0.68rem;
		left: 50%;
		transform: translateX(-50%);
		padding: 0.18rem 0.68rem;
		border-radius: 999px;
		background: #22324a;
		color: #ffffff;
		font-size: 0.68rem;
		font-weight: 800;
		letter-spacing: 0.01em;
		white-space: nowrap;
	}

	.plan-badge.badge-blue {
		background: #3b82f6;
	}

	.plan-header h3 {
		margin: 0;
		font-size: 1.35rem;
		line-height: 1.1;
		font-weight: 900;
	}

	.plan-card.dark .plan-header h3 {
		color: #ffffff;
	}

	.tagline {
		margin: 0.15rem 0 0;
		font-size: 0.72rem;
		font-weight: 600;
		color: #475569;
	}

	.plan-card.dark .tagline {
		color: rgba(226, 232, 240, 0.8);
	}

	.price-row {
		display: flex;
		align-items: baseline;
		gap: 0.2rem;
		margin-top: 0.4rem;
	}

	.price {
		font-size: 2.4rem;
		line-height: 0.95;
		font-weight: 900;
		letter-spacing: -0.05em;
	}

	.plan-card.dark .price {
		color: #ffffff;
	}

	.price-suffix {
		font-size: 0.92rem;
		font-weight: 700;
		color: #334155;
	}

	.plan-card.dark .price-suffix {
		color: rgba(226, 232, 240, 0.9);
	}

	.billing-note-row {
		margin: 0.3rem 0 0;
		font-size: 0.74rem;
		font-weight: 700;
		line-height: 1.35;
		color: #0f172a;
	}

	.plan-card.dark .billing-note-row {
		color: rgba(248, 250, 252, 0.96);
	}

	.description {
		margin: 0.5rem 0 0;
		font-size: 0.78rem;
		line-height: 1.45;
		color: #334155;
	}

	.plan-card.dark .description {
		color: rgba(226, 232, 240, 0.86);
	}

	.chip-stack {
		display: grid;
		gap: 0.3rem;
		margin: 0.65rem 0 0.7rem;
	}

	.chip-row {
		display: flex;
		flex-wrap: wrap;
		gap: 0.28rem;
	}

	.chip-row.single-chip .chip {
		width: 100%;
	}

	.chip {
		display: inline-flex;
		align-items: center;
		justify-content: center;
		min-height: 1.55rem;
		padding: 0.22rem 0.5rem;
		border: 1px solid #bfd5ff;
		border-radius: 0.65rem;
		background: #ebf3ff;
		color: #0f172a;
		font-size: 0.64rem;
		font-weight: 700;
		line-height: 1.2;
		text-align: center;
	}

	.chip.accent {
		color: #2563eb;
	}

	.plan-card.dark .chip {
		border-color: rgba(96, 165, 250, 0.2);
		background: rgba(255, 255, 255, 0.06);
		color: #e2e8f0;
	}

	.plan-card.dark .chip.accent {
		color: #58c0ff;
	}

	.feature-list {
		list-style: none;
		margin: 0;
		padding: 0;
		display: grid;
		gap: 0.28rem;
	}

	/* holds list + toggle so the CTA still pins to the bottom of the card */
	.plan-body {
		display: flex;
		flex: 1;
		flex-direction: column;
	}

	.feature-toggle {
		display: inline-flex;
		align-items: center;
		align-self: flex-start;
		gap: 0.25rem;
		margin-top: 0.5rem;
		padding: 0;
		border: 0;
		background: none;
		color: #2563eb;
		font: inherit;
		font-size: 0.72rem;
		font-weight: 700;
		cursor: pointer;
	}

	.feature-toggle:hover span:first-child,
	.feature-toggle:focus-visible span:first-child {
		text-decoration: underline;
	}

	.plan-card.dark .feature-toggle {
		color: #58c0ff;
	}

	.chevron {
		font-size: 0.8rem;
		line-height: 1;
		transition: transform 0.2s ease;
	}

	.chevron.open {
		transform: rotate(180deg);
	}

	.feature-list li {
		position: relative;
		padding-left: 0.85rem;
		font-size: 0.76rem;
		line-height: 1.35;
		color: #0f172a;
	}

	.plan-card.dark .feature-list li {
		color: rgba(241, 245, 249, 0.92);
	}

	.feature-list li::before {
		content: '✓';
		position: absolute;
		left: 0;
		top: 0;
		color: #2563eb;
		font-weight: 800;
	}

	.plan-card.dark .feature-list li::before {
		color: #38bdf8;
	}

	.plan-cta {
		margin-top: 0.8rem;
		width: 100%;
		min-height: 2.05rem;
		border: 1px solid #dbe4f0;
		border-radius: 0.6rem;
		background: #ffffff;
		color: #0f172a;
		font: inherit;
		font-size: 0.8rem;
		font-weight: 700;
		cursor: pointer;
		transform: translateY(0);
		transition:
			transform 0.2s ease,
			background 0.2s ease,
			border-color 0.2s ease,
			box-shadow 0.2s ease,
			color 0.2s ease;
	}

	.plan-card.highlighted .plan-cta {
		border-color: #3565d8;
		background: linear-gradient(180deg, #3a67df, #2959d5);
		color: #ffffff;
	}

	.plan-card.dark .plan-cta {
		border-color: rgba(56, 189, 248, 0.55);
		background: linear-gradient(180deg, #41b7ea, #33a9de);
		color: #082032;
	}

	.plan-cta:hover,
	.plan-cta:focus-visible {
		transform: translateY(-2px);
		border-color: #bfd1ea;
		box-shadow: 0 14px 30px -20px rgba(15, 23, 42, 0.34);
	}

	.plan-card.highlighted .plan-cta:hover,
	.plan-card.highlighted .plan-cta:focus-visible {
		background: linear-gradient(180deg, #4873e6, #315dd6);
		border-color: #3f6ce0;
		box-shadow: 0 16px 34px -18px rgba(37, 99, 235, 0.52);
	}

	.plan-card.dark .plan-cta:hover,
	.plan-card.dark .plan-cta:focus-visible {
		background: linear-gradient(180deg, #55c6f1, #3bb4e3);
		border-color: rgba(103, 212, 255, 0.82);
		box-shadow: 0 16px 34px -18px rgba(56, 189, 248, 0.46);
	}

	@media (max-width: 1120px) {
		.plan-grid {
			grid-template-columns: repeat(2, minmax(0, 1fr));
		}
	}

	@media (max-width: 720px) {
		.pricing-section {
			padding-top: 2.25rem;
			padding-bottom: 2.75rem;
		}

		.billing-toggle {
			width: 100%;
		}

		.plan-grid {
			grid-template-columns: minmax(0, 1fr);
		}

		.plan-card {
			padding-top: 1.05rem;
		}
	}

	@media (max-width: 520px) {
		.billing-toggle button {
			padding-inline: 0.55rem;
		}

		.billing-toggle button span {
			font-size: 0.86rem;
		}

		.price {
			font-size: 2.1rem;
		}
	}
</style>
