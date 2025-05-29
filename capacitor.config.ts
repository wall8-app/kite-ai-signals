
import { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'app.lovable.775212644bfc4d3aabfb6f4d974a8fb2',
  appName: 'TradePulse',
  webDir: 'dist',
  server: {
    url: 'https://77521264-4bfc-4d3a-abfb-6f4d974a8fb2.lovableproject.com?forceHideBadge=true',
    cleartext: true
  },
  plugins: {
    SplashScreen: {
      launchShowDuration: 2000,
      backgroundColor: '#ffffff',
      showSpinner: false
    }
  }
};

export default config;
