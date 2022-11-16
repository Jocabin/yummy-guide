<script>
    export let data;
    let pageData = data.restaurant[0];
</script>

<img src={pageData['thumbnail']} alt={pageData.name}>

<h1>{pageData.name}</h1>