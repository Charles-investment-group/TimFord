<script>
	// each category is staffed by 10 AIs and covers 5-10 languages / frameworks
	const categories = [
		{ title: 'Web & Frontend', subtitle: 'HTML, CSS, JavaScript, TypeScript, React, Vue, Svelte, Next.js', badge: '10 AIs', variant: 'blue' },
		{ title: 'Backend & General', subtitle: 'Python, Java, Go, Rust, Ruby, PHP, Scala, Elixir', badge: '10 AIs', variant: 'green' },
		{ title: 'Systems & Low-Level', subtitle: 'C, C++, C#, Objective-C, Zig, Assembly, WebAssembly', badge: '10 AIs', variant: 'amber' },
		{ title: 'Mobile', subtitle: 'Swift, SwiftUI, Kotlin, Java/Android, Dart, Flutter, React Native', badge: '10 AIs', variant: 'pink' },
		{ title: 'Enterprise & Legacy', subtitle: 'Java EE, .NET, ASP.NET, Visual Basic, ABAP, COBOL, Fortran', badge: '10 AIs', variant: 'yellow' },
		{ title: 'Data, AI & Blockchain', subtitle: 'Python, R, MATLAB, Julia, SQL, NoSQL, Solidity, Vyper', badge: '10 AIs', variant: 'cyan' },
		{ title: 'Scripting & Proprietary', subtitle: 'Bash/Shell, PowerShell, Perl, Lua, AutoHotkey, VBScript', badge: '10 AIs', variant: 'fuchsia' }
	];

	const stats = [
		{ value: '83', label: 'Total AI Agents (Chloe + 2 QA + 80)', type: 'brain' },
		{ value: '41+', label: 'Languages & Frameworks', type: 'sparkles' },
		{ value: 'What You Can Build', label: '', type: 'check' }
	];
</script>

<section class="section3 page-backdrop">
	<div class="container">
		<div class="hero-copy">
			<p class="eyebrow">The Chloe Engine</p>
			<h1>83 AI Agents. One Lead Intelligence.</h1>
			<p class="hero-text">
				Every build deploys <span class="hero-highlight">Chloe</span> (AI #83, master orchestrator),
				<span class="hero-highlight">2 QA Orchestrators</span> that review and assemble, and
				<span class="hero-highlight">80 specialist agents</span> — 10 AIs per code category across 8 domains
				— all orchestrated in real-time.
			</p>
		</div>

		<div class="orchestration-flow">
			<div class="flow-card primary-card">
				<span class="status-dot" aria-hidden="true"></span>
				<div class="flow-icon">
					<!-- lucide: brain -->
					<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
						<path d="M12 5a3 3 0 1 0-5.997.125 4 4 0 0 0-2.526 5.77 4 4 0 0 0 .556 6.588A4 4 0 1 0 12 18Z" />
						<path d="M12 5a3 3 0 1 1 5.997.125 4 4 0 0 1 2.526 5.77 4 4 0 0 1-.556 6.588A4 4 0 1 1 12 18Z" />
						<path d="M15 13a4.5 4.5 0 0 1-3-4 4.5 4.5 0 0 1-3 4" />
					</svg>
				</div>
				<p class="flow-title">CHLOE</p>
				<p class="flow-subtitle">AI #83 · Master Orchestrator</p>
			</div>

			<div class="flow-connector" aria-hidden="true">
				<span class="connector-line"></span>
				<span class="connector-node">
					<!-- lucide: git-branch -->
					<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
						<line x1="6" x2="6" y1="3" y2="15" />
						<circle cx="18" cy="6" r="3" />
						<circle cx="6" cy="18" r="3" />
						<path d="M18 9a9 9 0 0 1-9 9" />
					</svg>
				</span>
				<span class="connector-line right"></span>
			</div>

			<div class="flow-card secondary-card">
				<div class="flow-icon secondary-icon">
					<!-- lucide: shield-check -->
					<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
						<path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z" />
						<path d="m9 12 2 2 4-4" />
					</svg>
				</div>
				<p class="flow-title small">QA Orchestrators</p>
				<p class="flow-subtitle">2 AIs · Review &amp; Assemble</p>
			</div>

			<p class="flow-note"><span aria-hidden="true">↓</span> routes tasks to 80 specialist agents (10 per category)</p>
		</div>

		<div class="category-grid">
			{#each categories as category}
				<article class="category-card {category.variant}">
					<div class="card-top">
						<p class="category-name">{category.title}</p>
						<span class="card-tag">{category.badge}</span>
					</div>
					<p class="category-detail">{category.subtitle}</p>
				</article>
			{/each}
		</div>

		<div class="stats-row">
			{#each stats as stat}
				<div class="stat-card {stat.type}">
					<div class="stat-icon">
						{#if stat.type === 'brain'}
							<!-- lucide: brain -->
							<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
								<path d="M12 5a3 3 0 1 0-5.997.125 4 4 0 0 0-2.526 5.77 4 4 0 0 0 .556 6.588A4 4 0 1 0 12 18Z" />
								<path d="M12 5a3 3 0 1 1 5.997.125 4 4 0 0 1 2.526 5.77 4 4 0 0 1-.556 6.588A4 4 0 1 1 12 18Z" />
								<path d="M15 13a4.5 4.5 0 0 1-3-4 4.5 4.5 0 0 1-3 4" />
							</svg>
						{:else if stat.type === 'sparkles'}
							<!-- lucide: sparkles -->
							<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
								<path d="M9.937 15.5A2 2 0 0 0 8.5 14.063l-6.135-1.582a.5.5 0 0 1 0-.962L8.5 9.936A2 2 0 0 0 9.937 8.5l1.582-6.135a.5.5 0 0 1 .963 0L14.063 8.5A2 2 0 0 0 15.5 9.937l6.135 1.581a.5.5 0 0 1 0 .964L15.5 14.063a2 2 0 0 0-1.437 1.437l-1.582 6.135a.5.5 0 0 1-.963 0z" />
								<path d="M20 3v4" />
								<path d="M22 5h-4" />
								<path d="M4 17v2" />
								<path d="M5 18H3" />
							</svg>
						{:else}
							<!-- lucide: circle-check-big -->
							<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
								<path d="M21.801 10A10 10 0 1 1 17 3.335" />
								<path d="m9 11 3 3L22 4" />
							</svg>
						{/if}
					</div>
					<p class="stat-value">{stat.value}</p>
					{#if stat.label}
						<p class="stat-label">{stat.label}</p>
					{/if}
				</div>
			{/each}
		</div>
	</div>
</section>

<style>
	.section3 {
		background:
			linear-gradient(rgba(74, 144, 255, 0.055) 1px, transparent 1px),
			linear-gradient(90deg, rgba(74, 144, 255, 0.055) 1px, transparent 1px),
			radial-gradient(circle at 38% 46%, rgba(54, 162, 255, 0.16), transparent 38%),
			linear-gradient(180deg, #0b1424 0%, #071121 52%, #0b1424 100%);
		background-size: 96px 96px, 96px 96px, auto, auto;
		color: #f8fafc;
		font-family: 'Inter', 'Segoe UI', sans-serif;
		/* trimmed on both edges — neighbouring sections supply the rest of the gap */
		padding: clamp(1.75rem, 3.5vw, 2.5rem) clamp(1rem, 4vw, 1.5rem) clamp(1.75rem, 3.5vw, 2.5rem);
	}

	.section3.page-backdrop::before,
	.section3.page-backdrop::after {
		content: none;
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
