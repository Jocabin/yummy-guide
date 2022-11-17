<script>
    import {distanceMatrix, getLocation} from "$lib/distancematrix.js";
    import {onMount} from "svelte";
    import {supabase} from "$lib/supabaseClient.js";

    export let data = []
    export let filterData;
    let dataFiltred = []
    let distance, price, keyword
    let types = []
    let userLat;
    let userLng;


    onMount(() => {
        getTypes()
        resetForm()
        getLocation().then(res => {
            userLat = res.latitude
            userLng = res.longitude
            console.log("userLat:", userLat, " userLng:", userLng)
        })
        dataFiltred = data.data
    })

    function filtringData() {
        dataFiltred = data.data.filter(item => {
            console.log(item)
            if (price > 3) {
                return distanceMatrix(userLat, userLng, item.latitude, item.longitude) <= distance && item.price_indicator <= price
            } else {
                return distanceMatrix(userLat, userLng, item.latitude, item.longitude) <= distance && item.price_indicator == price
            }
        })

        filterData(dataFiltred)
    }


    function changeDistance(e) {
        distance = e.target.value
        filtringData()
    }

    function changePrice(e) {
        price = e.target.value
        filtringData()
    }

    function changeKeyword(e) {
        keyword = e.target.value
        filtringData()
    }

    function resetForm() {
        distance = "40"
        price = "4"
        keyword = "-1"
        filterData(data.data)
    }

    async function getTypes() {
        const {data, error} = await supabase.from('types').select();
        types = data
        error && console.error(error)
    }
</script>

<div class="filters">
    <p>
        <label for="keywords" style="display: none">Mot clé</label>
        <select id="keywords" name="keywords" on:change={(e)=>changeKeyword(e)}>
            <option selected="selected" value="-1">Type</option>
            {#each types as item (item.id)}
                <option value={item.id}>{item.name}</option>
            {/each}
        </select>
    </p>
    <p>
        <label for="distance" style="display: none">Distance</label>
        <select id="distance" name="distance" on:change={(e) => changeDistance(e)}>
            <option selected="selected" value="100">Distance</option>
            <option value="1">A pied</option>
            <option value="5">A vélo</option>
            <option value="20">En transport</option>
        </select>
    </p>
    <p>
        <label for="price" style="display: none">Prix</label>
        <select id="price" name="price" on:change={(e)=>changePrice(e)}>
            <option selected="selected" value="4">Price</option>
            <option value="1">€</option>
            <option value="2">€€</option>
            <option value="3">€€€</option>
        </select>
    </p>
    <button on:click={()=> resetForm()}>Reset</button>
</div>