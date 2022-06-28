import 'dotenv/config';
const VERSION = '0.0.1';
const __DEV__ = true;

export default {
  expo: {
    name: 'Free Time Hunter',
    slug: 'free-time-hunter',
    version: VERSION,
    orientation: 'portrait',
    icon: './src/assets/images/icon.png',
    backgroundColor: '#0F0D19',
    userInterfaceStyle: 'automatic',
    primaryColor: '#28DF99',
    splash: {
      image: './src/assets/images/splash.png',
      resizeMode: 'contain',
      backgroundColor: '#0F0D19',
    },
    privacy: 'public',
    githubUrl: 'https://github.com/codenuru/freetimehunter-mobile',
    updates: {
      enabled: false,
      fallbackToCacheTimeout: 0,
    },
    assetBundlePatterns: ['**/*'],
    notification: {
      icon: './src/assets/images/icon.png',
      color: '#C14580',
      androidMode: 'collapse',
      iosDisplayInForeground: false,
      androidCollapsedTitle: '{unread_notifications} new Notifications from Free Time Hunter!',
    },
    ios: {
      userInterfaceStyle: 'automatic',
      supportsTablet: true,
      usesAppleSignIn: true,
      bundleIdentifier: __DEV__ ? 'host.exp.exponent' : 'com.codenuru.freetimehunter',
      buildNumber: VERSION,
    },
    android: {
      permissions: [],
      userInterfaceStyle: 'automatic',
      adaptiveIcon: {
        foregroundImage: './src/assets/images/adaptive-icon.png',
        backgroundColor: '#0F0D19',
      },
      package: __DEV__ ? 'host.exp.exponent' : 'com.codenuru.freetimehunter',
    },
    androidStatusBar: {
      barStyle: 'dark-content',
      translucent: true,
    },
    androidNavigationBar: {
      visible: 'sticky-immersive',
      barStyle: 'light-content',
      backgroundColor: '#0F0D19',
    },
    extra: {
      apiKey: process.env.API_KEY,
      authDomain: process.env.AUTH_DOMAIN,
      projectId: process.env.PROJECT_ID,
      storageBucket: process.env.STORAGE_BUCKET,
      messagingSenderId: process.env.MESSAGING_SENDER_ID,
      appId: process.env.APP_ID,
    },
  },
};
