<script>
    import { onMount } from "svelte";
    import { base } from "$app/paths";

    import { fly } from "svelte/transition";

    let active = $state(false);

    onMount(function() {
        setInterval(function() {
            if (window.scrollY >= 130) {
                active = true;
            }
            else {
                active = false;
            }
        }, 200);
    })
</script>
<style>
    #navbar {
        position: fixed;
        top: 30px;
        left: 100px;
        right: 100px;
        margin-left: 100px;
        margin-right: 100px;
        padding: 10px;
        border-radius: 999px;
        background-color: rgba(255, 192, 203, 0.89);
        z-index: 1000;
    }
</style>
{#if active}
    <div id="navbar" transition:fly={{y:100, duration:500}}>
        <nav>
            <button onclick={() => {window.location.href = base + "/square";}} ><span class="material-symbols-outlined" translate="no" title="Square">location_city</span></button>
            <button onclick={() => {window.location.href = base + "/blog";}} ><span class="material-symbols-outlined" translate="no" title="Blog">dynamic_feed</span></button>
            <button onclick={() => {window.location.href = "https://github.com/lynn89-sudo"}} ><span class="material-symbols-outlined" translate="no" title="GitHub">code_blocks</span></button>
        </nav>
    </div>
{/if}