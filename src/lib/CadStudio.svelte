<script>
</script>

<section class="cad-section page-backdrop" aria-labelledby="cad-heading">
	<div class="container"></div>
</section>

<style>
	/* base/grid/glow come from .page-backdrop in src/app.css */
	.cad-section {
		width: 100%;
		color: #ffffff;
		font-family:
			Inter, ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
		/* trimmed top pad — Section3 supplies the rest of the gap above */
		padding: clamp(0.75rem, 1.5vw, 1rem) clamp(1rem, 4vw, 1.5rem) clamp(3rem, 7vw, 5.5rem);
	}

	.cad-section,
	.cad-section *,
	.cad-section *::before,
	.cad-section *::after {
		box-sizing: border-box;
	}

	.container {
		width: min(1040px, 100%);
		margin: 0 auto;
	}

	/* ---------- intro ---------- */

	.intro {
		text-align: center;
		/* wide enough for the heading to hold one line at its cap size */
		max-width: 780px;
		margin: 0 auto clamp(1.75rem, 4vw, 2.5rem);
	}

	.eyebrow {
		display: inline-flex;
		align-items: center;
		gap: 0.4rem;
		margin: 0 0 0.85rem;
		padding: 0.3rem 0.7rem;
		border: 1px solid rgba(90, 167, 255, 0.3);
		border-radius: 999px;
		background: rgba(30, 111, 217, 0.18);
		color: #58aaff;
		font-size: clamp(0.6rem, 1.4vw, 0.66rem);
		font-weight: 700;
		text-transform: uppercase;
		letter-spacing: 0.18em;
	}

	h2 {
		margin: 0 0 1.1rem;
		/* the vw term is tuned so 34 characters always fit the container width */
		font-size: clamp(0.8rem, 4.4vw, 2.5rem);
		line-height: 1.15;
		letter-spacing: -0.03em;
		font-weight: 800;
		white-space: nowrap;
	}

	.lede {
		max-width: 40rem;
		margin: 0 auto;
		font-size: clamp(0.8rem, 1.7vw, 0.9rem);
		line-height: 1.7;
	}

	.lede strong {
		color: #58aaff;
		font-weight: 600;
	}

	/* ---------- two-column layout ---------- */

	.layout {
		display: grid;
		grid-template-columns: minmax(0, 0.92fr) minmax(0, 1fr);
		gap: clamp(1rem, 2.5vw, 1.5rem);
		align-items: center;
	}

	/* ---------- 3D viewport ---------- */

	.viewport {
		min-width: 0;
		border: 1px solid rgba(93, 159, 237, 0.28);
		border-radius: 0.6rem;
		background: rgba(6, 12, 26, 0.85);
		overflow: hidden;
	}

	.viewport-bar {
		display: flex;
		align-items: center;
		gap: 0.5rem;
		padding: 0.5rem 0.6rem;
	}

	.badge {
		border-radius: 0.3rem;
		background: #f59d0b;
		padding: 0.1rem 0.35rem;
		color: #1a1204;
		font-size: 0.6rem;
		font-weight: 900;
	}

	.viewport-meta {
		font-size: 0.6rem;
		letter-spacing: 0.02em;
	}

	/* the 3D scene itself lives in $lib/Scene3D.svelte */

	/* ---------- feature panel ---------- */

	.panel {
		min-width: 0;
	}

	.feature-list {
		display: grid;
		gap: 0.6rem;
		margin: 0;
		padding: 0;
		list-style: none;
	}

	.feature-list li {
		display: flex;
		align-items: flex-start;
		gap: 0.7rem;
		border: 1px solid rgba(93, 159, 237, 0.28);
		border-radius: 0.6rem;
		background: rgba(17, 32, 64, 0.9);
		padding: 0.8rem 0.9rem;
		transition:
			border-color 0.2s ease,
			background 0.2s ease,
			box-shadow 0.2s ease;
	}

	.feature-list li:hover,
	.feature-list li:focus-within {
		border-color: #5aa7ff;
		background: rgba(30, 111, 217, 0.16);
		box-shadow: 0 16px 60px -30px rgba(20, 108, 255, 0.9);
	}

	.feature-icon {
		display: grid;
		flex-shrink: 0;
		place-items: center;
		width: 1.8rem;
		height: 1.8rem;
		border-radius: 0.45rem;
		background: rgba(30, 111, 217, 0.28);
		color: #7dbaff;
	}

	.feature-copy {
		min-width: 0;
	}

	.feature-list h3 {
		margin: 0 0 0.2rem;
		font-size: clamp(0.75rem, 1.6vw, 0.82rem);
		font-weight: 700;
		line-height: 1.25;
	}

	.feature-list p {
		margin: 0;
		font-size: clamp(0.63rem, 1.4vw, 0.7rem);
		line-height: 1.5;
	}

	.cta {
		display: inline-flex;
		align-items: center;
		gap: 0.45rem;
		margin-top: 1.1rem;
		border: 0;
		border-radius: 0.45rem;
		background: #1e6fd9;
		padding: 0.6rem 1.05rem;
		color: #ffffff;
		font-family: inherit;
		font-size: clamp(0.7rem, 1.5vw, 0.78rem);
		font-weight: 700;
		text-decoration: none;
		cursor: pointer;
		transition:
			background 0.2s ease,
			box-shadow 0.2s ease;
	}

	.cta:hover,
	.cta:focus-visible {
		background: #2f83ef;
		box-shadow: 0 14px 34px -18px rgba(30, 111, 217, 0.95);
	}

	/* ---------- responsive ---------- */

	/* stack the viewport above the panel */
	@media (max-width: 900px) {
		.layout {
			grid-template-columns: 1fr;
			gap: 1rem;
		}
	}

	@media (max-width: 620px) {
		.viewport {
			border-radius: 0.5rem;
		}

		.cta {
			width: 100%;
			justify-content: center;
		}
	}
</style>
