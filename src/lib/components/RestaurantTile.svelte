<script>
    export let info;
    import {onMount} from "svelte";
    import {getLocation} from "$lib/distancematrix.js";
    let distance;

    onMount(()=>{
        getLocation(44.85383665167368, -0.5668104057436363).then((data)=>{
            distance = data;
        });
    })
</script>

<article>
    <img src={info.thumbnail} alt={`Image de la fiche restaurant "${info.name}"`}>

    <section>
        <h2>{info.name}</h2>
        {Math.round(distance * 100) / 100+ " km"}
        <p>{info.description}</p>
<!--        todo add tags-->
    </section>
</article>

<style>
    article {
        display: flex;
        flex-direction: column;
        gap: 1rem;
        align-items: flex-start;
        justify-content: flex-start;
        overflow: hidden;
    }

    article > img {
        background-color: #ddd;
        object-fit: cover;
        width: 100%;
        aspect-ratio: 16 / 9;
        border-radius: 1rem;
        object-fit: cover;
    }

    section > h2 {
        margin: 0;
    }
</style>