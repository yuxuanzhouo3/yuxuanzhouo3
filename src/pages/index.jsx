// @ts-ignore;
import React, { useEffect } from 'react';
// @ts-ignore;
import { Toaster } from '@/components/ui';

import { Header } from '@/components/Header';
import { HeroSection } from '@/components/HeroSection';
import { FeaturesSection } from '@/components/FeaturesSection';
import { ExperienceSection } from '@/components/ExperienceSection';
import { ContactSection } from '@/components/ContactSection';
import { Footer } from '@/components/Footer';
export default function OrbitChatWebsite(props) {
  const {
    $w
  } = props;
  useEffect(() => {
    const initializeWebsite = async () => {
      try {
        // 获取用户地理位置
        const geoResponse = await fetch('https://ipapi.co/json/');
        const geoData = await geoResponse.json();

        // 欧洲国家列表
        const europeanCountries = ['AT', 'BE', 'BG', 'HR', 'CY', 'CZ', 'DK', 'EE', 'FI', 'FR', 'DE', 'GR', 'HU', 'IE', 'IT', 'LV', 'LT', 'LU', 'MT', 'NL', 'PL', 'PT', 'RO', 'SK', 'SI', 'ES', 'SE', 'GB'];

        // 检查是否为欧洲用户
        if (europeanCountries.includes(geoData.country_code)) {
          // 重定向到 blocked 页面
          window.location.href = '/blocked';
          return;
        }

        // 记录用户访问信息到 orbitchat_access_logs
        await $w.cloud.callDataSource({
          dataSourceName: 'orbitchat_access_logs',
          methodName: 'wedaCreateV2',
          params: {
            data: {
              visitor_ip: geoData.ip,
              country: geoData.country_name,
              visit_time: new Date().getTime(),
              referrer: document.referrer || window.location.href,
              user_agent: navigator.userAgent
            }
          }
        });
        console.log('Access logged successfully for:', geoData.country_name);
      } catch (error) {
        console.error('Failed to initialize website:', error);
      }
    };
    initializeWebsite();

    // 平滑滚动
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
          target.scrollIntoView({
            behavior: 'smooth'
          });
        }
      });
    });
  }, []);
  return <div className="min-h-screen bg-slate-900">
      <Header />
      <main>
        <HeroSection />
        <FeaturesSection />
        <ExperienceSection />
        <ContactSection $w={$w} />
      </main>
      <Footer />
      <Toaster />
    </div>;
}