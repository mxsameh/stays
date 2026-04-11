<main>
	<div class="l">
		<h1>About Us</h1>
	</div>
	<div class="r">
		<p>
			With over 150 reservations and a 98% guest satisfaction rate, we’ve built a reputation for
			creating seamless, memorable stays across Egypt.
		</p>

		<p>
			We curate thoughtfully designed homes in Cairo’s vibrant heart, Hurghada’s Red Sea paradise,
			El Gouna’s tranquil lagoons, and the North Coast’s laid-back beach escapes - each space made
			for comfort, simplicity, and ease.
		</p>

		<p>But we go beyond just a place to stay.</p>

		<p>
			From the moment you book, we can curate your entire experience - from airport pick-ups and
			drop-offs to tailored tours and local experiences - so you can enjoy Egypt without the stress
			of planning.
		</p>

		<p>
			Our team is available 24/7, ensuring you always have support, recommendations, or assistance
			whenever you need it.
		</p>

		<p>
			Our passion? Sharing Egypt’s magic with you - from ancient wonders and rich culture to
			sun-soaked escapes by the sea.
		</p>

		<p>Stay with us, and experience Egypt the way it’s meant to be lived.</p>
	</div>
</main>

<style lang="scss">
	main {
		display: flex;
		justify-content: space-between;
		padding-inline: var(--p-i);
		padding-block: 80rem;
		@media (width < 770px) {
			flex-direction: column;
			padding-block: 40rem;
			gap: 32rem;
		}
	}
	.l h1 {
		font-size: 120rem;
		font-family: 'pf';
		font-weight: normal;
		@media (width < 770px) {
			font-size: 60rem;
		}
	}
	.r {
		width: 672rem;
		padding-top: 48rem;
		@media (width < 770px) {
			width: unset;
			padding-top: 0;
		}
		p {
			font-size: 20rem;
			line-height: 30rem;
			margin-top: 30rem;
			&:first-child {
				margin-top: 0;
			}
			@media (width < 770px) {
				font-size: 16rem;
				line-height: unset;
				margin-top: 20rem;
			}
		}
	}
</style>
