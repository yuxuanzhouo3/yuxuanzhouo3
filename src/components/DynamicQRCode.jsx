// @ts-ignore;
import React from 'react';
// @ts-ignore;
import { QrCode, Download } from 'lucide-react';

export function DynamicQRCode({
  isChina
}) {
  const qrData = {
    china: {
      title: '微信小程序',
      subtitle: '扫码立即体验',
      image: '/qr/wechat-miniprogram.png',
      platforms: ['微信', '支付宝', 'QQ']
    },
    global: {
      title: 'App下载',
      subtitle: '扫码下载应用',
      image: '/qr/app-download.png',
      platforms: ['App Store', 'Google Play', 'Web']
    }
  };
  const current = isChina ? qrData.china : qrData.global;
  return <div className="flex flex-col lg:flex-row items-center justify-center gap-12">
      <div className="relative">
        <div className="w-64 h-64 bg-white rounded-2xl p-4 flex items-center justify-center shadow-2xl">
          <div className="w-full h-full bg-gradient-to-br from-gray-100 to-gray-200 rounded-xl flex flex-col items-center justify-center">
            <QrCode className="w-32 h-32 text-gray-600 mb-2" />
            <Download className="w-8 h-8 text-gray-400" />
          </div>
        </div>
        <div className="absolute -inset-4 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-2xl blur-2xl opacity-30" />
      </div>

      <div className="text-center lg:text-left">
        <h3 className="text-2xl font-bold text-white mb-2">{current.title}</h3>
        <p className="text-gray-300 mb-6 max-w-md">{current.subtitle}</p>
        
        <div className="space-y-2">
          <p className="text-sm text-gray-400">支持平台：</p>
          <div className="flex justify-center lg:justify-start space-x-2">
            {current.platforms.map((platform, index) => <span key={index} className="px-3 py-1 bg-gradient-to-r from-cyan-500/20 to-purple-500/20 text-cyan-400 rounded-full text-sm border border-cyan-500/30">
                {platform}
              </span>)}
          </div>
        </div>

        <div className="mt-4 p-4 bg-slate-800/50 rounded-lg">
          <p className="text-sm text-gray-300">
            {isChina ? '国内用户推荐使用微信小程序，无需下载，即扫即用' : '国际用户可下载原生应用，获得最佳体验'}
          </p>
        </div>
      </div>
    </div>;
}