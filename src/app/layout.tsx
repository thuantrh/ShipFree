import type { Metadata } from "next";
import { Bricolage_Grotesque } from "next/font/google";
import "./globals.css";
import type React from "react"; // Import React
import { cn } from "@/lib/utils";

const bricolageGrotesque = Bricolage_Grotesque({
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {  
  title: "DigiGrowth | Data-Driven Marketing Solutions",  
  description:  
    "Transform your online presence with data-driven marketing strategies that deliver real results. Maximize ROI, enhance conversions, and grow your business with our AI-powered platform.",  
  keywords: [  
    "digital marketing",  
    "data-driven marketing",  
    "marketing analytics",  
    "ROI optimization",  
    "campaign performance",  
    "business growth",  
    "conversion rate",  
    "lead generation",  
    "marketing automation",  
    "performance tracking",  
    "digital strategy",  
    "AI marketing",  
    "marketing intelligence",  
    "DigiGrowth",  
    "online marketing platform",  
  ],  
};  

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={cn(bricolageGrotesque.className, "antialiased")}>
        {children}
      </body>
    </html>
  );
}

