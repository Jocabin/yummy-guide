import {supabase} from "$lib/supabaseClient";

export async function load() {
    const {data, error} = await supabase.from('commerces-responsables').select();

    return {
        restaurants: data,
        error: error
    }
}