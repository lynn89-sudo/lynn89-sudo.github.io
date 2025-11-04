<script>
    import Clock from "$lib/clock.svelte";
    import { onMount } from "svelte";

    import { base} from "$app/paths";

    import { fly, slide } from "svelte/transition";

    let activate = $state(false);
    onMount(function() {
        setTimeout(() => {activate = true}, 1000)
    })
</script>
<style>
    div {
        width: 100%;
        height: 130px;
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
                        <h3>EAST COAST TIME</h3>
                    </td>
                </tr>
                <tr>
                    <td>
                        ______________________
                    </td>
                </tr>
                <tr>
                    <td>
                        <nav><a href = "{base}/square" >Home</a> | <a href = "{base}/blog" >Blog</a></nav>
                    </td>
                </tr>
            </tbody>
        </table>
    </div>
{/if}