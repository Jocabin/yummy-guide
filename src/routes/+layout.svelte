<script>
    import "./styles.css"

    import Footer from "../lib/components/Footer.svelte";
    import Header from "../lib/components/Header.svelte";
    import Cookie from "$lib/components/Cookie.svelte";

    // import {cookie} from "$lib/store";
</script>

<Header/>

<main>
    <slot></slot>

    {#if false}
        <Cookie/>
    {/if}
</main>

<Footer/>

<style>
    main {
        display: flex;
        flex-direction: column;
        justify-content: flex-start;
        align-items: center;
        width: 100%;
    }
</style>