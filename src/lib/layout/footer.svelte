<script>
	import Whatsapp from '$lib/assets/icons/whatsapp.svelte';
	import Fb from '$lib/assets/icons/fb.svelte';
	import Ig from '$lib/assets/icons/ig.svelte';
</script>

<footer>
	<div>
		<a href="https://www.facebook.com/stays.hospitality" target="_blank">
			<Fb />
		</a>
		<a href="https://www.instagram.com/stays.hospitality/" target="_blank">
			<Ig />
		</a>
	</div>
	<a href="https://wa.me/201117630075">
		<Whatsapp />
		Enquire directly via Whatsapp: +20 111 763 0075
	</a>

	<!-- <div class="l">
        <h2>Contact Us</h2>
</div> -->
	<!-- <div class="m">
    <a href="/about-us"></a>
</div>
<div class="r"></div> -->
</footer>

<style>
	footer {
		margin-inline: var(--p-i);
		margin-top: 80rem;
		display: flex;
		justify-content: space-between;
		align-items: flex-end;
		padding-bottom: 24rem;
		/* border-top: 1px solid black; */
	}
	footer > a {
		padding-bottom: 2rem;
		border-bottom: 1px solid #555;
		display: flex;
		:global(svg) {
			margin-inline: 4rem;
			width: 16rem;
		}
	}
	div {
		margin-top: 32rem;
		display: flex;
		gap: 16rem;
		:global(svg) {
			width: 24rem;
		}
	}
</style>
