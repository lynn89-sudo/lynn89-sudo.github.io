<script>
    import { onMount } from "svelte"
    let time = $state("");
    onMount(function() {
        setInterval(function() {
            let clock = new Date();
            let hour = clock.getUTCHours();
            if (parseInt(hour) - 4 < 0) {
                hour = 24 - parseInt(hour);
            }
            else {
                hour = parseInt(hour) - 4;
            }
            time = hour + ":" + clock.getUTCMinutes() + ":" + clock.getUTCSeconds();
        }, 1000);
    })
</script>
<style>
    @keyframes pulse {
        0% {
            background-color: rgba(83, 26, 112, 0);
            font-size: 20px;
        }
        50% {
            background-color: rgba(83, 68, 90, 0);
            font-size: 22px;
        }
        100% {
            background-color: rgba(83, 26, 112, 0);
            font-size: 20px;
        }
    }
    #clock {
        span {
            background-color: rgb(83, 26, 112);
            padding: 10px;
            border-radius: 20px;
            animation: pulse 2s infinite;
        }
    }
</style>
<h2 id="clock"><span>{time}</span></h2>