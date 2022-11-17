<script>
    //todo map à faire
    import {supabase} from "$lib/supabaseClient";
    import Breadcrumb from "$lib/components/Breadcrumb.svelte";

    export let data;
    let pageData = data.restaurant[0];
    let tags = [];

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

<Breadcrumb/>

<section class="heading">
    <picture>
        <img src={pageData.thumbnail} alt={pageData.name}>
    </picture>
</section>
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
<section class="map">
    <div class="wrapper-section">
    </div>
</section>

<style lang="sass">
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