import {supabase} from "$lib/supabaseClient";

export async function load() {
    const {data, error} = await supabase.from('restaurants').select();

    return {
        restaurants: data,
        error: error
    }
}