<script>
    import "./styles.css"

    import Footer from "../lib/components/Footer.svelte";
    import Header from "../lib/components/Header.svelte";
</script>

<Header/>

<main>
    <slot></slot>
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