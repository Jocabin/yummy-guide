<script>
    export let info;
    import {onMount} from "svelte";
    import {distanceMatrix, getLocation} from "$lib/distancematrix.js";

    let distance;

    onMount(() => {
        getLocation().then((data) => {
            distance = distanceMatrix(data.latitude, data.longitude, info.latitude, info.longitude)
        });


    })
</script>

<article>
    <picture>
        <img alt={info.name} src={info.thumbnail}>
    </picture>
    <div class="txt">
        {#if distance}
            <p>{distance + " km"}</p>
        {/if}
        <span class="title">{info.name}</span>
        <p class="description">
            {info.description}
        </p>
        <a class="more" href={`/commerces-responsables/`+info.url}>En savoir plus</a>
    </div>
</article>

<style lang="sass">
  article
    display: flex
    flex-direction: column
    gap: 1em

    picture
      display: block
      width: 100%
      height: 200px
      overflow: hidden
      border-radius: 10px

      img
        width: 100%
        height: 100%
        object-fit: cover
        object-position: center center

    div.txt
      span.title
        font-family: 'Forma DJR Micro'
        font-weight: 500
        font-size: 24px

      p.description
        font-weight: 400


</style>