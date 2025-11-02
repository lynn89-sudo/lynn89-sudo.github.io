<script>
    import Clock from "$lib/clock.svelte";
    import { onMount } from "svelte";

    import { fly, slide } from "svelte/transition";

    let activate = $state(false);
    onMount(function() {
        setTimeout(() => {activate = true}, 1000)
    })
</script>
<style>
    div {
        position: absolute;
        bottom: 0;
        right: 0;
        left: 0;
        height: 90px;
        color: white;
        background-color: rgb(179, 90, 179);
    }
</style>
{#if activate}
    <div transition:slide={{delay:800}}>
        <table>
            <tbody>
                <tr>
                    <td>
                        <Clock/>
                    </td>
                </tr>
            </tbody>
        </table>
    </div>
{/if}