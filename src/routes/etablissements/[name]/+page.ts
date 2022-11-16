import {supabase} from "$lib/supabaseClient";

export async function load({params}) {
    const {data, error} = await supabase.from('etablissements').select().eq('url', params.name);

    return {
        restaurant: data,
        error: error
    }
}