<script>
    import Logo from "$lib/components/Logo.svelte"
    import MenuItem from "$lib/components/MenuItem.svelte";
</script>

<header>
        <a href="/" class="logo" title="accueil" target="_self">
            <Logo/>
        </a>
            <nav>
                <MenuItem href="/">Accueil</MenuItem>
                <MenuItem href="/notre-concept">Notre concept</MenuItem>
                <MenuItem href="/commerces-responsables">Commerces responsables</MenuItem>
                <MenuItem href="/blog">Blog</MenuItem>
                <MenuItem href="/faq">FAQ</MenuItem>

                <a class="button" href="/commerces-responsables/ajouter" title="Ajouter un commerce" target="_self">Ajouter un commerce</a>
            </nav>
</header>

<style lang="sass">
    header
      display: flex
      align-items: center
      background-color: $dark-blue
      padding: 1em
      justify-content: space-around
      a.logo
        max-width: 128px
      nav
        display: flex
        align-items: center
        gap: 2em

      .button
        font-size: 1em
        padding: .75em 2em
        background-color: rgba($orange, 1)
        color: $white
        text-align: center
        text-decoration: none
        border-radius: 100rem
        transition: all ease-in-out 150ms
        border: 2px solid $orange
        font-weight: 700

        &:hover, &:focus
          background-color: rgba($orange, 0)
          color: rgba($orange, 1)
          font-weight: 700

</style>