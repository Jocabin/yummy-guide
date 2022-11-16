<script>
    import Logo from "$lib/components/Logo.svelte";
</script>

<footer>
    <div class="footerLine">
        <a href="/">
            <Logo/>
        </a>

        <ul>
            <li><a href="/notre-concept">Notre concept</a></li>
            <li><a href="/commerces-responsables">Les commerces responsables</a></li>
            <li><a href="/blog">Blog</a></li>
            <li><a href="/faq">FAQ</a></li>
            <li><a href="/nous-contacter">Contact</a></li>
        </ul>

        <ul>
            <li><a class="rs" href="https://facebook.com">
            </a></li>

            <li><a class="rs" href="https://instagram.com">
            </a></li>

            <li><a class="rs" href="https://twitter.com">
            </a></li>
        </ul>
    </div>

    <ul>
        <li><a href="/mentions-légales">Mentions légales</a></li>
        <li><a href="/confidentialité">Politique de confidentialité</a></li>
    </ul>
</footer>

<style>
    footer {
        background-color: var(--dark-blue);
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        width: 100%;
        padding: 2rem;
        gap: 4rem;
    }

    .footerLine {
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: space-evenly;
        width: 100%;
    }

    ul {
        padding: 0;
        margin: 0;
        list-style: none;
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: center;
        gap: 2rem;
    }

    ul a:not(.rs) {
        color: var(--white);
    }

    a.rs {
        text-decoration: none;
        color: var(--white);
        width: 2.5rem;
        height: 2.5rem;
        background-color: red;
        display: block;
    }

    a.rs > img {
        width: 100%;
        height: 100%;
    }
</style>