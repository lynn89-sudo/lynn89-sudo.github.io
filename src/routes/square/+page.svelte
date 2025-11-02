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
    <title>Hacklyn Square</title>
</svelte:head>
<style>
    #name {
        font-size: 300px;
        position: sticky;
        user-select: none;
        -webkit-user-select: none;
        -ms-user-select: none;
        -moz-user-select: none;
    }

    @media screen and (max-width: 800px) {
        #name {
            font-size: 150px;
        }
    }
</style>
<br><br>
{#if activate}
    <h1 transition:fly={{y:-200, duration: 1000}} id="name">I'M LYNN</h1>
    <svg width="100" height="100" viewBox="0 0 100 100">
        <circle
            cx="50"
            cy="50"
            r="40"
            stroke="black"
            fill="transparent"
            stroke-width="10"
            transition:draw={{ duration: 1000, delay: 500 }}
        />
        
        <path
            d="M50 30 L50 70"
            stroke="black"
            fill="transparent"
            stroke-width="10"
            transition:draw={{ duration: 800 }}
        />
        <path
            d="M30 50 L50 70 L70 50"
            stroke="black"
            fill="transparent"
            stroke-width="10"
            transition:draw={{ duration: 800 }}
        />
     </svg>
     <br>
{/if}
<Footer />
<Label loc="Hacklyn Square" />