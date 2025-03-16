import Link from "next/link";  
import { TrendingUp, Zap, BarChart4, Globe } from "lucide-react";  
import Image from "next/image";  
import { useState, useEffect } from "react";  

const HeroSection = () => {  
  const [isVisible, setIsVisible] = useState(false);  
  
  useEffect(() => {  
    setIsVisible(true);  
  }, []);  

  return (  
    <div className="bg-gradient-to-br from-blue-900 via-indigo-900 to-purple-900 mt-6 min-h-screen flex items-center px-4 sm:px-6 md:px-8 lg:px-12 relative overflow-hidden">  
      {/* Animated background elements */}  
      <div className="absolute inset-0 overflow-hidden">  
        {[...Array(20)].map((_, i) => (  
          <div  
            key={i}  
            className="absolute rounded-full bg-white/5"  
            style={{  
              top: `${Math.random() * 100}%`,  
              left: `${Math.random() * 100}%`,  
              width: `${Math.random() * 200 + 50}px`,  
              height: `${Math.random() * 200 + 50}px`,  
              animation: `pulse ${Math.random() * 10 + 5}s infinite`,  
              opacity: Math.random() * 0.5,  
            }}  
          />  
        ))}  
      </div>  

      <div className="max-w-7xl w-full mx-auto py-16 flex flex-col lg:flex-row justify-between items-center relative z-10">  
        <div className={`w-full lg:w-1/2 mb-12 lg:mb-0 text-center lg:text-left transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>  
          <div className="flex justify-center lg:justify-start items-center gap-2 mb-5">  
            <div className="bg-white/10 backdrop-blur-md rounded-xl p-3 inline-flex items-center">  
              <TrendingUp className="w-6 h-6 text-cyan-400 mr-2" />  
              <span className="text-white font-bold text-xl">DigiGrowth</span>  
            </div>  
          </div>  

          <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold mb-6 text-white leading-tight">  
            Amplify Your   
            <span className="relative">  
              <span className="relative z-10 text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500"> Digital Impact</span>  
              <span className="absolute bottom-0 left-0 w-full h-3 bg-gradient-to-r from-cyan-400 to-blue-500 opacity-30 rounded-lg"></span>  
            </span>  
          </h1>  

          <p className="text-base text-blue-100 mb-8 max-w-2xl mx-auto lg:mx-0 leading-relaxed">  
            Transform your online presence with data-driven marketing strategies that deliver real results.   
            Our AI-powered platform analyzes market trends, optimizes campaigns, and maximizes ROI—turning your   
            investment into measurable growth.  
          </p>  

          <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 mb-8">  
            <Link  
              href="/get-started"  
              className="group w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white px-8 sm:px-16 py-4 rounded-xl font-medium text-lg duration-300 transition-all shadow-lg hover:shadow-cyan-500/30"  
            >  
              <BarChart4 className="w-5 h-5 group-hover:scale-110 transition-transform" />  
              <span>Boost Your ROI</span>  
            </Link>  
            <Link  
              href="/case-studies"  
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-white/10 backdrop-blur-md hover:bg-white/20 text-white px-8 sm:px-10 py-4 rounded-xl font-medium text-lg border border-white/20 transition-all duration-300"  
            >  
              <span>See Success Stories</span>  
            </Link>  
          </div>  

          <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-6 bg-white/5 backdrop-blur-md p-4 rounded-xl border border-white/10">  
            <div className="flex -space-x-3">  
              {[  
                "/avatars/marketing-expert-1.jpg",  
                "/avatars/growth-specialist-2.jpg",  
                "/avatars/digital-strategist-3.jpg",  
                "/avatars/content-creator-4.jpg",  
                "/avatars/analytics-pro-5.jpg",  
              ].map((avatar, index) => (  
                <div   
                  key={index}  
                  className="w-10 h-10 rounded-full border-2 border-indigo-900 bg-gradient-to-br from-blue-400 to-purple-500 flex items-center justify-center text-white font-bold overflow-hidden"  
                >  
                  {/* Replace with actual images in production */}  
                  {String.fromCharCode(65 + index)}  
                </div>  
              ))}  
            </div>  
            <div className="flex flex-col">  
              <div className="flex">  
                {[1, 2, 3, 4, 5].map((star) => (  
                  <svg  
                    key={star}  
                    className="w-5 h-5 text-yellow-400 fill-current"  
                    viewBox="0 0 24 24"  
                  >  
                    <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />  
                  </svg>  
                ))}  
              </div>  
              <p className="text-white mt-1 text-base">  
                <span className="font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-400">2,500+</span>  
                <span className="text-blue-200 ml-2">businesses growing with us</span>  
              </p>  
            </div>  
          </div>  
        </div>  
        
        <div className={`w-full lg:w-2/5 flex justify-center lg:justify-end transition-all duration-1000 delay-300 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>  
          <div className="relative bg-gradient-to-br from-indigo-600/20 to-purple-700/20 p-6 rounded-2xl border border-white/10 backdrop-blur-md shadow-2xl">  
            <div className="absolute -top-4 -right-4 bg-cyan-500 text-white py-1 px-3 rounded-full text-sm font-bold">  
              +237% Growth  
            </div>  
            <div className="grid grid-cols-2 gap-4">  
              <div className="bg-white/10 p-4 rounded-lg backdrop-blur-md">  
                <h3 className="text-cyan-400 font-bold">Conversion Rate</h3>  
                <div className="flex items-end gap-2 mt-1">  
                  <span className="text-white text-2xl font-bold">32.4%</span>  
                  <span className="text-green-400 text-sm">↑18.7%</span>  
                </div>  
              </div>  
              <div className="bg-white/10 p-4 rounded-lg backdrop-blur-md">  
                <h3 className="text-cyan-400 font-bold">Avg. ROI</h3>  
                <div className="flex items-end gap-2 mt-1">  
                  <span className="text-white text-2xl font-bold">429%</span>  
                  <span className="text-green-400 text-sm">↑57.3%</span>  
                </div>  
              </div>  
              <div className="bg-white/10 p-4 rounded-lg backdrop-blur-md">  
                <h3 className="text-cyan-400 font-bold">Engagement</h3>  
                <div className="flex items-end gap-2 mt-1">  
                  <span className="text-white text-2xl font-bold">9.2min</span>  
                  <span className="text-green-400 text-sm">↑3.1min</span>  
                </div>  
              </div>  
              <div className="bg-white/10 p-4 rounded-lg backdrop-blur-md">  
                <h3 className="text-cyan-400 font-bold">Lead Quality</h3>  
                <div className="flex items-end gap-2 mt-1">  
                  <span className="text-white text-2xl font-bold">87%</span>  
                  <span className="text-green-400 text-sm">↑22%</span>  
                </div>  
              </div>  
            </div>  
            
            <div className="mt-4 bg-white/10 p-4 rounded-lg backdrop-blur-md">  
              <h3 className="text-cyan-400 font-bold">Campaign Performance</h3>  
              <div className="h-40 mt-2 relative overflow-hidden rounded-lg">  
                {/* This would be a real chart in production */}  
                <div className="absolute bottom-0 left-0 w-full h-full flex items-end">  
                  {[40, 68, 30, 90, 50, 80, 65, 75, 85, 95, 75, 60].map((height, i) => (  
                    <div   
                      key={i}   
                      className="w-full h-full flex justify-center"  
                      style={{height: `${height}%`}}  
                    >  
                      <div   
                        className="w-5 bg-gradient-to-t from-blue-600 to-cyan-400 rounded-t-md mx-1"  
                        style={{  
                          height: '100%',  
                          animation: `grow 1s ease-out ${i * 0.1}s`,  
                          animationFillMode: 'backwards'  
                        }}  
                      />  
                    </div>  
                  ))}  
                </div>  
              </div>  
            </div>  
            
            <div className="absolute -bottom-3 -right-3">  
              <Globe className="w-12 h-12 text-cyan-400 animate-pulse" />  
            </div>  
          </div>  
        </div>  
      </div>  
      
      {/* CSS for animations */}  
      <style jsx>{`  
        @keyframes pulse {  
          0%, 100% { transform: scale(1); opacity: 0.1; }  
          50% { transform: scale(1.05); opacity: 0.15; }  
        }  
        
        @keyframes grow {  
          from { transform: scaleY(0); }  
          to { transform: scaleY(1); }  
        }  
      `}</style>  
    </div>  
  );  
};  

export default HeroSection;