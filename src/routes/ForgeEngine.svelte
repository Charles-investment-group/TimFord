<script>
	const highlights = [
		'4K/8K Cinematic + PBR',
		'500+ Animation Clips',
		'500+ Free Assets',
		'Moon server integration coming soon'
	];

	// Stat cards replacing the old feature boilerplate (Ranger's call).
	//
	// The 98% SEO figure came from Ranger and is the company's own customer claim.
	// The remaining five are product facts already published elsewhere on this site,
	// so they stay consistent with the rest of the page:
	//   83 agents + 41+ languages .... Section3.svelte stat row
	//   no licensing fees ............ ForgeEngine summary copy
	//   1,000 concurrent players ..... Pricing.svelte, Titan tier
	//   500+ free assets ............. ForgeEngine highlight row
	// If any of those change, update them here too.
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
		<div class="intro">
			<p class="eyebrow">
				{@render Icon({ name: 'triangle', size: '18' })}
				<span>Proprietary Technology</span>
			</p>
			<h2 id="forge-heading" class="forge-title">Introducing <span>ForgeEngine</span></h2>
			<p class="summary">
				ForgeAI's proprietary game engine is built from the ground up to deliver premium games,
				apps, and interactive experiences without third-party engines or licensing fees.
				Fully integrated with <strong>Chloe</strong> and all <strong>83 AIs</strong>.
			</p>
			<div class="highlight-row" aria-label="ForgeEngine highlights">
				{#each highlights as item}
					<span>{item}</span>
				{/each}
			</div>
		</div>

		<div class="feature-grid">
			{#each stats as stat, index}
				<article
					class:featured={index === 0}
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
			radial-gradient(circle at 48% 24%, rgba(54, 162, 255, 0.18), transparent 32%),
			linear-gradient(180deg, #020818 0%, #071121 56%, #0b1424 100%);
		background-size: 96px 96px, 96px 96px, auto, auto;
		color: white;
		font-family:
			Inter, ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;
		padding: 112px 24px 120px;
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
		outline-color: rgba(90, 167, 255, 0.26);
		box-shadow: inset 0 0 54px rgba(58, 153, 255, 0.08);
	}

	.forge-section:hover::before,
	.forge-section:focus-within::before {
		animation: borderOrbit 4.8s linear infinite;
		opacity: 1;
	}

	.forge-section:hover::after,
	.forge-section:focus-within::after {
		animation: sectionSweep 1.25s ease forwards;
		opacity: 1;
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

	.forge-title {
		margin-bottom: 22px;
		font-size: clamp(2.6rem, 7vw, 5.9rem);
		line-height: 0.98;
		font-weight: 900;
	}

	.forge-title span {
		color: #45b8ff;
	}

	.summary {
		max-width: 820px;
		margin: 0 auto;
		color: #e5edf9;
		font-size: clamp(1rem, 2.4vw, 1.35rem);
		line-height: 1.72;
	}

	.summary strong {
		color: #58aaff;
	}

	.highlight-row {
		display: flex;
		flex-wrap: wrap;
		justify-content: center;
		gap: 14px;
		margin: 0 0 44px;
	}

	.highlight-row span {
		border: 1px solid rgba(90, 167, 255, 0.35);
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
		box-shadow: 0 14px 30px rgba(20, 108, 255, 0.14);
	}

	.feature-grid {
		display: grid;
		grid-template-columns: repeat(3, minmax(0, 1fr));
		gap: 18px;
	}

	article {
		position: relative;
		overflow: hidden;
		border: 1px solid rgba(93, 159, 237, 0.28);
		border-radius: 8px;
		background: rgba(30, 43, 63, 0.92);
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
		box-shadow: 0 22px 60px rgba(3, 13, 34, 0.36), 0 0 0 1px rgba(90, 167, 255, 0.14);
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
		box-shadow: inset 0 0 0 1px #5aa7ff, 0 16px 60px rgba(20, 108, 255, 0.18);
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

	.dimension-block {
		margin-top: 88px;
		text-align: center;
		animation: revealUp 760ms ease 180ms both;
	}

	.dimension-block > h2 {
		margin-bottom: 16px;
		font-size: clamp(1.8rem, 4vw, 2.55rem);
		line-height: 1.16;
	}

	.dimension-block > p {
		max-width: 800px;
		margin: 0 auto 38px;
		color: #dce8f8;
		font-size: clamp(1rem, 2vw, 1.2rem);
		line-height: 1.65;
	}

	.dimension-block strong {
		color: #58aaff;
	}

	.dimension-grid {
		display: grid;
		grid-template-columns: repeat(3, minmax(0, 1fr));
		gap: 18px;
	}

	.visual-card {
		min-height: 310px;
		padding: 24px;
		text-align: left;
		background: rgba(3, 9, 24, 0.82);
	}

	.visual-heading {
		display: flex;
		align-items: center;
		gap: 12px;
		margin-bottom: 26px;
	}

	.visual-heading p {
		margin-bottom: 0;
		color: #b9c9df;
		font-weight: 700;
	}

	.pill {
		display: inline-flex;
		align-items: center;
		justify-content: center;
		min-width: 44px;
		height: 30px;
		border-radius: 999px;
		color: white;
		font-weight: 900;
	}

	.cyan {
		background: #19c6e7;
	}

	.violet {
		background: #9b5cf6;
	}

	.amber {
		background: #f59d0b;
	}

	.bars {
		display: flex;
		align-items: end;
		gap: 6px;
		height: 205px;
	}

	.bars span {
		width: 100%;
		height: var(--height);
		border-radius: 6px 6px 0 0;
		background: linear-gradient(180deg, #8df4ff, #16bddc);
		box-shadow: 0 0 16px rgba(32, 212, 242, 0.45);
		transform-origin: bottom;
		animation: barBreathe 2.4s ease-in-out infinite;
		animation-delay: var(--delay);
	}

	.node-preview {
		position: relative;
		width: min(230px, 78%);
		aspect-ratio: 1;
		margin: 18px auto 0;
		border: 4px solid #a35cf7;
		transform: rotate(-13deg);
		animation: nodeDrift 7s ease-in-out infinite;
	}

	.node-preview span {
		position: absolute;
		width: 30px;
		height: 30px;
		border-radius: 999px;
		background: linear-gradient(135deg, #8b5cf6, #f052d6);
		box-shadow: 0 0 20px rgba(209, 93, 255, 0.45);
		animation: nodeGlow 2.8s ease-in-out infinite;
	}

	.node-preview span:nth-child(1) {
		top: -16px;
		left: 20%;
	}

	.node-preview span:nth-child(2) {
		top: -16px;
		right: -10px;
	}

	.node-preview span:nth-child(3) {
		right: -16px;
		bottom: 22%;
	}

	.node-preview span:nth-child(4) {
		bottom: -16px;
		left: 40%;
	}

	.node-preview span:nth-child(5) {
		left: -16px;
		bottom: 22%;
	}

	.terrain {
		position: relative;
		height: 215px;
		overflow: hidden;
		border-radius: 6px;
		background:
			linear-gradient(transparent 88%, rgba(86, 149, 230, 0.35) 89%),
			linear-gradient(90deg, transparent 88%, rgba(86, 149, 230, 0.3) 89%);
		background-size: 34px 34px;
		perspective: 700px;
		animation: gridDrift 5.6s linear infinite;
	}

	.terrain::before {
		content: "";
		position: absolute;
		inset: auto -20px 10px;
		height: 105px;
		background:
			linear-gradient(rgba(86, 149, 230, 0.35) 1px, transparent 1px),
			linear-gradient(90deg, rgba(86, 149, 230, 0.28) 1px, transparent 1px);
		background-size: 32px 22px;
		transform: rotateX(62deg);
		transform-origin: bottom;
	}

	.terrain div {
		position: absolute;
		right: 17%;
		bottom: 32px;
		width: 130px;
		aspect-ratio: 1.28;
		border-radius: 58% 42% 44% 56%;
		background:
			linear-gradient(135deg, rgba(255, 255, 255, 0.14), transparent 38%),
			linear-gradient(45deg, #b06c12, #e7a21f);
		box-shadow: 0 24px 52px rgba(0, 0, 0, 0.45);
		animation: terrainFloat 4.8s ease-in-out infinite;
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

	@keyframes softPulse {
		0%,
		100% {
			text-shadow: 0 0 0 rgba(90, 167, 255, 0);
		}
		50% {
			text-shadow: 0 0 22px rgba(90, 167, 255, 0.42);
		}
	}

	@keyframes barBreathe {
		0%,
		100% {
			transform: scaleY(0.82);
			opacity: 0.78;
		}
		50% {
			transform: scaleY(1);
			opacity: 1;
		}
	}

	@keyframes nodeDrift {
		0%,
		100% {
			transform: rotate(-13deg) translate3d(0, 0, 0);
		}
		50% {
			transform: rotate(-9deg) translate3d(6px, -4px, 0);
		}
	}

	@keyframes nodeGlow {
		0%,
		100% {
			box-shadow: 0 0 16px rgba(209, 93, 255, 0.38);
		}
		50% {
			box-shadow: 0 0 28px rgba(141, 244, 255, 0.5);
		}
	}

	@keyframes gridDrift {
		to {
			background-position:
				34px 34px,
				34px 34px;
		}
	}

	@keyframes terrainFloat {
		0%,
		100% {
			transform: translateY(0) rotate(0deg);
		}
		50% {
			transform: translateY(-8px) rotate(-2deg);
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

		.eyebrow {
			font-size: 0.72rem;
		}

		.bars {
			gap: 3px;
			height: 150px;
		}
	}

	@media (prefers-reduced-motion: reduce) {
		.forge-section,
		.forge-section::before,
		.forge-section::after,
		.intro,
		.eyebrow,
		.feature-grid article,
		.dimension-block,
		.bars span,
		.node-preview,
		.node-preview span,
		.terrain,
		.terrain div {
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
