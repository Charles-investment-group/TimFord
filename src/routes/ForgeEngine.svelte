<script>
	const highlights = [
		{ icon: 'film', label: '4K/8K Cinematic + PBR' },
		{ icon: 'clapperboard', label: '500+ Animation Clips' },
		{ icon: 'box', label: '500+ Free Assets' },
		{ icon: 'sparkles', label: 'Moon server integration coming soon' }
	];

	const features = [
		{
			icon: 'triangle',
			title: 'Real-Time 3D Renderer',
			text: 'PBR lighting, ray-traced shadows, dynamic global illumination, and 60+ FPS on modern hardware. Near-AAA visual quality out of the box.'
		},
		{
			icon: 'cpu',
			title: 'ForgeScript Engine',
			text: 'Our proprietary scripting language — the power of C# with the simplicity of Python. Write game logic in minutes, not days.'
		},
		{
			icon: 'zap',
			title: 'Physics & Simulation',
			text: 'Full rigid body, soft body, fluid, and cloth simulation with collision detection. Vehicles, characters, ragdolls — all supported natively.'
		},
		{
			icon: 'wifi',
			title: 'Built-In Multiplayer',
			text: 'Peer-to-peer and dedicated server networking baked in. Up to 1,000 concurrent players on Titan tier. State sync, lag compensation, lobbies.'
		},
		{
			icon: 'box',
			title: 'Asset Pipeline',
			text: 'Import 3D models, textures, audio, animations, and video. ForgeEngine auto-optimizes every asset for performance across all platforms.'
		},
		{
			icon: 'smartphone',
			title: 'Multi-Platform Export',
			text: 'Build once, export to Web, Windows, macOS, Linux, iOS, and Android. Google Play and App Store ready from day one.'
		},
		{
			icon: 'film',
			title: '4K/8K Cinematic Rendering',
			text: 'HDRP lighting, ray-traced reflections, volumetric fog, and 4K/8K PBR textures deliver near-AAA cinematic visuals in real time.'
		},
		{
			icon: 'clapperboard',
			title: 'Animation Studio',
			text: 'Mocap-standard rigs, blend trees, root motion, facial blendshapes, and a 500+ animation clip library. Bring any character to life.'
		}
	];
</script>

<section class="forge-section page-backdrop" aria-labelledby="forge-heading">
	<div class="section-inner">
		<div class="intro">
			<p class="eyebrow">
				{@render Icon({ name: 'triangle', size: '14' })}
				<span>Proprietary Technology</span>
			</p>

			<h2 id="forge-heading" class="forge-title">Introducing <span>ForgeEngine</span></h2>

			<p class="summary">
				ForgeAI's proprietary game engine — built from the ground up to deliver near-AAA quality
				games, apps, and interactive experiences. No third-party engines. No licensing fees.
				Fully integrated with <strong>Chloe</strong> and all <strong>83 AIs</strong>.
			</p>

			<ul class="highlight-row" aria-label="ForgeEngine highlights">
				{#each highlights as item}
					<li>
						{@render Icon({ name: item.icon, size: '13' })}
						<span>{item.label}</span>
					</li>
				{/each}
			</ul>
		</div>

		<div class="feature-grid">
			{#each features as feature}
				<article>
					{@render Icon({ name: feature.icon, size: '22' })}
					<h3>{feature.title}</h3>
					<p>{feature.text}</p>
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
		stroke="currentColor"
		stroke-width="2"
		stroke-linecap="round"
		stroke-linejoin="round"
		xmlns="http://www.w3.org/2000/svg"
		aria-hidden="true"
	>
		{#if name === 'triangle'}
			<path d="M13.73 4a2 2 0 0 0-3.46 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3z" />
		{:else if name === 'cpu'}
			<path d="M12 20v2M12 2v2M17 20v2M17 2v2M2 12h2M2 17h2M2 7h2M20 12h2M20 17h2M20 7h2M7 20v2M7 2v2" />
			<rect x="4" y="4" width="16" height="16" rx="2" />
			<rect x="8" y="8" width="8" height="8" rx="1" />
		{:else if name === 'zap'}
			<path d="M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z" />
		{:else if name === 'wifi'}
			<path d="M12 20h.01" />
			<path d="M2 8.82a15 15 0 0 1 20 0" />
			<path d="M5 12.859a10 10 0 0 1 14 0" />
			<path d="M8.5 16.429a5 5 0 0 1 7 0" />
		{:else if name === 'box'}
			<path d="M21 8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16Z" />
			<path d="m3.3 7 8.7 5 8.7-5" />
			<path d="M12 22V12" />
		{:else if name === 'smartphone'}
			<rect width="14" height="20" x="5" y="2" rx="2" ry="2" />
			<path d="M12 18h.01" />
		{:else if name === 'film'}
			<rect width="18" height="18" x="3" y="3" rx="2" />
			<path d="M7 3v18M3 7.5h4M3 12h18M3 16.5h4M17 3v18M17 7.5h4M17 16.5h4" />
		{:else if name === 'sparkles'}
			<path d="M9.937 15.5A2 2 0 0 0 8.5 14.063l-6.135-1.582a.5.5 0 0 1 0-.962L8.5 9.936A2 2 0 0 0 9.937 8.5l1.582-6.135a.5.5 0 0 1 .963 0L14.063 8.5A2 2 0 0 0 15.5 9.937l6.135 1.581a.5.5 0 0 1 0 .964L15.5 14.063a2 2 0 0 0-1.437 1.437l-1.582 6.135a.5.5 0 0 1-.963 0z" />
			<path d="M20 3v4M22 5h-4M4 17v2M5 18H3" />
		{:else}
			<!-- clapperboard -->
			<path d="M20.2 6 3 11l-.9-2.4c-.3-1.1.3-2.2 1.3-2.5l13.5-4c1.1-.3 2.2.3 2.5 1.3Z" />
			<path d="m6.2 5.3 3.1 3.9M12.4 3.4l3.1 4" />
			<path d="M3 11h18v8a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2Z" />
		{/if}
	</svg>
{/snippet}

<style>
	/* base/grid/glow come from .page-backdrop in src/app.css */
	.forge-section {
		width: 100%;
		color: #ffffff;
		font-family:
			Inter, ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
		/* trimmed bottom pad — Section3 supplies the rest of the gap below */
		padding: clamp(3rem, 7vw, 5.5rem) clamp(1rem, 4vw, 1.5rem) clamp(1.75rem, 3.5vw, 2.5rem);
	}

	.forge-section,
	.forge-section *,
	.forge-section *::before,
	.forge-section *::after {
		box-sizing: border-box;
	}

	.section-inner {
		width: min(1040px, 100%);
		margin: 0 auto;
	}

	.forge-section h2,
	.forge-section h3,
	.forge-section p {
		margin-top: 0;
	}

	/* ---------- intro ---------- */

	.intro {
		text-align: center;
		max-width: 660px;
		margin: 0 auto clamp(1.75rem, 4vw, 2.5rem);
	}

	.eyebrow {
		display: inline-flex;
		align-items: center;
		gap: 0.5rem;
		margin: 0 0 0.85rem;
		color: #ffffff;
		font-size: clamp(0.62rem, 1.4vw, 0.7rem);
		font-weight: 700;
		text-transform: uppercase;
		letter-spacing: 0.28em;
	}

	.forge-title {
		margin-bottom: 1.1rem;
		font-size: clamp(1.8rem, 5.2vw, 3rem);
		line-height: 1.1;
		letter-spacing: -0.03em;
		font-weight: 900;
		text-wrap: balance;
	}

	.forge-title span {
		color: #45b8ff;
	}

	.summary {
		max-width: 40rem;
		margin: 0 auto;
		color: #ffffff;
		font-size: clamp(0.8rem, 1.7vw, 0.9rem);
		line-height: 1.7;
	}

	.summary strong {
		color: #58aaff;
		font-weight: 600;
	}

	.highlight-row {
		display: flex;
		flex-wrap: wrap;
		justify-content: center;
		gap: 0.5rem;
		margin: 1.4rem 0 0;
		padding: 0;
		list-style: none;
	}

	.highlight-row li {
		display: inline-flex;
		align-items: center;
		gap: 0.4rem;
		border: 1px solid rgba(90, 167, 255, 0.35);
		border-radius: 999px;
		background: rgba(39, 93, 165, 0.24);
		padding: 0.4rem 0.75rem;
		color: #ffffff;
		font-size: clamp(0.6rem, 1.4vw, 0.68rem);
		font-weight: 600;
	}

	.highlight-row .icon {
		color: #58aaff;
	}

	/* ---------- feature grid ---------- */

	.feature-grid {
		display: grid;
		grid-template-columns: repeat(3, minmax(0, 1fr));
		gap: 0.75rem;
	}

	.feature-grid article {
		min-width: 0;
		border: 1px solid rgba(93, 159, 237, 0.28);
		border-radius: 0.6rem;
		background: rgba(17, 32, 64, 0.9);
		padding: 1.1rem 1.15rem 1.25rem;
		color: #ffffff;
		transition:
			border-color 0.2s ease,
			background 0.2s ease,
			box-shadow 0.2s ease;
	}

	.feature-grid article:hover,
	.feature-grid article:focus-within {
		border-color: #5aa7ff;
		background: rgba(30, 111, 217, 0.16);
		box-shadow: 0 16px 60px -30px rgba(20, 108, 255, 0.9);
	}

	.icon {
		flex: 0 0 auto;
	}

	.feature-grid .icon {
		color: #58aaff;
	}

	.feature-grid h3 {
		margin: 0.75rem 0 0.4rem;
		font-size: clamp(0.8rem, 1.7vw, 0.9rem);
		font-weight: 700;
		line-height: 1.25;
	}

	.feature-grid p {
		margin-bottom: 0;
		color: #ffffff;
		font-size: clamp(0.63rem, 1.4vw, 0.7rem);
		line-height: 1.55;
	}

	/* ---------- responsive ---------- */

	/* tablet — 2 columns */
	@media (max-width: 980px) {
		.feature-grid {
			grid-template-columns: repeat(2, minmax(0, 1fr));
		}
	}

	/* phone — single column */
	@media (max-width: 620px) {
		.feature-grid {
			grid-template-columns: 1fr;
		}

		.highlight-row li {
			width: 100%;
			justify-content: center;
		}
	}
</style>
