<script>
	import logoI from '$lib/assets/images/stays.png';
</script>

<header>
	<a href="/partner-with-us">Partner With Us</a>
	<a href="/">
		<img src={logoI} alt="Logo" />
	</a>
	<a href="/about">About</a>
</header>

<style>
	header {
		padding-inline: var(--p-i);
		padding-block: 16rem;
		display: flex;
		justify-content: space-between;

		@media (width < 770px) {
			align-items: center;
		}

		a {
			width: 98rem;
			display: block;
			text-align: right;
			@media (width < 770px) {
				font-size: 14rem;
			}
		}
		a:nth-child(2) {
			width: 100rem;
			@media (width < 770px) {
				width: 60rem;
			}
		}
	}
</style>
