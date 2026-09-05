<script>
	import Scene3D from '$lib/Scene3D.svelte';

	// 1D card — spectrum bars on a tilted plane. Two sines give a smooth, varied
	// envelope; the delay ramps across the field so crests travel left to right
	// instead of every bar bouncing on its own. Deterministic, so SSR matches.
	const BAR_COUNT = 34;
	const WAVE_CYCLE = 2.6; // seconds for one full rise and fall
	const CRESTS = 2; // crests visible crossing the field at once

	const bars = Array.from({ length: BAR_COUNT }, (_, i) => {
		const wave = 0.5 + 0.5 * Math.sin(i * 0.38);
		const swell = 0.5 + 0.5 * Math.sin(i * 0.13 + 2.1);

		return {
			height: (24 + 72 * (wave * 0.7 + swell * 0.3)).toFixed(1),
			// a negative delay starts the bar partway through the cycle
			delay: (-(i / BAR_COUNT) * WAVE_CYCLE * CRESTS).toFixed(3)
		};
	});

	// 2D card — nodes pinned to the corners and edges of a flat plane
	const nodes = [
		{ top: '-6%', left: '18%' },
		{ top: '-6%', left: '92%' },
		{ top: '58%', left: '104%' },
		{ top: '96%', left: '42%' },
		{ top: '58%', left: '-6%' }
	];

	const plans = [
		{ tier: 'Starter', edition: 'ForgeEngine Lite', detail: '2D & basic 3D, 2K textures, web export' },
		{ tier: 'Builder', edition: 'ForgeEngine Pro', detail: 'Full 3D, physics, 4K textures, 5 platforms' },
		{
			tier: 'Architect',
			edition: 'ForgeEngine Advanced',
			detail: 'Ray tracing, 4K PBR, multiplayer, custom shaders'
		},
		{
			tier: 'Studio',
			edition: 'ForgeEngine Studio',
			detail: '8K cinematic, animation studio, dedicated servers'
		},
		{
			tier: 'Titan',
			edition: 'ForgeEngine Ultimate',
			detail: 'Full AAA pipeline, 4K/8K, 1,000 player servers, Moon-ready'
		}
	];
</script>

<section class="render-section page-backdrop" aria-labelledby="render-heading">
	<div class="container">
		<div class="intro">
			<h2 id="render-heading">1D · 2D · 3D Rendering Engine</h2>
			<p class="lede">
				Every build renders in the dimension it needs — audio &amp; data streams, flat 2D canvas
				scenes, or real-time 3D WebGL. <strong>Chloe automatically detects the right dimension</strong>
				from what you describe — you never have to pick. (Building it yourself in Code mode? You
				render whatever you write.)
			</p>
		</div>

		<div class="dimension-grid">
			<article class="dim-card">
				<div class="dim-head">
					<span class="pill cyan">1D</span>
					<p>Audio · Text · Data streams</p>
				</div>
				<div class="visual bars" role="img" aria-label="Animated audio spectrum on a tilted plane">
					<div class="bar-field">
						{#each bars as bar}
							<span class="bar-slot">
								<span class="bar" style="--h: {bar.height}%; --d: {bar.delay}s;"></span>
							</span>
						{/each}
					</div>
				</div>
			</article>

			<article class="dim-card">
				<div class="dim-head">
					<span class="pill violet">2D</span>
					<p>Canvas · Sprites · Flat scenes</p>
				</div>
				<div class="visual" role="img" aria-label="A flat 2D canvas plane rotating in 3D space">
					<div class="plane-wrap">
						<div class="plane">
							{#each nodes as node}
								<span class="node" style="top: {node.top}; left: {node.left};"></span>
							{/each}
						</div>
					</div>
				</div>
			</article>

			<article class="dim-card">
				<div class="dim-head">
					<span class="pill amber">3D</span>
					<p>WebGL · Three.js · Real-time 3D</p>
				</div>
				<div class="visual">
					<Scene3D
						scale="clamp(6px, 1.15vw, 10px)"
						scaleStacked="clamp(8px, 2.6vw, 14px)"
						aspect="2.6 / 1"
						aspectNarrow="2.2 / 1"
						label="Rotating low-poly 3D model rendered on a perspective grid"
					/>
				</div>
			</article>
		</div>

		<div class="plan-card">
			<h3>ForgeEngine by Plan</h3>
			<p class="plan-note">Every plan includes ForgeEngine — more power as you scale.</p>

			<ul class="plan-list">
				{#each plans as plan}
					<li>
						<span class="tier">{plan.tier}</span>
						<span class="edition">{plan.edition}</span>
						<span class="detail">{plan.detail}</span>
					</li>
				{/each}
			</ul>
		</div>
	</div>
</section>

<style>
	.render-section {
		width: 100%;
		background:
			linear-gradient(rgba(74, 144, 255, 0.055) 1px, transparent 1px),
			linear-gradient(90deg, rgba(74, 144, 255, 0.055) 1px, transparent 1px),
			radial-gradient(circle at 58% 42%, rgba(54, 162, 255, 0.16), transparent 38%),
			linear-gradient(180deg, #0b1424 0%, #071121 52%, #020818 100%);
		background-size: 96px 96px, 96px 96px, auto, auto;
		color: #ffffff;
		font-family:
			Inter, ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
		/* trimmed both edges — neighbouring sections supply the rest of the gap */
		padding: clamp(0.75rem, 1.5vw, 1rem) clamp(1rem, 4vw, 1.5rem) clamp(1.75rem, 3.5vw, 2.5rem);
	}

	.render-section.page-backdrop::before,
	.render-section.page-backdrop::after {
		content: none;
	}

	.render-section,
	.render-section *,
	.render-section *::before,
	.render-section *::after {
		box-sizing: border-box;
	}

	.container {
		width: min(1040px, 100%);
		margin: 0 auto;
	}

	/* ---------- intro ---------- */

	.intro {
		text-align: center;
		max-width: 660px;
		margin: 0 auto clamp(1.25rem, 3vw, 1.75rem);
	}

	h2 {
		margin: 0 0 0.75rem;
		font-size: clamp(1.15rem, 3vw, 1.7rem);
		line-height: 1.2;
		letter-spacing: -0.02em;
		font-weight: 800;
	}

	.lede {
		margin: 0;
		font-size: clamp(0.72rem, 1.55vw, 0.8rem);
		line-height: 1.65;
	}

	.lede strong {
		color: #58aaff;
		font-weight: 600;
	}

	/* ---------- the three dimension cards ---------- */

	.dimension-grid {
		display: grid;
		grid-template-columns: repeat(3, minmax(0, 1fr));
		gap: 0.75rem;
		margin-bottom: clamp(1rem, 2.5vw, 1.5rem);
	}

	.dim-card {
		min-width: 0;
		border: 1px solid rgba(93, 159, 237, 0.28);
		border-radius: 0.6rem;
		background: rgba(6, 12, 26, 0.85);
		padding: 0.7rem 0.7rem 0.8rem;
		transition:
			border-color 0.2s ease,
			box-shadow 0.2s ease;
	}

	.dim-card:hover,
	.dim-card:focus-within {
		border-color: #5aa7ff;
		box-shadow: 0 16px 60px -30px rgba(20, 108, 255, 0.9);
	}

	.dim-head {
		display: flex;
		align-items: center;
		gap: 0.45rem;
		margin-bottom: 0.6rem;
	}

	.dim-head p {
		margin: 0;
		font-size: clamp(0.6rem, 1.3vw, 0.66rem);
		font-weight: 600;
	}

	.pill {
		display: inline-flex;
		flex-shrink: 0;
		align-items: center;
		justify-content: center;
		min-width: 1.5rem;
		height: 1rem;
		border-radius: 999px;
		color: #06121f;
		font-size: 0.55rem;
		font-weight: 900;
	}

	.cyan {
		background: #19c6e7;
	}

	.violet {
		background: #9b5cf6;
		color: #ffffff;
	}

	.amber {
		background: #f59d0b;
	}

	.visual {
		overflow: hidden;
		border-radius: 0.35rem;
	}

	/* ---------- 1D: spectrum bars on a tilted plane ---------- */

	.bars {
		aspect-ratio: 2.6 / 1;
		font-size: clamp(6px, 1.15vw, 10px);
		perspective: 30em;
		perspective-origin: 50% 30%;
	}

	.bar-field {
		display: flex;
		align-items: flex-end;
		gap: 0.32em;
		width: 100%;
		height: 100%;
		padding: 0 0.3em;
		/* lean the whole field back so the bars read as standing on a surface */
		transform: rotateX(17deg);
		transform-origin: 50% 100%;
	}

	.bar-slot {
		display: flex;
		flex: 1;
		align-items: flex-end;
		/* clipping the slot lets the bar animate by translation instead of height */
		overflow: hidden;
		height: 100%;
	}

	.bar {
		width: 100%;
		height: var(--h);
		border-top: 0.22em solid #b6f7ff;
		border-radius: 0.12em 0.12em 0 0;
		background: linear-gradient(180deg, #8df4ff, #16bddc);
		box-shadow:
			0.16em 0 0 rgba(9, 122, 145, 0.75),
			0 0 0.9em rgba(32, 212, 242, 0.4);
		/* duration must match WAVE_CYCLE in the script for the crest maths to line up */
		animation: bar-wave 2.6s ease-in-out infinite;
		animation-delay: var(--d);
	}

	/* one full cycle, so the wave rolls continuously instead of ping-ponging */
	@keyframes bar-wave {
		0%,
		100% {
			transform: translateY(38%);
		}
		50% {
			transform: translateY(0);
		}
	}

	/* ---------- 2D: a flat plane spinning in 3D ---------- */

	.plane-wrap {
		display: grid;
		place-items: center;
		aspect-ratio: 2.6 / 1;
		perspective: 26em;
		font-size: clamp(6px, 1.15vw, 10px);
	}

	.plane {
		position: relative;
		width: 7.6em;
		aspect-ratio: 1;
		border: 0.32em solid #a35cf7;
		box-shadow: 0 0 1.4em rgba(163, 92, 247, 0.35);
		/* stands up facing the viewer, swinging just enough to read as a surface in space */
		transform: rotateX(9deg) rotateY(-26deg) rotateZ(-13deg);
		animation: plane-sway 9s ease-in-out infinite alternate;
	}

	.node {
		position: absolute;
		width: 1.1em;
		height: 1.1em;
		transform: translate(-50%, -50%);
		border-radius: 999px;
		background: linear-gradient(135deg, #8b5cf6, #f052d6);
		box-shadow: 0 0 1em rgba(209, 93, 255, 0.55);
	}

	/* turns through face-on rather than lying back — the sign flip on Y is what
	   sells the depth, while Z holds the mockup's in-plane tilt */
	@keyframes plane-sway {
		from {
			transform: rotateX(9deg) rotateY(-26deg) rotateZ(-13deg);
		}
		to {
			transform: rotateX(-7deg) rotateY(26deg) rotateZ(-13deg);
		}
	}

	@media (prefers-reduced-motion: reduce) {
		.bar,
		.plane {
			animation: none;
		}

		.plane {
			transform: rotateX(4deg) rotateY(-14deg) rotateZ(-13deg);
		}
	}

	/* ---------- ForgeEngine by Plan ---------- */

	.plan-card {
		border: 1px solid rgba(93, 159, 237, 0.28);
		border-radius: 0.6rem;
		background: rgba(17, 32, 64, 0.9);
		padding: clamp(0.9rem, 2vw, 1.2rem);
	}

	.plan-card h3 {
		margin: 0 0 0.25rem;
		font-size: clamp(0.78rem, 1.7vw, 0.88rem);
		font-weight: 700;
	}

	.plan-note {
		margin: 0 0 0.9rem;
		font-size: clamp(0.63rem, 1.4vw, 0.7rem);
	}

	.plan-list {
		display: grid;
		gap: 0;
		margin: 0;
		padding: 0;
		list-style: none;
	}

	.plan-list li {
		display: grid;
		grid-template-columns: 6rem minmax(0, 1fr) auto;
		align-items: center;
		gap: 0.75rem;
		border-top: 1px solid rgba(93, 159, 237, 0.16);
		padding: 0.55rem 0;
		font-size: clamp(0.62rem, 1.35vw, 0.7rem);
	}

	.plan-list li:first-child {
		border-top: 0;
	}

	.tier {
		font-weight: 700;
	}

	.edition {
		color: #58aaff;
		font-weight: 600;
	}

	.detail {
		text-align: right;
	}

	/* ---------- responsive ---------- */

	@media (max-width: 820px) {
		.dimension-grid {
			grid-template-columns: 1fr;
		}

		.bars,
		.plane-wrap {
			aspect-ratio: 2.8 / 1;
			font-size: clamp(8px, 2.6vw, 14px);
		}
	}

	@media (max-width: 620px) {
		.bars,
		.plane-wrap {
			aspect-ratio: 2.2 / 1;
		}

		/* stack each row so the long detail column stops squeezing */
		.plan-list li {
			grid-template-columns: minmax(0, 1fr);
			gap: 0.15rem;
		}

		.detail {
			text-align: left;
			opacity: 0.85;
		}
	}
</style>
