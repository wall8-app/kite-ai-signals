
import { useState } from "react";
import { DashboardSidebar } from "@/components/DashboardSidebar";
import { PortfolioSummary } from "@/components/PortfolioSummary";
import { AlertsSection } from "@/components/AlertsSection";
import { StrategyInsights } from "@/components/StrategyInsights";
import { Settings } from "@/components/Settings";
import { Button } from "@/components/ui/button";
import { Menu } from "lucide-react";

const Dashboard = () => {
  const [activeTab, setActiveTab] = useState("portfolio");
  const [sidebarOpen, setSidebarOpen] = useState(false);

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
    <div className="min-h-screen bg-gray-50 flex">
      {/* Mobile Sidebar Overlay */}
      {sidebarOpen && (
        <div 
          className="fixed inset-0 bg-black/50 z-40 lg:hidden"
          onClick={() => setSidebarOpen(false)}
        />
      )}

      {/* Sidebar */}
      <div className={`
        fixed lg:static inset-y-0 left-0 z-50 w-64 transform transition-transform duration-300 ease-in-out
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
        {/* Mobile Header */}
        <div className="lg:hidden bg-white border-b border-gray-200 p-4">
          <Button
            variant="ghost"
            size="sm"
            onClick={() => setSidebarOpen(true)}
          >
            <Menu className="w-5 h-5" />
          </Button>
        </div>

        {/* Content */}
        <main className="flex-1 p-4 lg:p-8">
          {renderContent()}
        </main>
      </div>
    </div>
  );
};

export default Dashboard;
