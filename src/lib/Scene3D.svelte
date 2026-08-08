<script>
	// Rotating low-poly pyramid on a receding grid floor.
	// Shared by the CAD Studio viewport and the 3D rendering card.
	let {
		scale = 'clamp(11px, 2.7vw, 19px)',
		scaleStacked = 'clamp(13px, 4vw, 21px)',
		aspect = '16 / 10',
		aspectNarrow = '4 / 3',
		label = 'Preview of a rotating low-poly 3D model on a perspective grid'
	} = $props();

	// Triangles fanned around the Y axis, each leaning in so the apexes converge
	// at the peak. Shade is baked per facet so the mesh reads as solid, not flat.
	const FACET_COUNT = 14;
	const facets = Array.from({ length: FACET_COUNT }, (_, i) => {
		const angle = (360 / FACET_COUNT) * i;
		const lit = Math.cos(((angle - 40) * Math.PI) / 180);
		return { angle, brightness: (0.62 + 0.48 * Math.max(0, lit)).toFixed(3) };
	});
</script>

<div
	class="stage"
	role="img"
	aria-label={label}
	style="--scale: {scale}; --scale-stacked: {scaleStacked}; --aspect: {aspect}; --aspect-narrow: {aspectNarrow};"
>
	<div class="floor"></div>
	<div class="cast-shadow"></div>

	<div class="bob">
		<div class="tilt">
			<div class="mesh">
				{#each facets as facet}
					<span class="facet" style="--a: {facet.angle}deg; --b: {facet.brightness};"></span>
				{/each}
			</div>
		</div>
	</div>
</div>

<style>
	.stage {
		position: relative;
		aspect-ratio: var(--aspect);
		overflow: hidden;
		/* every mesh dimension is in em, so one font-size scales the whole scene */
		font-size: var(--scale);
		perspective: 34em;
		perspective-origin: 50% 40%;
	}

	/* receding grid floor */
	.floor {
		position: absolute;
		right: -40%;
		bottom: -6%;
		left: -40%;
		height: 62%;
		transform: rotateX(74deg);
		transform-origin: 50% 100%;
		background-image:
			linear-gradient(rgba(90, 167, 255, 0.34) 1px, transparent 1px),
			linear-gradient(90deg, rgba(90, 167, 255, 0.26) 1px, transparent 1px);
		background-size: 3em 2.05em;
		animation: floor-scroll 2.8s linear infinite;
		-webkit-mask-image: linear-gradient(transparent, #000 42%);
		mask-image: linear-gradient(transparent, #000 42%);
	}

	.cast-shadow {
		position: absolute;
		bottom: 25%;
		left: 50%;
		width: 8em;
		height: 1.8em;
		transform: translate(-50%, 50%);
		border-radius: 50%;
		background: radial-gradient(ellipse at center, rgba(0, 0, 0, 0.6), transparent 70%);
	}

	.bob,
	.tilt,
	.mesh {
		transform-style: preserve-3d;
	}

	.bob {
		position: absolute;
		bottom: 27%;
		left: 50%;
		animation: bob 6s ease-in-out infinite alternate;
	}

	.tilt {
		transform: rotateX(-9deg);
	}

	.mesh {
		animation: spin 18s linear infinite;
	}

	.facet {
		position: absolute;
		bottom: 0;
		left: -0.79em;
		width: 1.58em;
		height: 5em;
		transform-origin: 50% 100%;
		/* fan out around Y, push to the base radius, then lean the apex inward */
		transform: rotateY(var(--a)) translateZ(3.4em) rotateX(43deg);
		clip-path: polygon(50% 0%, 100% 100%, 0% 100%);
		background: linear-gradient(180deg, #f0b53a 0%, #c8801a 55%, #9c5c0d 100%);
		filter: brightness(var(--b));
	}

	@keyframes spin {
		to {
			transform: rotateY(360deg);
		}
	}

	@keyframes bob {
		from {
			transform: translateY(0.25em);
		}
		to {
			transform: translateY(-0.25em);
		}
	}

	@keyframes floor-scroll {
		to {
			/* exactly one grid cell, so the loop is seamless */
			background-position: 0 2.05em;
		}
	}

	@media (max-width: 900px) {
		.stage {
			font-size: var(--scale-stacked);
		}
	}

	@media (max-width: 620px) {
		.stage {
			aspect-ratio: var(--aspect-narrow);
		}
	}

	@media (prefers-reduced-motion: reduce) {
		.mesh,
		.bob,
		.floor {
			animation: none;
		}

		.mesh {
			transform: rotateY(-28deg);
		}
	}
</style>
