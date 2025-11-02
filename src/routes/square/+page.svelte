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
        top: 0;
        z-index: -10;
    }
    #pronouns {
        position: sticky;
        user-select: none;
        -webkit-user-select: none;
        -ms-user-select: none;
        -moz-user-select: none;
        top: 350px;
        z-index: -10;

        span {
            background-color: rgb(129, 81, 139);
            padding: 10px;
            border-radius: 30px;
            color: white;
        }
    }

    @media screen and (max-width: 900px) {
        #pronouns {
            top: 350px;
        }
    }

    svg {
        position: sticky;
        top: 400px;
        z-index: -10;
    }

    @media screen and (max-width: 800px) {
        #name {
            font-size: 150px;
        }
    }
    #new-york {
        background-color: rgb(39, 139, 143);
        padding-bottom: 0;
        img {
            max-height: 400px;
            margin-bottom: -20px;
        }
        h2 {
            font-size: 90px;
            color: rgb(255, 255, 255);
        }
        h4 {
            color: white;
        }
    }
    #web {
        background-color: rgb(71, 24, 3);
        padding-bottom: 0;
        img {
            max-height: 300px;
            margin-bottom: 30px;
        }
        h2 {
            font-size: 90px;
            color: rgb(248, 248, 248);
        }
        h4 {
            color: white;
        }

        @media screen and (max-width: 900px) {
            #web-dev {
                font-size: 70px;
            }
        }
    }
    #graphic {
        background-color: rgb(5, 6, 82);
        padding-bottom: 0;
        img {
            max-height: 300px;
            margin-bottom: 30px;
        }
        h2 {
            font-size: 90px;
            color: rgb(248, 248, 248);
        }
        h4 {
            color: white;
        }

        img {
            border-radius: 20px;
            transform: rotate(2deg);
        }

        @media screen and (max-width: 900px) {
            #graphic-design {
                font-size: 70px;
            }
        }
    }
    
    #language {
        background-color: rgb(23, 66, 30);
        padding-bottom: 0;
        h2 {
            font-size: 90px;
            color: rgb(248, 248, 248);
        }
        h4 {
            color: white;
        }

        .lang {
            span {
                color: black;
                padding: 0.2em 0.6em;
                border-radius: 20px;
                display: inline-block;
                margin-bottom: 10px;
                color: white;
            }
            #english {
                background: linear-gradient(to right, rgb(59, 167, 131) 100%, darkgreen 90%);
            }
            #french {
                background: linear-gradient(to right, rgb(59, 167, 131) 60%, rgb(89, 124, 89) 60%);
            }
            #dutch {
                background: linear-gradient(to right, rgb(59, 167, 131) 15%, rgb(89, 124, 89) 15%);
            }
            #irish {
                background: linear-gradient(to right, rgb(59, 167, 131) 5%, rgb(89, 124, 89) 5%);
            }
        }

        @media screen and (max-width: 900px) {
            #research-researcher {
                font-size: 70px;
            }
        }
    }
    #research {
        background-color: rgb(73, 5, 82);
        padding-bottom: 0;
        img {
            max-height: 300px;
            margin-bottom: 30px;
        }
        h2 {
            font-size: 90px;
            color: rgb(248, 248, 248);
        }
        h4 {
            color: white;
        }

        img {
            border-radius: 20px;
            transform: rotate(2deg);
        }

        @media screen and (max-width: 900px) {
            #research-researcher {
                font-size: 70px;
            }
        }
    }
</style>
<br><br>
{#if activate}
    <h1 translate="no" transition:fly={{y:-200, duration: 1000}} id="name">I'M LYNN</h1>
    <h4 id="pronouns"><span transition:slide>She/They</span></h4>
    <br><br>
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
<Label loc="Hacklyn Square" />
<div style:height=150px><h1 style:opacity=0>Scroll down</h1></div>
{#if activate}
     <div transition:fly={{y:200, delay: 2000}}>
        <div id="new-york">
            <br>
            <h2><span style:color="lightgreen">I'M FROM</span><br>NEW YORK STATE </h2>
            <h4>It's the state that's better than New Jersey.</h4>
            <br> <br> <br>
            <img src="libby.png" alt="Rock Illustration with a Statue of Liberty Crown and Torch" />
            <!--<img src="ny.jpg" alt="Statue of Liberty" />-->
        </div>
        <div id="web">
            <br>
            <h2><span style:color="rgb(235, 128, 121)">I'M A</span><br>WEB <span id="web-dev">DEVELOPER</span></h2>
            <h4>From local clubs to a global non-profit, my impact has been on a wide scale. I primarily use SvelteKit.</h4>
            <br>
            <button style:background-color="darkred">See some of my work</button>
            <br> <br> <br>
            <img src="svelte.png" alt="Svelte Logo" />
            <!--<img src="ny.jpg" alt="Statue of Liberty" />-->
        </div>
         <div id="graphic">
            <br>
            <h2><span style:color="rgb(212, 211, 0)">I'M A</span><br>GRAPHIC <span id="graphic-design">DESIGNER</span></h2>
            <h4>Fun fact: I use Keynote for over 90% of my graphic design work.</h4>
            <br>
            <button style:background-color="gold" style:color="rgb(107, 107, 1)">See some of my work</button>
            <br> <br> <br>
            <img src="vogels/vogels.png" alt="Birds" />
            <!--<img src="ny.jpg" alt="Statue of Liberty" />-->
        </div>
        <div id="language">
            <br>
            <h2><span style:color="rgb(89, 192, 75)">I'M</span><br><span id="research-researcher">MULTILINGUAL</span></h2>
            <h4>In all fairness, a-lot of us are; however, I chose the weird languages.</h4>
            <br> <br> <br>
            <h3 class="lang"><span id="english">English</span></h3>
            <h3 class="lang"><span id="french">French</span></h3>
            <h3 class="lang"><span id="dutch">Dutch</span></h3>
            <h3 class="lang"><span id="irish">Irish Gaelic</span></h3>
            <br><br>
            <!--<img src="ny.jpg" alt="Statue of Liberty" />-->
        </div>
        <div id="research">
            <br>
            <h2><span style:color="rgb(204, 17, 211)">I'M A</span><br><span id="research-researcher">RESEARCHER</span></h2>
            <h4>My work currently explores the impact of Digital Game Based Learning on the retention of learned content.</h4>
            <br> <br> <br>
            <img src="research.png" alt="A Keynote slide from a research project" />
            <!--<img src="ny.jpg" alt="Statue of Liberty" />-->
        </div>
        <Footer />
     </div>
{/if}