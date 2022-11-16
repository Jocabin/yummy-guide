<script>
    import RestaurantTile from "$lib/components/RestaurantTile.svelte";

    export let data;
</script>

<section class="gridLayout">
    {#each data.data as restaurant (restaurant.id)}
        <RestaurantTile info={restaurant}/>
    {/each}
</section>

<style>
    .gridLayout {
        display: grid;
        grid-template-columns: repeat(auto-fill, 370px);
        gap: 4rem;
        width: 100%;
    }
</style>