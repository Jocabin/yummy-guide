<script>
    //todo map à faire
    import {supabase} from "$lib/supabaseClient";
    import Breadcrumb from "$lib/components/Breadcrumb.svelte";

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

<style lang="sass">
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