<script>
    import Logo from "$lib/components/Logo.svelte";
    import RSLink from "$lib/components/RSLink.svelte";
</script>

<footer>
    <div>
        <a href="/" class="logo" title="accueil">
            <Logo/>
        </a>

        <nav>
            <a href="/notre-concept" title="Notre concept" target="_self">Notre concept</a>
            <a href="/commerces-responsables" title="Les commerces responsables" target="_self">Les commerces
                responsables</a>
            <a href="/blog" title="Blog" target="_self">Blog</a>
            <a href="/faq" title="F.A.Q" target="_self">FAQ</a>
            <a href="/nous-contacter" title="Contact" target="_self">Contact</a>
        </nav>
        <ul class="reseaux">
            <RSLink url="https://www.facebook.com/profile.php?id=100087622582546" social="facebook"/>
            <RSLink url="https://www.instagram.com/yummy.guide_/" social="instagram"/>
            <RSLink social="twitter"/>
        </ul>
    </div>
    <nav>
        <a href="/mentions-legales" title="Mentions légales" target="_self">Mentions légales</a>
        <a href="/politique-confidentialite" title="Politique de confidentialité" target="_self">Politique de
            confidentialité</a>
    </nav>
</footer>

<style lang="sass">
  footer
    background-color: $dark-blue
    display: flex
    flex-direction: column
    align-items: center
    gap: 2rem
    padding: 3em 1em 2em 1em

    nav
      display: flex
      gap: 20px

      a
        text-decoration: none
        color: $white
        font-size: 1em
        font-weight: 700
        transition: all ease-in-out 150ms

        &:hover, &:focus
          color: $orange

    div
      display: flex
      width: 100%
      align-items: center
      justify-content: space-around

      a.logo
        max-width: 180px
        display: block

      nav
        display: flex
        gap: 20px

        a
          text-decoration: none
          color: $white
          font-size: 1em
          font-weight: 700
          transition: all ease-in-out 150ms

          &:hover, &:focus
            color: $orange

    ul
      display: flex
      gap: 1rem
      list-style-type: none

      a
        text-decoration: none
        color: $white
        font-size: .75em
        font-weight: 700
        transition: all ease-in-out 150ms

        &:hover, &:focus
          color: $orange
</style>