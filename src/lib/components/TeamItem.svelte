<script>
    export let data;
    export let member;

    let url = `https://iqspsbttjincakboaccn.supabase.co/storage/v1/object/public/images/team-profile/${member.name.toString().toLowerCase().replace("é", "e").replace("ë", "e")}.jpg`;
</script>

<li>
    <img loading="lazy" width="164" height="164" src={url} alt={"Photo de profil de " + member.name}>
    <p class="title">{member.name}</p>
    <p>{member.job}</p>
</li>

<style>
    li {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
    }

    li > img {
        width: 10.25rem;
        height: 10.25rem;
        background-color: #ccc;
        border-radius: 100%;
        object-fit: cover;
    }

    .title {
        font-weight: bold;
    }

    p:not(.title) {
        margin: 0;
    }
</style>