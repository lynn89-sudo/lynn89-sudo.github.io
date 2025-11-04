<script>
    import { onMount } from "svelte";
    import { base } from "$app/paths";
    import { fly } from 'svelte/transition';

   let prop = $props();

   let activate = $state(false);
   onMount(function() {
    setTimeout(function() {
        activate = true;
    })
   }, 1200)
</script>
<style>
    div {
        position: absolute;
        top: 0;
        left: 20%;
        right: 20%;
        background-color: pink;
        color: rgb(71, 11, 46);
        height: 100px;
        padding: 10px;
        border-bottom-left-radius: 30px;
        border-bottom-right-radius: 30px;
        z-index: 1000;

        user-select: none;
        -webkit-user-select: none;
        -ms-user-select: none;
        -moz-user-select: none;
    }
    #return {
        margin-top: 10px;
    }
</style>
{#if activate}
    <div transition:fly={{y:-200, delay: 1300}}>
        <h2>{prop.loc}</h2>
        <button id="return" title="Return" onclick = {function() {
            window.location.href = base + "/" + prop.returnTo;
        }}><span translate="no" class="material-symbols-outlined">arrow_circle_left</span></button>
    </div>
{/if}