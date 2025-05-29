
import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Bell, Plus, Trash2, TrendingUp, Volume2, Activity, Eye, Pause, Play } from "lucide-react";
import { AddAlert } from "./AddAlert";

export const AlertsSection = () => {
  const [showAddForm, setShowAddForm] = useState(false);
  const [alerts, setAlerts] = useState([
    {
      id: 1,
      type: "Price Alert",
      symbol: "RELIANCE",
      condition: "Price > ₹2500",
      channel: "Telegram",
      isActive: true,
      lastTriggered: "2 hours ago",
      triggerCount: 3
    },
    {
      id: 2,
      type: "Volume Spike",
      symbol: "TCS",
      condition: "Volume > 2x avg",
      channel: "Email",
      isActive: true,
      lastTriggered: "Never",
      triggerCount: 0
    },
    {
      id: 3,
      type: "RSI Crossover",
      symbol: "HDFC",
      condition: "RSI < 30",
      channel: "WhatsApp",
      isActive: false,
      lastTriggered: "1 day ago",
      triggerCount: 12
    },
  ]);

  const handleAddAlert = (alertData: any) => {
    const newAlert = {
      id: Date.now(),
      type: alertData.type,
      symbol: alertData.symbol,
      condition: `${alertData.condition} ${alertData.threshold}`,
      channel: alertData.channel,
      isActive: true,
      lastTriggered: "Never",
      triggerCount: 0
    };
    setAlerts([...alerts, newAlert]);
  };

  const handleDeleteAlert = (id: number) => {
    setAlerts(alerts.filter(alert => alert.id !== id));
  };

  const toggleAlert = (id: number) => {
    setAlerts(alerts.map(alert => 
      alert.id === id ? { ...alert, isActive: !alert.isActive } : alert
    ));
  };

  const getAlertIcon = (type: string) => {
    switch (type) {
      case "Price Alert":
        return <TrendingUp className="w-5 h-5 text-blue-600" />;
      case "Volume Spike":
        return <Volume2 className="w-5 h-5 text-green-600" />;
      case "RSI Crossover":
        return <Activity className="w-5 h-5 text-purple-600" />;
      default:
        return <Bell className="w-5 h-5 text-slate-600" />;
    }
  };

  const getChannelColor = (channel: string) => {
    switch (channel.toLowerCase()) {
      case "telegram":
        return "bg-blue-100 text-blue-800";
      case "email":
        return "bg-green-100 text-green-800";
      case "whatsapp":
        return "bg-green-100 text-green-800";
      default:
        return "bg-slate-100 text-slate-800";
    }
  };

  if (showAddForm) {
    return <AddAlert onBack={() => setShowAddForm(false)} onSave={handleAddAlert} />;
  }

  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-slate-900 mb-2">Trading Alerts</h1>
          <p className="text-slate-600">Manage your AI-powered trading notifications</p>
        </div>
        <Button onClick={() => setShowAddForm(true)} className="bg-blue-600 hover:bg-blue-700 shadow-lg">
          <Plus className="w-4 h-4 mr-2" />
          Create Alert
        </Button>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <Card className="border-0 shadow-lg bg-gradient-to-br from-blue-50 to-blue-100">
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-blue-700 mb-1">Active Alerts</p>
                <p className="text-2xl font-bold text-blue-900">{alerts.filter(a => a.isActive).length}</p>
              </div>
              <Bell className="w-8 h-8 text-blue-600" />
            </div>
          </CardContent>
        </Card>

        <Card className="border-0 shadow-lg bg-gradient-to-br from-green-50 to-green-100">
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-green-700 mb-1">Triggered Today</p>
                <p className="text-2xl font-bold text-green-900">7</p>
              </div>
              <Activity className="w-8 h-8 text-green-600" />
            </div>
          </CardContent>
        </Card>

        <Card className="border-0 shadow-lg bg-gradient-to-br from-purple-50 to-purple-100">
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-purple-700 mb-1">Success Rate</p>
                <p className="text-2xl font-bold text-purple-900">89%</p>
              </div>
              <TrendingUp className="w-8 h-8 text-purple-600" />
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Alerts List */}
      <div className="space-y-4">
        {alerts.map((alert) => (
          <Card key={alert.id} className={`border-0 shadow-lg transition-all hover:shadow-xl ${
            alert.isActive ? 'bg-white' : 'bg-slate-50'
          }`}>
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-4">
                  <div className="flex items-center space-x-3">
                    {getAlertIcon(alert.type)}
                    <div>
                      <div className="flex items-center space-x-2 mb-1">
                        <h3 className="font-semibold text-slate-900 text-lg">{alert.symbol}</h3>
                        <span className={`px-2 py-1 rounded-full text-xs font-medium ${getChannelColor(alert.channel)}`}>
                          {alert.channel}
                        </span>
                      </div>
                      <p className="text-slate-600 mb-2">{alert.type}: {alert.condition}</p>
                      <div className="flex items-center space-x-4 text-sm text-slate-500">
                        <span>Last triggered: {alert.lastTriggered}</span>
                        <span>•</span>
                        <span>Triggered {alert.triggerCount} times</span>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="flex items-center space-x-3">
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={() => toggleAlert(alert.id)}
                    className={`${alert.isActive ? 'text-green-600 hover:text-green-700' : 'text-slate-400 hover:text-slate-600'}`}
                  >
                    {alert.isActive ? <Pause className="w-4 h-4" /> : <Play className="w-4 h-4" />}
                  </Button>
                  <Button
                    variant="ghost"
                    size="sm"
                    className="text-slate-600 hover:text-slate-700"
                  >
                    <Eye className="w-4 h-4" />
                  </Button>
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={() => handleDeleteAlert(alert.id)}
                    className="text-red-600 hover:text-red-700"
                  >
                    <Trash2 className="w-4 h-4" />
                  </Button>
                  <div className={`w-3 h-3 rounded-full ${alert.isActive ? 'bg-green-500' : 'bg-slate-400'}`} />
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {alerts.length === 0 && (
        <Card className="border-0 shadow-lg">
          <CardContent className="p-12 text-center">
            <div className="w-16 h-16 bg-slate-100 rounded-xl flex items-center justify-center mx-auto mb-4">
              <Bell className="w-8 h-8 text-slate-400" />
            </div>
            <h3 className="text-xl font-semibold text-slate-900 mb-2">No alerts configured</h3>
            <p className="text-slate-600 mb-6">Create your first AI-powered trading alert to get started</p>
            <Button onClick={() => setShowAddForm(true)} className="bg-blue-600 hover:bg-blue-700">
              <Plus className="w-4 h-4 mr-2" />
              Create Your First Alert
            </Button>
          </CardContent>
        </Card>
      )}
    </div>
  );
};
