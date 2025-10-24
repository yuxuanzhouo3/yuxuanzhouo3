// @ts-ignore;
import React from 'react';
// @ts-ignore;
import { Shield } from 'lucide-react';

export default function BlockedPage() {
  return <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 flex items-center justify-center">
      <div className="text-center px-4">
        <Shield className="w-24 h-24 text-red-400 mx-auto mb-6" />
        <h1 className="text-4xl font-bold text-white mb-4">Access Restricted</h1>
        <p className="text-xl text-gray-300 mb-8 max-w-md">
          很抱歉，根据当地法律法规，OrbitChat 暂不支持您所在地区的服务。
          <br />
          Sorry, OrbitChat is not available in your region due to local regulations.
        </p>
        <button onClick={() => window.location.href = 'https://orbitchat-global.vercel.app'} className="px-6 py-3 bg-gradient-to-r from-cyan-500 to-purple-500 text-white rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-600 transition-all duration-300">
          访问国际版 Visit Global Version
        </button>
      </div>
    </div>;
}