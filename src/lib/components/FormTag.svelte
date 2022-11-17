<script>
    export let tagInfo;
    export let checkedAction;

    $: isToggled = false;

    function toggle() {
        return !isToggled;
    }
</script>

<p>
    <input type="checkbox" value={tagInfo.id} id={tagInfo.name} on:click={checkedAction}>
    <label for={tagInfo.name} class:active={isToggled} on:click={toggle} class="tag">
        {tagInfo.name}
    </label>
</p>

<style>
    input[type="checkbox"] {
        display: none;
    }

    input[type="checkbox"]:checked + label {
        background-color: var(--orange);
        color: var(--white);
    }

    label.tag {
        color: var(--orange);
        border: 1px solid var(--orange);
        display: inline-block;
        border-radius: 100px;
        padding: .25em 1em;
        transition: all ease-in-out 150ms;
        cursor: pointer;
    }

    label.tag:hover, label.tag:focus {
        background-color: rgba(var(--black), .05);
    }

</style>