
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { TrendingUp, TrendingDown, DollarSign, Shield } from "lucide-react";

export const PortfolioSummary = () => {
  const portfolioData = {
    totalInvested: 250000,
    currentValue: 287500,
    pnl: 37500,
    pnlPercentage: 15,
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
      { sector: "Technology", percentage: 35, amount: 100625 },
      { sector: "Finance", percentage: 25, amount: 71875 },
      { sector: "Energy", percentage: 20, amount: 57500 },
      { sector: "Healthcare", percentage: 15, amount: 43125 },
      { sector: "Cash", percentage: 5, amount: 14375 },
    ]
  };

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold text-gray-900 mb-2">Portfolio Overview</h1>
        <p className="text-gray-600">Your trading performance at a glance</p>
      </div>

      {/* Key Metrics */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <Card>
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600">Total Invested</p>
                <p className="text-2xl font-bold text-gray-900">₹{portfolioData.totalInvested.toLocaleString()}</p>
              </div>
              <DollarSign className="w-8 h-8 text-blue-600" />
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600">Current Value</p>
                <p className="text-2xl font-bold text-gray-900">₹{portfolioData.currentValue.toLocaleString()}</p>
              </div>
              <TrendingUp className="w-8 h-8 text-green-600" />
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600">P&L</p>
                <p className="text-2xl font-bold text-green-600">
                  +₹{portfolioData.pnl.toLocaleString()} ({portfolioData.pnlPercentage}%)
                </p>
              </div>
              <TrendingUp className="w-8 h-8 text-green-600" />
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600">Risk Score</p>
                <p className="text-2xl font-bold text-orange-600">{portfolioData.riskScore}/10</p>
              </div>
              <Shield className="w-8 h-8 text-orange-600" />
            </div>
          </CardContent>
        </Card>
      </div>

      <div className="grid lg:grid-cols-2 gap-6">
        {/* Asset Allocation */}
        <Card>
          <CardHeader>
            <CardTitle>Asset Allocation</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {portfolioData.allocation.map((item, index) => (
                <div key={index} className="flex items-center justify-between">
                  <div className="flex items-center space-x-3">
                    <div 
                      className="w-4 h-4 rounded-full"
                      style={{ backgroundColor: `hsl(${index * 60}, 70%, 50%)` }}
                    />
                    <span className="font-medium text-gray-900">{item.sector}</span>
                  </div>
                  <div className="text-right">
                    <p className="font-semibold text-gray-900">{item.percentage}%</p>
                    <p className="text-sm text-gray-600">₹{item.amount.toLocaleString()}</p>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Top Movers */}
        <div className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle className="text-green-600">Top Gainers</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                {portfolioData.topGainers.map((stock, index) => (
                  <div key={index} className="flex items-center justify-between">
                    <span className="font-medium text-gray-900">{stock.symbol}</span>
                    <div className="text-right">
                      <p className="font-semibold text-gray-900">₹{stock.price}</p>
                      <p className="text-sm text-green-600">+{stock.change}%</p>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="text-red-600">Top Losers</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                {portfolioData.topLosers.map((stock, index) => (
                  <div key={index} className="flex items-center justify-between">
                    <span className="font-medium text-gray-900">{stock.symbol}</span>
                    <div className="text-right">
                      <p className="font-semibold text-gray-900">₹{stock.price}</p>
                      <p className="text-sm text-red-600">{stock.change}%</p>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};
