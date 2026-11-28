<script>
  import workshop_prompts from '#lib/ai_prompts/workshop_prompts.json'
  let activeIndex = $state(0);
  let currentAi = $derived(aiOptions[activeIndex]);
  let userInput = $state("");

  function handleSubmit(event) {
    event.preventDefault();
    const inputElement = document.getElementById('ai_prompt');
    if (inputElement) {
      inputElement.value = currentAi.prompt + userInput;
    }
    event.target.submit();
  }

  let { data, form } = $props();
</script>

<div class="press">
  <div class="sheet"></div>
  <div class="roll"></div>
  <div class="sheet"></div>
  <div class="roll"></div>
  <div class="sheet"></div>
  <div class="roll"></div>
  <div class="sheet"></div>
  <div class="sheet"></div>
  <div class="sheet"></div>
  <div class="sheet"></div>
  <div class="sheet"></div>
  <div class="roll"></div>

  
<section class="workshop-about" aria-labelledby="workshop-about-heading">
	<div class="" aria-hidden="true"></div>
	<div class="about-shell">
		<div class="intro">
			<p class="eyebrow"> AI Workshop</p>
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

</section>


</div>


<main class="main_section">
{#each workshop_prompts as prompt}
<div class="workshop_prompt_card">
<span>{prompt.name}</span>
<form class="input_form">
<label for="prompt">{prompt.label}.</label>
<input type="text" name="prompt" id="ai_prompt">
</form>
</div>
{/each}
</main>

<style>
/* From Uiverse.io by preet_7613 */ 
/* 1. Scoped Global Selectors */
.press * {
  border: 0;
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}
.press {
  background: #86a6f9;
  position: relative;
  width: 100%; /* Replaced 100vh with 100% or a fixed height depending on your container needs */
  height: 600px;
  overflow: hidden; /* Removed dynamic font-size using vw to avoid the unit error */
  font-size: 16px;
  color: #17181c;
  font-family: serif;
  line-height: 1.5;
} /* Scoped body styles to the container instead */
.press-container {
  display: block;
}
.press .sheet {
  overflow: hidden;
}
.press .sheet,
.press .sheet:before,
.press .roll {
  position: absolute;
}
.press .sheet,
.press .roll {
  top: 50%;
  left: 50%;
}
.press .sheet {
  width: 4em;
  height: 6em;
  transform: translate(-50%, -50%) rotateX(-45deg) rotateZ(-45deg);
}
.press .sheet:before {
  animation: print 0.5s ease-in-out infinite;
  background:
    linear-gradient(#0000 5.2em, currentColor 5.2em 5.3em, #0000 5.3em 5.5em)
      0.4em 0 / 3.2em 6em,
    linear-gradient(#0000 5.5em, currentColor 5.5em 5.7em, #0000 5.7em) 0.6em 0 /
      2.8em 6em,
    linear-gradient(
        90deg,
        #e3e4e8 0.4em,
        #0000 0.4em 1.9em,
        #e3e4e8 1.9em 2.1em,
        #0000 2.1em 3.6em,
        #e3e4e8 3.6em
      )
      0 0 / 4em 6em,
    repeating-linear-gradient(
        #e3e4e8 0 0.4em,
        #0000 0.4em 5em,
        #e3e4e8 5em 6em,
        #0000 6em
      )
      0 0 / 4em 6em,
    linear-gradient(#0000 3.4em, currentColor 3.4em) 100% 0 / 50% 6em,
    repeating-linear-gradient(currentColor 0 0.2em, #e3e4e8 0.2em 0.4em) 0 0 /
      4em 6em;
  background-repeat: repeat-y;
  color: #17181c;
  content: "";
  display: block;
  top: -6em;
  left: 0;
  width: 100%;
  height: calc(100% + 6em);
}
.press .sheet:nth-child(1):before,
.press .sheet:nth-child(5):before {
  color: #c7cad1;
}
.press .sheet:nth-child(n + 7):nth-child(-n + 9) {
  height: 0.4em;
}
.press .sheet:nth-child(1) {
  height: 42em;
  transform: translate(-50%, -50%) rotateX(-45deg) rotateZ(-45deg)
    translate(-17.4em, 9.4em) rotateX(-90deg);
}
.press .sheet:nth-child(3) {
  transform: translate(-50%, -50%) rotateX(-45deg) rotateZ(-45deg)
    translate(-2.5em, -2.5em);
}
.press .sheet:nth-child(5) {
  transform: translate(-50%, -50%) rotateX(-45deg) rotateZ(-45deg)
    translate(-0.5em, -0.7em) rotateX(-75deg);
}
.press .sheet:nth-child(7) {
  transform: translate(-50%, -50%) rotateX(-45deg) rotateZ(-45deg)
    translate(1.7em, -1.85em) rotateX(-15deg);
}
.press .sheet:nth-child(7):before {
  background-position-y: 5.2em;
}
.press .sheet:nth-child(8) {
  transform: translate(-50%, -50%) rotateX(-45deg) rotateZ(-45deg)
    translate(1.7em, -1.5em) rotateX(15deg);
}
.press .sheet:nth-child(8):before {
  background-position-y: 4.8em;
}
.press .sheet:nth-child(9) {
  transform: translate(-50%, -50%) rotateX(-45deg) rotateZ(-45deg)
    translate(1.6em, -1.05em) rotateX(45deg);
}
.press .sheet:nth-child(9):before {
  background-position-y: 4.4em;
}
.press .sheet:nth-child(10):before,
.press .sheet:nth-child(11):before {
  background-position-y: 4em;
}
.press .sheet:nth-child(10) {
  transform: translate(-50%, -50%) rotateX(-45deg) rotateZ(-45deg)
    translate(-0.5em, 1.95em) rotateX(75deg);
}
.press .sheet:nth-child(11) {
  height: 29em;
  transform: translate(-50%, -50%) rotateX(-45deg) rotateZ(-45deg)
    translate(-2.5em, 19.25em);
}
.press .roll {
  background-color: #2e3138;
  background-image: radial-gradient(
    1em 2em at 0.5em 50%,
    #17181c 49%,
    #17181c00 50%
  );
  border-radius: 0.5em 0.5em 0.5em 0.5em / 1em 1em 1em 1em;
  width: 8em;
  height: 2em;
}
.press .roll:nth-child(2) {
  transform: translate(-50%, -50%) rotateX(-45deg) rotateZ(-45deg)
    translate(-3em, -4.5em) skewX(-22.5deg);
}
.press .roll:nth-child(4) {
  transform: translate(-50%, -50%) rotateX(-45deg) rotateZ(-45deg)
    translate(-2em, -0.5em) skewX(-22.5deg);
}
.press .roll:nth-child(6) {
  transform: translate(-50%, -50%) rotateX(-45deg) rotateZ(-45deg)
    translate(1em, -1em) skewX(-22.5deg);
}
.press .roll:nth-child(12) {
  transform: translate(-50%, -50%) rotateX(-45deg) rotateZ(-45deg)
    translate(-2em, 4.45em) skewX(-22.5deg);
} /* Animations */
@keyframes print {
  from {
    transform: translateY(0);
  }
  to {
    transform: translateY(6em);
  }
}


.main_section {
display: flex;
width: calc(100vw - 2vw);
flex-wrap: wrap;
gap: 1vw;
margin: 0px 0px 0px 2.5vw;
align-items: center;
justify-content: flex-start;
}

.workshop_prompt_card {
display: flex;
width: calc(25vw - 15px - 2px - 10px);
height: 100%;
background-color: rgba(0,0,0,0.3);
flex-direction: column;
border-radius: 10px;
border: 1px solid rgba(255,255,255,0.3);
padding: 0px;
}

.input_form {
display: flex;
flex-direction: column;
width: 100%;
position: relative;
height: 100%;
align-items: flex-start;
justify-content: flex-start;
background-color: none;
}

#ai_prompt {
position: absolute;
bottom: 0px;
width: calc(100% - 40px);
left: 0px;
height: 40px;
border: none;
border-radius: 0px;
background: linear-gradient(transparent);
border-top: 1px solid rgba(255,255,255,0.3);
color: white;
padding: 5px 20px; 
}

#ai_prompt:focus {
outline: none;
}

.workshop_prompt_card span {
font-weight: 700;
padding: 10px 10px 10px 10px;
color: rgba(255,255,255,0.9);
max-height: 40px;
min-height: 40px;
}

.workshop_prompt_card form label {
padding: 0px 10px 10px 10px;
color: rgba(255,255,255,0.7);
word-break: break-word;
min-height: 30vh;
max-height: 30vh;
}

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
		background: rgba(0,0,0,0);
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
		background: linear-gradient( transparent);
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
