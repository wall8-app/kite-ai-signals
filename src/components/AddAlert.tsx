
import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { ArrowLeft, Bell, Smartphone, Mail, MessageCircle, Zap } from "lucide-react";

interface AddAlertProps {
  onBack: () => void;
  onSave: (alert: any) => void;
}

export const AddAlert = ({ onBack, onSave }: AddAlertProps) => {
  const [alertData, setAlertData] = useState({
    symbol: "",
    type: "",
    threshold: "",
    channel: "",
    condition: "greater_than"
  });

  const alertTypes = [
    { value: "price", label: "Price Alert", description: "Get notified when price crosses threshold" },
    { value: "volume", label: "Volume Spike", description: "Alert on unusual volume activity" },
    { value: "rsi", label: "RSI Crossover", description: "RSI overbought/oversold signals" },
    { value: "ma", label: "Moving Average", description: "Price vs moving average alerts" }
  ];

  const channels = [
    { value: "email", label: "Email", icon: Mail, description: "Instant email notifications" },
    { value: "telegram", label: "Telegram", icon: MessageCircle, description: "Telegram bot messages" },
    { value: "whatsapp", label: "WhatsApp", description: "WhatsApp notifications" },
  ];

  const popularStocks = ["RELIANCE", "TCS", "HDFC", "INFY", "ITC", "SBIN", "BAJFINANCE", "HDFCBANK"];

  const handleSave = () => {
    if (alertData.symbol && alertData.type && alertData.threshold && alertData.channel) {
      onSave(alertData);
      onBack();
    }
  };

  const getPreviewText = () => {
    if (!alertData.symbol || !alertData.type || !alertData.threshold) return "Configure alert to see preview";
    
    const conditionText = alertData.condition === "greater_than" ? "rises above" : "falls below";
    return `Alert when ${alertData.symbol} ${conditionText} ${alertData.threshold}`;
  };

  return (
    <div className="space-y-6">
      <div className="flex items-center space-x-4">
        <Button variant="ghost" onClick={onBack} className="p-2">
          <ArrowLeft className="w-4 h-4" />
        </Button>
        <div>
          <h1 className="text-3xl font-bold text-slate-900">Create Alert</h1>
          <p className="text-slate-600">Set up intelligent trading notifications</p>
        </div>
      </div>

      <div className="grid lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2 space-y-6">
          {/* Stock Selection */}
          <Card className="border-0 shadow-lg">
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <Bell className="w-5 h-5 text-blue-600" />
                <span>Select Stock</span>
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <Label>Stock Symbol</Label>
                <Input
                  placeholder="Enter stock symbol (e.g., RELIANCE)"
                  value={alertData.symbol}
                  onChange={(e) => setAlertData({...alertData, symbol: e.target.value.toUpperCase()})}
                  className="h-12"
                />
              </div>
              <div>
                <p className="text-sm text-slate-600 mb-3">Popular stocks:</p>
                <div className="flex flex-wrap gap-2">
                  {popularStocks.map(stock => (
                    <Button
                      key={stock}
                      variant="outline"
                      size="sm"
                      onClick={() => setAlertData({...alertData, symbol: stock})}
                      className={`${alertData.symbol === stock ? 'bg-blue-50 border-blue-300 text-blue-700' : ''}`}
                    >
                      {stock}
                    </Button>
                  ))}
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Alert Type */}
          <Card className="border-0 shadow-lg">
            <CardHeader>
              <CardTitle>Alert Type</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid sm:grid-cols-2 gap-4">
                {alertTypes.map((type) => (
                  <div
                    key={type.value}
                    className={`p-4 border-2 rounded-xl cursor-pointer transition-all ${
                      alertData.type === type.value 
                        ? 'border-blue-300 bg-blue-50' 
                        : 'border-slate-200 hover:border-slate-300'
                    }`}
                    onClick={() => setAlertData({...alertData, type: type.value})}
                  >
                    <h3 className="font-semibold text-slate-900 mb-1">{type.label}</h3>
                    <p className="text-sm text-slate-600">{type.description}</p>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Threshold */}
          <Card className="border-0 shadow-lg">
            <CardHeader>
              <CardTitle>Set Threshold</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid sm:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label>Condition</Label>
                  <Select value={alertData.condition} onValueChange={(value) => setAlertData({...alertData, condition: value})}>
                    <SelectTrigger className="h-12">
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="greater_than">Greater than</SelectItem>
                      <SelectItem value="less_than">Less than</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div className="space-y-2">
                  <Label>Value</Label>
                  <Input
                    type="number"
                    placeholder="e.g., 2500"
                    value={alertData.threshold}
                    onChange={(e) => setAlertData({...alertData, threshold: e.target.value})}
                    className="h-12"
                  />
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Notification Channel */}
          <Card className="border-0 shadow-lg">
            <CardHeader>
              <CardTitle>Notification Channel</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid sm:grid-cols-3 gap-4">
                {channels.map((channel) => (
                  <div
                    key={channel.value}
                    className={`p-4 border-2 rounded-xl cursor-pointer transition-all text-center ${
                      alertData.channel === channel.value 
                        ? 'border-blue-300 bg-blue-50' 
                        : 'border-slate-200 hover:border-slate-300'
                    }`}
                    onClick={() => setAlertData({...alertData, channel: channel.value})}
                  >
                    <channel.icon className="w-8 h-8 mx-auto mb-2 text-slate-600" />
                    <h3 className="font-semibold text-slate-900 mb-1">{channel.label}</h3>
                    <p className="text-xs text-slate-600">{channel.description}</p>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Preview Panel */}
        <div className="space-y-6">
          <Card className="border-0 shadow-lg sticky top-6">
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <Zap className="w-5 h-5 text-blue-600" />
                <span>Alert Preview</span>
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="bg-slate-50 p-4 rounded-lg">
                <p className="text-sm font-medium text-slate-900 mb-2">Alert Summary:</p>
                <p className="text-sm text-slate-600">{getPreviewText()}</p>
              </div>
              
              <div className="space-y-3">
                <div className="flex justify-between text-sm">
                  <span className="text-slate-600">Stock:</span>
                  <span className="font-medium">{alertData.symbol || "Not selected"}</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-slate-600">Type:</span>
                  <span className="font-medium">{alertData.type || "Not selected"}</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-slate-600">Threshold:</span>
                  <span className="font-medium">{alertData.threshold || "Not set"}</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-slate-600">Channel:</span>
                  <span className="font-medium">{alertData.channel || "Not selected"}</span>
                </div>
              </div>

              <Button 
                onClick={handleSave}
                disabled={!alertData.symbol || !alertData.type || !alertData.threshold || !alertData.channel}
                className="w-full bg-blue-600 hover:bg-blue-700"
              >
                Create Alert
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};
