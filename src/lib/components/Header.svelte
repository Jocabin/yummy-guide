<script>
    import Logo from "$lib/components/Logo.svelte"
</script>

<header>
        <a href="/" class="logo">
            <Logo/>
        </a>
            <nav>
                <a href="/">Accueil</a>
                <a href="/notre-concept">Notre concept</a>
                <a href="/commerces-responsables">Les commerces responsables</a>
                <a href="/blog">Blog</a>
                <a href="/faq">FAQ</a>
                <a href="/nous-contacter">Contact</a>
                <a class="button" href="/ajouter-commerce">Ajouter un commerce</a>
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