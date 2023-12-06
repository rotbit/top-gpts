import { createClient } from '@supabase/supabase-js'
import { cache } from 'react'
import { encrypt, decrypt } from './crypto'
const supabaseUrl = 'https://awycpgzkubjcbbkwomgv.supabase.co'
const supabaseKey = process.env.SUPABASE_KEY
const supabase = createClient(supabaseUrl, supabaseKey)

export async function fetchCategories() {
    const rsp = {
        "code": 0,
        "data": [
            "Newest",
            "Random",
        ]
    }
    return rsp.data;
}

export const fetchNewestGPTs = cache(async () => {
    const { data, error } = await supabase
    .from('gpts_info')
    .select('id, app_name, description, app_url, app_logo, author, update_at, category')
    .order('update_at', { ascending: false })
    .limit(9)

    if (error) {
        console.log(error)
        return []
    }
    return data;
})

export const fetchGPTsInfo = cache(async (id) => {
    const { data, error } = await supabase
    .from('gpts_info')
    .select('id, app_name, description, app_url, app_logo, author, update_at, category')
    .order('update_at', { ascending: false })
    .eq('id', id)
    if (error) {
        console.log(error) 
        return []
    }
    return data[0];
})