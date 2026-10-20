<script>
	import Brain from 'lucide-svelte/icons/brain';
	import ChartNoAxesCombined from 'lucide-svelte/icons/chart-no-axes-combined';
	import PenLine from 'lucide-svelte/icons/pen-line';
	import Search from 'lucide-svelte/icons/search';
	import Sparkles from 'lucide-svelte/icons/sparkles';
	import Target from 'lucide-svelte/icons/target';

	const workshopTools = [
		{
			name: 'Business Strategy',
			description: 'Turn a draft business plan into a practical growth roadmap with clear next actions.',
			icon: Brain,
			tone: 'blue',
			visual: 'strategy'
		},
		{
			name: 'Marketing Expert',
			description: 'Bring a product or marketing challenge and get focused direction for your next move.',
			icon: ChartNoAxesCombined,
			tone: 'mint',
			visual: 'marketing'
		},
		{
			name: 'SEO Specialist',
			description: 'Explore the niche and target keywords that can strengthen your search visibility.',
			icon: Search,
			tone: 'cyan',
			visual: 'seo'
		},
		{
			name: 'Conversion Copywriter',
			description: 'Shape clearer copy for the page or product you need to put in front of customers.',
			icon: PenLine,
			tone: 'sky',
			visual: 'copy'
		}
	];

	const workshopBenefits = [
		{
			title: 'Focused Guidance',
			description: 'Find direction for specific business needs.',
			icon: Target
		},
		{
			title: 'AI-Powered',
			description: 'Explore ideas using practical AI prompts.',
			icon: Brain
		},
		{
			title: 'Actionable Results',
			description: 'Turn recommendations into next steps.',
			icon: ChartNoAxesCombined
		}
	];
</script>

<section class="workshop-about" aria-labelledby="workshop-about-heading">
	<div class="matrix" aria-hidden="true"></div>
	<div class="about-shell">
		<div class="intro">
			<p class="eyebrow"><Sparkles size={14} strokeWidth={1.8} /> AI Workshop</p>
			<h2 id="workshop-about-heading">Build a clearer path <span>forward.</span></h2>
			<p class="lede">
				Choose a focused AI guide for the business question in front of you, then turn that direction into work you can use.
			</p>
		</div>

		<div class="about-detail">
			<div class="technical-divider" aria-hidden="true">
				<span></span><i></i><span></span>
			</div>
			<div class="about-copy">
				<h3 class="about-heading">Your ideas. <span>Powered by AI.</span></h3>
				<p class="about-description">
					The AI Workshop provides practical AI-powered guides designed to help you tackle real business challenges. From developing strategies to refining your marketing, find the right starting point and turn your ideas into actionable results.
				</p>
			</div>

			<div class="benefit-grid">
				{#each workshopBenefits as benefit}
					<article class="benefit-card" tabindex="0">
						<div class="benefit-icon"><svelte:component this={benefit.icon} size={21} strokeWidth={1.75} /></div>
						<h4>{benefit.title}</h4>
						<p>{benefit.description}</p>
					</article>
				{/each}
			</div>
		</div>

		<div class="tool-grid">
			{#each workshopTools as tool}
				<article class="tool-card {tool.tone}" tabindex="0">
					<div class="card-visual {tool.visual}" aria-hidden="true">
						{#if tool.visual === 'strategy'}
							<div class="node node-main"><Brain size={23} /></div>
							<span class="node node-one"></span>
							<span class="node node-two"></span>
							<span class="node node-three"></span>
							<i class="line line-one"></i><i class="line line-two"></i><i class="line line-three"></i>
						{:else if tool.visual === 'marketing'}
							<div class="chart-axis"></div>
							<span class="chart-bar bar-one"></span><span class="chart-bar bar-two"></span><span class="chart-bar bar-three"></span><span class="chart-bar bar-four"></span>
							<svg viewBox="0 0 220 94" preserveAspectRatio="none"><polyline points="10,74 52,58 96,64 136,30 208,14" /></svg>
						{:else if tool.visual === 'seo'}
							<div class="search-window"><Search size={18} /><span>target keywords</span></div>
							<div class="result-line first"></div><div class="result-line second"></div><div class="result-line third"></div>
						{:else}
							<div class="copy-window"><span class="copy-heading"></span><span class="copy-line"></span><span class="copy-line short"></span></div>
							<div class="cursor"></div>
						{/if}
					</div>
					<div class="card-copy">
						<div class="tool-icon"><svelte:component this={tool.icon} size={19} strokeWidth={1.8} /></div>
						<h3>{tool.name}</h3>
						<p>{tool.description}</p>
					</div>
				</article>
			{/each}
		</div>
	</div>
</section>

<style>
	.workshop-about {
		--ink: #0a1628;
		--panel: #ffffff;
		--line: rgba(255, 255, 255, 0.28);
		--electric: #4a9fff;
		position: relative;
		isolation: isolate;
		overflow: hidden;
		padding: clamp(3.5rem, 5vw, 5rem) 1.25rem clamp(4rem, 6vw, 5.5rem);
		color: #ffffff;
		font-family: Arial, Helvetica, sans-serif;
		background:
			radial-gradient(circle at 50% 8%, rgba(30, 111, 217, 0.28), transparent 27rem),
			radial-gradient(circle at 100% 80%, rgba(74, 159, 255, 0.14), transparent 28rem),
			var(--ink);
	}

	.matrix {
		position: absolute;
		inset: 0;
		z-index: -1;
		opacity: 0.5;
		background-image:
			radial-gradient(rgba(74, 159, 255, 0.27) 0.7px, transparent 0.8px),
			linear-gradient(90deg, transparent 49.9%, rgba(74, 159, 255, 0.1) 50%, transparent 50.1%);
		background-size: 8px 8px, min(72vw, 920px) 100%;
		background-position: center top;
		mask-image: linear-gradient(to bottom, black 0%, rgba(0, 0, 0, 0.74) 48%, transparent 100%);
	}

	.about-shell {
		width: min(100%, 1120px);
		margin: 0 auto;
	}

	.intro {
		width: min(100%, 700px);
		margin: 0 auto clamp(1.5rem, 3vw, 2.5rem);
		text-align: center;
	}

	.eyebrow {
		display: inline-flex;
		align-items: center;
		gap: 0.45rem;
		margin: 0 0 0.75rem;
		padding: 0.42rem 0.78rem;
		border: 1px solid rgba(255, 255, 255, 0.32);
		border-radius: 999px;
		color: #ffffff;
		background: rgba(30, 111, 217, 0.45);
		font: 700 0.74rem/1 Arial, Helvetica, sans-serif;
		letter-spacing: 0.08em;
		text-transform: uppercase;
	}

	h2, h3, p { margin-top: 0; }

	h2 {
		margin-bottom: 0.75rem;
		font-family: Arial, Helvetica, sans-serif;
		font-size: clamp(2.35rem, 6vw, 4.85rem);
		font-weight: 800;
		line-height: 1.04;
		letter-spacing: 0;
	}

	h2 span { color: var(--electric); }

	.lede {
		max-width: 590px;
		margin: 0 auto;
		color: rgba(255, 255, 255, 0.82);
		font: 400 clamp(1rem, 1.7vw, 1.15rem)/1.65 Arial, Helvetica, sans-serif;
	}

	.about-detail {
		margin: 0 auto clamp(2rem, 3.5vw, 2.75rem);
	}

	.technical-divider {
		display: flex;
		align-items: center;
		gap: 0.75rem;
		max-width: 700px;
		margin: 0 auto clamp(1rem, 2vw, 1.5rem);
	}

	.technical-divider span {
		flex: 1;
		height: 1px;
		background: linear-gradient(90deg, transparent, rgba(74, 159, 255, 0.55));
	}

	.technical-divider span:last-child {
		background: linear-gradient(90deg, rgba(74, 159, 255, 0.55), transparent);
	}

	.technical-divider i {
		width: 0.45rem;
		height: 0.45rem;
		border: 1px solid #9bc7ff;
		border-radius: 50%;
		background: var(--electric);
		box-shadow: 0 0 10px rgba(74, 159, 255, 0.7);
	}

	.about-copy {
		max-width: 760px;
		margin: 0 auto clamp(1.25rem, 2.5vw, 1.75rem);
		text-align: center;
	}

	.about-heading {
		margin-bottom: 0.65rem;
		color: #ffffff;
		font: 800 clamp(1.8rem, 3.6vw, 2.65rem)/1.1 Arial, Helvetica, sans-serif;
	}

	.about-heading span { color: var(--electric); }

	.about-description {
		max-width: 680px;
		margin: 0 auto;
		color: rgba(255, 255, 255, 0.82);
		font: 400 clamp(0.96rem, 1.5vw, 1.05rem)/1.65 Arial, Helvetica, sans-serif;
	}

	.benefit-grid {
		display: grid;
		grid-template-columns: repeat(3, minmax(0, 1fr));
		gap: clamp(0.75rem, 2vw, 1rem);
	}

	.benefit-card {
		min-height: 10.5rem;
		padding: clamp(1.1rem, 2.2vw, 1.45rem);
		border: 1px solid rgba(121, 167, 220, 0.3);
		border-radius: 7px;
		background: linear-gradient(145deg, rgba(17, 39, 69, 0.96), rgba(9, 22, 42, 0.96));
		box-shadow: inset 0 1px rgba(255, 255, 255, 0.035);
		outline: none;
		transition: transform 200ms ease, border-color 200ms ease, box-shadow 200ms ease;
	}

	.benefit-icon {
		display: grid;
		width: 2.25rem;
		height: 2.25rem;
		margin-bottom: 1.1rem;
		place-items: center;
		border: 1px solid rgba(74, 159, 255, 0.8);
		border-radius: 5px;
		color: var(--electric);
		background: rgba(30, 111, 217, 0.12);
		transition: color 200ms ease, box-shadow 200ms ease, background-color 200ms ease;
	}

	.benefit-card h4 {
		margin: 0 0 0.55rem;
		color: #ffffff;
		font: 700 1rem/1.25 Arial, Helvetica, sans-serif;
	}

	.benefit-card p {
		margin: 0;
		color: rgba(255, 255, 255, 0.72);
		font: 400 0.9rem/1.5 Arial, Helvetica, sans-serif;
	}

	.tool-grid {
		display: grid;
		grid-template-columns: repeat(2, minmax(0, 1fr));
		gap: clamp(1rem, 2.5vw, 1.4rem);
	}

	.tool-card {
		min-width: 0;
		overflow: hidden;
		border: 1px solid rgba(255, 255, 255, 0.46);
		border-radius: 8px;
		background: var(--panel);
		box-shadow: 0 0 24px rgba(74, 159, 255, 0.22);
		outline: none;
		transition: transform 200ms ease, border-color 200ms ease, box-shadow 200ms ease;
	}

	.card-visual {
		position: relative;
		height: clamp(11rem, 24vw, 15.5rem);
		overflow: hidden;
		border-bottom: 1px solid rgba(30, 111, 217, 0.2);
		background:
			linear-gradient(rgba(30, 111, 217, 0.1) 1px, transparent 1px),
			linear-gradient(90deg, rgba(30, 111, 217, 0.1) 1px, transparent 1px),
			radial-gradient(circle at 58% 44%, rgba(74, 159, 255, 0.24), transparent 42%),
			#f7fbff;
		background-size: 36px 36px, 36px 36px, auto, auto;
	}

	.card-copy { padding: clamp(1.25rem, 2.5vw, 1.7rem); }

	.tool-icon {
		display: grid;
		width: 2.35rem;
		height: 2.35rem;
		margin-bottom: 1.1rem;
		place-items: center;
		border: 1px solid currentColor;
		border-radius: 6px;
		color: #1e6fd9;
		background: #eef6ff;
		transition: color 200ms ease, box-shadow 200ms ease, background-color 200ms ease;
	}

	h3 {
		margin-bottom: 0.65rem;
		color: #000000;
		font: 700 clamp(1.2rem, 2.1vw, 1.45rem)/1.2 Arial, Helvetica, sans-serif;
		letter-spacing: 0;
	}

	.card-copy p {
		margin-bottom: 0;
		color: #242424;
		font: 400 0.95rem/1.6 Arial, Helvetica, sans-serif;
	}

	@media (hover: hover) {
		.tool-card:hover,
		.benefit-card:hover {
			transform: translateY(-4px);
			border-color: var(--electric);
			box-shadow: 0 10px 26px rgba(30, 111, 217, 0.24);
		}

		.tool-card:hover .tool-icon,
		.benefit-card:hover .benefit-icon {
			color: #0e5dc3;
			background: #ffffff;
			box-shadow: 0 0 14px rgba(74, 159, 255, 0.48);
		}
	}

	.tool-card:focus-visible,
	.benefit-card:focus-visible {
		transform: translateY(-3px);
		border-color: #9bc7ff;
		box-shadow: 0 0 0 3px rgba(74, 159, 255, 0.34), 0 10px 26px rgba(30, 111, 217, 0.24);
	}

	.tool-card:focus-visible .tool-icon,
	.benefit-card:focus-visible .benefit-icon {
		color: #0e5dc3;
		box-shadow: 0 0 14px rgba(74, 159, 255, 0.48);
	}

	.node { position: absolute; display: grid; place-items: center; border: 1px solid rgba(30, 111, 217, 0.64); border-radius: 50%; background: #ffffff; color: #1e6fd9; }
	.node-main { top: 50%; left: 50%; width: 4rem; height: 4rem; transform: translate(-50%, -50%); box-shadow: 0 0 30px rgba(74, 159, 255, 0.5); }
	.node-one, .node-two, .node-three { width: 1.1rem; height: 1.1rem; }
	.node-one { top: 23%; left: 25%; }.node-two { right: 21%; bottom: 23%; }.node-three { top: 25%; right: 25%; }
	.line { position: absolute; top: 50%; left: 50%; width: 31%; height: 1px; transform-origin: left; background: linear-gradient(90deg, #1e6fd9, transparent); }
	.line-one { transform: rotate(-145deg); }.line-two { transform: rotate(-35deg); }.line-three { transform: rotate(34deg); }

	.chart-axis { position: absolute; right: 10%; bottom: 18%; left: 10%; height: 1px; background: rgba(30, 111, 217, 0.46); }
	.chart-bar { position: absolute; bottom: 18%; width: 10%; border: 1px solid rgba(30, 111, 217, 0.62); border-bottom: 0; background: rgba(74, 159, 255, 0.2); }
	.bar-one { left: 19%; height: 25%; }.bar-two { left: 37%; height: 39%; }.bar-three { left: 55%; height: 31%; }.bar-four { left: 73%; height: 57%; }
	.marketing svg { position: absolute; top: 18%; right: 10%; bottom: 18%; left: 10%; width: 80%; height: 64%; overflow: visible; }
	.marketing polyline { fill: none; stroke: #1e6fd9; stroke-width: 2; filter: drop-shadow(0 0 5px rgba(74, 159, 255, 0.7)); }

	.search-window { position: absolute; top: 25%; right: 11%; left: 11%; display: flex; align-items: center; gap: 0.65rem; padding: 0.8rem 0.9rem; border: 1px solid rgba(30, 111, 217, 0.46); border-radius: 5px; color: #1e6fd9; background: #ffffff; font: 0.75rem/1 Arial, Helvetica, sans-serif; }
	.result-line { position: absolute; left: 17%; height: 0.45rem; border-radius: 99px; background: rgba(30, 111, 217, 0.46); }.result-line.first { top: 53%; width: 59%; }.result-line.second { top: 66%; width: 45%; }.result-line.third { top: 79%; width: 32%; }

	.copy-window { position: absolute; top: 22%; right: 16%; left: 16%; padding: 1rem; border: 1px solid rgba(30, 111, 217, 0.47); border-radius: 5px; background: #ffffff; }.copy-heading, .copy-line { display: block; height: 0.45rem; margin-bottom: 0.75rem; border-radius: 99px; background: rgba(30, 111, 217, 0.56); }.copy-heading { width: 45%; height: 0.62rem; }.copy-line { width: 94%; }.copy-line.short { width: 67%; margin-bottom: 0; }
	.cursor { position: absolute; right: 22%; bottom: 19%; width: 0.65rem; height: 1.1rem; border-right: 2px solid #1e6fd9; animation: blink 1.15s steps(2, start) infinite; }

	.mint .tool-icon, .cyan .tool-icon, .sky .tool-icon { color: #1e6fd9; }

	@keyframes blink { 50% { opacity: 0.15; } }

	@media (max-width: 650px) {
		.workshop-about {
			padding-top: 4rem;
			padding-bottom: 4.5rem;
		}

		.tool-grid,
		.benefit-grid { grid-template-columns: 1fr; }
		.card-visual { height: clamp(9.5rem, 48vw, 11rem); }
		.benefit-card { min-height: 0; }
	}

	@media (prefers-reduced-motion: reduce) {
		.cursor { animation: none; }
		.tool-card,
		.benefit-card,
		.tool-icon,
		.benefit-icon { transition: none; }
	}
</style>
