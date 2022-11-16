<script>
    import {supabase} from "$lib/supabaseClient";
    import placeholder from "$lib/assets/pp.jpg"

    export let data;
    let pageData = data.restaurant[0];

    /*function getRestaurantThumbnail(name) {
        const {data, error} = supabase.storage.from('images').getPublicUrl(`restaurants-thumbnails/${name}`);

        if (error || !name) return placeholder;

        return data.publicUrl;
    }*/

</script>

<img src={pageData['thumbnail']} alt={pageData.name}>

<h1>{pageData.name}</h1>