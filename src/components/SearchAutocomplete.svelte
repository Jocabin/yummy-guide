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
        search.lng = item.geometry.coordinates[1]
        search.lat = item.geometry.coordinates[0]
        search.label = item.properties.label
        getItem(search)
    }

    function autocomplete(e) {
        search.label = e.target.value
        if (search.label){
            let address = `https://api-adresse.data.gouv.fr/search/?q=${search.label}`
            fetch(address, {mode: 'cors', headers: {"Content-Type": "application/json"}})
                .then(res => res.json())
                .then(res => autocompleteList = res.features)
                .catch(err => console.error(err))
        }else{
            autocompleteList = []
        }
    }
</script>
<input {...$$restProps} type="text" value={search.label} placeholder="recherche" on:input={e => autocomplete(e)} on:focus={autocompleteVisibility = true} required>
{#if autocompleteList.length > 0 && autocompleteVisibility}
    <ul>
        {#each autocompleteList as item}
            <li on:click={()=>chargeItem(item)}>{item.properties.label}</li>
        {/each}
    </ul>
{/if}