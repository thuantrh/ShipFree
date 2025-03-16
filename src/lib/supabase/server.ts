import { createClient as createClientOriginal } from '@supabase/supabase-js';  
import { cookies } from 'next/headers';  

export const createClient = async () => {  
  try {  
    const cookieStore = await cookies();  
    
    // Lấy các giá trị từ biến môi trường  
    const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;  
    const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;  
    
    // Kiểm tra URL và key  
    if (!supabaseUrl || !supabaseKey) {  
      console.error('Missing Supabase URL or Key');  
      return null;  
    }  
    
    // Tạo client trực tiếp với supabase-js  
    const supabase = createClientOriginal(supabaseUrl, supabaseKey, {  
      auth: {  
        persistSession: true,  
        autoRefreshToken: true,  
        detectSessionInUrl: true,  
      },  
      global: {  
        fetch: fetch,  
      },  
    });  
    
    return supabase;  
  } catch (error) {  
    console.error('Error creating Supabase client:', error);  
    return null;  
  }  
};