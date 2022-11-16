<script>
    import RestaurantTile from "$lib/components/RestaurantTile.svelte";
    import "../styles.css"
    import Breadcrumb from "$lib/components/Breadcrumb.svelte";
    export let data;
</script>
<Breadcrumb />
<section class="heading">
    <h1>Recherchez un commerce</h1>
</section>
<section class="filter">
    <div class="wrapper-section">

    </div>
</section>
<section class="gridLayout">
    <div class="wrapper-section">
        {#each data.data as restaurant (restaurant.id)}
            {#if restaurant.visibility}
                <RestaurantTile info={restaurant} />
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