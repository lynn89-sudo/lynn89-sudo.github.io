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

    let exhibit = $state("CDC Restored");
</script>
<svelte:head>
    <title>Hacklyn Museum of Art</title>
</svelte:head>
<style>
    #title {
        font-size: 50px;
    }
    #exhibits {
        position: sticky;
        top: 30px;
        background-color: white;
        border-radius: 40px;
        padding: 20px;
        .exhibit-label {
            font-size: 30px;
            width: 10px;
            height: 10px;
            background-color: rgb(230, 199, 230);
            padding: 10px;
            border-radius: 20px;
        }
    }
</style>
<Label loc="Hacklyn Museum of Art" returnTo = "square"/>
<div style:height=150px><h1 style:opacity=0>Scroll down</h1></div>
{#if activate}
    <div id="exhibits">
        <h1 transition:fly={{y:-150, duration:1500}} id="title">EXHIBITS</h1>
        <br>
        <h3 id="display"><span transition:fly={{delay: 1000, y:-90, duration:1000}} class="exhibit-label">{exhibit}</span></h3>
    </div>
{/if}