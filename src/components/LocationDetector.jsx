// @ts-ignore;
import React, { useEffect, useState } from 'react';
// @ts-ignore;
import { Globe, Loader2 } from 'lucide-react';

export function LocationDetector({
  onLocationDetected
}) {
  const [loading, setLoading] = useState(true);
  const [location, setLocation] = useState(null);
  useEffect(() => {
    const detectLocation = async () => {
      try {
        const response = await fetch('https://ipapi.co/json/');
        const data = await response.json();
        const europeanCountries = ['AT', 'BE', 'BG', 'HR', 'CY', 'CZ', 'DK', 'EE', 'FI', 'FR', 'DE', 'GR', 'HU', 'IE', 'IT', 'LV', 'LT', 'LU', 'MT', 'NL', 'PL', 'PT', 'RO', 'SK', 'SI', 'ES', 'SE', 'GB'];
        const isEurope = europeanCountries.includes(data.country_code);
        const isChina = data.country_code === 'CN';
        setLocation({
          country: data.country_name,
          countryCode: data.country_code,
          isEurope,
          isChina
        });
        onLocationDetected({
          isEurope,
          isChina,
          countryCode: data.country_code
        });
      } catch (error) {
        console.error('Location detection failed:', error);
        // 默认使用国际版
        setLocation({
          country: 'Unknown',
          countryCode: 'GLOBAL',
          isEurope: false,
          isChina: false
        });
        onLocationDetected({
          isEurope: false,
          isChina: false,
          countryCode: 'GLOBAL'
        });
      } finally {
        setLoading(false);
      }
    };
    detectLocation();
  }, [onLocationDetected]);
  if (loading) {
    return <div className="fixed top-4 right-4 bg-slate-800/90 backdrop-blur-sm rounded-lg px-4 py-2 flex items-center space-x-2 text-white z-50">
        <Loader2 className="w-4 h-4 animate-spin" />
        <span className="text-sm">检测位置中...</span>
      </div>;
  }
  return <div className="fixed top-4 right-4 bg-slate-800/90 backdrop-blur-sm rounded-lg px-4 py-2 flex items-center space-x-2 text-white z-50">
      <Globe className="w-4 h-4" />
      <span className="text-sm">{location?.country}</span>
    </div>;
}