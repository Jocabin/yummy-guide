<script>
    import RestaurantTile from "$lib/components/RestaurantTile.svelte";
    import Filters from "$lib/components/Filters.svelte";
    import {onMount} from "svelte";
    import Breadcrumb from "$lib/components/Breadcrumb.svelte";

    export let data;
    let dataFiltred = []
    onMount(() => {
        dataFiltred = data.data
    })

    function filterData(newData) {
        console.log(newData)
        dataFiltred = newData
    }
</script>

<Breadcrumb/>

<section class="heading">
    <h1>Recherchez un commerce</h1>
</section>

<Filters {data} {filterData}/>

<section class="gridLayout">
    <div class="wrapper-section">
        {#each dataFiltred as restaurant (restaurant.id)}
            <RestaurantTile info={restaurant}/>
        {/each}
        <a class="add" href="/commerces-responsables/ajouter" style="display: none" target="_self"
           title="Ajouter une page">
            Ajouter un établissement
        </a>
    </div>
</section>

<style lang="sass">
  section
    width: 100%

    h1
      text-align: center

    &.gridLayout
      margin-block-end: 4em

    div.wrapper-section
      max-width: $maxWidth
      margin-inline: auto
      display: grid
      grid-template-columns: repeat(3, calc(100% / 3))
      gap: 60px 20px

      a.add
        justify-self: center
        align-self: center
        background-color: rgba(white, .25)
        display: flex
        justify-content: center
        align-items: center
        border: 2px solid $orange
        border-radius: 10px
        color: $orange
        text-transform: uppercase
        font-weight: bolder
        font-size: 2em
        text-align: center
        text-decoration: none
        transition: all ease-in-out 300ms
        width: 100%
        min-height: 600px
        min-width: calc(#{$maxWidth} / 3)


        &:hover, &:focus
          background-color: rgba(white, 1)

</style>