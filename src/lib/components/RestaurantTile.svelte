<script>
    export let info;
    import {onMount} from "svelte";
    import {getLocation} from "$lib/distancematrix.js";
    let distance;

    onMount(()=>{
        getLocation(44.85383665167368, -0.5668104057436363).then((data)=>{
            distance = data;
        });
    })
    console.log(info)
</script>

<article>
    <picture>
        <img src={info.thumbnail} alt={info.name}>
    </picture>
    <div class="txt">
        <span class="title">{info.name}</span>
        <p class="description">
            {info.description}
        </p>
        <a href={`/commerces-responsables/`+info.url} class="more">En savoir plus</a>
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