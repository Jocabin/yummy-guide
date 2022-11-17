<script>
    //todo map à faire
    export let data;
    let pageData = data.restaurant[0];
</script>

<section class="heading">
    <picture>
        <img src={pageData.thumbnail} alt={pageData.name}>
    </picture>
</section>
<section class="infos">
    <div class="wrapper-section">
        <h1 class="title">{pageData.name}</h1>
        <p>{pageData.description}</p>
    </div>
</section>
<section class="map">
    <div class="wrapper-section">
    </div>
</section>

<style lang="sass">
    section
      width: 100%
      &.heading
        picture
          display: block
          width: 100%
          height: 600px
          img
            width: 100%
            height: 100%
            object-fit: cover
            object-position: center center
      &.infos
        div.wrapper-section
          max-width: $maxWidth
          margin-inline: auto
          h1.title
              font-family: 'Forma DJR Micro'
              font-weight: 500
              font-size: 24px
          p.description
              font-weight: 400

</style>