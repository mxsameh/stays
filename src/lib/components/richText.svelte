<script>
	import { documentToHtmlString } from '@contentful/rich-text-html-renderer'; // renderNode: {
	let { text } = $props();

	const options = {
		preserveWhitespace: true
	};

	const html = documentToHtmlString(text, options);
</script>

{@html html}
