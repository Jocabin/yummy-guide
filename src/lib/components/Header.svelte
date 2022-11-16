<script>
    import Logo from "$lib/components/Logo.svelte";
</script>

<header>
    <nav>
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

        <a class="button" href="/ajouter-commerce">Ajouter un commerce</a>
    </nav>
</header>

<style>
    header {
        width: 100%;
        background-color: var(--dark-blue);
        padding: 1rem;
        position: sticky;
        top: 0;
    }

    nav {
        width: 100%;
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: space-around;
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

    nav ul a {
        color: var(--white);
        text-decoration: none;
    }
</style>