<script>
    import { onMount } from "svelte";
    import { base } from "$app/paths";

    import { page } from "$app/stores";

    let slug = $page.params.slug;

    import Footer from "$lib/footer.svelte";
    import Label from "$lib/label.svelte";

    import { draw, fly, slide } from "svelte/transition"

    let activate = $state(false);
    onMount(function() {
        setTimeout(function() {
            activate = true;
        }, 200)
    })
    let link = $state("");

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
                let title = doc.querySelector("title").textContent;
                let date = doc.querySelector("date").textContent;
                let desc = doc.querySelector("desc").textContent;
                let slug = doc.querySelector("slug").textContent;
                finalItemList.push({
                    "title": title,
                    "desc": desc,
                    "date": date,
                    "slug": slug
                })
                for (let i = 0; i < finalItemList.length; i++) {
                    if (finalItemList[i].slug == slug) {
                        console.log("Found!");
                        break;
                    }
                }
            })
        })

    })
</script>
<svelte:head>
    <title>Blog | The Hacklyn Times</title>
</svelte:head>