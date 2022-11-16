<script>
    import Logo from "$lib/components/Logo.svelte"
</script>

<header>
        <a href="/" class="logo" title="accueil" target="_self">
            <Logo/>
        </a>
            <nav>
                <a href="/" title="Accueil" target="_self">Accueil</a>
                <a href="/notre-concept" title="Notre concept" target="_self">Notre concept</a>
                <a href="/commerces-responsables" title="Les commerces responsables" target="_self">Les commerces responsables</a>
                <a href="/blog" title="Blog" target="_self">Blog</a>
                <a href="/faq" title="F.A.Q" target="_self">F.A.Q</a>
                <a href="/nous-contacter" title="Contact" target="_self">Contact</a>
                <a class="button" href="/ajouter-commerce" title="Ajouter un commerce" target="_self">Ajouter un commerce</a>
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
        a
          text-decoration: none
          color: $white
          font-size: 1em
          font-weight: 700
          transition: all ease-in-out 150ms
          &:hover, &:focus
            color: $orange

          &.button
            font-size: 1em
            padding: 1em 2em
            background-color: rgba($orange, 1)
            color: $white
            text-align: center
            text-decoration: none
            border-radius: 100rem
            transition: all ease-in-out 150ms
            border: 2px solid $orange
            &:hover, &:focus
              background-color: rgba($orange, 0)
              color: rgba($orange, 1)
              font-weight: 700

</style>