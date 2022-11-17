<script>
    import {supabase} from "$lib/supabaseClient.js";
    import {onMount} from "svelte";
    import {distanceMatrix, getLocation} from "$lib/distancematrix.js";
    import {fade} from "svelte/transition"

    export let info;
    let tags = []
    let note = 0

    let distance;
    let distanceNote;
    let type;

    async function getTag(itemId) {
        const {data, error} = await supabase.from('tags').select().eq("id", itemId);
        error && console.error(error)
        return data
    }

    async function getType(itemId) {
        const {data, error} = await supabase.from('types').select().eq("id", itemId);
        error && console.error(error)
        return data
    }

    onMount(() => {
        getLocation().then((data) => {
            distance = distanceMatrix(data.latitude, data.longitude, info.latitude, info.longitude)
            if (distance <= 1) {
                distanceNote = 50
            } else if (distance > 1 && distance <= 5) {
                distanceNote = 20
            } else {
                distanceNote = 5
            }
        });
        JSON.parse(info.tags).forEach(item => {
            getTag(item)
                .then(res => {
                    note = note + res[0].points
                    tags = [...tags, res[0]]
                })
        })
        getType(info.type)
            .then(res => type = res[0])
    })

</script>

<article transition:fade>
    <div class="wrapper">
        <picture>
            {#if distanceNote}
                <span class="note" transition:fade>{parseInt(note) + distanceNote} pts</span>
            {/if}
            <img alt={info.name} src={info.thumbnail}>
        </picture>
        <div class="txt">
            {#if type}
                <span class="tagType">{type.name}</span>
            {/if}
            <ul class="tags">
                {#each tags as tag, key (tag)}
                    <li>{tag.name}</li>
                {/each}
            </ul>
            {#if distance}
                <p>{distance + " km"}</p>
            {/if}
            <span class="title">{info.name}</span>
            <p class="description">
                {info.description}
            </p>
        </div>
    </div>
    <a class="more" href={`/commerces-responsables/`+info.url}>En savoir plus</a>
</article>

<style lang="sass">
  article
    display: flex
    flex-direction: column
    justify-content: space-between
    gap: 1em
    padding: 10px 10px 20px 10px
    border-radius: 10px
    transition: all ease-in-out 300ms
    width: 100%

    &:hover, &:focus
      background-color: rgba(white, 1)

    picture
      display: block
      width: 100%
      height: 200px
      overflow: hidden
      border-radius: 10px
      position: relative

      span.note
        position: absolute
        top: 1em
        left: 0
        background-color: $orange
        color: $white
        padding: .25em


      img
        width: 100%
        height: 100%
        object-fit: cover
        object-position: center center

    div.txt
      span.tagType
        color: $dark-blue
        border: 1px solid $dark-blue
        display: inline-block
        border-radius: 100px
        padding: .25em 1em
        transition: all ease-in-out 150ms
        font-size: .75em
        margin-block-start: 1em

      ul.tags
        display: flex
        flex-wrap: wrap
        gap: .5em
        width: 100%
        justify-content: start
        align-items: center
        padding: 0
        margin-block: .5em 1em

        li
          color: $orange
          border: 1px solid $orange
          display: inline-block
          border-radius: 100px
          padding: .25em 1em
          transition: all ease-in-out 150ms
          font-size: .75em


      span.title
        font-family: 'Forma DJR Micro'
        font-weight: 500
        font-size: 24px

      p.description
        font-weight: 400

    a.more
      display: inline-flex
      align-self: start
      text-decoration: none
      background-color: $orange
      border-radius: 100px
      border: 1.5px solid $orange
      padding: .25em .5em
      color: $white
      transition: all ease-in-out 150ms

      &:hover, &:focus
        color: $orange
        background-color: transparent


</style>