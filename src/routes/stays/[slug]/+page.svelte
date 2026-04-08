<script lang="ts">
	import Bath from '$lib/assets/icons/bath.svelte';
	import Bed from '$lib/assets/icons/bed.svelte';
	import Guests from '$lib/assets/icons/guests.svelte';
	import RichText from '$lib/components/richText.svelte';
	import Ichev from '$lib/assets/icons/chev.svelte';
	import { onMount } from 'svelte';
	// import Gallery from './components/gallery.svelte';
	import Swiper from 'swiper/bundle';
	import 'swiper/css';

	let { data } = $props();
	const { prp } = data as any;
	let IsAmenOp = $state(false);
	onMount(() => {
		new Swiper('.swiper', {
			slidesPerView: 2,
			spaceBetween: '120rem',
			loop: true,
			navigation: {
				nextEl: '#swiper-next',
				prevEl: '#swiper-prev'
			}
		});
	});
</script>

<main>
	<section class="s-gal">
		<figure>
			<img src={prp.heroImage?.fields?.file?.url} alt="" />
		</figure>
	</section>

	<!-- <Gallery images={prp.images} /> -->

	<section class="s-sp">
		<div class="l">
			<h1>{prp?.name}</h1>
			<p>{prp?.description}</p>
			<ul class="info">
				<li>
					<Bed />
					{prp.bedrooms} Bedrooms / {prp.beds} Beds
				</li>
				<li>
					<Bath />
					{prp.bathrooms} Bathrooms
				</li>
				<li>
					<Guests />
					{prp.guests} Guests
				</li>
			</ul>
			{#if IsAmenOp}
				<div class="amen">
					<RichText text={prp.amenities} />
				</div>
			{/if}

			{#if !IsAmenOp}
				<button onclick={() => (IsAmenOp = true)}>VIEW PROPERTY DETAILS</button>
			{/if}
		</div>
		<div class="r">
			<div class="ctas">
				<button>
					<a href="https://wa.me/201117630075"> BOOK NOW </a>
				</button>
				<button>
					<a href="https://wa.me/201117630075"> CONTACT US </a>
				</button>
			</div>

			<div class="map">
				{@html prp.mapLink}
			</div>
		</div>
	</section>

	<section class="s-ab">
		<h2>About</h2>
		<p>
			{prp?.about}
		</p>
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
					{#each prp.reviews as rev}
						<div class="swiper-slide">
							<div class="rev">
								<span>"</span>
								<div>
									<p>{rev.fields.review}</p>
									<div class="info">
										<span>{rev.fields.name}</span>
										<span>{rev.fields.propertyName}</span>
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
	main {
		padding-top: var(--p-i);
		padding-bottom: 80rem;
		padding-inline: var(--p-i);
	}
	.s-gal {
		figure {
			height: 500rem;
			background-color: #ddd;
		}
	}
	.s-sp {
		margin-top: 48rem;
		display: flex;
		gap: 32rem;

		.l {
			flex: 1;
		}
		h1 {
			font-family: 'pf';
			font-size: 60rem;
			font-weight: 500;
			line-height: 64rem;
			text-transform: uppercase;
		}
		p {
			margin-top: 24rem;
			font-size: 20rem;
		}
		.info {
			margin-top: 100rem;
			display: flex;
		}
		.info li {
			flex: 1;
			display: flex;
			align-items: center;
			gap: 8rem;
			font-size: 16rem;
		}
		.info :global(svg) {
			width: 20rem;
		}
		.amen {
			padding-top: 40rem;
			font-size: 16rem;
			max-width: 600rem;
		}
		.amen :global(h4) {
			margin-top: 24rem;
		}
		.amen :global(p) {
			font-size: 16rem;
			line-height: 20rem;
			margin-top: 8rem;
		}
		.l button {
			margin-top: 80rem;
			font-size: 16rem;
			padding-bottom: 4rem;
			border-bottom: 1px solid black;
		}
		.r {
			flex: 1;
		}
		.ctas {
			display: flex;
			gap: 32rem;
			justify-content: flex-end;
		}
		.r button {
			width: 204rem;
			padding-block: 16rem;
			background-color: black;
			font-size: 16rem;
			/* font-weight: bold; */
			color: white;

		}
		.r button:last-of-type {
			color: black;
			background-color: #ccc;
		}
		.map {
			margin-top: 138rem;
			height: 350rem;
			background-color: #ddd;
		}
		.map :global(iframe) {
			width: 100%;
			height: 100%;
		}
	}
	.s-ab {
		margin-top: 120rem;
		display: flex;
		gap: 32rem;

		h2 {
			font-size: 120rem;
			flex: 1;
			font-family: 'pf';
			font-weight: 400;
		}
		p {
			flex: 1;
			font-size: 20rem;
			line-height: 30rem;
			padding-top: 38rem;
		}
	}
	.s-rev {
		margin-top: 120rem;
		/* padding-inline: var(--p-i); */
		h2 {
			text-align: right;
			font-size: 120rem;
			font-weight: normal;
			font-family: 'pf';
			font-weight: 400;
		}
		.swiper_ {
			margin-top: 80rem;
			position: relative;
		}
		:global(.swiper) {
			width: 1200rem;
			margin-inline: auto;
			/* display: flex;
			gap: 120rem; */

			.rev {
				display: flex;
			}
			.rev > span {
				font-size: 40rem;
			}
			.rev > div {
				padding-top: 30rem;
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
		nav {
			width: 100%;
			left: 0;
			position: absolute;
			display: flex;
			justify-content: space-between;
			top: 50%;
			transform: translateY(-50%);
		}
		button {
			width: 20rem;
		}
		button:first-child :global(svg) {
			transform: rotate(180deg);
		}
	}
</style>
