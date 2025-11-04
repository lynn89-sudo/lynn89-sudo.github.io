<script>
    import { onMount } from "svelte";
    import { base } from "$app/paths";

    import { page } from "$app/stores";

    let slug = $page.params.slug;

    import Footer from "$lib/footer.svelte";
    import Label from "$lib/label.svelte";

    import { draw, fly, slide } from "svelte/transition"

    let activate = $state(false);
    /*
    onMount(function() {
        setTimeout(function() {
            activate = true;
        }, 200)
    })
        */
    let link = $state("");
    let title = $state("");
    let date = $state("");
    let desc = $state("");
    let postContent = $state("");
    let live = $state(false);

    let finalItemList = $state([]);
    onMount(function() {
        fetch ("https://hacklynnest.hackclub.app/rss.xml")
        .then((response) => {
            if (!response.ok) {
                throw new Error("FETCH ERROR");
            }
            return response.text();
        })
        .then((response) => {
            let parser = new DOMParser();
            let xmlDoc = parser.parseFromString(response, "text/xml");

            let items = xmlDoc.querySelectorAll("item");
            let link = xmlDoc.querySelector("link").textContent;
            //console.log(link);
            //console.log(items);
            
            let itemList = Array.from(items);
            finalItemList = [];
            //console.log(itemList);
            itemList.forEach(doc => {
                let itemtitle = doc.querySelector("title").textContent;
                let itemdate = doc.querySelector("date").textContent;
                let itemdesc = doc.querySelector("desc").textContent;
                let itemslug = doc.querySelector("slug").textContent;
                let itemlive = doc.querySelector("live").textContent;
                finalItemList.push({
                    "title": itemtitle,
                    "desc": itemdesc,
                    "date": itemdate,
                    "slug": itemslug,
                    "live": itemlive
                })
                for (let i = 0; i < finalItemList.length; i++) {
                    if (finalItemList[i].slug == slug) {
                        //console.log("Found!");
                        let selectedPost = finalItemList[i];
                        title = selectedPost.title;
                        desc = selectedPost.desc;
                        date = selectedPost.date;
                        if (selectedPost.live == "true") {
                            live = true;
                        }
                        setTimeout(() => {activate = true;}, 100);
                        //console.log(title, selectedPost, selectedPost.title)
                        break;
                    }
                }
                if (title == "" ) {
                    title = "Uh oh";
                    desc = "It would appear that this blog post does not exist, or has been deleted";
                    setTimeout(() => {activate = true;}, 100);
                }
                else {
                    fetch(link + slug + ".txt")
                    .then((response) => {
                        if (!response.ok) {
                            throw new Error("FETCH ERROR");
                        }
                        return response.text();
                    })
                    .then((response) => {
                        //console.log(response);
                        postContent = response;
                    })
                }
            })
        })

    })
</script>
<svelte:head>
    <title>Blog | The Hacklyn Times</title>
</svelte:head>
<style>
    h1 {
        font-size: 50px;
    }
    #desc {
        font-family: Space Grotesk, Futura !important;
        margin-top: 40px;
        font-size: 15px;
        margin-left: 20px;
        margin-right: 20px;
    }

    #date {
        font-family: Space Grotesk, Futura;
        span {
            color: white;
            background-color: rgb(48, 4, 48);
            padding: 15px;
            border-radius: 20px;
            font-family: Space Grotesk, Futura;
        }
    }

    #content {
        background-color: rgb(65, 19, 92);
        padding: 20px;
        border-top-right-radius: 30px;
        border-top-left-radius: 30px;
        color: white;
    }

    @keyframes pulse {
        0% {
            opacity: 1;
        }
        50% {
            opacity: 0;
        }
        100% {
            opacity: 1;
        }
    }
    #live {
        #live-span {
            color: white;
            background-color: rgb(126, 34, 34);
            padding: 15px;
            border-radius: 20px;
            font-family: Space Grotesk, Futura;

            span {
                animation: pulse 2s infinite ease-in-out;
                margin-right: 10px;
            }
        }
    }
</style>
<Label loc="Hacklyn Times" returnTo = "blog" />
<div style:height=150px><h1 style:opacity=0>Scroll down</h1></div>
{#if activate}
    <h1 transition:slide={{delay: 200, duration:800}}>{title}</h1><br>
    <h2 id="date"><span transition:slide={{delay: 200, duration:800}}>{date}</span></h2>
    <br><br>
    {#if live}
        <h2 id="live"><span id="live-span" transition:slide={{delay: 300, duration:800}}><span>●</span>Live Updates</span></h2>
        <br><br>
    {/if}
    <h3 id="desc" transition:fly={{y:200, delay:700, duration:700}}><i>{desc}</i></h3>
    <br><br><br>
    <div id="content" transition:slide={{delay:1800}}>
        <br>
        {@html postContent}
        <br>
        <h3 style:font-family="Playwrite DK Loopet">- lynn</h3>

    </div>
    <Footer />
{/if}