<script>
</script>

<section class="section3 page-backdrop">
	<div class="container"></div>
</section>

<style>
	/* base/grid/glow come from .page-backdrop in src/app.css */
	.section3 {
		color: #f8fafc;
		font-family: 'Inter', 'Segoe UI', sans-serif;
		/* trimmed on both edges — neighbouring sections supply the rest of the gap */
		padding: clamp(1.75rem, 3.5vw, 2.5rem) clamp(1rem, 4vw, 1.5rem) clamp(1.75rem, 3.5vw, 2.5rem);
	}

	.section3 *,
	.section3 *::before,
	.section3 *::after {
		box-sizing: border-box;
	}

	.container {
		position: relative;
		z-index: 10;
		max-width: 1040px;
		margin: 0 auto;
	}

	/* ---------- hero ---------- */

	.hero-copy {
		text-align: center;
		max-width: 660px;
		margin: 0 auto clamp(1.75rem, 4vw, 2.5rem);
	}

	.eyebrow {
		text-transform: uppercase;
		letter-spacing: 0.28em;
		font-size: clamp(0.62rem, 1.4vw, 0.7rem);
		font-weight: 700;
		color: #ffffff;
		margin: 0 0 0.85rem;
	}

	h1 {
		font-size: clamp(1.6rem, 5vw, 2.75rem);
		line-height: 1.15;
		margin: 0;
		letter-spacing: -0.03em;
		font-weight: 800;
		color: #ffffff;
		text-wrap: balance;
	}

	.hero-text {
		margin: 1.1rem auto 0;
		font-size: clamp(0.8rem, 1.7vw, 0.9rem);
		line-height: 1.7;
		max-width: 40rem;
		color: #ffffff;
	}

	.hero-highlight {
		color: #60a5fa;
		font-weight: 600;
	}

	/* ---------- orchestration flow ---------- */

	.orchestration-flow {
		display: flex;
		flex-direction: column;
		align-items: center;
		margin-bottom: clamp(1.75rem, 4vw, 2.25rem);
	}

	.flow-card {
		position: relative;
		width: 100%;
		max-width: 190px;
		border-radius: 0.9rem;
		padding: 0.85rem 1rem;
		display: flex;
		flex-direction: column;
		align-items: center;
		text-align: center;
		gap: 0.35rem;
	}

	.primary-card {
		background: linear-gradient(180deg, #3b82f6, #2563eb);
		border: 1px solid rgba(147, 197, 253, 0.4);
		box-shadow: 0 18px 45px -20px rgba(37, 99, 235, 0.9), 0 0 40px rgba(59, 130, 246, 0.25);
	}

	.secondary-card {
		background: rgba(17, 32, 64, 0.92);
		border: 1px solid rgba(74, 159, 255, 0.2);
	}

	.flow-icon {
		width: 1.9rem;
		height: 1.9rem;
		display: grid;
		place-items: center;
		border-radius: 0.6rem;
		background: rgba(255, 255, 255, 0.16);
		color: #ffffff;
	}

	.secondary-icon {
		background: rgba(148, 163, 184, 0.14);
		color: #cbd5e1;
	}

	.flow-icon svg {
		width: 1.05rem;
		height: 1.05rem;
	}

	.status-dot {
		position: absolute;
		top: 0.55rem;
		right: 0.55rem;
		width: 0.45rem;
		height: 0.45rem;
		border-radius: 999px;
		background: #22c55e;
		box-shadow: 0 0 0 3px rgba(34, 197, 94, 0.2);
	}

	.flow-title {
		margin: 0.15rem 0 0;
		font-size: 0.85rem;
		font-weight: 800;
		letter-spacing: 0.14em;
		text-transform: uppercase;
		color: #ffffff;
	}

	.flow-title.small {
		font-size: 0.78rem;
		letter-spacing: 0.02em;
		text-transform: none;
	}

	.flow-subtitle {
		margin: 0;
		font-size: 0.68rem;
		line-height: 1.4;
		color: #ffffff;
	}

	/* horizontal rule spanning the card width, git-branch icon centred in the break */
	.flow-connector {
		display: flex;
		align-items: center;
		gap: 0.7rem;
		width: 100%;
		max-width: 190px;
		margin: 0.9rem 0;
	}

	.connector-line {
		flex: 1;
		height: 1px;
		background: linear-gradient(90deg, rgba(96, 165, 250, 0), rgba(96, 165, 250, 0.55));
	}

	.connector-line.right {
		background: linear-gradient(90deg, rgba(96, 165, 250, 0.55), rgba(96, 165, 250, 0));
	}

	.connector-node {
		display: grid;
		place-items: center;
		color: #3b82f6;
		flex-shrink: 0;
	}

	.connector-node svg {
		width: 1.05rem;
		height: 1.05rem;
	}

	.flow-note {
		margin: 1.25rem 0 0;
		font-size: clamp(0.66rem, 1.5vw, 0.72rem);
		color: #ffffff;
		text-align: center;
	}

	/* ---------- category grid ---------- */

	.category-grid {
		display: grid;
		grid-template-columns: repeat(4, minmax(0, 1fr));
		gap: 0.75rem;
		margin-bottom: 1.5rem;
	}

	/* row 2 holds 3 cards, right-aligned under row 1 (4-column layout only) */
	.category-card:nth-child(5) {
		grid-column: 2;
	}

	.category-card {
		min-width: 0;
		background: linear-gradient(180deg, rgba(17, 32, 64, 0.9), rgba(10, 22, 40, 0.95));
		border: 1px solid rgba(74, 159, 255, 0.14);
		border-left: 3px solid;
		border-radius: 0.6rem;
		padding: 0.7rem 0.85rem;
		display: flex;
		flex-direction: column;
		justify-content: center;
		gap: 0.3rem;
	}

	.card-top {
		display: flex;
		align-items: center;
		justify-content: space-between;
		gap: 0.5rem;
	}

	.category-name {
		margin: 0;
		font-size: clamp(0.72rem, 1.5vw, 0.75rem);
		font-weight: 700;
		line-height: 1.2;
		min-width: 0;
	}

	.card-tag {
		font-size: 0.62rem;
		font-weight: 600;
		white-space: nowrap;
		opacity: 0.85;
	}

	.category-detail {
		margin: 0;
		font-size: 0.62rem;
		line-height: 1.4;
		color: #ffffff;
		overflow-wrap: anywhere;
	}

	.category-card.blue { border-left-color: #3b82f6; }
	.category-card.green { border-left-color: #22c55e; }
	.category-card.amber { border-left-color: #f97316; }
	.category-card.pink { border-left-color: #ec4899; }
	.category-card.yellow { border-left-color: #f59e0b; }
	.category-card.cyan { border-left-color: #06b6d4; }
	.category-card.fuchsia { border-left-color: #a855f7; }

	.category-card.blue .category-name,
	.category-card.blue .card-tag { color: #60a5fa; }
	.category-card.green .category-name,
	.category-card.green .card-tag { color: #4ade80; }
	.category-card.amber .category-name,
	.category-card.amber .card-tag { color: #fb923c; }
	.category-card.pink .category-name,
	.category-card.pink .card-tag { color: #f472b6; }
	.category-card.yellow .category-name,
	.category-card.yellow .card-tag { color: #fbbf24; }
	.category-card.cyan .category-name,
	.category-card.cyan .card-tag { color: #22d3ee; }
	.category-card.fuchsia .category-name,
	.category-card.fuchsia .card-tag { color: #c084fc; }

	/* ---------- stats ---------- */

	.stats-row {
		display: grid;
		grid-template-columns: repeat(3, minmax(0, 1fr));
		gap: 0.75rem;
	}

	.stat-card {
		min-width: 0;
		background: linear-gradient(180deg, rgba(17, 32, 64, 0.9), rgba(10, 22, 40, 0.95));
		border: 1px solid rgba(74, 159, 255, 0.14);
		border-radius: 0.75rem;
		padding: 1rem 1rem 1.1rem;
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
		text-align: center;
		gap: 0.4rem;
	}

	.stat-icon {
		display: grid;
		place-items: center;
	}

	.stat-icon svg {
		width: 1.1rem;
		height: 1.1rem;
	}

	.stat-card.brain .stat-icon { color: #60a5fa; }
	.stat-card.sparkles .stat-icon { color: #a855f7; }
	.stat-card.check .stat-icon { color: #22c55e; }

	.stat-value {
		margin: 0;
		font-size: clamp(1.15rem, 2.4vw, 1.35rem);
		font-weight: 800;
		line-height: 1.15;
		color: #f8fafc;
		text-wrap: balance;
	}

	.stat-label {
		margin: 0;
		font-size: clamp(0.62rem, 1.4vw, 0.65rem);
		line-height: 1.4;
		color: #ffffff;
	}

	/* ---------- responsive ---------- */

	/* tablet — 3 columns, drop the row-2 offset */
	@media (max-width: 1024px) {
		.category-grid {
			grid-template-columns: repeat(3, minmax(0, 1fr));
		}

		.category-card:nth-child(5) {
			grid-column: auto;
		}
	}

	/* small tablet / large phone — 2 columns */
	@media (max-width: 760px) {
		.category-grid {
			grid-template-columns: repeat(2, minmax(0, 1fr));
		}

		.stats-row {
			grid-template-columns: repeat(2, minmax(0, 1fr));
		}

		/* odd one out spans the full row */
		.stat-card:last-child {
			grid-column: 1 / -1;
		}
	}

	/* phone — single column */
	@media (max-width: 520px) {
		.category-grid,
		.stats-row {
			grid-template-columns: 1fr;
		}

		.stat-card:last-child {
			grid-column: auto;
		}

		.flow-card,
		.flow-connector {
			max-width: 260px;
		}

		.category-card {
			padding: 0.75rem 0.9rem;
		}
	}

	@media (prefers-reduced-motion: no-preference) {
		.category-card,
		.stat-card {
			transition: border-color 0.2s ease, transform 0.2s ease;
		}
	}
</style>
