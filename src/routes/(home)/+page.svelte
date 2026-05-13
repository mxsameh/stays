<script lang="ts">
	import heD from '$lib/assets/images/he.png';
	import heM from '$lib/assets/images/he-m.png';
	import Ichev from '$lib/assets/icons/chev.svelte';

	import { onMount } from 'svelte';
	import Swiper from 'swiper/bundle';
	import 'swiper/css';

	let { data } = $props();
	const { prps, revs } = data as any;

	// const fRevs = revs.slice(0, 2);

	onMount(() => {
		new Swiper('.s-spaces .swiper', {
			loop: true,
			breakpoints: {
				0: {
					slidesPerView: 1,
					spaceBetween: '32rem'
				},
				770: {
					slidesPerView: 3,
					spaceBetween: '16rem'
				}
			},
			navigation: {
				nextEl: '.s-spaces #swiper-next',
				prevEl: '.s-spaces #swiper-prev'
			}
		});

		new Swiper('.s-rev .swiper', {
			slidesPerView: 2,
			spaceBetween: '120rem',
			loop: true,
			centerInsufficientSlides: true,
			autoplay: {
				delay: 10000
			},
			breakpoints: {
				0: {
					slidesPerView: 1
				},
				770: {
					slidesPerView: 2,
					spaceBetween: '120rem'
				}
			},
			// loop: true,
			navigation: {
				nextEl: '.s-rev #swiper-next',
				prevEl: '.s-rev #swiper-prev'
			}
		});
	});
</script>

<svelte:head>
	<title>Premium Short-Term Rentals in Egypt | Stays Hospitality</title>
	<meta
		name="description"
		content="Experience thoughtfully designed short-term rentals with Stays Hospitality. From city apartments to coastal escapes, enjoy seamless stays tailored to modern living. Available in Cairo, Hurghada, Gouna, and the North Coast."
	/>
</svelte:head>

<main class="p">
	<section class="s-hero">
		<figure>
			<!-- <img src={heI} alt="" /> -->
			<picture>
				<source srcset={heD} media="(min-width: 770px)" />
				<img src={heM} alt="Hero image" />
			</picture>
		</figure>
		<h1>STAYS YOU WILL WANT TO COME BACK TO</h1>
	</section>

	<section class="s-spaces">
		<h2>Our Spaces</h2>
		<div class="swiper_">
			<nav>
				<button id="swiper-prev">
					<Ichev />
				</button>
				<button id="swiper-next">
					<Ichev />
				</button>
			</nav>
			<div class="swiper">
				<div class="swiper-wrapper">
					{#each prps as prp}
						<div class="swiper-slide">
							<a href={`/stays/${prp.slug}`}>
								<figure>
									<img src={prp.heroImage?.fields.file.url} alt="" />
								</figure>
								<div class="info">
									<h3>{prp.name}</h3>
									<p>({prp.location})</p>
								</div>
							</a>
						</div>
					{/each}
				</div>
			</div>
		</div>
	</section>

	<section class="s-rev">
		<h2>Reviews</h2>
		<div class="swiper_">
			<nav>
				<button id="swiper-prev">
					<Ichev />
				</button>
				<button id="swiper-next">
					<Ichev />
				</button>
			</nav>
			<div class="swiper">
				<div class="swiper-wrapper">
					{#each revs as rev}
						<div class="swiper-slide">
							<div class="rev">
								<span>"</span>
								<div>
									<p>{rev.review}</p>
									<div class="info">
										<span>{rev?.name}</span>
										<span>{rev?.propertyName}</span>
									</div>
								</div>
								<span>"</span>
							</div>
						</div>
					{/each}
				</div>
			</div>
		</div>
	</section>
</main>

<style lang="scss">
	.p {
		/* padding-top: 32rem; */
		padding-bottom: 80rem;
	}
	.s-hero {
		padding-inline: var(--p-i);
		figure {
			height: 500rem;
			background-color: #ddd;
		}
		h1 {
			width: 780rem;
			margin-top: 64rem;
			margin-inline: auto;
			font-size: 60rem;
			line-height: 64rem;
			font-weight: 500;
			font-family: 'pf';
			text-align: center;
			@media (width < 770px) {
				width: unset;
				font-size: 28rem;
				line-height: 1.1;
			}
		}
	}
	.s-spaces {
		margin-top: 80rem;
		padding-inline: var(--p-i);
		h2 {
			/* text-align: right; */
			font-size: 120rem;
			font-weight: normal;
			font-family: 'pf';
			@media (width < 770px) {
				font-size: 60rem;
				line-height: 1;
			}
		}
		.swiper_ {
			position: relative;
			margin-top: 40rem;
		}
		.swiper {
			width: calc(100% - 80rem);
			@media (width < 770px) {
				width: 100%;
			}
		}
		nav {
			width: 100%;
			position: absolute;
			left: 0;
			top: 50%;
			transform: translateY(-50%);
			z-index: 2;
			display: flex;
			gap: 16rem;
			justify-content: space-between;
			@media (width < 770px) {
				position: unset;
				transform: unset;
				justify-content: flex-end;
				margin-bottom: 24rem;
			}
		}
		button {
			:global(svg) {
				width: 20rem;
			}
			&:first-child {
				:global(svg) {
					transform: rotate(180deg);
				}
			}
		}

		figure {
			aspect-ratio: 3/2;
			background-color: #ddd;
		}
		.info {
			margin-top: 16rem;
			display: flex;
			align-items: center;
			justify-content: space-between;
		}
		h3 {
			font-size: 20rem;
			font-weight: normal;
			@media (width < 770px) {
				font-size: 16rem;
			}
		}
		p {
			font-size: 16rem;
			text-transform: uppercase;
			@media (width < 770px) {
				font-size: 14rem;
			}
		}
	}
	.s-ab {
		margin-top: 120rem;
		padding-inline: var(--p-i);
		h2 {
			/* text-align: right; */
			font-size: 120rem;
			font-weight: normal;
			font-family: 'pf';
			@media (width < 770px) {
				font-size: 60rem;
				line-height: 1;
			}
		}
	}
	.s-rev {
		margin-top: 120rem;
		padding-inline: var(--p-i);
		h2 {
			/* text-align: right; */
			font-size: 120rem;
			font-weight: normal;
			font-family: 'pf';
			@media (width < 770px) {
				font-size: 60rem;
				line-height: 1;
			}
		}
		.swiper_ {
			margin-top: 40rem;
			position: relative;
			@media (width < 770px) {
				margin-top: 64rem;
			}
		}
		& :global(.swiper) {
			width: 1200rem;
			margin-inline: auto;
			/* display: flex;
			gap: 120rem; */
			@media (width < 770px) {
				width: 100%;
			}

			.rev {
				display: flex;
			}
			.rev > span {
				font-size: 40rem;
			}
			.rev > div {
				padding-top: 30rem;
			}
			p {
				font-size: 18rem;
				text-align: justify;
				@media (width < 770px) {
					font-size: 16rem;
				}
			}
			.info {
				margin-top: 24rem;
				display: flex;
				align-items: center;
				justify-content: space-between;
			}
			.info span {
				font-size: 16rem;
				opacity: 0.6;
			}
		}
		/*
		nav {
			display: flex;
			gap: 16rem;
			justify-content: flex-start;
			justify-content: center;
			margin-bottom: 24rem;
			margin-top: 40rem;
			padding-left: calc(120rem - var(--p-i));
		}
		*/
		nav {
			width: 100%;
			left: 0;
			position: absolute;
			display: flex;
			justify-content: space-between;
			top: 80rem;

			@media (width < 770px) {
				top: 0;
				transform: translateY(-150%);
				/* bottom: -40rem; */
				justify-content: flex-end;
				gap: 16rem;
			}
		}
		button {
			width: 20rem;
		}
		button:first-child :global(svg) {
			transform: rotate(180deg);
		}
	}
</style>
