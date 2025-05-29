
import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Bell, Plus, Trash2, TrendingUp, Volume2 } from "lucide-react";

export const AlertsSection = () => {
  const [alerts, setAlerts] = useState([
    {
      id: 1,
      type: "Price Breakout",
      symbol: "RELIANCE",
      condition: "Price > ₹2500",
      channel: "Telegram",
      isActive: true,
    },
    {
      id: 2,
      type: "Volume Spike",
      symbol: "TCS",
      condition: "Volume > 2x avg",
      channel: "Email",
      isActive: true,
    },
    {
      id: 3,
      type: "RSI Crossover",
      symbol: "HDFC",
      condition: "RSI < 30",
      channel: "WhatsApp",
      isActive: false,
    },
  ]);

  const [showAddForm, setShowAddForm] = useState(false);
  const [newAlert, setNewAlert] = useState({
    type: "",
    symbol: "",
    threshold: "",
    channel: "",
  });

  const handleAddAlert = () => {
    if (newAlert.type && newAlert.symbol && newAlert.threshold && newAlert.channel) {
      const alert = {
        id: Date.now(),
        type: newAlert.type,
        symbol: newAlert.symbol,
        condition: `${newAlert.type} ${newAlert.threshold}`,
        channel: newAlert.channel,
        isActive: true,
      };
      setAlerts([...alerts, alert]);
      setNewAlert({ type: "", symbol: "", threshold: "", channel: "" });
      setShowAddForm(false);
    }
  };

  const handleDeleteAlert = (id: number) => {
    setAlerts(alerts.filter(alert => alert.id !== id));
  };

  const getAlertIcon = (type: string) => {
    switch (type) {
      case "Price Breakout":
        return <TrendingUp className="w-4 h-4 text-blue-600" />;
      case "Volume Spike":
        return <Volume2 className="w-4 h-4 text-green-600" />;
      default:
        return <Bell className="w-4 h-4 text-purple-600" />;
    }
  };

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Trading Alerts</h1>
          <p className="text-gray-600">Manage your real-time trading notifications</p>
        </div>
        <Button onClick={() => setShowAddForm(true)} className="bg-blue-600 hover:bg-blue-700">
          <Plus className="w-4 h-4 mr-2" />
          Add Alert
        </Button>
      </div>

      {/* Add Alert Form */}
      {showAddForm && (
        <Card>
          <CardHeader>
            <CardTitle>Create New Alert</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label>Alert Type</Label>
                <Select value={newAlert.type} onValueChange={(value) => setNewAlert({...newAlert, type: value})}>
                  <SelectTrigger>
                    <SelectValue placeholder="Select alert type" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="Price Breakout">Price Breakout</SelectItem>
                    <SelectItem value="Volume Spike">Volume Spike</SelectItem>
                    <SelectItem value="RSI Crossover">RSI Crossover</SelectItem>
                    <SelectItem value="Moving Average">Moving Average</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div className="space-y-2">
                <Label>Symbol</Label>
                <Input
                  placeholder="e.g., RELIANCE"
                  value={newAlert.symbol}
                  onChange={(e) => setNewAlert({...newAlert, symbol: e.target.value})}
                />
              </div>
              <div className="space-y-2">
                <Label>Threshold</Label>
                <Input
                  placeholder="e.g., > ₹2500"
                  value={newAlert.threshold}
                  onChange={(e) => setNewAlert({...newAlert, threshold: e.target.value})}
                />
              </div>
              <div className="space-y-2">
                <Label>Notification Channel</Label>
                <Select value={newAlert.channel} onValueChange={(value) => setNewAlert({...newAlert, channel: value})}>
                  <SelectTrigger>
                    <SelectValue placeholder="Select channel" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="Email">Email</SelectItem>
                    <SelectItem value="Telegram">Telegram</SelectItem>
                    <SelectItem value="WhatsApp">WhatsApp</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>
            <div className="flex space-x-3">
              <Button onClick={handleAddAlert} className="bg-green-600 hover:bg-green-700">
                Create Alert
              </Button>
              <Button variant="outline" onClick={() => setShowAddForm(false)}>
                Cancel
              </Button>
            </div>
          </CardContent>
        </Card>
      )}

      {/* Active Alerts */}
      <div className="grid gap-4">
        {alerts.map((alert) => (
          <Card key={alert.id} className={`${alert.isActive ? 'border-green-200 bg-green-50' : 'border-gray-200'}`}>
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-4">
                  {getAlertIcon(alert.type)}
                  <div>
                    <h3 className="font-semibold text-gray-900">{alert.symbol}</h3>
                    <p className="text-sm text-gray-600">{alert.type}: {alert.condition}</p>
                  </div>
                </div>
                <div className="flex items-center space-x-3">
                  <span className="text-sm px-2 py-1 bg-blue-100 text-blue-800 rounded-full">
                    {alert.channel}
                  </span>
                  <span className={`text-sm px-2 py-1 rounded-full ${
                    alert.isActive ? 'bg-green-100 text-green-800' : 'bg-gray-100 text-gray-800'
                  }`}>
                    {alert.isActive ? 'Active' : 'Inactive'}
                  </span>
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={() => handleDeleteAlert(alert.id)}
                    className="text-red-600 hover:text-red-700"
                  >
                    <Trash2 className="w-4 h-4" />
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {alerts.length === 0 && (
        <Card>
          <CardContent className="p-12 text-center">
            <Bell className="w-12 h-12 text-gray-400 mx-auto mb-4" />
            <h3 className="text-lg font-semibold text-gray-900 mb-2">No alerts configured</h3>
            <p className="text-gray-600 mb-4">Create your first trading alert to get started</p>
            <Button onClick={() => setShowAddForm(true)} className="bg-blue-600 hover:bg-blue-700">
              <Plus className="w-4 h-4 mr-2" />
              Add Your First Alert
            </Button>
          </CardContent>
        </Card>
      )}
    </div>
  );
};
