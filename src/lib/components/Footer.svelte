<script>
    import Logo from "$lib/components/Logo.svelte";
    import RSLink from "$lib/components/RSLink.svelte";
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
            <RSLink social="facebook" url="/"/>
            <RSLink social="instagram" url="/"/>
            <RSLink social="twitter" url="/"/>
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

    ul a {
        color: var(--white);
    }
</style>