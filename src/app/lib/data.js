import { createClient } from '@supabase/supabase-js'
import { cache } from 'react'
import { encrypt } from './crypto'
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
    .limit(21)

    if (error) {
        console.log(error)
        return []
    }
    // 加密每个元素的 id 字段
    const encryptedData = data.map(item => ({
        ...item,
        id: encrypt(item.id) // 假设 encrypt 是同步函数。如果是异步的，您需要相应地调整
    }));

    return encryptedData;
})

export const fetchGPTsInfo = cache(async (id) => {
    decId = decrypt(id);
    const { data, error } = await supabase
    .from('gpts_info')
    .select('id, app_name, description, app_url, app_logo, author, update_at, category')
    .order('update_at', { ascending: false })
    .eq('id', decId)
    if (error) {
        console.log(error)
        return []
    }
    return data;
})