<script>
import Breadcrumb from "$lib/components/Breadcrumb.svelte";
</script>
<Breadcrumb/>

<section class="heading">
    <h1>Blog</h1>
</section>
<section class="gridLayout">
    <div class="wrapper-section">

    </div>
</section>

<style lang="sass">
    section
      div.wrapper-section
        max-width: $maxWidth
        margin-inline: auto
        display: grid
        grid-template-columns: repeat(3, 1fr)
        gap: 60px 20px
</style>