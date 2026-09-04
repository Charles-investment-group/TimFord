<script>

	const stats = [
		{
			icon: 'bolt',
			value: '98%',
			title: 'See SEO gains by week two',
			text: 'of customers see a 5% increase in SEO by the second week of working with Charles Investment Group.'
		},
		{
			icon: 'chip',
			value: '83',
			title: 'AI agents on every build',
			text: 'Chloe leads 2 QA orchestrators and 80 specialists on your project — no prompt engineering required.'
		},
		{
			icon: 'cube',
			value: '41+',
			title: 'Languages and frameworks',
			text: 'React and Swift through to COBOL and Solidity. Your stack is already covered before you ask.'
		},
		{
			icon: 'triangle',
			value: '$0',
			title: 'In engine licensing fees',
			text: 'ForgeEngine is built in-house, so you never owe a third-party engine royalty on anything you ship.'
		},
		{
			icon: 'wifi',
			value: '1,000',
			title: 'Concurrent players per server',
			text: 'Dedicated multiplayer hosting on Titan, with the full AAA pipeline and 4K/8K rendering included.'
		},
		{
			icon: 'film',
			value: '500+',
			title: 'Free assets, included',
			text: 'Models, textures and audio ready to drop in, alongside a 500+ clip mocap animation library.'
		}
	];
</script>

<section class="forge-section" aria-label="ForgeEngine platform highlights">
	<div class="section-inner">
		<div class="feature-grid">
			{#each stats as stat, index}
				<article
					class="featured"
					style={`--delay: ${index * 70}ms`}
				>
					{@render Icon({ name: stat.icon, size: '34' })}
					<p class="stat-value">{stat.value}</p>
					<h2>{stat.title}</h2>
					<p>{stat.text}</p>
				</article>
			{/each}
		</div>
	</div>
</section>

{#snippet Icon({ name, size = '24' })}
	<svg
		class="icon"
		width={size}
		height={size}
		viewBox="0 0 24 24"
		fill="none"
		xmlns="http://www.w3.org/2000/svg"
		aria-hidden="true"
	>
		{#if name === 'triangle'}
			<path d="M12 4.5L21 20H3L12 4.5Z" stroke="currentColor" stroke-width="2" stroke-linejoin="round" />
		{:else if name === 'chip'}
			<path d="M8 8H16V16H8V8Z" stroke="currentColor" stroke-width="2" />
			<path d="M4 9H7M4 15H7M17 9H20M17 15H20M9 4V7M15 4V7M9 17V20M15 17V20" stroke="currentColor" stroke-width="2" stroke-linecap="round" />
		{:else if name === 'bolt'}
			<path d="M13 2L4 14H11L10 22L20 9H13L13 2Z" stroke="currentColor" stroke-width="2" stroke-linejoin="round" />
		{:else if name === 'wifi'}
			<path d="M5 10C9.5 6.5 14.5 6.5 19 10M8 14C10.4 12.2 13.6 12.2 16 14M11.5 18H12.5" stroke="currentColor" stroke-width="2" stroke-linecap="round" />
		{:else if name === 'cube'}
			<path d="M12 3L20 7.5V16.5L12 21L4 16.5V7.5L12 3Z" stroke="currentColor" stroke-width="2" stroke-linejoin="round" />
			<path d="M4.5 8L12 12.5L19.5 8M12 12.5V20.5" stroke="currentColor" stroke-width="2" stroke-linejoin="round" />
		{:else if name === 'phone'}
			<path d="M8 3H16C17.1 3 18 3.9 18 5V19C18 20.1 17.1 21 16 21H8C6.9 21 6 20.1 6 19V5C6 3.9 6.9 3 8 3Z" stroke="currentColor" stroke-width="2" />
			<path d="M11.5 17.5H12.5" stroke="currentColor" stroke-width="2" stroke-linecap="round" />
		{:else if name === 'film'}
			<path d="M5 4H19V20H5V4Z" stroke="currentColor" stroke-width="2" />
			<path d="M9 4V20M15 4V20M5 9H19M5 15H19" stroke="currentColor" stroke-width="2" />
		{:else}
			<path d="M5 7H19V19H5V7Z" stroke="currentColor" stroke-width="2" />
			<path d="M8 7L7 4H11L12 7M15 7L14 4H18L19 7" stroke="currentColor" stroke-width="2" stroke-linejoin="round" />
		{/if}
	</svg>
{/snippet}

<style>
	.forge-section {
		position: relative;
		isolation: isolate;
		width: 100%;
		overflow: hidden;
		background:
			linear-gradient(rgba(74, 144, 255, 0.055) 1px, transparent 1px),
			linear-gradient(90deg, rgba(74, 144, 255, 0.055) 1px, transparent 1px),
			radial-gradient(circle at 48% 24%, rgba(54, 162, 255, 0), transparent 32%),
			linear-gradient(180deg, #020818 0%, #071121 56%, #0b1424 100%);
		background-size: 96px 96px, 96px 96px, auto, auto;
		color: white;
		padding: 100px 50px;
		font-family:
			Inter, ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;
		outline: 1px solid transparent;
		transition:
			background-position 900ms ease,
			outline-color 260ms ease,
			box-shadow 260ms ease;
	}

	.forge-section,
	.forge-section * {
		box-sizing: border-box;
	}

	.forge-section::before {
		content: "";
		position: absolute;
		inset: 14px;
		z-index: 0;
		border-radius: 14px;
		padding: 1px;
		background: conic-gradient(
			from var(--border-angle, 0deg),
			rgba(90, 167, 255, 0),
			rgba(90, 167, 255, 0.86),
			rgba(25, 198, 231, 0.54),
			rgba(155, 92, 246, 0.62),
			rgba(90, 167, 255, 0)
		);
		mask:
			linear-gradient(#000 0 0) content-box,
			linear-gradient(#000 0 0);
		mask-composite: exclude;
		opacity: 0;
		transition: opacity 280ms ease;
		pointer-events: none;
	}

	.forge-section::after {
		content: "";
		position: absolute;
		inset: 0;
		z-index: 0;
		background: linear-gradient(115deg, transparent 20%, rgba(255, 255, 255, 0.07) 48%, transparent 72%);
		transform: translateX(-120%);
		opacity: 0;
		pointer-events: none;
	}

	.forge-section:hover,
	.forge-section:focus-within {
		background-position:
			16px 14px,
			16px 14px,
			center,
			center;
		outline-color: rgba(90, 167, 255, 0);
		box-shadow: inset 0 0 54px rgba(58, 153, 255, 0.0);
	}



	.section-inner {
		position: relative;
		z-index: 1;
		width: min(1180px, 100%);
		margin: 0 auto;
	}

	.forge-section h2,
	.forge-section p {
		margin-top: 0;
	}

	.highlight-row {
		display: flex;
		flex-wrap: wrap;
		justify-content: center;
		gap: 14px;
		margin: 0 0 44px;
	}

	.highlight-row span {
		border: 1px solid rgba(90, 167, 255, 0);
		border-radius: 999px;
		background: rgba(39, 93, 165, 0.24);
		padding: 12px 20px;
		color: #f5f9ff;
		font-size: 0.96rem;
		font-weight: 800;
		white-space: nowrap;
		transition:
			transform 220ms ease,
			border-color 220ms ease,
			background-color 220ms ease,
			box-shadow 220ms ease;
	}

	.highlight-row span:hover {
		transform: translateY(-2px);
		border-color: rgba(141, 244, 255, 0.7);
		background: rgba(44, 119, 204, 0.34);
		box-shadow: 0 14px 30px rgba(20, 108, 255, 0);
	}

	.feature-grid {
		display: grid;
		grid-template-columns: repeat(3, minmax(0, 1fr));
		gap: 18px;
	}

	article {
		position: relative;
		overflow: hidden;
		border: 0px solid rgba(93, 159, 237, 0.28);
		border-radius: 10px;
		backdrop-filter: blur(10px);
		background: rgba(0,0,0,1);
		transition:
			transform 260ms ease,
			border-color 260ms ease,
			background-color 260ms ease,
			box-shadow 260ms ease;
	}

	article::before {
		content: "";
		position: absolute;
		inset: 0;
		background: linear-gradient(120deg, transparent 16%, rgba(255, 255, 255, 0.08), transparent 54%);
		transform: translateX(-120%);
		transition: transform 620ms ease;
		pointer-events: none;
	}

	article:hover {
		transform: translateY(-6px);
		border-color: rgba(141, 244, 255, 0.55);
		background: rgba(34, 52, 78, 0.96);
	}

	article:hover::before {
		transform: translateX(120%);
	}

	.feature-grid article {
		min-height: 210px;
		padding: 32px;
		color: #f7fbff;
		animation: revealUp 680ms ease both;
		animation-delay: var(--delay);
	}

	.feature-grid article.featured {
		border-color: #5aa7ff;
	}

	.icon {
		color: #58aaff;
		flex: 0 0 auto;
		filter: drop-shadow(0 0 14px rgba(88, 170, 255, 0.2));
		transition:
			color 220ms ease,
			filter 220ms ease,
			transform 220ms ease;
	}

	article:hover .icon {
		color: #8df4ff;
		filter: drop-shadow(0 0 18px rgba(141, 244, 255, 0.48));
		transform: translateY(-2px) scale(1.06);
	}

	.feature-grid h2 {
		margin: 24px 0 12px;
		font-size: 1.25rem;
		line-height: 1.2;
	}

	.feature-grid p {
		margin-bottom: 0;
		color: #e5edf9;
		font-size: 1rem;
		line-height: 1.58;
	}

	.stat-value {
		margin: 22px 0 8px;
		color: #8df4ff;
		font-size: 2.7rem;
		line-height: 1;
		letter-spacing: -0.03em;
		font-weight: 900;
	}

	.feature-grid article h2 {
		margin: 0 0 10px;
	}

	@property --border-angle {
		syntax: "<angle>";
		inherits: false;
		initial-value: 0deg;
	}

	@keyframes revealUp {
		from {
			opacity: 0;
			translate: 0 22px;
		}
		to {
			opacity: 1;
			translate: 0 0;
		}
	}

	@keyframes borderOrbit {
		to {
			--border-angle: 360deg;
		}
	}

	@keyframes sectionSweep {
		from {
			transform: translateX(-120%);
		}
		to {
			transform: translateX(120%);
		}
	}

	@media (max-width: 920px) {
		.forge-section {
			padding: 84px 18px 88px;
		}

		.feature-grid {
			grid-template-columns: 1fr;
		}

		.feature-grid article {
			min-height: auto;
		}

		.highlight-row {
			align-items: stretch;
			flex-direction: column;
		}

		.highlight-row span {
			white-space: normal;
		}
	}

	@media (max-width: 560px) {
		.forge-section {
			padding: 66px 14px 72px;
		}

		.feature-grid article {
			padding: 22px;
		}

	}

	@media (prefers-reduced-motion: reduce) {
		.forge-section,
		.forge-section::before,
		.forge-section::after,
		.feature-grid article {
			animation: none;
			transition: none;
		}

		article:hover,
		.highlight-row span:hover,
		article:hover .icon {
			transform: none;
		}
	}
</style>
