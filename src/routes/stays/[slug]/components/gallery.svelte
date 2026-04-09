<script>
	import Ichev from '$lib/assets/icons/chev.svelte';
	import Close from '$lib/assets/icons/close.svelte';
	import { onMount } from 'svelte';
	import Swiper from 'swiper';
	import 'swiper/css';

	let { images, active, close } = $props();

	onMount(() => {
		new Swiper('.zoom-swiper', {
			slidesPerView: 1,
			// loop: true,
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

<div class="zoom_" class:active>
	<div class="zoom_pag">(<span></span>)</div>
	<button class="zoom_close" onclick={close}>
		<Close />
	</button>

	<button class="zoom_nav" id="zoom-gallery-prev">
		<Ichev />
	</button>

	<div class="swiper_">
		<div class="swiper zoom-swiper no-select">
			<div class="swiper-wrapper">
				{#each images as img}
					<div class="swiper-slide">
						<figure>
							<img src={img?.fields?.file?.url} alt="" />
						</figure>
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
		padding: 10vw 10vh;
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
		margin-inline: auto;
	}
	.zoom-swiper {
		height: 100%;
		figure {
			width: 100%;
			height: 100%;
			display: flex;
			justify-content: center;
		}
		img {
			width: unset;
		}
	}
</style>
