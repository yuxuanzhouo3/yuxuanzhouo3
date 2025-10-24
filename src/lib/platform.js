
    // 多平台部署配置
    export const platformConfig = {
      // 小程序配置
      miniprogram: {
        appId: 'wx1234567890abcdef',
        platforms: ['wechat', 'alipay', 'baidu', 'qq', 'toutiao'],
        stores: ['微信小程序', '支付宝小程序', '百度智能小程序', 'QQ小程序', '字节跳动小程序']
      },
      
      // 移动应用配置
      mobile: {
        ios: {
          bundleId: 'com.orbitchat.ios',
          store: 'App Store'
        },
        android: {
          packageName: 'com.orbitchat.android',
          stores: [
            '华为应用市场',
            '小米应用商店',
            'OPPO软件商店',
            'vivo应用商店',
            '应用宝'
          ]
        }
      },
      
      // 桌面应用配置
      desktop: {
        mac: {
          bundleId: 'com.orbitchat.mac',
          store: 'Mac App Store'
        },
        windows: {
          publisher: 'OrbitChat Inc.',
          store: 'Microsoft Store'
        }
      },
      
      // 一键转换工具
      transformer: {
        webToMiniprogram: true,
        webToMobile: true,
        webToDesktop: true,
        sharedComponents: ['Header', 'Footer', 'Button', 'Input']
      }
    };
  