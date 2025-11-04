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
                finalItemList.push({
                    "title": itemtitle,
                    "desc": itemdesc,
                    "date": itemdate,
                    "slug": itemslug
                })
                for (let i = 0; i < finalItemList.length; i++) {
                    if (finalItemList[i].slug == slug) {
                        //console.log("Found!");
                        let selectedPost = finalItemList[i];
                        title = selectedPost.title;
                        desc = selectedPost.desc;
                        date = selectedPost.date;
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
</style>
<Label loc="Hacklyn Times" returnTo = "blog" />
<div style:height=150px><h1 style:opacity=0>Scroll down</h1></div>
{#if activate}
    <h1 transition:slide={{delay: 200, duration:800}}>{title}</h1><br>
    <h2 id="date"><span transition:slide={{delay: 200, duration:800}}>{date}</span></h2>
    <h3 id="desc" transition:fly={{y:200, delay:700, duration:700}}><i>{desc}</i></h3>
    <br><br><br>
    <div id="content" transition:slide={{delay:1800}}>
        {@html postContent}
    </div>
    <Footer />
{/if}