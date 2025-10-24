// @ts-ignore;
import React from 'react';
// @ts-ignore;
import { Rocket, Github, Twitter, Linkedin } from 'lucide-react';

export function Footer() {
  return <footer className="bg-slate-900 border-t border-slate-800">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              <div className="col-span-1 md:col-span-2">
                <div className="flex items-center space-x-2 mb-4">
                  <Rocket className="h-8 w-8 text-cyan-400" />
                  <span className="text-xl font-bold text-white">OrbitChat</span>
                </div>
                <p className="text-gray-400 mb-4 max-w-md">
                  下一代即时通讯平台，连接全球用户，让沟通环绕世界。
                </p>
                <div className="flex space-x-4">
                  <a href="#" className="text-gray-400 hover:text-white transition-colors">
                    <Github size={20} />
                  </a>
                  <a href="#" className="text-gray-400 hover:text-white transition-colors">
                    <Twitter size={20} />
                  </a>
                  <a href="#" className="text-gray-400 hover:text-white transition-colors">
                    <Linkedin size={20} />
                  </a>
                </div>
              </div>

              <div>
                <h3 className="text-white font-semibold mb-4">产品</h3>
                <ul className="space-y-2">
                  <li><a href="#features" className="text-gray-400 hover:text-white transition-colors">功能特性</a></li>
                  <li><a href="#experience" className="text-gray-400 hover:text-white transition-colors">立即体验</a></li>
                  <li><a href="#" className="text-gray-400 hover:text-white transition-colors">下载中心</a></li>
                  <li><a href="#" className="text-gray-400 hover:text-white transition-colors">API文档</a></li>
                </ul>
              </div>

              <div>
                <h3 className="text-white font-semibold mb-4">支持</h3>
                <ul className="space-y-2">
                  <li><a href="#" className="text-gray-400 hover:text-white transition-colors">帮助中心</a></li>
                  <li><a href="#contact" className="text-gray-400 hover:text-white transition-colors">联系我们</a></li>
                  <li><a href="#" className="text-gray-400 hover:text-white transition-colors">隐私政策</a></li>
                  <li><a href="#" className="text-gray-400 hover:text-white transition-colors">服务条款</a></li>
                </ul>
              </div>
            </div>

            <div className="border-t border-slate-800 mt-8 pt-8 text-center">
              <p className="text-gray-400">
                © 2024 OrbitChat. All rights reserved. | 京ICP备12345678号
              </p>
            </div>
          </div>
        </footer>;
}