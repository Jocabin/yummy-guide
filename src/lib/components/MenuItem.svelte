<script>
    import {page} from "$app/stores"

    export let href = '/';
</script>
<a href={href} title="Accueil" class:active={$page.url.pathname === href}><slot></slot></a>

<style>
    .active {
        color: var(--orange);
    }

    a {
        text-decoration: none;
        color: var(--white);
        font-size: 1em;
        font-weight: 700;
        transition: all ease-in-out 150ms;
    }

    a:focus {
        color: var(--orange);
    }

    @media (hover: hover) {
        a:hover {
            color: var(--orange);
        }
    }
</style>