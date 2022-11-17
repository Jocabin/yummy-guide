<script>
    import TeamItem from "$lib/components/TeamItem.svelte";
    import image from "$lib/assets/image.png"

    export let data;
</script>

<section class="concept">
    <div>
        <h2>Notre concept</h2>
        <p>
            Yummy est un guide de solutions éco-responsables alimentaires. Il peut s’agir d’un restaurant qui utilise
            uniquement des produits de saison, d’un café qui importe les grains d’un pays proche, ou même d’une épicerie
            qui livre ses produits à vélo… Nous nous engageons à ce que les commerces que nous recensons sur notre site
            aient une réflexion éco-responsable.

            Notre objectif global est d'assurer le recensement d'un maximum de commerces (restaurants, cafés,
            épiceries...) qui proposent des produits ou des démarches responsables, afin de faciliter la recherche que
            peuvent effectuer de potentiels prospects.

            Nous procédons par notation de chacun des commerces selon les actions qu’ils mettent en place dans leur
            établissement. Selon la note que nous leur attribuons, ceux-ci seront plus ou moins recommandé ou mise en
            avant sur notre site. Ceci s’applique également à la distance qui va séparer l’utilisateur de Yummy, du
            commerce qui l’intéresse.


        </p>
    </div>

    <picture>
        <img width="100" height="100" src={image} alt="Concept">
    </picture>
</section>

<section class="missions">
    <h2>Notre mission</h2>
    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab amet cum facilis itaque laborum nulla quas quis
        repellendus voluptatum! Atque cum cupiditate deserunt excepturi incidunt possimus quae? Accusantium,
        consectetur, odio?</p>
</section>

<section class="team">
    <h2>Notre équipe</h2>
    <ul class="gridLayout">
        {#each data.team as member (member.id)}
            <TeamItem member={member}/>
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

    .concept > picture {
        aspect-ratio: 16 / 9;
        min-width: 400px;
        max-width: 500px;
        border-radius: 20px;
        position: relative;
        z-index: 1;
    }

    .concept > picture::before {
        content: "";
        position: absolute;
        right: 1rem;
        left: -1rem;
        top: 1rem;
        bottom: -1rem;
        border-radius: 20px;
        z-index: -1;
        background-color: var(--green);
    }

    .concept > picture > img {
        z-index: 3;
        width: 100%;
        height: 100%;
        border-radius: 20px;
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