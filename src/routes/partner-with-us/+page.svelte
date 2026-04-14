<script>
	import Whatsapp from '$lib/assets/icons/whatsapp.svelte';
</script>

<main>
	<section>
		<div class="l">
			<h1>Partner With Us</h1>
		</div>
		<div class="r">
			<p>
				We partner with a select number of properties across Cairo, Hurghada, El Gouna and the North
				Coast, to create exceptional guest experiences while maximizing your returns.
			</p>
			<p>
				With over 150 reservations and a 98% guest satisfaction rate, we’ve built a trusted approach
				to short-term rentals - combining thoughtful design, strategic pricing, and seamless guest
				management.
			</p>
			<p>
				From listing creation and optimization to 24/7 guest communication, housekeeping
				coordination, and full stay curation - including airport transfers and tailored experiences
				- we handle everything, so you don’t have to.
			</p>
			<p>
				We carefully select properties that align with our standards to ensure consistency, quality,
				and strong performance.
			</p>

			<div>
				<p>
					<b>Interested in listing your property with us?</b>
					<br />
					Send us a message on WhatsApp with a few details about your property, such as its location,
					type, number of bedrooms, and any additional information or listing links.
				</p>
				<a href="https://wa.me/201117630075" target="_blank">
					<Whatsapp />
					<span> +20 111 763 0075 </span>
				</a>
			</div>
		</div>
	</section>
	<!-- 
	<section>
		<div class="l">
			<h1>Work With Us</h1>
		</div>
		<div class="r">
			<p>
				Interested in listing your property with us? Send us a message on WhatsApp with a few
				details about your property, such as its location, type, number of bedrooms, and any
				additional information or listing links.
			</p>
			<a href="https://wa.me/201117630075" target="_blank"> +20 111 763 0075 </a>
		</div>
	</section>
	 -->
</main>

<style>
	main {
		padding-inline: var(--p-i);
		padding-block: 80rem;
		@media (width < 770px) {
			padding-block: 40rem;
		}
	}

	section {
		display: flex;
		justify-content: space-between;
		margin-top: 160rem;
		&:first-child {
			margin-top: 0;
		}
		@media (width < 770px) {
			margin-top: 80rem;
			flex-direction: column;
			gap: 32rem;
		}
	}
	.l h1 {
		font-size: 120rem;
		line-height: 1;
		font-family: 'pf';
		font-weight: normal;
		max-width: 500rem;
		@media (width < 770px) {
			font-size: 60rem;
			max-width: 280rem;
		}
	}
	.r {
		width: 672rem;
		padding-top: 48rem;
		@media (width < 770px) {
			width: 100%;
			padding-top: 0;
		}
		p {
			font-size: 20rem;
			line-height: 30rem;
			margin-top: 30rem;
			text-align: justify;
			&:first-child {
				margin-top: 0;
			}
			@media (width < 770px) {
				font-size: 16rem;
				line-height: unset;
				margin-top: 16rem;
			}
		}
		div {
			margin-top: 100rem;
			@media (width < 770px) {
				margin-top: 60rem;
			}
		}
		a {
			display: flex;
			align-items: flex-end;
			gap: 16rem;
			margin-top: 40rem;
			:global(svg) {
				width: 40rem;
			}
			span {
				font-family: 'pf';
				font-size: 40rem;
				padding-bottom: 4rem;
				border-bottom: 1px solid #333;
			}
			@media (width < 770px) {
				margin-top: 32rem;
				span {
					font-size: 30rem;
				}
			}
		}
	}
</style>
