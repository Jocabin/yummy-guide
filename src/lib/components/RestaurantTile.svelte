<script>
    export let info;
</script>

<article>
    <img src={info.thumbnail} alt={`Image de la fiche restaurant "${info.name}"`}>

    <section>
        <h2>{info.name}</h2>
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
    }

    article > img {
        background-color: #ddd;
        width: 100%;
        aspect-ratio: 16 / 9;
        border-radius: 1rem;
    }

    section > h2 {
        margin: 0;
    }
</style>