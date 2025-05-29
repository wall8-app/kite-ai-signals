
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { ArrowDown, TrendingUp, Shield, Smartphone, Check } from "lucide-react";
import { Link } from "react-router-dom";

const Index = () => {
  const [showPricing, setShowPricing] = useState(false);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100">
      {/* Header */}
      <header className="bg-white/80 backdrop-blur-md border-b border-gray-200 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-lg flex items-center justify-center">
                <TrendingUp className="w-5 h-5 text-white" />
              </div>
              <span className="text-xl font-bold text-gray-900">TradePulse</span>
            </div>
            <div className="flex items-center space-x-4">
              <Button variant="ghost" className="hidden sm:inline-flex">
                How it works
              </Button>
              <Button variant="outline" onClick={() => setShowPricing(true)}>
                Pricing
              </Button>
              <Link to="/login">
                <Button>Connect Zerodha</Button>
              </Link>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative py-20 lg:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl sm:text-6xl font-bold text-gray-900 mb-6">
              Get real-time{" "}
              <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
                AI-powered
              </span>{" "}
              trading alerts
            </h1>
            <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
              Connect your Zerodha account and receive intelligent trading signals, 
              portfolio analytics, and risk insights powered by advanced AI algorithms.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/login">
                <Button size="lg" className="w-full sm:w-auto bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700">
                  Connect Zerodha Account
                </Button>
              </Link>
              <Button size="lg" variant="outline" className="w-full sm:w-auto">
                See how it works
                <ArrowDown className="ml-2 w-4 h-4" />
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Everything you need to trade smarter
            </h2>
            <p className="text-lg text-gray-600">
              Powerful features designed for modern traders
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center p-6 rounded-2xl bg-gradient-to-br from-blue-50 to-indigo-50 border border-blue-100">
              <div className="w-12 h-12 bg-blue-600 rounded-xl flex items-center justify-center mx-auto mb-4">
                <TrendingUp className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Real-time Alerts</h3>
              <p className="text-gray-600">
                Get instant notifications for price breakouts, volume spikes, and technical indicators
              </p>
            </div>
            <div className="text-center p-6 rounded-2xl bg-gradient-to-br from-green-50 to-emerald-50 border border-green-100">
              <div className="w-12 h-12 bg-green-600 rounded-xl flex items-center justify-center mx-auto mb-4">
                <Shield className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Risk Analytics</h3>
              <p className="text-gray-600">
                Advanced portfolio analysis with risk scoring and volatility insights
              </p>
            </div>
            <div className="text-center p-6 rounded-2xl bg-gradient-to-br from-purple-50 to-pink-50 border border-purple-100">
              <div className="w-12 h-12 bg-purple-600 rounded-xl flex items-center justify-center mx-auto mb-4">
                <Smartphone className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Mobile First</h3>
              <p className="text-gray-600">
                Optimized for mobile trading with notifications via Telegram, WhatsApp, and Email
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-indigo-600">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-white mb-4">
            Ready to supercharge your trading?
          </h2>
          <p className="text-xl text-blue-100 mb-8">
            Join thousands of traders already using TradePulse
          </p>
          <Link to="/login">
            <Button size="lg" variant="secondary" className="bg-white text-blue-600 hover:bg-gray-50">
              Start Free Trial
            </Button>
          </Link>
        </div>
      </section>

      {/* Pricing Modal */}
      {showPricing && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center p-4 z-50">
          <div className="bg-white rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto">
            <div className="p-6 border-b">
              <div className="flex justify-between items-center">
                <h2 className="text-2xl font-bold text-gray-900">Choose Your Plan</h2>
                <Button variant="ghost" onClick={() => setShowPricing(false)}>
                  ✕
                </Button>
              </div>
            </div>
            <div className="p-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div className="border border-gray-200 rounded-xl p-6">
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">Free</h3>
                  <div className="text-3xl font-bold text-gray-900 mb-4">₹0<span className="text-sm text-gray-500">/month</span></div>
                  <ul className="space-y-3 mb-6">
                    <li className="flex items-center">
                      <Check className="w-5 h-5 text-green-600 mr-3" />
                      <span>Up to 3 alerts</span>
                    </li>
                    <li className="flex items-center">
                      <Check className="w-5 h-5 text-green-600 mr-3" />
                      <span>Daily portfolio summary</span>
                    </li>
                    <li className="flex items-center">
                      <Check className="w-5 h-5 text-green-600 mr-3" />
                      <span>Basic risk metrics</span>
                    </li>
                  </ul>
                  <Button variant="outline" className="w-full">Current Plan</Button>
                </div>
                <div className="border-2 border-blue-600 rounded-xl p-6 relative">
                  <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                    <span className="bg-blue-600 text-white px-4 py-1 rounded-full text-sm font-medium">Popular</span>
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">Premium</h3>
                  <div className="text-3xl font-bold text-gray-900 mb-4">₹299<span className="text-sm text-gray-500">/month</span></div>
                  <ul className="space-y-3 mb-6">
                    <li className="flex items-center">
                      <Check className="w-5 h-5 text-green-600 mr-3" />
                      <span>Unlimited alerts</span>
                    </li>
                    <li className="flex items-center">
                      <Check className="w-5 h-5 text-green-600 mr-3" />
                      <span>Advanced risk analytics</span>
                    </li>
                    <li className="flex items-center">
                      <Check className="w-5 h-5 text-green-600 mr-3" />
                      <span>Priority updates</span>
                    </li>
                    <li className="flex items-center">
                      <Check className="w-5 h-5 text-green-600 mr-3" />
                      <span>Strategy insights</span>
                    </li>
                    <li className="flex items-center">
                      <Check className="w-5 h-5 text-green-600 mr-3" />
                      <span>WhatsApp & Telegram alerts</span>
                    </li>
                  </ul>
                  <Button className="w-full bg-blue-600 hover:bg-blue-700">Upgrade to Premium</Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Index;
