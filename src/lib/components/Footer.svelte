<script>
    import Logo from "$lib/components/Logo.svelte";
    import Facebook from "$lib/components/Facebook.svelte";
    import Instagram from "$lib/components/Instagram.svelte";
    import Twitter from "$lib/components/Twitter.svelte";
</script>

<footer>
    <div>
        <a href="/" class="logo" title="accueil" target="_self">
            <Logo/>
        </a>
        <nav>
            <a href="/notre-concept" title="Notre concept" target="_self">Notre concept</a>
            <a href="/commerces-responsables" title="Les commerces responsables" target="_self">Les commerces
                responsables</a>
            <a href="/blog" title="Blog" target="_self">Blog</a>
            <a href="/faq" title="F.A.Q" target="_self">F.A.Q</a>
            <a href="/nous-contacter" title="Contact" target="_self">Contact</a>
        </nav>
        <nav class="reseaux">
            <a href="https://facebook.com" title="Facebook" target="_blank" rel="nofollow">
                <Facebook/>
            </a>
            <a href="https://instagram.com" title="Instagram" target="_blank" rel="nofollow">
                <Instagram/>
            </a>
            <a href="https://twitter.com" title="Twitter" target="_blank" rel="nofollow">
                <Twitter/>
            </a>
        </nav>
    </div>
    <nav>
        <nav>
            <a href="/mentions-legales" title="Mentions légales" target="_self">Mentions légales</a>
            <a href="/politique-confidentialite" title="Politique de confidentialité" target="_self">Politique de
                confidentialité</a>
        </nav>
    </nav>
</footer>

<style lang="sass">
  footer
    background-color: $dark-blue
    display: flex
    flex-direction: column
    align-items: center
    gap: 4em
    padding: 3em 1em 2em 1em

    div
      display: flex
      width: 100%
      align-items: center
      justify-content: space-around

      a.logo
        max-width: 180px

      nav
        display: flex

        &:not(.reseaux)
          gap: 20px

        a
          text-decoration: none
          color: $white
          font-size: 1em
          font-weight: 700
          transition: all ease-in-out 150ms

          &:hover, &:focus
            color: $orange

        &.reseaux
          display: flex
          align-items: center
          gap: 30px

          a
            max-width: 45px

    nav
      display: flex
      gap: 20px

      a
        text-decoration: none
        color: $white
        font-size: .75em
        font-weight: 700
        transition: all ease-in-out 150ms

        &:hover, &:focus
          color: $orange
</style>