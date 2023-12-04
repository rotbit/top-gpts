import { createClient } from '@supabase/supabase-js'
import { cache } from 'react'
const supabaseUrl = 'https://awycpgzkubjcbbkwomgv.supabase.co'
const supabaseKey = process.env.SUPABASE_KEY
const supabase = createClient(supabaseUrl, supabaseKey)
const secretKey = process.env.SECRET_KEY

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
    .limit(21)
    if (error) {
        console.log(error)
        return []
    }
    return data;
})