<script>
	import favicon from '$lib/assets/favicon.svg';

	import "$lib/styles.css";
	import "$lib/hackclub.css";

	let { children } = $props();
</script>

<svelte:head>
	<link rel="icon" href={favicon} />
	<link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@24,400,0,0&icon_names=arrow_circle_left,rss_feed" />
	<link rel="preconnect" href="https://fonts.googleapis.com">
	<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
	<link href="https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,100..900;1,100..900&family=Playwrite+DK+Loopet:wght@100..400&family=Space+Grotesk:wght@300..700&display=swap" rel="stylesheet">
</svelte:head>

{@render children()}
