'use client';  
import { useEffect } from 'react';  

export default function AuthLayout({  
  children,  
}: {  
  children: React.ReactNode;  
}) {  
  useEffect(() => {  
    // Logic client-side nếu cần  
  }, []);  

  return (  
    <div className="auth-layout">  
      {children}  
    </div>  
  );  
}