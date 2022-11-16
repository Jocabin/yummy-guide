<script>

</script>
<section class="texteImage">
    <div class="wrapper-section">
        <div class="istxt">
            <h1>Notre concept</h1>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab cumque delectus expedita fugiat itaque iusto
                placeat possimus provident quae, quas. Ad est itaque molestiae nostrum quibusdam recusandae repudiandae
                sunt velit.</p>
            <p>Facere fuga non perspiciatis quam quis tempora veniam! Ad blanditiis ducimus est ex facere facilis
                mollitia, nam nulla obcaecati optio perspiciatis quae quas quia quod recusandae rem sint totam,
                ullam!</p>
        </div>
        <picture>
            <img src="https://www.santevet.com/upload/admin/images/article/PMO/FICHES%20RACES/CHATS/chat_de_gouttiere_assurance_sant%C3%A9vet.jpg"
                 alt="">
        </picture>
    </div>
</section>
<section class="texte2">
    <div class="wrapper-section">
        <h2>Nos missions</h2>
        <div class="istxt">
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi aperiam corporis exercitationem hic,
                possimus quisquam similique sint! Accusantium alias asperiores commodi, dolores et nisi obcaecati
                provident quidem tenetur voluptate! Impedit.</p>
        </div>
        <div class="istxt">
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi aperiam corporis exercitationem hic,
                possimus quisquam similique sint! Accusantium alias asperiores commodi, dolores et nisi obcaecati
                provident quidem tenetur voluptate! Impedit.</p>
        </div>
    </div>
</section>
<section class="equipe">
    <div class="wrapper-section">
        <h2>Notre équipe</h2>
        <ul>

        </ul>
    </div>
</section>

<style lang="sass">
  section
    width: 100%
    padding-block: 2em

    div.wrapper-section
      max-width: $maxWidth
      margin-inline: auto
      display: grid
      grid-template-columns: repeat(2, 1fr)
      gap: 1em 5em
      picture
        display: block
        border-radius: 10px
        overflow: hidden

        img
          width: 100%
          height: 100%
          object-fit: cover
          object-position: center center

      h2
        grid-column: span 2

    &.texteImage
      background-color: $green
    &.equipe
      background-color: $light-blue
      display: flex
      flex-direction: column

      h2
          grid-column: span 6
          div.wrapper-section
            gap: 10em
</style>