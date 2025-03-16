import { createClient } from '@/lib/supabase/server';  
import { redirect } from 'next/navigation';  

export default async function Dashboard() {  
  const supabase = await createClient();  
  
  // Kiểm tra supabase client trước  
  if (!supabase || !supabase.auth) {  
    console.error('Supabase client hoặc auth không khởi tạo đúng');  
    redirect('/login');  
  }  
  
  // Lấy dữ liệu người dùng  
  const { data, error } = await supabase.auth.getUser();  
  
  // Kiểm tra người dùng đã đăng nhập  
  if (error || !data.user) {  
    console.log('Người dùng chưa đăng nhập:', error?.message);  
    redirect('/login');  
  }  
  
  const user = data.user;  
  
  // Hiển thị dashboard  
  return (  
    <div className="dashboard-container">  
      <h1>Dashboard</h1>  
      <p>Chào mừng, {user.email || 'người dùng'}!</p>  
      {/* Nội dung dashboard */}  
    </div>  
  );  
}