
import { TrendingUp, PieChart, Bell, Lightbulb, Settings, X } from "lucide-react";
import { Button } from "@/components/ui/button";

interface DashboardSidebarProps {
  activeTab: string;
  setActiveTab: (tab: string) => void;
  setSidebarOpen: (open: boolean) => void;
}

export const DashboardSidebar = ({ activeTab, setActiveTab, setSidebarOpen }: DashboardSidebarProps) => {
  const menuItems = [
    { id: "portfolio", label: "Portfolio", icon: PieChart },
    { id: "alerts", label: "Alerts", icon: Bell },
    { id: "insights", label: "Insights", icon: Lightbulb },
    { id: "settings", label: "Settings", icon: Settings },
  ];

  return (
    <div className="h-full bg-white border-r border-gray-200 flex flex-col">
      {/* Header */}
      <div className="p-6 border-b border-gray-200">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-lg flex items-center justify-center">
              <TrendingUp className="w-5 h-5 text-white" />
            </div>
            <span className="text-xl font-bold text-gray-900">TradePulse</span>
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
                    w-full flex items-center space-x-3 px-3 py-2.5 rounded-lg text-left transition-colors
                    ${activeTab === item.id 
                      ? 'bg-blue-50 text-blue-700 border border-blue-200' 
                      : 'text-gray-700 hover:bg-gray-50'
                    }
                  `}
                >
                  <Icon className="w-5 h-5" />
                  <span className="font-medium">{item.label}</span>
                </button>
              </li>
            );
          })}
        </ul>
      </nav>

      {/* Footer */}
      <div className="p-4 border-t border-gray-200">
        <div className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-lg p-4">
          <h4 className="font-semibold text-gray-900 mb-1">Upgrade to Premium</h4>
          <p className="text-sm text-gray-600 mb-3">Unlock unlimited alerts and advanced analytics</p>
          <Button size="sm" className="w-full bg-blue-600 hover:bg-blue-700">
            Upgrade Now
          </Button>
        </div>
      </div>
    </div>
  );
};
