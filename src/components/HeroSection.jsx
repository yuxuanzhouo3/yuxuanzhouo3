// @ts-ignore;
import React from 'react';
// @ts-ignore;
import { ChevronDown } from 'lucide-react';

export function HeroSection() {
  return <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden">
          {/* Background gradient */}
          <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900" />
          
          {/* Animated particles */}
          <div className="absolute inset-0">
            {[...Array(50)].map((_, i) => <div key={i} className="absolute w-1 h-1 bg-cyan-400 rounded-full animate-pulse" style={{
        left: `${Math.random() * 100}%`,
        top: `${Math.random() * 100}%`,
        animationDelay: `${Math.random() * 3}s`,
        animationDuration: `${2 + Math.random() * 3}s`
      }} />)}
          </div>

          <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8">
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
              OrbitChat
              <span className="block text-3xl md:text-4xl font-light mt-2 text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400">
                让沟通环绕世界
              </span>
            </h1>
            
            <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto">
              下一代即时通讯平台，连接全球用户，打破语言障碍，让每一次对话都充满可能
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="px-8 py-3 bg-gradient-to-r from-cyan-500 to-purple-500 text-white rounded-full font-semibold hover:from-cyan-600 hover:to-purple-600 transition-all duration-300 transform hover:scale-105">
                立即体验
              </button>
              <button className="px-8 py-3 border border-gray-400 text-white rounded-full font-semibold hover:bg-white hover:text-slate-900 transition-all duration-300">
                了解更多
              </button>
            </div>
          </div>

          <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
            <ChevronDown className="w-8 h-8 text-gray-400" />
          </div>
        </section>;
}