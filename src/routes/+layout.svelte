<script lang="ts">
	import favicon from '$lib/assets/favicon.svg';
	import Footer from '$lib/layout/footer.svelte';
	import Header from '$lib/layout/header.svelte';
	import '$lib/styles/reset.css';
	import '$lib/styles/utils.css';
	let { children } = $props();
</script>

<svelte:head>
	<link rel="icon" href={favicon} />
</svelte:head>

<Header />
{@render children()}
<Footer />
