<script>
    export let data;
</script>

<li>
    <img loading="lazy" width="164" height="164" src={data.image} alt={"Photo de profil de " + data.name}>
    <p class="title">{data.name}</p>
    <p>{data.job}</p>
</li>

<style>
    li {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
    }

    li > img {
        width: 10.25rem;
        height: 10.25rem;
        background-color: #ccc;
        border-radius: 100%;
    }

    p:not(.title) {
        margin: 0;
    }
</style>