import {supabase} from "$lib/supabaseClient";

export async function load() {
    const {data, error} = await supabase.from('etablissements').select();
    return {
        data: data
    };
}