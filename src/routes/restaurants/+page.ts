import {supabase} from "$lib/supabaseClient";

export async function load() {
    const {data, error} = await supabase.from('restaurants').select();

    console.log(data)

    return {
        data: data
    };
}