
import { TrendingUp, PieChart, Bell, Lightbulb, Settings, X, Zap } from "lucide-react";
import { Button } from "@/components/ui/button";

interface DashboardSidebarProps {
  activeTab: string;
  setActiveTab: (tab: string) => void;
  setSidebarOpen: (open: boolean) => void;
}

export const DashboardSidebar = ({ activeTab, setActiveTab, setSidebarOpen }: DashboardSidebarProps) => {
  const menuItems = [
    { id: "portfolio", label: "Portfolio", icon: PieChart, description: "Overview & analytics" },
    { id: "alerts", label: "Alerts", icon: Bell, description: "Trading notifications" },
    { id: "insights", label: "Insights", icon: Lightbulb, description: "AI-powered analysis" },
    { id: "settings", label: "Settings", icon: Settings, description: "Account & preferences" },
  ];

  return (
    <div className="h-full bg-white border-r border-slate-200 flex flex-col shadow-sm">
      {/* Header */}
      <div className="p-6 border-b border-slate-200">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 bg-gradient-to-r from-blue-600 to-blue-700 rounded-xl flex items-center justify-center shadow-lg">
              <TrendingUp className="w-6 h-6 text-white" />
            </div>
            <div>
              <h1 className="text-xl font-bold text-slate-900">TradePulse</h1>
              <p className="text-xs text-slate-600 -mt-1">AI-powered trading</p>
            </div>
          </div>
          <Button
            variant="ghost"
            size="sm"
            className="lg:hidden"
            onClick={() => setSidebarOpen(false)}
          >
            <X className="w-4 h-4" />
          </Button>
        </div>
      </div>

      {/* Quick Stats */}
      <div className="p-6 border-b border-slate-200">
        <div className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-xl p-4">
          <div className="flex items-center justify-between mb-3">
            <h3 className="font-semibold text-slate-900 text-sm">Market Status</h3>
            <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
          </div>
          <div className="space-y-2">
            <div className="flex justify-between text-sm">
              <span className="text-slate-600">NIFTY 50</span>
              <span className="text-green-600 font-medium">+0.83%</span>
            </div>
            <div className="flex justify-between text-sm">
              <span className="text-slate-600">SENSEX</span>
              <span className="text-green-600 font-medium">+1.12%</span>
            </div>
          </div>
        </div>
      </div>

      {/* Navigation */}
      <nav className="flex-1 p-4">
        <ul className="space-y-2">
          {menuItems.map((item) => {
            const Icon = item.icon;
            return (
              <li key={item.id}>
                <button
                  onClick={() => {
                    setActiveTab(item.id);
                    setSidebarOpen(false);
                  }}
                  className={`
                    w-full flex items-start space-x-3 px-4 py-3 rounded-xl text-left transition-all duration-200
                    ${activeTab === item.id 
                      ? 'bg-blue-50 text-blue-700 border border-blue-200 shadow-sm' 
                      : 'text-slate-700 hover:bg-slate-50 hover:text-slate-900'
                    }
                  `}
                >
                  <Icon className="w-5 h-5 mt-0.5" />
                  <div>
                    <div className="font-medium">{item.label}</div>
                    <div className="text-xs text-slate-500 mt-0.5">{item.description}</div>
                  </div>
                </button>
              </li>
            );
          })}
        </ul>
      </nav>

      {/* Upgrade Section */}
      <div className="p-4 border-t border-slate-200">
        <div className="bg-gradient-to-r from-blue-600 to-blue-700 rounded-xl p-4 text-white">
          <div className="flex items-center space-x-2 mb-2">
            <Zap className="w-4 h-4" />
            <h4 className="font-semibold text-sm">Upgrade to Pro</h4>
          </div>
          <p className="text-xs text-blue-100 mb-3">Unlock unlimited alerts and advanced analytics</p>
          <Button size="sm" className="w-full bg-white text-blue-600 hover:bg-blue-50 font-medium">
            Upgrade Now
          </Button>
        </div>
      </div>
    </div>
  );
};
