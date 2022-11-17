<script>
    import Button from "../lib/components/Button.svelte";

    export let data;
    import articleImage from "$lib/assets/ronrons.jpeg"

    let restaurants = data.restaurants;

    console.log(data.restaurants)
</script>

<section class="hero">
    <div class="heroContent">
        <h1>Yummy!</h1>
        <p class="baseline">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam at dolores error
            exercitationem fuga</p>
        <input type="search">
        <Button>CTA</Button>
    </div>

    <ul class="keyNumber">
        <li>
            <span>50</span>
            <span>Articles du blog</span>
        </li>
        <li>
            <span>73</span>
            <span>Commerces référencés</span>
        </li>
        <li>
            <span>23</span>
            <span>Commerçants interviewés</span>
        </li>
    </ul>
</section>

<section class="restos">
    <h2>Notre séléction personalisée</h2>

    <h3>Épicerie</h3>
    <div class="gridLayout">
        {#each restaurants as resto (resto.id)}
            {#if resto.type === 4}
                <div class="cardResto" style={`background-image: url(${resto.thumbnail});`}>
                    <span>{resto.name}</span>
                </div>
            {/if}
        {/each}
    </div>

    <h3>Restaurant</h3>
    <div class="gridLayout">
        {#each restaurants as resto (resto.id)}
            {#if resto.type === 2}
                <div class="cardResto" style={`background-image: url(${resto.thumbnail});`}>
                    <span>{resto.name}</span>
                </div>
            {/if}
        {/each}
    </div>

    <h3>Café</h3>
    <div class="gridLayout">
        {#each restaurants as resto (resto.id)}
            {#if resto.type === 5}
                <div class="cardResto" style={`background-image: url(${resto.thumbnail});`}>
                    <span>{resto.name}</span>
                </div>
            {/if}
        {/each}
    </div>
</section>

<section class="texte">
    <div>
        <h2>Les ronrons des chartrons</h2>
        <p>
            Les ronrons des chartrons est un bar à chat engagé pour l’environnement. Retrouvez les sur les quais des
            chartrons pour siiroter une limonade en compagnie de leurs adorables chats.

            Comment s’engagent-ils ? Découvrez le en lisant notre “interview du mois” !
        </p>
    </div>

    <img src={articleImage} alt="Image ronron">
</section>

<style>
    .gridLayout {
        display: flex;
        flex-direction: row;
        flex-wrap: nowrap;
        align-items: center;
        gap: 2rem;
        width: 100%;
        padding: 0;
        justify-content: flex-start;
        overflow: auto;
        margin: 0 0 4rem 0;
    }

    .cardResto {
        background-color: var(--white);
        min-width: 200px;
        height: 300px;
        border-radius: 20px;
        background-size: cover;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: flex-end;
        overflow: hidden;
    }

    .cardResto > span {
        background-color: var(--light-blue);
        width: 100%;
        text-align: center;
        padding: .5rem 0;
    }

    .hero {
        display: flex;
        flex-direction: row;
        justify-content: space-evenly;
        align-items: center;
        width: 100%;
        padding: 4rem;
    }

    .restos {
        background-color: var(--orange);
        width: 100%;
        padding: 2rem;

        display: flex;
        flex-direction: column;
        gap: 2rem;
    }

    .heroContent {
        display: flex;
        flex-direction: column;
        gap: 1rem;
        justify-content: flex-start;
        align-items: flex-start;
        max-width: 600px;
    }

    .keyNumber {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        padding: 0 1rem;
        margin: 0;
        list-style-type: none;
        border-radius: 1.5rem;
        overflow: hidden;
        background-color: var(--light-blue);
    }

    .keyNumber > li {
        margin: 0;
        padding: 2rem 1rem;
        background-color: var(--light-blue);
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
    }

    .keyNumber > li:nth-child(2) {
        border-bottom: solid 2px var(--white);
        border-top: solid 2px var(--white);
    }

    .keyNumber > li > span:first-of-type {
        font-size: 2rem;
        font-weight: bold;
        margin-bottom: .5rem;
    }

    .texte {
        display: flex;
        flex-direction: row;
        flex-wrap: wrap;
        justify-content: center;
        align-items: center;
        gap: 4rem;
        width: 100%;
        padding: 4rem;

    }

    .texte > div {
        display: flex;
        flex-direction: column;
        gap: 2rem;
        justify-content: flex-start;
        align-items: flex-start;
        width: 100%;
        max-width: 500px;

    }

    .texte > img {
        background-color: #ccc;
        width: 50%;
        max-width: 500px;
        aspect-ratio: 16 / 10;
        object-fit: cover;
        border-radius: 20px;
        min-width: 430px;
    }
</style>