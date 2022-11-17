<script>
    import Button from "../lib/components/Button.svelte";

    export let data;

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
            <span>Articles en ligne</span>
        </li>
        <li>
            <span>50</span>
            <span>Articles en ligne</span>
        </li>
        <li>
            <span>50</span>
            <span>Articles en ligne</span>
        </li>
    </ul>
</section>

<section class="restos">
    <h2>Notre séléction personalisée</h2>

    <h3>Épicerie</h3>
    <div class="gridLayout">
        {#each restaurants as resto (resto.id)}
            <!--epicerie-->
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
            <!--resto-->
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
            <!--café/salons-->
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
        <h2>Tire 2</h2>
        <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Distinctio dolorum enim
            itaque,
            mollitia nam quasi
            unde veniam? Ad, eaque eius error, eveniet facilis id in, iste libero nulla officia
            sapiente.
        </p>
    </div>

    <img src="" alt="fuck homepage">
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

    .texte {
        display: flex;
        flex-direction: row;
        justify-content: center;
        align-items: center;
        gap: 4rem;
        width: 100%;
    }

    .texte > div {
        display: flex;
        flex-direction: column;
        gap: 2rem;
        justify-content: flex-start;
        align-items: flex-start;
        max-width: 50%;
    }

    .texte > img {
        background-color: #ccc;
        max-width: 50%;
        aspect-ratio: 16 / 9;
    }
</style>