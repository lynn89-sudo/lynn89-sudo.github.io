<script>
    import { onMount } from "svelte";
    import { base } from "$app/paths";

    import Footer from "$lib/footer.svelte";
    import Label from "$lib/label.svelte";

    import { draw, fly, slide } from "svelte/transition"

    let activate = $state(false);
    onMount(function() {
        setTimeout(function() {
            activate = true;
        }, 200)
    })
</script>
<svelte:head>
    <title>Musée d'Hacklyn</title>
</svelte:head>
<Label loc="Musée d'Hacklyn" returnTo = "square"/>
<div style:height=150px><h1 style:opacity=0>Scroll down</h1></div>
<h1>Under construction</h1>