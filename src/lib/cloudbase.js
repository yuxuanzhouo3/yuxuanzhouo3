
    // CloudBase SDK 封装
    export const cloudbase = {
      // 国内环境配置
      china: {
        envId: 'orbitchat-china-prod',
        region: 'ap-beijing',
        services: {
          auth: 'wechat',
          payment: ['wechatpay', 'alipay'],
          database: 'tencent-db'
        }
      },
      
      // 国际环境配置
      global: {
        envId: 'orbitchat-global-prod',
        region: 'us-east-1',
        services: {
          auth: 'google',
          payment: ['paypal', 'stripe'],
          database: 'supabase'
        }
      },
      
      // 获取当前环境配置
      getConfig: async () => {
        try {
          const response = await fetch('https://ipapi.co/json/');
          const data = await response.json();
          
          const europeanCountries = [
            'AT', 'BE', 'BG', 'HR', 'CY', 'CZ', 'DK', 'EE', 'FI', 'FR', 'DE', 'GR', 'HU', 'IE', 'IT', 'LV', 'LT', 'LU', 'MT', 'NL', 'PL', 'PT', 'RO', 'SK', 'SI', 'ES', 'SE', 'GB'
          ];
          
          if (europeanCountries.includes(data.country_code)) {
            return null; // 欧洲用户拒绝访问
          }
          
          return data.country_code === 'CN' ? cloudbase.china : cloudbase.global;
        } catch (error) {
          console.error('Failed to get region config:', error);
          return cloudbase.global; // 默认使用国际配置
        }
      },
      
      // 初始化 SDK
      init: async ($w) => {
        const config = await cloudbase.getConfig();
        if (!config) {
          throw new Error('Access denied for European users');
        }
        
        const tcb = await $w.cloud.getCloudInstance();
        return { tcb, config };
      }
    };
  