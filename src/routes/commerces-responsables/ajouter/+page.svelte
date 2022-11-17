<script>
    import Form from "../../../components/Form.svelte";
    import Breadcrumb from "$lib/components/Breadcrumb.svelte";
</script>
<Breadcrumb/>

<section>
    <div class="wrapper-section">
        <h1>Ajouter un commerce</h1>
        <p>Aidez-nous à recenser les commerces éco-responsable près de chez vous.</p>
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