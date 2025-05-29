
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { TrendingUp, TrendingDown, DollarSign, Shield, Plus, Activity, AlertTriangle } from "lucide-react";

export const PortfolioSummary = () => {
  const portfolioData = {
    totalInvested: 250000,
    currentValue: 287500,
    pnl: 37500,
    pnlPercentage: 15,
    dayPnL: 12750,
    dayPnLPercentage: 4.6,
    riskScore: 7.2,
    topGainers: [
      { symbol: "RELIANCE", change: 12.5, price: 2450 },
      { symbol: "TCS", change: 8.3, price: 3890 },
      { symbol: "HDFC", change: 6.7, price: 1670 },
    ],
    topLosers: [
      { symbol: "WIPRO", change: -4.2, price: 425 },
      { symbol: "INFY", change: -2.8, price: 1520 },
    ],
    allocation: [
      { sector: "Technology", percentage: 35, amount: 100625, color: "bg-blue-500" },
      { sector: "Finance", percentage: 25, amount: 71875, color: "bg-green-500" },
      { sector: "Energy", percentage: 20, amount: 57500, color: "bg-purple-500" },
      { sector: "Healthcare", percentage: 15, amount: 43125, color: "bg-orange-500" },
      { sector: "Cash", percentage: 5, amount: 14375, color: "bg-slate-400" },
    ]
  };

  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-slate-900 mb-2">Portfolio Overview</h1>
          <p className="text-slate-600">Real-time insights into your trading performance</p>
        </div>
        <Button className="bg-blue-600 hover:bg-blue-700 shadow-lg">
          <Plus className="w-4 h-4 mr-2" />
          Add Alert
        </Button>
      </div>

      {/* Key Metrics Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <Card className="border-0 shadow-lg bg-gradient-to-br from-blue-50 to-blue-100">
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-blue-700 mb-1">Portfolio Value</p>
                <p className="text-2xl font-bold text-blue-900">₹{portfolioData.currentValue.toLocaleString()}</p>
                <p className="text-xs text-blue-600 mt-1">Invested: ₹{portfolioData.totalInvested.toLocaleString()}</p>
              </div>
              <div className="w-12 h-12 bg-blue-600 rounded-xl flex items-center justify-center">
                <DollarSign className="w-6 h-6 text-white" />
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="border-0 shadow-lg bg-gradient-to-br from-green-50 to-green-100">
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-green-700 mb-1">Today's P&L</p>
                <p className="text-2xl font-bold text-green-900">
                  +₹{portfolioData.dayPnL.toLocaleString()}
                </p>
                <p className="text-xs text-green-600 mt-1">+{portfolioData.dayPnLPercentage}%</p>
              </div>
              <div className="w-12 h-12 bg-green-600 rounded-xl flex items-center justify-center">
                <TrendingUp className="w-6 h-6 text-white" />
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="border-0 shadow-lg bg-gradient-to-br from-purple-50 to-purple-100">
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-purple-700 mb-1">Total P&L</p>
                <p className="text-2xl font-bold text-purple-900">
                  +₹{portfolioData.pnl.toLocaleString()}
                </p>
                <p className="text-xs text-purple-600 mt-1">+{portfolioData.pnlPercentage}%</p>
              </div>
              <div className="w-12 h-12 bg-purple-600 rounded-xl flex items-center justify-center">
                <Activity className="w-6 h-6 text-white" />
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="border-0 shadow-lg bg-gradient-to-br from-orange-50 to-orange-100">
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-orange-700 mb-1">Risk Score</p>
                <p className="text-2xl font-bold text-orange-900">{portfolioData.riskScore}/10</p>
                <p className="text-xs text-orange-600 mt-1">Moderate Risk</p>
              </div>
              <div className="w-12 h-12 bg-orange-600 rounded-xl flex items-center justify-center">
                <Shield className="w-6 h-6 text-white" />
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      <div className="grid lg:grid-cols-3 gap-8">
        {/* Asset Allocation */}
        <Card className="lg:col-span-2 border-0 shadow-lg">
          <CardHeader className="pb-4">
            <CardTitle className="flex items-center space-x-2">
              <PieChart className="w-5 h-5 text-blue-600" />
              <span>Asset Allocation</span>
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {portfolioData.allocation.map((item, index) => (
                <div key={index} className="space-y-2">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-3">
                      <div className={`w-3 h-3 rounded-full ${item.color}`} />
                      <span className="font-medium text-slate-900">{item.sector}</span>
                    </div>
                    <div className="text-right">
                      <p className="font-semibold text-slate-900">{item.percentage}%</p>
                      <p className="text-sm text-slate-600">₹{item.amount.toLocaleString()}</p>
                    </div>
                  </div>
                  <div className="w-full bg-slate-200 rounded-full h-2">
                    <div 
                      className={`h-2 rounded-full ${item.color}`}
                      style={{ width: `${item.percentage}%` }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Top Movers */}
        <div className="space-y-6">
          <Card className="border-0 shadow-lg">
            <CardHeader className="pb-4">
              <CardTitle className="text-green-600 flex items-center space-x-2">
                <TrendingUp className="w-5 h-5" />
                <span>Top Gainers</span>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {portfolioData.topGainers.map((stock, index) => (
                  <div key={index} className="flex items-center justify-between p-3 bg-green-50 rounded-lg">
                    <div>
                      <p className="font-semibold text-slate-900">{stock.symbol}</p>
                      <p className="text-sm text-slate-600">₹{stock.price}</p>
                    </div>
                    <div className="text-right">
                      <p className="font-bold text-green-600">+{stock.change}%</p>
                      <div className="flex items-center text-xs text-green-600">
                        <TrendingUp className="w-3 h-3 mr-1" />
                        Bullish
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          <Card className="border-0 shadow-lg">
            <CardHeader className="pb-4">
              <CardTitle className="text-red-600 flex items-center space-x-2">
                <TrendingDown className="w-5 h-5" />
                <span>Top Losers</span>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {portfolioData.topLosers.map((stock, index) => (
                  <div key={index} className="flex items-center justify-between p-3 bg-red-50 rounded-lg">
                    <div>
                      <p className="font-semibold text-slate-900">{stock.symbol}</p>
                      <p className="text-sm text-slate-600">₹{stock.price}</p>
                    </div>
                    <div className="text-right">
                      <p className="font-bold text-red-600">{stock.change}%</p>
                      <div className="flex items-center text-xs text-red-600">
                        <TrendingDown className="w-3 h-3 mr-1" />
                        Bearish
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </div>

      {/* AI Insights Banner */}
      <Card className="border-0 shadow-lg bg-gradient-to-r from-blue-600 to-blue-700 text-white">
        <CardContent className="p-6">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center">
                <AlertTriangle className="w-6 h-6" />
              </div>
              <div>
                <h3 className="font-semibold mb-1">AI Risk Alert</h3>
                <p className="text-blue-100 text-sm">Your portfolio shows increased exposure to tech sector. Consider diversification.</p>
              </div>
            </div>
            <Button variant="outline" className="bg-white/10 border-white/20 text-white hover:bg-white/20">
              View Details
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};
