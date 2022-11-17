<script>
    import RestaurantTile from "$lib/components/RestaurantTile.svelte";
    import "../styles.css"
    import Breadcrumb from "$lib/components/Breadcrumb.svelte";
    import Filters from "$lib/components/Filters.svelte";

    export let data;
    let dataFiltred = data.data

    function filterData(newData) {
        console.log(newData)
        dataFiltred = newData
    }
</script>
<Breadcrumb/>
<section class="heading">
    <h1>Recherchez un commerce</h1>
</section>
<section class="filter">
    <div class="wrapper-section">
        <Filters {data} {filterData}/>
    </div>
</section>
<section class="gridLayout">
    <div class="wrapper-section">
        {#each dataFiltred as restaurant (restaurant.id)}
            {#if restaurant.visibility}
                <RestaurantTile info={restaurant}/>
            {/if}
        {/each}
    </div>
</section>

<style lang="sass">
  section
    div.wrapper-section
      max-width: $maxWidth
      margin-inline: auto
      display: grid
      grid-template-columns: repeat(3, 1fr)
      gap: 60px 20px
</style>