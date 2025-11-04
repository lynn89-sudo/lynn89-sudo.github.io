<script>
    import { onMount } from "svelte"
    let time = $state("");
    onMount(function() {
        setInterval(function() {
            let clock = new Date();
            let hour = clock.getUTCHours();
            hour = hour - 5;
            if (hour < 0) {
                hour = 24 + hour;
            }
            /*
            if (parseInt(hour) - 5 < 0) {
                hour = 24 - parseInt(hour);
            }
            else {
                hour = parseInt(hour) - 5;
            }
                */
            
            let min = clock.getUTCMinutes();
            let sec = clock.getUTCSeconds();
            if (parseInt(hour) < 10) {
                hour = "0" + hour;
            }
            if (parseInt(min) < 10) {
                min = "0" + min;
            }
            if (parseInt(sec) < 10) {
                sec = "0" + sec;
            }
            
            time = hour + ":" + min + ":" + sec;
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
            font-family: Space Grotesk, Futura;
        }
    }
</style>
<h2 id="clock"><span translate="no">{time}</span></h2>