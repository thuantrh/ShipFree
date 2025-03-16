import { createServerClient } from "@supabase/ssr";  
import { cookies } from "next/headers";  

export const createClient = () => {  
  const cookieStore = cookies();  

  // Kiểm tra biến môi trường Supabase  
  if (!process.env.NEXT_PUBLIC_SUPABASE_URL || !process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY) {  
    // Trả về mock client với các phương thức cần thiết  
    return {  
      auth: {  
        getSession: async () => ({  
          data: { session: null },  
          error: null  
        }),  
        getUser: async () => ({  
          data: { user: null },  
          error: null  
        }),  
        signOut: async () => ({ error: null }),  
        signInWithPassword: async () => ({  
          data: { session: null, user: null },  
          error: null  
        }),  
        signUp: async () => ({  
          data: { session: null, user: null },  
          error: null  
        })  
      },  
      from: () => ({  
        select: () => ({  
          eq: () => ({  
            single: () => Promise.resolve({ data: null, error: null }),  
            data: null,  
            error: null  
          })  
        }),  
        insert: () => Promise.resolve({ data: null, error: null }),  
        update: () => Promise.resolve({ data: null, error: null }),  
        delete: () => Promise.resolve({ data: null, error: null })  
      })  
    };  
  }  

  // Tạo client thật nếu có biến môi trường  
  return createServerClient(  
    process.env.NEXT_PUBLIC_SUPABASE_URL,  
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY,  
    {  
      cookies: {  
        get(name: string) {  
          return cookieStore.get(name)?.value;  
        },  
      },  
    }  
  );  
};