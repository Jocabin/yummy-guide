<script>
    //todo à faire
    import {page} from "$app/stores"

    let paths = $page.url.pathname.split("/")
</script>

<div>
    <a href="/">Accueil</a>

    {#each paths as path}
        {#if path !== ""}
            <span>&nbsp;>&nbsp;</span>
        {/if}

        <span>{path}</span>
    {/each}
</div>

<style lang="sass">
  div
    display: flex
    flex-direction: row
    align-items: center
    justify-content: flex-start
    padding: 1rem
    gap: .5rem
    align-self: flex-start

    a
      color: $black
      text-decoration: none
      border-bottom: 1px solid $black
</style>