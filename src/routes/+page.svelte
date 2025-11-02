<script>
    import { onMount } from "svelte";
    import { base } from "$app/paths";

    import { fly, slide } from "svelte/transition";
    import { cubicInOut } from "svelte/easing";

    let appear = $state(false);

    let getName = $state(true);
    let name = $state("");
    let prompt = $derived("Good to see you " + name);
    $effect(function() {
        if (getName) {

        }
    })
    onMount(function() {
        if (localStorage.getItem("name") != null) {
            getName = false;
            name = localStorage.getItem("name");
        }

        setTimeout(function() {appear = true}, 1000);
    })

    let birdName = $state("");
    let birdImgName = $state("");
    onMount(function() {
        let birds = ["Alice", "Imke", "Eefje", "Melanie"];
        let birdImg = ["alice", "imke", "eefje", "melanie"];
        let rand = (Math.random()*4);
        
        birdName = birds[Math.floor(rand)];
        birdImgName = birdImg[Math.floor(rand)];
    })

    let transfer = $state(false);
    function handleName() {
        localStorage.setItem("name", name);
        transfer = true;
        setTimeout(function() {
            window.location.href = base + "/square";
        }, 1200);
    }
</script>
<svelte:head>
    <title>Welcome to Hacklyn</title>
</svelte:head>
<style>

    #vogel {
        position: absolute;
        right: 20%;
        left: 20%;
        width: 60%;
        bottom: 0;
        overflow-y: hidden;

        img {
            width: 30%;
            margin-bottom: -90px;
            transition: all 0.5s ease-in-out;
        }
        img:hover {
            width: 32%;
        }
    }
    @media screen and (max-width: 800px) {
            #vogel img {
                margin-bottom: -80px;
                width: 80%;
            }
            #vogel img:hover {
                width: 82%;
            }
    }

    h1 {
        span {
            background-color: rgb(89, 60, 109);
            color: white;
            padding: 10px;
            border-radius: 20px;
        }
    }
</style>
<br><br><br><br>
{#if appear}

    <div transition:fly={{y:-100, easing:cubicInOut, duration: 700}}>
        <h1 style:font-weight=900px>WELCOME TO <span>HACKLYN</span></h1><br>
        <h3>{prompt}</h3>
        <br>
    </div>
    <br>
    <div transition:slide={{delay: 1000, y:100, easing:cubicInOut}}>
        {#if getName}
            <form onsubmit={handleName}>
                <br>
                <h2>What's your name?</h2>
                <h4>(Lynn would like to know ^w^)</h4>
                <br>
                <input type="text" bind:value={name}>
                <br><br>
            </form>
        {:else}
            <button onclick={function() {
                window.location.href = base + "/square";
            }}>Enter</button>
        {/if}
    </div>
    <br><br>
{/if}
{#if appear}
    <div id="vogel" transition:fly={{delay: 2000, y:100}}>
        <p>{birdName} can't speak; however, she says hello!</p>
        <img src="vogels/{birdImgName}.png" alt="Picture of {birdName} the bird"/>
    </div>
{/if}