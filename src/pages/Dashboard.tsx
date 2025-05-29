
import { useState } from "react";
import { DashboardSidebar } from "@/components/DashboardSidebar";
import { PortfolioSummary } from "@/components/PortfolioSummary";
import { AlertsSection } from "@/components/AlertsSection";
import { StrategyInsights } from "@/components/StrategyInsights";
import { Settings } from "@/components/Settings";
import { Button } from "@/components/ui/button";
import { Menu, Bell, TrendingUp, TrendingDown } from "lucide-react";

const Dashboard = () => {
  const [activeTab, setActiveTab] = useState("portfolio");
  const [sidebarOpen, setSidebarOpen] = useState(false);

  // Mock portfolio data
  const portfolioData = {
    totalValue: 287500,
    dayPnL: 12750,
    dayPnLPercent: 4.6,
    totalPnL: 37500,
    totalPnLPercent: 15,
    activeAlerts: 5
  };

  const renderContent = () => {
    switch (activeTab) {
      case "portfolio":
        return <PortfolioSummary />;
      case "alerts":
        return <AlertsSection />;
      case "insights":
        return <StrategyInsights />;
      case "settings":
        return <Settings />;
      default:
        return <PortfolioSummary />;
    }
  };

  return (
    <div className="min-h-screen bg-slate-50 flex">
      {/* Mobile Sidebar Overlay */}
      {sidebarOpen && (
        <div 
          className="fixed inset-0 bg-black/50 z-40 lg:hidden"
          onClick={() => setSidebarOpen(false)}
        />
      )}

      {/* Sidebar */}
      <div className={`
        fixed lg:static inset-y-0 left-0 z-50 w-72 transform transition-transform duration-300 ease-in-out
        ${sidebarOpen ? 'translate-x-0' : '-translate-x-full'} lg:translate-x-0
      `}>
        <DashboardSidebar 
          activeTab={activeTab} 
          setActiveTab={setActiveTab}
          setSidebarOpen={setSidebarOpen}
        />
      </div>

      {/* Main Content */}
      <div className="flex-1 flex flex-col">
        {/* Top Bar */}
        <header className="bg-white border-b border-slate-200 px-4 lg:px-8 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <Button
                variant="ghost"
                size="sm"
                onClick={() => setSidebarOpen(true)}
                className="lg:hidden"
              >
                <Menu className="w-5 h-5" />
              </Button>
              <div className="hidden lg:block">
                <h1 className="text-2xl font-bold text-slate-900">Dashboard</h1>
                <p className="text-sm text-slate-600">Welcome back to TradePulse</p>
              </div>
            </div>

            {/* Portfolio Stats Bar */}
            <div className="hidden md:flex items-center space-x-6">
              <div className="text-right">
                <p className="text-sm text-slate-600">Portfolio Value</p>
                <p className="text-lg font-bold text-slate-900">₹{portfolioData.totalValue.toLocaleString()}</p>
              </div>
              <div className="text-right">
                <p className="text-sm text-slate-600">Today's P&L</p>
                <p className={`text-lg font-bold flex items-center ${portfolioData.dayPnL >= 0 ? 'text-green-600' : 'text-red-600'}`}>
                  {portfolioData.dayPnL >= 0 ? <TrendingUp className="w-4 h-4 mr-1" /> : <TrendingDown className="w-4 h-4 mr-1" />}
                  {portfolioData.dayPnL >= 0 ? '+' : ''}₹{portfolioData.dayPnL.toLocaleString()} ({portfolioData.dayPnLPercent}%)
                </p>
              </div>
              <div className="text-right">
                <p className="text-sm text-slate-600">Active Alerts</p>
                <p className="text-lg font-bold text-blue-600 flex items-center">
                  <Bell className="w-4 h-4 mr-1" />
                  {portfolioData.activeAlerts}
                </p>
              </div>
            </div>
          </div>
        </header>

        {/* Content */}
        <main className="flex-1 p-4 lg:p-8 overflow-auto">
          {renderContent()}
        </main>
      </div>
    </div>
  );
};

export default Dashboard;
