<script>
	import Ichev from '$lib/assets/icons/chev.svelte';
	import Close from '$lib/assets/icons/close.svelte';
	import { onMount } from 'svelte';
	import Swiper from 'swiper';
	import 'swiper/css';

	let { images } = $props();
	onMount(() => {
		const swiper = new Swiper('.zoom-swiper', {
			spaceBetween: 0,
			loop: true,
			pagination: {
				el: '.zoom_pag span',
				type: 'fraction'
			},
			navigation: {
				nextEl: '#zoom-gallery-next',
				prevEl: '#zoom-gallery-prev'
			}
		});
	});
</script>

<div class="zoom_ active">
	<div class="zoom_pag">(<span></span>)</div>
	<button class="zoom_close">
		<Close />
	</button>

	<button class="zoom_nav" id="zoom-gallery-prev">
		<Ichev />
	</button>

	<div class="swiper_">
		<div class="swiper zoom-swiper no-select">
			<div class="swiper-wrapper">
				{#each images as img, i}
					<div class="swiper-slide">
						<img src={img?.fields?.file?.url} alt="" />
					</div>
				{/each}
			</div>
		</div>
	</div>

	<button class="zoom_nav" id="zoom-gallery-next">
		<Ichev />
	</button>
</div>

<style>
	.zoom_ {
		position: fixed;
		z-index: 99999;
		left: 0;
		top: 0;
		width: 100%;
		height: 100vh;
		overflow: hidden;
		background-color: white;
		opacity: 0;
		pointer-events: none;
		transition: opacity 0.3s ease-out;
	}
	.zoom_.active {
		opacity: 1;
		pointer-events: unset;
	}
	.zoom_pag {
		position: absolute;
		top: 24px;
		left: 24px;
	}
	.zoom_close {
		position: absolute;
		top: 24px;
		right: 24px;
		width: 24px;
	}
	.zoom_nav {
		position: absolute;
		top: 50%;
		transform: translateY(-50%);
		left: 24px;
		&:last-of-type {
			left: unset;
			right: 24px;
		}
	}
	.zoom_nav :global(svg) {
		width: 24px;
	}
	#zoom-gallery-prev :global(svg) {
		transform: rotate(180deg);
	}

	.swiper_ {
		height: 100%;
		aspect-ratio: 4/5;
		margin-inline: auto;
		max-width: fit-content;
	}

	.zoom-swiper .product_fig {
		height: 100%;
		width: unset;
		margin-inline: auto;
	}
</style>
