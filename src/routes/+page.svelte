<script>
    import {fade} from "svelte/transition"

    export let data;

    let restaurants = data.restaurants;
</script>
<section class="hero">
    <video autoplay muted src="/People Being Served their Food and Getting Ready to Eat.mp4">
    </video>
    <div class="wrapper-section">
        <div class="wrapper">
            <h1>Trouvez les commerces éco-responsables autour de vous</h1>
            <p class="baseline">
                Votre guide local recensant les commerces éthiques et responsables dans la région Bordelaise.
            </p>
        </div>
        <div class="wrapper">
            <ul class="chiffres">
                <li><span>50</span>Articles en ligne</li>
                <li><span>{restaurants.length}</span>Commerces référencés</li>
                <li><span>20</span>Commerçants interviewés</li>
            </ul>
            <a href="/commerces-responsables" target="_self" title="Surprenez-moi">Surprenez-moi</a>
        </div>
    </div>
</section>
<section class="discover">
    <h2>Découvrez les établissements partenaires</h2>
    <p>
        Voici une sélection de commerce qui proposent des actions favorisant l’éco-responsabilité grâce à l’utilisation
        de produits de saison, d’importation des grains d’un pays proche, ou même d’un commerce qui livre ses produits à
        vélo par exemple…
    </p>
    <h3>Nos cafés et salon de thé</h3>
    <ul>
        {#each restaurants as restaurant (restaurant.id)}
            {#if restaurant.type == 5}
                <li transition:fade>
                    <a href={"/commerces-responsables/"+ restaurant.url}>
                        <picture>
                            <img src={restaurant.thumbnail} alt={restaurant.name}>
                        </picture>
                        <span class="title">{restaurant.name}</span>
                    </a>
                </li>
            {/if}
        {/each}
    </ul>
</section>
<section class="discover">
    <h3>Restaurants</h3>
    <ul>
        {#each restaurants as restaurant (restaurant.id)}
            {#if restaurant.type == 2}
                <li transition:fade>
                    <a href={"/commerces-responsables/"+ restaurant.url}>
                        <picture>
                            <img src={restaurant.thumbnail} alt={restaurant.name}>
                        </picture>
                        <span class="title">{restaurant.name}</span>
                    </a>
                </li>
            {/if}
        {/each}
    </ul>
</section>
<section class="discover">
    <h3>Epiceries</h3>
    <ul>
        {#each restaurants as restaurant (restaurant.id)}
            {#if restaurant.type == 4}
                <li transition:fade>
                    <a href={"/commerces-responsables/"+ restaurant.url}>
                        <picture>
                            <img src={restaurant.thumbnail} alt={restaurant.name}>
                        </picture>
                        <span class="title">{restaurant.name}</span>
                    </a>
                </li>
            {/if}
        {/each}
    </ul>
</section>

<style lang="sass">
  section
    width: 100%

    //h1
      //animation: ease-in-out appear 1s 500ms normal

    p.baseline
      //animation: ease-in-out appear 1s normal
      @keyframes appear
        from
          transform: translateY(10px)
          opacity: 0
        to
          transform: translateY(0)
          opacity: 1

    h2, p
      text-align: center

    p
      max-width: $maxWidth
      margin-inline: auto

    h3
      padding-inline: 2em

    div.wrapper-section
      max-width: $maxWidth
      margin-inline: auto

  section.hero
    position: relative
    width: 100%
    display: flex
    align-items: center
    justify-content: center
    min-height: calc(100vh - 79.5px)
    background-color: $black

    video
      position: absolute
      inset: 0
      width: 100%
      height: 100%
      object-fit: cover
      object-position: center center
      z-index: 1
      opacity: .5

    div.wrapper-section
      max-width: $maxWidth
      margin-inline: auto
      z-index: 2
      display: flex
      flex-direction: column
      align-items: center
      gap: 3em
      padding: 8em 1em

      div.wrapper
        display: flex
        flex-direction: column
        align-items: center

      h1, p
        color: white
        text-align: center

      a
        display: inline-flex
        text-decoration: none
        align-self: center
        transform: translateY(-50%)
        font-size: 1em
        padding: .75em 2em
        background-color: rgba($orange, 1)
        color: $white
        text-align: center
        border-radius: 100rem
        transition: all ease-in-out 150ms
        border: 2px solid $orange
        font-weight: 700

        &:hover, &:focus
          color: rgba($orange, 1)
          font-weight: 700
          background-color: rgba($black, .5)
        backdrop-filter: blur(4px)

      ul.chiffres
        display: grid
        grid-template-columns: repeat(3, 1fr)
        margin: 0
        list-style: none
        gap: 3em
        background-color: rgba($black, .5)
        backdrop-filter: blur(4px)
        border-radius: 10px
        justify-content: center
        align-items: center
        padding: 1em 2em 3em 2em


        li
          display: flex
          flex-direction: column
          align-items: center
          color: white
          font-weight: bold
          //animation: ease-in-out appear 1s normal

          //&:nth-of-type(2)
            //animation: ease-in-out appear 1s normal 300ms

          //&:nth-of-type(3)
            //animation: ease-in-out appear 1s normal 600ms

          @keyframes appear
            0%
              transform: translateX(-10px)
              opacity: 0

            100%
              transform: translateX(0px)
              opacity: 1

          span
            font-size: 4em

  section.discover
    width: 100%
    overflow: scroll
    margin-block: 2em

    ul
      display: flex
      width: fit-content
      gap: 20px

      li
        width: 400px
        height: 250px

        border-radius: 10px
        overflow: hidden

        a
          display: flex
          justify-content: start
          align-items: end
          width: 100%
          height: 100%
          text-decoration: none
          z-index: 2
          position: relative
          background-color: $black

          &:hover, &:focus
            picture
              img
                transform: scale(1.1) rotateZ(5deg)

          picture
            width: 100%
            height: 100%
            position: absolute
            opacity: .5
            z-index: 1

            img
              width: 100%
              height: 100%
              object-fit: cover
              transition: all ease-in-out 300ms

          span.title
            z-index: 3
            color: white
            font-size: 2em
            font-weight: bold
            padding: 1em


</style>