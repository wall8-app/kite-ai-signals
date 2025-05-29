
import { TrendingUp } from "lucide-react";

export const SplashScreen = () => {
  return (
    <div className="fixed inset-0 bg-gradient-to-br from-blue-600 to-blue-700 flex items-center justify-center z-50">
      <div className="text-center">
        <div className="w-20 h-20 bg-white rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-2xl">
          <TrendingUp className="w-10 h-10 text-blue-600" />
        </div>
        <h1 className="text-3xl font-bold text-white mb-2">TradePulse</h1>
        <p className="text-blue-100 text-lg">AI-powered trading insights</p>
        <div className="mt-8">
          <div className="w-8 h-8 border-4 border-white border-t-transparent rounded-full animate-spin mx-auto"></div>
        </div>
      </div>
    </div>
  );
};
