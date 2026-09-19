<script>
	import { ArrowRight, Check, X } from 'lucide-svelte';

	let selectedBilling = $state('monthly');

	const billingOptions = [
		{ value: 'one-time', label: 'One-time', detail: 'One month' },
		{ value: 'monthly', label: 'Monthly', detail: 'Recurring' },
		{ value: 'annual', label: 'Annual', detail: 'Save 20%' }
	];

	const plans = [
		{
			name: 'Apprentice',
			tagline: 'Free Forever',
			monthlyPrice: 0,
			oneTimePrice: 0,
			annualPrice: 0,
			description: 'Explore the platform at no cost.',
			cta: 'Start Free',
			delivery: 'Self-guided',
			consultations: 'None',
			support: 'Community',
			access: false,
			prompts: false,
			database: false,
			team: false,
			login: false,
			admin: false
		},
		{
			name: 'Architect',
			tagline: 'For Independent Builders',
			monthlyPrice: 39,
			oneTimePrice: 49,
			annualPrice: 374,
			description: 'Everything you need to build with direct help when it counts.',
			cta: 'Choose Architect',
			delivery: 'Guided build',
			consultations: '1 included',
			support: '1 ticket',
			access: true,
			prompts: false,
			database: false,
			team: false,
			login: false,
			admin: false
		},
		{
			name: 'Studio',
			tagline: 'For Growing Teams',
			monthlyPrice: 79,
			oneTimePrice: 99,
			annualPrice: 758,
			description: 'More expert support and tailored guidance for your work.',
			cta: 'Choose Studio',
			delivery: 'Collaborative',
			consultations: '2 per month',
			support: '2 per month',
			access: true,
			prompts: true,
			database: false,
			team: false,
			login: false,
			admin: false,
			featured: true
		},
		{
			name: 'Colossus',
			tagline: 'For High-Output Teams',
			monthlyPrice: 249,
			oneTimePrice: 311,
			annualPrice: 2390,
			description: 'Unlimited access and dedicated infrastructure for serious scale.',
			cta: 'Choose Colossus',
			delivery: 'Dedicated access',
			consultations: 'Unlimited',
			support: 'Unlimited',
			access: true,
			prompts: true,
			database: true,
			team: false,
			login: false,
			admin: false
		},
		{
			name: 'Corporations',
			tagline: 'Complete Professional Delivery',
			monthlyPrice: 999,
			oneTimePrice: 1249,
			annualPrice: 9590,
			description: 'A complete development team and production-ready platform.',
			cta: 'Talk to Our Team',
			delivery: 'Full delivery team',
			consultations: 'Unlimited',
			support: 'Unlimited',
			access: true,
			prompts: true,
			database: true,
			team: true,
			login: true,
			admin: true
		}
	];

	const comparisonGroups = [
		{
			label: 'Guidance & support',
			rows: [
				{ label: 'Project consultations', key: 'consultations', detail: 'Direct planning and technical guidance.' },
				{ label: 'Support tickets', key: 'support', detail: 'Structured help with your active work.' },
				{ label: 'Full site access', key: 'access', detail: 'Access the complete AetherForge platform.' }
			]
		},
		{
			label: 'Platform & intelligence',
			rows: [
				{ label: 'Custom Chloe prompts', key: 'prompts', detail: 'Tailored AI workflows and prompts.' },
				{ label: 'Postgres database', key: 'database', detail: 'A dedicated data layer for your product.' },
				{ label: 'Client login system', key: 'login', detail: 'Authentication and account access for users.' },
				{ label: 'Admin panel', key: 'admin', detail: 'Operational controls for managing your platform.' }
			]
		},
		{
			label: 'Professional delivery',
			rows: [
				{ label: 'Professional programming team', key: 'team', detail: 'A full team delivers your frontend and backend.' },
				{ label: 'Delivery model', key: 'delivery', detail: 'The level of hands-on involvement included.' }
			]
		}
	];

	function priceFor(plan) {
		if (selectedBilling === 'one-time') return plan.oneTimePrice;
		if (selectedBilling === 'annual') return plan.annualPrice;
		return plan.monthlyPrice;
	}

	function priceLabel(value) {
		return value === 0 ? 'Free' : `$${value.toLocaleString('en-US')}`;
	}

	function priceSuffix(plan) {
		if (priceFor(plan) === 0) return 'to start';
		if (selectedBilling === 'annual') return '/ year';
		if (selectedBilling === 'monthly') return '/ month';
		return 'one-time';
	}

	function billingNote(plan) {
		if (priceFor(plan) === 0) return 'No card required';
		if (selectedBilling === 'annual') {
			const savings = plan.monthlyPrice * 12 - plan.annualPrice;
			return `Save $${savings.toLocaleString('en-US')} each year`;
		}
		if (selectedBilling === 'one-time') return 'One month of access';
		return 'Billed monthly';
	}
</script>

<svelte:head>
	<title>Plans & Pricing | AetherForge</title>
	<meta
		name="description"
		content="Compare AetherForge plans for individual builders, growing teams, and professional delivery."
	/>
</svelte:head>

<main class="pricing-page">
	<section class="pricing-intro" aria-labelledby="pricing-heading">
		<div class="intro-copy">
			<p class="eyebrow">Plans &amp; pricing</p>
			<h1 id="pricing-heading">Build at the pace your work demands.</h1>
			<p class="intro-text">
				Choose independent access, guided momentum, or a full professional delivery team. Every plan is built to grow with the work in front of you.
			</p>
		</div>

		<div
			class="billing-control"
			style={`--active-index: ${billingOptions.findIndex((option) => option.value === selectedBilling)}`}
			role="tablist"
			aria-label="Choose a billing period"
		>
			<span class="billing-indicator" aria-hidden="true"></span>
			{#each billingOptions as option}
				<button
					type="button"
					class:active={selectedBilling === option.value}
					role="tab"
					aria-selected={selectedBilling === option.value}
					onclick={() => (selectedBilling = option.value)}
				>
					<span>{option.label}</span>
					<small>{option.detail}</small>
				</button>
			{/each}
		</div>
	</section>

	<section class="comparison-shell" aria-label="AetherForge plan comparison">
		<div class="comparison-scroll">
			<div class="comparison-grid">
				<div class="plan-spacer" aria-hidden="true">
					<p>Compare plans</p>
					<span>Find the right level of support for your next build.</span>
				</div>

				{#each plans as plan}
					<article class:featured={plan.featured} class="plan-summary">
						{#if plan.featured}
							<p class="popular-label">Most popular</p>
						{/if}
						<p class="plan-name">{plan.name}</p>
						<p class="plan-tagline">{plan.tagline}</p>
						<div class="price-line">
							<strong>{priceLabel(priceFor(plan))}</strong>
							<span>{priceSuffix(plan)}</span>
						</div>
						<p class="price-note">{billingNote(plan)}</p>
						<p class="plan-description">{plan.description}</p>
						<button type="button" class="plan-action">
							<span>{plan.cta}</span>
							<ArrowRight size={15} strokeWidth={2.25} aria-hidden="true" />
						</button>
					</article>
				{/each}

				{#each comparisonGroups as group}
					<div class="feature-group-label">{group.label}</div>
					{#each plans as plan}
						<div class:featured={plan.featured} class="feature-group-fill" aria-hidden="true"></div>
					{/each}

					{#each group.rows as row}
						<div class="feature-label">
							<strong>{row.label}</strong>
							<span>{row.detail}</span>
						</div>
						{#each plans as plan}
							<div class:featured={plan.featured} class="feature-value">
								{#if typeof plan[row.key] === 'boolean'}
									{#if plan[row.key]}
										<span class="included" aria-label="Included"><Check size={16} strokeWidth={2.6} /></span>
									{:else}
										<span class="not-included" aria-label="Not included"><X size={16} strokeWidth={2.6} /></span>
									{/if}
								{:else}
									<span class="feature-text">{plan[row.key]}</span>
								{/if}
							</div>
						{/each}
					{/each}
				{/each}

			</div>
		</div>
	</section>

	<section class="compact-plans" aria-label="AetherForge plan details">
		{#each plans as plan}
			<article class:featured={plan.featured} class="compact-plan">
				<div class="compact-plan-header">
					{#if plan.featured}
						<span class="compact-popular-label">Most popular</span>
					{/if}
					<p class="compact-plan-name">{plan.name}</p>
					<p class="compact-plan-tagline">{plan.tagline}</p>
					<div class="compact-price-line">
						<strong>{priceLabel(priceFor(plan))}</strong>
						<span>{priceSuffix(plan)}</span>
					</div>
					<p class="compact-price-note">{billingNote(plan)}</p>
					<p class="compact-plan-description">{plan.description}</p>
				</div>

				<div class="compact-feature-groups">
					{#each comparisonGroups as group}
						<section class="compact-feature-group">
							<p class="compact-feature-group-label">{group.label}</p>
							{#each group.rows as row}
								<div class="compact-feature">
									<span class="compact-feature-label">{row.label}</span>
									{#if typeof plan[row.key] === 'boolean'}
										{#if plan[row.key]}
											<span class="included" aria-label="Included"><Check size={16} strokeWidth={2.6} /></span>
										{:else}
											<span class="not-included" aria-label="Not included"><X size={16} strokeWidth={2.6} /></span>
										{/if}
									{:else}
										<span class="compact-feature-value">{plan[row.key]}</span>
									{/if}
								</div>
							{/each}
						</section>
					{/each}
				</div>

				<button type="button" class="compact-plan-action">
					<span>{plan.cta}</span>
					<ArrowRight size={16} strokeWidth={2.25} aria-hidden="true" />
				</button>
			</article>
		{/each}
	</section>

	<section class="pricing-closeout" aria-labelledby="pricing-closeout-heading">
		<div>
			<p class="eyebrow">Need a custom approach?</p>
			<h2 id="pricing-closeout-heading">Start where the work is.</h2>
		</div>
		<p>Our plans make it easy to begin independently and add deeper support when your project is ready for it.</p>
		<button type="button" class="closeout-action">Talk to our team <ArrowRight size={17} strokeWidth={2.25} aria-hidden="true" /></button>
	</section>
</main>

<style>
	@import url('https://fonts.googleapis.com/css2?family=Inter:ital,opsz,wght@0,14..32,100..900;1,14..32,100..900&display=swap');

	:global(*) {
		box-sizing: border-box;
	}

	.pricing-page {
		--ink: #0f172a;
		--muted: #64748b;
		--line: #94a3b8;
		--soft-line: #e2e8f0;
		--paper: #ffffff;
		--wash: #f4f7fc;
		--blue: #2563eb;
		--blue-light: #3b82f6;
		width: 100%;
		min-height: 100vh;
		padding: clamp(5rem, 8vw, 7.5rem) clamp(1.25rem, 5.5vw, 5rem) 0;
		background:
			radial-gradient(circle at 50% 0%, rgba(37, 99, 235, 0.08), transparent 30%),
			linear-gradient(180deg, #ffffff 0%, var(--wash) 100%);
		color: var(--ink);
		font-family: Inter, ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
	}

	.pricing-intro {
		display: flex;
		align-items: end;
		justify-content: space-between;
		gap: 2rem;
		width: min(1380px, 100%);
		margin: 0 auto clamp(2.25rem, 5vw, 4.5rem);
	}

	.intro-copy {
		max-width: 44rem;
	}

	.eyebrow {
		margin: 0 0 0.75rem;
		color: var(--blue);
		font-family: inherit;
		font-size: 0.7rem;
		font-weight: 800;
		letter-spacing: 0.14em;
		text-transform: uppercase;
	}

	h1,
	h2,
	p {
		margin-top: 0;
	}

	h1 {
		max-width: 11ch;
		margin-bottom: 1.1rem;
		font-size: clamp(2.5rem, 5vw, 4.8rem);
		font-weight: 800;
		letter-spacing: 0;
		line-height: 1.02;
	}

	.intro-text {
		max-width: 43rem;
		margin-bottom: 0;
		color: var(--muted);
		font-size: clamp(0.94rem, 1.3vw, 1.05rem);
		line-height: 1.7;
	}

	.billing-control {
		display: grid;
		grid-template-columns: repeat(3, minmax(0, 1fr));
		gap: 0.2rem;
		flex: 0 0 min(25rem, 100%);
		padding: 0.25rem;
		border: 1px solid var(--line);
		border-radius: 1rem;
		background: var(--paper);
		box-shadow: 0 12px 35px -24px rgba(15, 23, 42, 0.35);
		position: relative;
		isolation: isolate;
	}

	.billing-indicator {
		position: absolute;
		top: 0.25rem;
		bottom: 0.25rem;
		left: 0.25rem;
		z-index: 0;
		width: calc((100% - 1.1rem) / 3);
		border-radius: 0.75rem;
		background: var(--blue);
		box-shadow: inset 0 0 0 1px rgba(255, 255, 255, 0.12);
		transform: translateX(calc(var(--active-index) * (100% + 0.2rem)));
		transition: transform 280ms cubic-bezier(0.22, 1, 0.36, 1);
	}

	.billing-control button {
		position: relative;
		z-index: 1;
		min-height: 3.75rem;
		border: 0;
		border-radius: 0.75rem;
		background: transparent;
		color: var(--muted);
		font: inherit;
		line-height: 1.1;
		cursor: pointer;
		transition: color 180ms ease;
	}

	.billing-control button span,
	.billing-control button small {
		display: block;
	}

	.billing-control button span {
		font-size: 0.8rem;
		font-weight: 800;
	}

	.billing-control button small {
		margin-top: 0.28rem;
		font-size: 0.68rem;
	}

	.billing-control button.active {
		color: #ffffff;
	}

	.billing-control button.active small {
		color: rgba(255, 255, 255, 0.85);
	}

	.comparison-shell {
		width: min(1380px, 100%);
		margin: 0 auto;
		border: 2px solid var(--ink);
		border-radius: 1rem;
		background: var(--paper);
		box-shadow: 0 18px 48px -34px rgba(15, 23, 42, 0.14);
		overflow: hidden;
	}

	.comparison-scroll {
		border-radius: inherit;
		overflow: hidden;
		scrollbar-color: #c6cbd4 transparent;
	}

	.comparison-grid {
		display: grid;
		grid-template-columns: clamp(9.75rem, 20vw, 12rem) repeat(5, minmax(0, 1fr));
		min-width: 0;
	}

	.plan-spacer,
	.plan-summary {
		min-height: 17.8rem;
		padding: 1.1rem 0.9rem;
	}

	.plan-spacer {
		display: flex;
		flex-direction: column;
		justify-content: end;
		background: var(--wash);
	}

	.plan-spacer p {
		margin-bottom: 0.35rem;
		font-size: 0.84rem;
		font-weight: 800;
	}

	.plan-spacer span {
		max-width: 14rem;
		color: var(--muted);
		font-size: 0.73rem;
		line-height: 1.5;
	}

	.plan-summary {
		position: relative;
		display: flex;
		flex-direction: column;
		margin: 0.85rem 0.25rem;
		min-height: 16.2rem;
		padding: 1.55rem 0.85rem 0.85rem;
		border: 2px solid var(--ink);
		border-radius: 0.85rem;
	}

	.plan-summary.featured,
	.feature-value.featured,
	.feature-group-fill.featured {
		background: #edf5ff;
	}

	.plan-summary.featured {
		border-color: var(--blue-light);
		box-shadow: 0 12px 28px -22px rgba(37, 99, 235, 0.48);
		background: linear-gradient(180deg, #edf5ff, #ffffff 15rem);
	}

	.popular-label {
		position: absolute;
		top: -0.68rem;
		left: 50%;
		width: max-content;
		margin: 0;
		padding: 0.18rem 0.68rem;
		border-radius: 999px;
		background: var(--blue-light);
		color: #ffffff;
		font-family: inherit;
		font-size: 0.68rem;
		font-weight: 800;
		letter-spacing: 0.01em;
		text-align: center;
		transform: translateX(-50%);
		white-space: nowrap;
	}

	.plan-name {
		margin-bottom: 0.2rem;
		font-size: 1.1rem;
		font-weight: 800;
		line-height: 1.2;
	}

	.plan-tagline {
		min-height: 2.3em;
		margin-bottom: 1rem;
		color: var(--muted);
		font-size: 0.68rem;
		font-weight: 700;
		line-height: 1.3;
	}

	.price-line {
		display: flex;
		align-items: baseline;
		gap: 0.32rem;
	}

	.price-line strong {
		font-family: inherit;
		font-size: 1.65rem;
		font-weight: 900;
		letter-spacing: 0;
	}

	.price-line span {
		color: var(--muted);
		font-size: 0.66rem;
		font-weight: 700;
	}

	.price-note {
		min-height: 1.35rem;
		margin: 0.32rem 0 0;
		color: var(--blue);
		font-size: 0.64rem;
		font-weight: 700;
		line-height: 1.35;
	}

	.plan-description {
		min-height: 3.9em;
		margin: 0.85rem 0;
		color: var(--muted);
		font-size: 0.68rem;
		line-height: 1.45;
	}

	.plan-action,
	.closeout-action {
		display: inline-flex;
		align-items: center;
		justify-content: center;
		gap: 0.45rem;
		border: 1px solid var(--ink);
		border-radius: 0.5rem;
		background: var(--ink);
		color: #ffffff;
		font: inherit;
		font-size: 0.71rem;
		font-weight: 800;
		cursor: pointer;
		transition: background 160ms ease, border-color 160ms ease, transform 160ms ease;
	}

	.plan-action {
		width: 100%;
		min-height: 2.4rem;
		margin-top: auto;
	}

	.plan-summary.featured .plan-action {
		border-color: var(--blue-light);
		background: var(--blue-light);
	}

	.plan-action:hover {
		transform: translateY(-1px);
	}

	.closeout-action:hover {
		border-color: var(--blue);
		background: var(--blue);
		transform: translateY(-1px);
	}

	.plan-action:focus-visible,
	.closeout-action:focus-visible,
	.billing-control button:focus-visible {
		outline: 3px solid rgba(37, 99, 235, 0.35);
		outline-offset: 2px;
	}

	.feature-group-label,
	.feature-group-fill {
		min-height: 2.75rem;
		border-top: 1px solid var(--line);
		border-bottom: 1px solid var(--line);
		background: var(--wash);
	}

	.feature-group-label {
		display: flex;
		align-items: center;
		padding: 0.75rem 1.2rem;
		color: var(--muted);
		font-family: inherit;
		font-size: 0.61rem;
		font-weight: 800;
		letter-spacing: 0.12em;
		text-transform: uppercase;
	}

	.feature-group-fill {
		border-left: 1px solid var(--soft-line);
	}

	.feature-label,
	.feature-value {
		min-height: 4.2rem;
		border-bottom: 1px solid var(--soft-line);
	}

	.feature-label {
		display: flex;
		flex-direction: column;
		justify-content: center;
		padding: 0.75rem 1.2rem;
		background: #ffffff;
	}

	.feature-label strong {
		font-size: 0.75rem;
		font-weight: 800;
		line-height: 1.3;
	}

	.feature-label span {
		margin-top: 0.18rem;
		color: var(--muted);
		font-size: 0.64rem;
		line-height: 1.4;
	}

	.feature-value {
		display: flex;
		align-items: center;
		justify-content: center;
		padding: 0.5rem;
		border-left: 1px solid var(--soft-line);
		text-align: center;
	}

	.included,
	.not-included {
		display: inline-flex;
		align-items: center;
		justify-content: center;
		width: 1.55rem;
		height: 1.55rem;
		border-radius: 999px;
	}

	.included {
		background: #e8f0ff;
		color: var(--blue);
	}

	.not-included {
		background: #fef2f2;
		color: #dc2626;
	}

	.feature-text {
		font-size: 0.71rem;
		font-weight: 700;
		line-height: 1.35;
	}

	.compact-plans {
		display: none;
	}

	.pricing-closeout {
		display: grid;
		grid-template-columns: 1fr minmax(16rem, 28rem) auto;
		align-items: end;
		gap: 2rem;
		width: min(1380px, 100%);
		margin: clamp(4.5rem, 9vw, 8rem) auto 0;
		padding: clamp(2.2rem, 5vw, 4.5rem) 0;
		border-top: 1px solid var(--line);
	}

	.pricing-closeout .eyebrow {
		margin-bottom: 0.45rem;
	}

	h2 {
		margin-bottom: 0;
		font-size: clamp(1.75rem, 3vw, 2.75rem);
		font-weight: 800;
		letter-spacing: 0;
		line-height: 1.08;
	}

	.pricing-closeout > p {
		margin: 0;
		color: var(--muted);
		font-size: 0.85rem;
		line-height: 1.65;
	}

	.closeout-action {
		min-height: 2.8rem;
		padding: 0 1rem;
		white-space: nowrap;
	}

	@media (max-width: 1050px) {
		.pricing-intro {
			display: block;
			margin-bottom: 2.2rem;
		}

		.billing-control {
			width: min(25rem, 100%);
			margin-top: 1.75rem;
		}

		.comparison-shell {
			display: none;
		}

		.compact-plans {
			display: grid;
			grid-template-columns: repeat(2, minmax(0, 1fr));
			gap: 1rem;
			width: min(900px, 100%);
			margin: 0 auto;
		}

		.compact-plan {
			display: flex;
			flex-direction: column;
			min-width: 0;
			padding: 1.1rem;
			border: 2px solid var(--ink);
			border-radius: 1rem;
			background: var(--paper);
			box-shadow: 0 18px 48px -34px rgba(15, 23, 42, 0.18);
		}

		.compact-plan.featured {
			border-color: var(--blue-light);
			background: linear-gradient(180deg, #edf5ff, #ffffff 19rem);
			box-shadow: 0 20px 50px -34px rgba(37, 99, 235, 0.35);
		}

		.compact-plan-header {
			min-height: 12.75rem;
		}

		.compact-popular-label {
			display: inline-flex;
			margin-bottom: 0.65rem;
			padding: 0.22rem 0.65rem;
			border-radius: 999px;
			background: var(--blue-light);
			color: #ffffff;
			font-size: 0.65rem;
			font-weight: 800;
		}

		.compact-plan-name {
			margin: 0;
			font-size: clamp(1.25rem, 2.8vw, 1.6rem);
			font-weight: 900;
			line-height: 1.15;
		}

		.compact-plan-tagline {
			min-height: 2.5em;
			margin: 0.25rem 0 0.85rem;
			color: var(--muted);
			font-size: 0.72rem;
			font-weight: 700;
			line-height: 1.35;
		}

		.compact-price-line {
			display: flex;
			align-items: baseline;
			gap: 0.35rem;
		}

		.compact-price-line strong {
			font-size: 1.85rem;
			font-weight: 900;
			line-height: 1;
		}

		.compact-price-line span {
			color: var(--muted);
			font-size: 0.72rem;
			font-weight: 700;
		}

		.compact-price-note {
			min-height: 1.3rem;
			margin: 0.35rem 0 0;
			color: var(--blue);
			font-size: 0.67rem;
			font-weight: 800;
		}

		.compact-plan-description {
			margin: 0.85rem 0 0;
			color: var(--muted);
			font-size: 0.78rem;
			line-height: 1.5;
		}

		.compact-feature-groups {
			display: grid;
			gap: 0.9rem;
			margin: 1.25rem 0;
		}

		.compact-feature-group {
			border-top: 1px solid var(--soft-line);
		}

		.compact-feature-group-label {
			margin: 0;
			padding: 0.7rem 0;
			color: var(--muted);
			font-size: 0.61rem;
			font-weight: 800;
			letter-spacing: 0.1em;
			text-transform: uppercase;
		}

		.compact-feature {
			display: grid;
			grid-template-columns: minmax(0, 1fr) auto;
			align-items: center;
			gap: 0.75rem;
			min-height: 2.45rem;
			padding: 0.45rem 0;
			border-top: 1px solid var(--soft-line);
		}

		.compact-feature-label {
			font-size: 0.73rem;
			font-weight: 700;
			line-height: 1.35;
		}

		.compact-feature-value {
			max-width: 9rem;
			color: var(--blue);
			font-size: 0.71rem;
			font-weight: 800;
			line-height: 1.35;
			text-align: right;
		}

		.compact-plan-action {
			display: inline-flex;
			align-items: center;
			justify-content: center;
			gap: 0.45rem;
			width: 100%;
			min-height: 2.75rem;
			margin-top: auto;
			border: 1px solid var(--ink);
			border-radius: 0.5rem;
			background: var(--ink);
			color: #ffffff;
			font: inherit;
			font-size: 0.75rem;
			font-weight: 800;
			cursor: pointer;
		}

		.compact-plan.featured .compact-plan-action {
			border-color: var(--blue-light);
			background: var(--blue-light);
		}

		.compact-plan-action:hover {
			transform: translateY(-1px);
		}

		.pricing-closeout {
			grid-template-columns: 1fr;
			align-items: start;
			gap: 1.2rem;
			margin-top: 3.5rem;
		}

		.closeout-action {
			width: fit-content;
		}
	}

	@media (max-width: 700px) {
		.pricing-page {
			padding: 5rem 1rem 0;
		}

		h1 {
			max-width: 12ch;
		}

		.billing-control {
			width: 100%;
			margin-top: 2rem;
		}

		.compact-plans {
			grid-template-columns: 1fr;
			gap: 0.85rem;
		}

		.compact-plan {
			padding: 1rem;
		}

		.compact-plan-header {
			min-height: 0;
		}

		.compact-feature-value {
			max-width: 8rem;
		}

		.pricing-closeout {
			padding-bottom: 2.5rem;
		}

		.closeout-action {
			width: 100%;
		}
	}
</style>
