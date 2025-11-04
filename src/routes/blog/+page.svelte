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
            console.log(link);
            //console.log(items);
            
            let itemList = Array.from(items);
            finalItemList = [{"link": link}];
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
            })
            console.log(finalItemList);
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

    #profile-row {
        max-width: 150px;
        h2 {
            font-size: 40px;
            margin: 0;
        }
    }
    #posts-row {
        max-width: 300px;
        margin-left: 20px;
        margin-right: 20px;
        h3 {
            font-size: 15px;
        }
    }
    @media screen and (max-width: 880px) {
        #profile-row {
            display: none;
        }
    }

    a {
        text-decoration: none;
        color: white;
    }
    .post {
        background-color: rgb(56, 10, 56);
        color: white;
        padding: 10px;
        padding-top: 30px;
        padding-bottom: 30px;
        border-top-left-radius: 30px;
        border-bottom-left-radius: 30px;
        margin-bottom: 15px;
        h3 {
            font-family: Space Grotesk, Futura;
        }
        h5 {
            font-weight: 900;
        }
        :hover {
            cursor: pointer;
        }
    }
</style>
<Label loc="Hacklyn Times" returnTo = "square" />
<div style:height=150px><h1 style:opacity=0>Scroll down</h1></div>
{#if activate}
    <table>
        <tbody>
            <tr>
                <td id="profile-row">
                    <h2 transition:slide={{y:-200, duration:700, delay:1400}}>LYNN'S BLOG</h2>
                    <h3>[Profile goes here]</h3>
                </td>
                <td transition:fly={{x:300, duration:700, delay:100}} id="posts-row">
                    {#each finalItemList as post}
                        {#if post.title != null} 
                            <a href = '{base}/blog/{post.slug}'>
                                <div class="post">
                                    <h2><span>{post.title}</span></h2>
                                    <br>
                                    <h3>{post.desc}</h3>
                                    <br>
                                    <h5><span>{post.date}</span></h5>
                                </div>
                            </a>
                        {/if}
                    {/each}
                </td>
            </tr>
        </tbody>
    </table>
{/if}