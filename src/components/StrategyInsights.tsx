
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { TrendingUp, Target, BarChart3, Lightbulb } from "lucide-react";

export const StrategyInsights = () => {
  const insights = [
    {
      title: "Momentum Strategy",
      description: "Based on your current holdings, consider adding more tech stocks during the next dip",
      potential: "+12%",
      risk: "Medium",
      icon: TrendingUp,
      color: "blue",
    },
    {
      title: "Diversification Alert",
      description: "Your portfolio is heavily weighted in tech (35%). Consider reducing exposure",
      potential: "Risk Reduction",
      risk: "Low",
      icon: Target,
      color: "orange",
    },
    {
      title: "Value Opportunity",
      description: "Banking stocks are trading at attractive valuations compared to historical averages",
      potential: "+8%",
      risk: "Low",
      icon: BarChart3,
      color: "green",
    },
  ];

  const whatIfScenarios = [
    {
      action: "If I bought ₹10,000 of HDFC Bank last month",
      result: "You would have gained ₹1,200 (12%)",
      probability: "High confidence",
    },
    {
      action: "If I exit all tech positions today",
      result: "You would realize ₹25,000 in gains",
      probability: "Current market price",
    },
    {
      action: "If I double down on energy sector",
      result: "Portfolio risk would increase by 15%",
      probability: "Medium confidence",
    },
  ];

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold text-gray-900 mb-2">Strategy Insights</h1>
        <p className="text-gray-600">AI-powered recommendations based on your portfolio</p>
      </div>

      {/* Strategy Recommendations */}
      <div className="grid gap-6">
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center space-x-2">
              <Lightbulb className="w-5 h-5 text-yellow-600" />
              <span>Recommended Strategies</span>
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid gap-4">
              {insights.map((insight, index) => {
                const Icon = insight.icon;
                return (
                  <div key={index} className="border border-gray-200 rounded-lg p-4">
                    <div className="flex items-start justify-between">
                      <div className="flex items-start space-x-3">
                        <div className={`w-10 h-10 rounded-lg flex items-center justify-center bg-${insight.color}-100`}>
                          <Icon className={`w-5 h-5 text-${insight.color}-600`} />
                        </div>
                        <div className="flex-1">
                          <h3 className="font-semibold text-gray-900 mb-1">{insight.title}</h3>
                          <p className="text-gray-600 mb-2">{insight.description}</p>
                          <div className="flex items-center space-x-4">
                            <span className="text-sm px-2 py-1 bg-green-100 text-green-800 rounded-full">
                              Potential: {insight.potential}
                            </span>
                            <span className="text-sm px-2 py-1 bg-gray-100 text-gray-800 rounded-full">
                              Risk: {insight.risk}
                            </span>
                          </div>
                        </div>
                      </div>
                      <Button variant="outline" size="sm">
                        Learn More
                      </Button>
                    </div>
                  </div>
                );
              })}
            </div>
          </CardContent>
        </Card>

        {/* What-If Scenarios */}
        <Card>
          <CardHeader>
            <CardTitle>What-If Analysis</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {whatIfScenarios.map((scenario, index) => (
                <div key={index} className="border border-gray-200 rounded-lg p-4">
                  <div className="flex items-center justify-between">
                    <div className="flex-1">
                      <h4 className="font-medium text-gray-900 mb-1">{scenario.action}</h4>
                      <p className="text-gray-600 mb-2">{scenario.result}</p>
                      <span className="text-xs px-2 py-1 bg-blue-100 text-blue-800 rounded-full">
                        {scenario.probability}
                      </span>
                    </div>
                    <Button variant="ghost" size="sm" className="text-blue-600">
                      Simulate
                    </Button>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Risk Analysis */}
        <Card>
          <CardHeader>
            <CardTitle>Portfolio Risk Analysis</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-3 gap-4">
              <div className="text-center p-4 border border-gray-200 rounded-lg">
                <div className="text-2xl font-bold text-green-600 mb-1">Low</div>
                <div className="text-sm text-gray-600">Liquidity Risk</div>
              </div>
              <div className="text-center p-4 border border-gray-200 rounded-lg">
                <div className="text-2xl font-bold text-orange-600 mb-1">Medium</div>
                <div className="text-sm text-gray-600">Concentration Risk</div>
              </div>
              <div className="text-center p-4 border border-gray-200 rounded-lg">
                <div className="text-2xl font-bold text-red-600 mb-1">High</div>
                <div className="text-sm text-gray-600">Market Risk</div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};
