// @ts-ignore;
import React from 'react';

import { DynamicQRCode } from '@/components/DynamicQRCode';
export function ExperienceSection() {
  return <section id="experience" className="py-20 bg-gradient-to-b from-slate-900 to-purple-900/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            立即体验
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            根据您的位置，我们为您准备了最适合的体验方式
          </p>
        </div>

        <DynamicQRCode />
      </div>
    </section>;
}