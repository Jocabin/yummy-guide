<script>
    import TeamItem from "$lib/components/TeamItem.svelte";

    export let data;
</script>

<section class="concept">
    <div>
        <h2>Notre concept</h2>
        <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Distinctio dolorum enim itaque, mollitia nam quasi
            unde veniam? Ad, eaque eius error, eveniet facilis id in, iste libero nulla officia sapiente.
        </p>
    </div>

    <img src="" alt="fuck concept">
</section>

<section class="missions">
    <h2>Notre mission</h2>
    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab amet cum facilis itaque laborum nulla quas quis repellendus voluptatum! Atque cum cupiditate deserunt excepturi incidunt possimus quae? Accusantium, consectetur, odio?</p>
</section>

<section class="team">
    <h2>Notre équipe</h2>
    <ul class="gridLayout">
        {#each data.team as member (member.id)}
            <TeamItem member={member} />
        {/each}
    </ul>
</section>

<style>
    section {
        padding: 0 2rem;
    }
    .gridLayout {
        display: grid;
        grid-template-columns: repeat(auto-fill, 200px);
        grid-template-rows: repeat(auto-fill, 300px);
        gap: 4rem;
        width: 100%;
        padding: 0;
        margin: 0;
        text-align: center;
        justify-content: center;
    }

    .concept {
        display: flex;
        flex-direction: row;
        justify-content: center;
        align-items: center;
        gap: 4rem;
        background-color: var(--green);
        width: 100%;
    }

    .concept > div {
        display: flex;
        flex-direction: column;
        gap: 2rem;
        justify-content: flex-start;
        align-items: flex-start;
        max-width: 50%;
    }

    .concept > img {
        background-color: #ccc;
        max-width: 50%;
        aspect-ratio: 16 / 9;
    }

    .team {
        width: 100%;
        text-align: center;
        background-color: var(--light-blue);
        padding: 4rem 1rem;
    }

    .team > h2 {
        margin-bottom: 4rem;
    }
</style>