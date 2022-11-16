<script>
    import Button from "../lib/components/Button.svelte";

    export let data;

    let restaurants = data;
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
        <li>340</li>
        <li>340</li>
        <li>340</li>
    </ul>
</section>

<section class="texte">
    <div>
        <h2>Tire 2</h2>
        <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Distinctio dolorum enim itaque, mollitia nam quasi
            unde veniam? Ad, eaque eius error, eveniet facilis id in, iste libero nulla officia sapiente.
        </p>
    </div>

    <img src="" alt="fuck homepage">
</section>

<style>
    .hero {
        display: flex;
        flex-direction: row;
        justify-content: space-evenly;
        align-items: center;
        width: 100%;
        padding: 4rem;
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

