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
        width: 100%;
        height: 80px;
        color: white;
        background-color: rgb(179, 90, 179);
        margin: 0;
    }
    table {
        margin: 0;
        padding-top: 10px;
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
                <tr>
                    <td>
                        <h3>Test</h3>
                    </td>
                </tr>
            </tbody>
        </table>
    </div>
{/if}