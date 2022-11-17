<script>
    import {v4 as uuidv4} from 'uuid';
    import slugify from "slugify"
    import {supabase} from "$lib/supabaseClient";
    import {onMount} from "svelte";
    import SearchAutocomplete from "./SearchAutocomplete.svelte";
    import {goto} from "$app/navigation";
    import FormTag from "$lib/components/FormTag.svelte";


    let nameForm = null;
    let descriptionForm = null;
    let styleForm = null;
    let typeForm = null;
    let siteUrlForm = null;
    let priceForm = null;
    let tagsForm = []
    let deliveryForm = []
    let address = {
        label: null,
        lng: null,
        lat: null
    }
    let image = {
        imageForm: null,
        name: null,
        url: null
    };
    let categories = [];
    let tags = [];
    let types = [];


    onMount(() => {
        getStyles()
        getTags()
        getTypes()
    })

    async function getStyles() {
        const {data, error} = await supabase.from('styles').select();
        categories = data
        error && console.error(error)
    }

    async function getTags() {
        const {data, error} = await supabase.from('tags').select();
        tags = data
        error && console.error(error)
    }

    async function getTypes() {
        const {data, error} = await supabase.from('types').select();
        types = data
        error && console.error(error)
    }

    async function saveDatas() {
        const {data, error} = await supabase
            .from('commerces-responsables')
            .insert([
                {
                    name: nameForm,
                    price_indicator: priceForm,
                    description: descriptionForm,
                    site_url: siteUrlForm || null,
                    longitude: address.lng || null,
                    latitude: address.lat || null,
                    tags: JSON.stringify(tagsForm),
                    style: styleForm,
                    thumbnail: image.url,
                    type: typeForm,
                    url: slugify(nameForm, {lower: true}),
                    address: address.label
                }
            ])
        error && console.error(error)
        let object = {
            name: nameForm,
            price_indicator: priceForm,
            description: descriptionForm,
            site_url: siteUrlForm || null,
            longitude: address.lng || null,
            latitude: address.lat || null,
            tags: JSON.stringify(tagsForm),
            category: styleForm,
            thumbnail: image.url,
            type: typeForm,
            url: slugify(nameForm, {lower: true}),
            address: address.label
        }
        console.log(object)
        goto(`/commerces-responsables`)
    }

    async function registerImg(img) {
        const {data, error} = await supabase.storage
            .from('images')
            .upload(`etablissements-thumbnails/${image.name}`, img)
        error && console.error(error)
    }

    function getItem(item) {
        address.label = item.label
        address.lng = item.lng
        address.lat = item.lat
    }

    function getImageUrl() {
        const {data, error} = supabase.storage.from('images').getPublicUrl(`etablissements-thumbnails/${image.name}`);
        image.url = data.publicUrl
        console.log(image.url)
        console.log(data)
        error && console.error(error)
    }

    function submitForm() {
        registerImg(image.imageForm).then(getImageUrl())
        saveDatas()
        goto("/commerces-responsables/ajouter/confirmation")
    }

    function imageLoading(e) {
        image.imageForm = e.target.files[0]
        image.name = uuidv4()
    }

    function tagsManager(e) {
        if (e.target.checked) {
            tagsForm = [...tagsForm, e.target.value];
        } else {
            tagsForm = tagsForm.filter(item => item !== e.target.value)
        }
    }

    function deliveryManager(e) {
        if (e.target.checked) {
            deliveryForm = [...deliveryForm, e.target.value];
        } else {
            deliveryForm = deliveryForm.filter(item => item !== e.target.value)
        }
    }
</script>
<form on:submit|preventDefault={()=>submitForm()}>
    <p>
        <label for="name">Nom</label>
        <input placeholder="Le nom du resto" id="name" on:input={(e)=>nameForm = e.target.value} required type="text"
               value={nameForm}>
    </p>
    <p>
        <label for="site">Site</label>
        <input placeholder="https://site.fr" id="site" on:input={(e)=>siteUrlForm = e.target.value} type="url"
               value={siteUrlForm}>
    </p>
    <p>
        <label for="description">Description</label>
        <textarea id="description" on:input={(e)=>descriptionForm = e.target.value} required
                  value={descriptionForm}></textarea>
    </p>
    <p>
        <label for="address">Adresse</label>
        <SearchAutocomplete {getItem} id="address"/>
    </p>
    <p>
        <label for="price">Indicateur de prix</label>
        <span><bdi>€</bdi><input id="price" max="3" min="1" on:input={(e)=>priceForm = e.target.value} required
                                 type="range" value={priceForm}><bdi>€€€</bdi></span>
    </p>
    <p>
        <label for="category">Style</label>
        <select id="category" name="category" on:input={(e)=>styleForm = e.target.value} required>
            <option disabled selected="selected" value="">-- Sélectionner un style --</option>
            {#each categories as category}
                <option value={category.id}>{category.name}</option>
            {/each}
        </select>
    </p>
    <p>
        <label for="types">Types</label>
        <select id="types" name="types" on:input={(e)=>typeForm = e.target.value} required>
            <option disabled selected="selected" value="">-- Sélectionner un type --</option>
            {#each types as type}
                <option value={type.id}>{type.name}</option>
            {/each}
        </select>
    </p>
    <fieldset class="tags">
        <p>Tags</p>
        <div>
            {#each tags as tag (tag.id)}
                <FormTag tagInfo={tag} checkedAction={(e)=>tagsManager(e)}></FormTag>
            {/each}
        </div>
    </fieldset>
    <fieldset class="livraison">
        <p>Mode de livraison</p>
        <div>
            <p>
                <input id="none" on:click={(e)=>deliveryManager(e)} type="checkbox" value="Sur place">
                <label for=none>Sur place</label>
            </p>
            <p>
                <input id="deliverable" on:click={(e)=>deliveryManager(e)} type="checkbox" value="A emporter">
                <label for=deliverable>A emporter</label>
            </p>
            <p>
                <input id="athome" on:click={(e)=>deliveryManager(e)} type="checkbox" value="Livraison">
                <label for=athome>Livraison</label>
            </p>
        </div>
    </fieldset>
    <p>
        <label for="img">Image</label>
        <input accept=".jpg, .jpeg, .png" id="img" on:input={(e)=>imageLoading(e)} required type="file">
    </p>
    <button class="button" type="submit">Envoyer</button>
</form>

<style lang="sass">
  form
    display: flex
    flex-direction: column
    gap: 2em
    flex-wrap: wrap
    width: 100%

    p, fieldset
      border: none
      display: flex
      flex-direction: column
      gap: .5em
      margin: 0

      &.tags
        flex-direction: row
        flex-wrap: wrap

      input, textarea
        display: inline-block
        padding: .5em
        font-size: 1em
        border: none
        border-bottom: 2px solid $orange
        background-color: rgba($black, .0)

    fieldset.livraison
      padding: 0
      display: flex
      flex-direction: column
      align-items: flex-start
      justify-content: center
      width: fit-content
      gap: 2rem
      overflow: hidden

      div
        display: flex
        flex-direction: row
        align-items: center
        justify-content: center
        border-radius: 20px
        border: solid 2px $orange
        overflow: hidden

      p
        border-radius: 0
        cursor: pointer

        & > label
          padding: 1rem
          border-radius: 0
          cursor: pointer

      [type="checkbox"]
        display: none

      [type="checkbox"]:checked + label
        background-color: $orange
        border-radius: 0

    fieldset.tags
      padding: 0
      display: flex
      flex-direction: column
      width: 100%

      div
        width: 100%
        display: flex
        flex-flow: row wrap
        gap: 0 1.5rem
</style>