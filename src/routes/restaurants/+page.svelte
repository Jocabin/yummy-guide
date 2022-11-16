<script>
    export let data;
</script>

{#each data.data as restaurant (restaurant.id)}
    <p>{restaurant.name}</p>
{/each}
