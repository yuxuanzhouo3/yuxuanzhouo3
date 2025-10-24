// @ts-ignore;
import React from 'react';
// @ts-ignore;
import { MessageCircle, Shield, Globe, Zap, Users, Smartphone } from 'lucide-react';

const features = [{
  icon: MessageCircle,
  title: '智能翻译',
  description: '实时翻译100+种语言，让全球沟通无障碍',
  color: 'from-blue-400 to-cyan-400'
}, {
  icon: Shield,
  title: '端到端加密',
  description: '军用级加密技术，保护您的每一次对话',
  color: 'from-purple-400 to-pink-400'
}, {
  icon: Globe,
  title: '全球互联',
  description: '覆盖200+国家和地区，随时随地保持联系',
  color: 'from-green-400 to-emerald-400'
}, {
  icon: Zap,
  title: '极速传输',
  description: '毫秒级消息传递，文件传输不限大小',
  color: 'from-yellow-400 to-orange-400'
}, {
  icon: Users,
  title: '群组管理',
  description: '支持万人大群，智能管理让社群更有序',
  color: 'from-indigo-400 to-purple-400'
}, {
  icon: Smartphone,
  title: '多端同步',
  description: '手机、电脑、平板无缝切换，消息实时同步',
  color: 'from-pink-400 to-rose-400'
}];
export function FeaturesSection() {
  return <section id="features" className="py-20 bg-slate-900">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
                核心功能
              </h2>
              <p className="text-xl text-gray-400 max-w-2xl mx-auto">
                探索 OrbitChat 如何重新定义即时通讯体验
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {features.map((feature, index) => <div key={index} className="group relative bg-slate-800/50 backdrop-blur-sm rounded-2xl p-6 hover:bg-slate-800/70 transition-all duration-300 transform hover:scale-105">
                  <div className={`w-16 h-16 rounded-xl bg-gradient-to-r ${feature.color} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                    <feature.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-2">{feature.title}</h3>
                  <p className="text-gray-400">{feature.description}</p>
                </div>)}
            </div>
          </div>
        </section>;
}