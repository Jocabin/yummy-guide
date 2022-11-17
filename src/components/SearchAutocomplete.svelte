<script>
    export let getItem;
    let autocompleteVisibility = true
    let search = {
        lng: null,
        lat: null,
        label: ""
    };
    let autocompleteList = []

    function chargeItem(item) {
        autocompleteVisibility = false
        search.lng = item.geometry.coordinates[0]
        search.lat = item.geometry.coordinates[1]
        search.label = item.properties.label
        getItem(search)
    }

    function autocomplete(e) {
        search.label = e.target.value
        if (search.label) {
            let address = `https://api-adresse.data.gouv.fr/search/?q=${search.label}`
            fetch(address, {mode: 'cors', headers: {"Content-Type": "application/json"}})
                .then(res => res.json())
                .then(res => autocompleteList = res.features)
                .catch(err => console.error(err))
        } else {
            autocompleteList = []
        }
    }
</script>
<input {...$$restProps} on:focus={autocompleteVisibility = true} on:input={e => autocomplete(e)} placeholder="10 rue de la beauté" required
       type="text" value={search.label}>
{#if autocompleteList.length > 0 && autocompleteVisibility}
    <ul>
        {#each autocompleteList as item}
            <li on:click={()=>chargeItem(item)}>{item.properties.label}</li>
        {/each}
    </ul>
{/if}

<style>
    input {
        display: inline-block;
        padding: .5em;
        font-size: 1em;
        border: none;
        border-bottom: 2px solid var(--orange);
        background-color: rgba(var(--black), .0);
    }
</style>