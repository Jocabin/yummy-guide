<script>
    import Form from "../../../components/Form.svelte";
    import Breadcrumb from "$lib/components/Breadcrumb.svelte";
</script>
<Breadcrumb/>

<section>
    <div class="wrapper-section">
        <h1>Ajouter un commerce</h1>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. A commodi corporis debitis deserunt enim
            exercitationem, harum id nihil nobis, odio porro provident quaerat quisquam repellat repudiandae sapiente
            sit totam vel?</p>
    </div>
</section>
<section class="form">
    <div class="wrapper-section">
        <Form/>
    </div>
</section>

<style lang="sass">
  section
    width: 100%

    div.wrapper-section
      max-width: $maxWidth
      margin-inline: auto
      width: 100%
</style>