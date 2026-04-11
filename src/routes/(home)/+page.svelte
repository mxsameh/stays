<script lang="ts">
	import heI from '$lib/assets/images/he.png';
	import Ichev from '$lib/assets/icons/chev.svelte';

	import { onMount } from 'svelte';
	import Swiper from 'swiper/bundle';
	import 'swiper/css';

	let { data } = $props();
	const { prps, revs } = data as any;

	const fRevs = revs.slice(0, 2);

	onMount(() => {
		new Swiper('.swiper', {
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
				nextEl: '#swiper-next',
				prevEl: '#swiper-prev'
			}
		});
	});
</script>

<main class="p">
	<section class="s-hero">
		<figure>
			<img src={heI} alt="" />
		</figure>
		<h1>STAYS YOU WILL WANT TO COME BACK TO</h1>
	</section>

	<section class="s-spaces">
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
								<p>(ZAMALEK)</p>
							</div>
						</a>
					</div>
				{/each}
			</div>
		</div>
	</section>

	<section class="s-ab">
		<h2>Our Spaces</h2>
	</section>

	<section class="s-rev">
		<h2>Reviews</h2>
		<ul>
			{#each fRevs as rev}
				<li>
					<span>"</span>
					<div>
						<p>{rev.review}</p>
						<div class="info">
							<span>{rev.name}</span>
							<span>{rev.propertyName}</span>
						</div>
					</div>
					<span>"</span>
				</li>
			{/each}
		</ul>
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
		nav {
			display: flex;
			gap: 16rem;
			justify-content: flex-end;
			margin-bottom: 24rem;
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
		}
		p {
			font-size: 16rem;
			text-transform: uppercase;
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
			text-align: right;
			font-size: 120rem;
			font-weight: normal;
			font-family: 'pf';
			@media (width < 770px) {
				font-size: 60rem;
				line-height: 1;
			}
		}
		ul {
			margin-top: 80rem;
			width: 1200rem;
			margin-inline: auto;
			display: flex;
			gap: 120rem;
			@media (width < 770px) {
				width: unset;
				flex-direction: column;
				gap: 40rem;
			}
		}
		li {
			display: flex;
			flex: 1;
		}
		li > span {
			font-size: 40rem;
		}
		li > div {
			padding-top: 30rem;
			display: flex;
			flex-direction: column;
		}
		.info {
			margin-top: auto;
			padding-top: 24rem;
			/* margin-top: 24rem; */
			display: flex;
			align-items: center;
			justify-content: space-between;
		}
		.info span {
			font-size: 16rem;
			opacity: 0.6;
		}
	}
</style>
