import {supabase} from "$lib/supabaseClient";
// @ts-ignore
export async function load({params}) {
    const {data, error} = await supabase.from('commerces-responsables').select().eq('url', params.name);

    return {
        restaurant: data,
        error: error
    }
}