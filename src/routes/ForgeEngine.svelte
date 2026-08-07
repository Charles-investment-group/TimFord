<script>
	const highlights = [
		'4K/8K Cinematic + PBR',
		'500+ Animation Clips',
		'500+ Free Assets',
		'Moon server integration coming soon'
	];

	const features = [
		{
			icon: 'triangle',
			title: 'Real-Time 3D Renderer',
			text: 'PBR lighting, ray-traced shadows, dynamic global illumination, and smooth frame rates on modern hardware.'
		},
		{
			icon: 'chip',
			title: 'ForgeScript Engine',
			text: 'A proprietary scripting language with the power of C# and the simplicity of Python for fast game logic.'
		},
		{
			icon: 'bolt',
			title: 'Physics & Simulation',
			text: 'Rigid body, soft body, fluid simulation, and collision systems for vehicles, characters, and environments.'
		},
		{
			icon: 'wifi',
			title: 'Built-In Multiplayer',
			text: 'Peer-to-peer and dedicated server networking with state sync, lag compensation, and player lobbies.'
		},
		{
			icon: 'cube',
			title: 'Asset Pipeline',
			text: 'Import 3D models, textures, audio, animations, and video while ForgeEngine optimizes for each platform.'
		},
		{
			icon: 'phone',
			title: 'Multi-Platform Export',
			text: 'Build once, then export to web, Windows, macOS, Linux, iOS, Android, Google Play, and the App Store.'
		},
		{
			icon: 'film',
			title: '4K/8K Cinematic Rendering',
			text: 'HDRP lighting, ray-traced reflections, volumetric fog, and high-resolution PBR textures in real time.'
		},
		{
			icon: 'clapper',
			title: 'Animation Studio',
			text: 'Mocap-blended rigs, blend trees, root motion, facial blends, and a 500+ clip animation library.'
		}
	];
</script>

<section class="forge-section" aria-labelledby="forge-heading">
	<div class="section-inner">
		<div class="intro">
			<p class="eyebrow">
						{@render Icon({ name: 'triangle', size: '18' })}
				<span>Proprietary Technology</span>
			</p>
			<h1 id="forge-heading">Introducing <span>ForgeEngine</span></h1>
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
			{#each features as feature, index}
				<article class:featured={index === 0}>
					{@render Icon({ name: feature.icon, size: '34' })}
					<h2>{feature.title}</h2>
					<p>{feature.text}</p>
				</article>
			{/each}
		</div>

		<div class="dimension-block">
			<h2>1D / 2D / 3D Rendering Engine</h2>
			<p>
				Every build renders in the dimension it needs: audio and data streams, flat 2D canvas
				scenes, or real-time 3D WebGL. <strong>Chloe automatically detects the right dimension</strong>
				from what you describe.
			</p>

			<div class="dimension-grid">
				<article class="visual-card">
					<div class="visual-heading">
						<span class="pill cyan">1D</span>
						<p>Audio / Text / Data streams</p>
					</div>
					<div class="bars" aria-hidden="true">
						{#each Array(34) as _, index}
							<span style={`--height: ${26 + Math.round(Math.abs(Math.sin(index * 0.47)) * 70)}%`}></span>
						{/each}
					</div>
				</article>

				<article class="visual-card">
					<div class="visual-heading">
						<span class="pill violet">2D</span>
						<p>Canvas / Sprites / Flat scenes</p>
					</div>
					<div class="node-preview" aria-hidden="true">
						<span></span>
						<span></span>
						<span></span>
						<span></span>
						<span></span>
					</div>
				</article>

				<article class="visual-card">
					<div class="visual-heading">
						<span class="pill amber">3D</span>
						<p>WebGL / Three.js / Real-time 3D</p>
					</div>
					<div class="terrain" aria-hidden="true">
						<div></div>
					</div>
				</article>
			</div>
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
	:global(body) {
		margin: 0;
		font-family:
			Inter, ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;
		background: #f6f8fb;
		color: #0d1728;
	}

	.forge-section {
		position: relative;
		overflow: hidden;
		background:
			linear-gradient(rgba(74, 144, 255, 0.055) 1px, transparent 1px),
			linear-gradient(90deg, rgba(74, 144, 255, 0.055) 1px, transparent 1px),
			radial-gradient(circle at 48% 24%, rgba(54, 162, 255, 0.18), transparent 32%),
			linear-gradient(180deg, #020818 0%, #071121 56%, #0b1424 100%);
		background-size: 96px 96px, 96px 96px, auto, auto;
		color: white;
		padding: 112px 24px 120px;
	}

	.section-inner {
		width: min(1180px, 100%);
		margin: 0 auto;
	}

	.intro {
		text-align: center;
		max-width: 930px;
		margin: 0 auto 58px;
	}

	.eyebrow {
		display: inline-flex;
		align-items: center;
		gap: 10px;
		margin: 0 0 22px;
		color: #5aa7ff;
		font-size: 0.82rem;
		font-weight: 800;
		text-transform: uppercase;
		letter-spacing: 0.14em;
	}

	h1,
	h2,
	p {
		margin-top: 0;
	}

	h1 {
		margin-bottom: 22px;
		font-size: clamp(2.6rem, 7vw, 5.9rem);
		line-height: 0.98;
		font-weight: 900;
	}

	h1 span {
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
		margin-top: 34px;
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
	}

	.feature-grid {
		display: grid;
		grid-template-columns: repeat(3, minmax(0, 1fr));
		gap: 18px;
	}

	article {
		border: 1px solid rgba(93, 159, 237, 0.28);
		border-radius: 8px;
		background: rgba(30, 43, 63, 0.92);
	}

	.feature-grid article {
		min-height: 210px;
		padding: 32px;
		color: #f7fbff;
	}

	.feature-grid article.featured {
		border-color: #5aa7ff;
		box-shadow: inset 0 0 0 1px #5aa7ff, 0 16px 60px rgba(20, 108, 255, 0.18);
	}

	.icon {
		color: #58aaff;
		flex: 0 0 auto;
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
	}

	.node-preview {
		position: relative;
		width: min(230px, 78%);
		aspect-ratio: 1;
		margin: 18px auto 0;
		border: 4px solid #a35cf7;
		transform: rotate(-13deg);
	}

	.node-preview span {
		position: absolute;
		width: 30px;
		height: 30px;
		border-radius: 999px;
		background: linear-gradient(135deg, #8b5cf6, #f052d6);
		box-shadow: 0 0 20px rgba(209, 93, 255, 0.45);
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
	}

	@media (max-width: 920px) {
		.forge-section {
			padding: 84px 18px 88px;
		}

		.feature-grid,
		.dimension-grid {
			grid-template-columns: 1fr;
		}

		.feature-grid article,
		.visual-card {
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

		.feature-grid article,
		.visual-card {
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
</style>
