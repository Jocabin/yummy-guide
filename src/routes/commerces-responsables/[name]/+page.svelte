<script>
    //todo map à faire
    import {supabase} from "$lib/supabaseClient";
    import Breadcrumb from "$lib/components/Breadcrumb.svelte";
    import image from "$lib/assets/ronronblog.jpeg"

    export let data;
    let pageData = data.restaurant[0];
    let tags = [];

    console.log(pageData)

    let point = {
        address: pageData.address,
        lat: pageData.latitude,
        long: pageData.longitude
    }

    async function getTag(itemId) {
        const {data, error} = await supabase.from('tags').select().eq("id", itemId);
        error && console.error(error)
        return data
    }

    JSON.parse(pageData.tags).forEach(item => {
        console.log(item)
        getTag(item)
            .then(res => {
                tags = [...tags, res[0]]
            })
    })
</script>
<section class="heading">
    <picture>
        <img alt={pageData.name} src={pageData.thumbnail}>
    </picture>
</section>
<Breadcrumb/>
<section class="infos">
    <div class="wrapper-section">
        <ul class="tags">
            {#each tags as tag (tag.id)}
                <li>{tag.name}</li>
            {/each}
        </ul>
        <h1 class="title">{pageData.name}</h1>
        <p>{pageData.description}</p>
    </div>
</section>
<section id="map">
    <iframe
            allowfullscreen
            frameborder="0"
            height="250" referrerpolicy="no-referrer-when-downgrade"
            src={`https://www.google.com/maps/embed/v1/place?key=AIzaSyA0n6tlDmXklI2kMKIxLOXn-3_V0cZDeR0&q=${point.address}&center=${point.lat},${point.long}`}
            style="border:0"
            width="450">
    </iframe>
</section>

{#if pageData.id === 22}
    <section class="blog">
        <h2>Interview</h2>

        <img src={image} alt="">
        <h3>Pourquoi avoir décidé de servir uniquement des produits végétariens et vegans ?</h3>
        <p>
            Nous sommes nous même végétariens et cela correspond à nos valeurs.
            Nous voulions créer un lieu qui nous ressemble, qui soit respectueux des animaux et de la planête.
        </p>
        <h3>Où vous fournissez vous en aliments ?
            Avez-vous eu une démarche éco-responsable
            lors de ce choix ?</h3>

        <p>Nous achetons nos produits vegan (seitan, chantilly vegan...) dans une petite boutique spécialisé dans les
            aliments vegan (Graines et Cailloux). Nos thés proviennent également d'une boutique indépendante (Un Air de
            Thé) qui veille à sourcer leurs produits de manière écoresponsable et dans le respect de l'humain. Le reste
            provient de Metro.</p>

        <h3>Quels actions éco-responsables avez-vous mis en place dans votre bar à chat ?</h3>
        <p>Nous avons meublé quasiment tout le café avec des canapés et des tables récupérées (chez des mamies, à Emaus, dans des brocantes...). Nous évitons au maximum le gaspillage alimentaire et utilisons des appli anti-gaspi comme Phenix et Too Good to Go. Nous sommes aussi Famille d'Accueil pour des chats et les hébergeons jusqu'à ce qu'ils trouvent leurs adoptants.</p>
        <h3>Quelle place a eu l'éco-responsabilité dans la création de votre bar à chat ? Avez-vous été inspiré par d'autres commerces ? Votre vécu a-t-il eu un impact ?</h3>
        <p>Nous avons meublé quasiment tout le café avec des canapés et des tables récupérées (chez des mamies, à Emaus, dans des brocantes...). Nous évitons au maximum le gaspillage alimentaire et utilisons des appli anti-gaspi comme Phenix et Too Good to Go. Nous sommes aussi Famille d'Accueil pour des chats et les hébergeons jusqu'à ce qu'ils trouvent leurs adoptants.</p>
    </section>
{/if}

<style lang="sass">
  .blog
    padding: 2rem

    p, h3
      margin: 0

    p
      margin-bottom: 4rem

    h3
      margin-bottom: 1rem
    img
      float: left
      width: 500px
      margin: 0 4rem 1rem 0
  #map
    height: 600px
    width: 80%
    padding: 2rem
    display: flex
    align-self: center
    justify-content: center

    iframe
      width: 100%
      height: 100%

  .tags
    padding: 0
    margin: 3rem 0
    display: flex
    flex-direction: row
    align-items: center
    justify-content: flex-start
    list-style-type: none
    gap: 1rem

    li
      border: 2px solid $orange
      padding: .5rem 1rem
      border-radius: 100rem
      color: $orange

  section
    width: 100%

    &.heading
      picture
        background-color: $black
        display: block
        width: 100%
        height: 400px

        img
          width: 100%
          height: 100%
          object-fit: cover
          object-position: center center
          opacity: 1

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