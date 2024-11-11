import { Card, CardContent } from '@/components/ui/card';
import { Activity, TrendingUp, TrendingDown, BarChart2, PieChart, Calendar } from 'lucide-react';
import { Button } from "@nextui-org/react";

export default function AnalyticsPage() {
  return (
    <div className="min-h-screen bg-background p-8">
      {/* Header Section */}
      <div className="flex justify-between items-center mb-6">
        <div className="flex items-center gap-2">
          <div className="p-2 rounded-lg bg-primary/10 backdrop-blur-lg">
            <Activity className="h-6 w-6 text-primary" />
          </div>
          <h1 className="text-2xl font-semibold text-foreground">Advanced Analytics</h1>
        </div>
        <Button
          color="primary"
          variant="flat"
          startContent={<Calendar className="h-4 w-4" />}
          className="bg-primary/10 hover:bg-primary/20 text-foreground"
        >
          Last 30 Days
        </Button>
      </div>

      <div className="grid grid-cols-3 gap-6">
        {/* Performance Overview Card */}
        <Card className="col-span-2 bg-default-50 dark:bg-default-100/50 backdrop-blur-lg backdrop-saturate-150 border-default-200/50">
          <CardContent className="p-6">
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-xl font-semibold text-foreground">Performance Overview</h2>
              <div className="flex gap-2">
                <Button size="sm" variant="flat" className="bg-primary/10 hover:bg-primary/20 text-foreground">
                  Weekly
                </Button>
                <Button size="sm" variant="flat" className="bg-primary/10 hover:bg-primary/20 text-foreground">
                  Monthly
                </Button>
              </div>
            </div>
            <div className="h-[300px] bg-background/20 backdrop-blur-lg rounded-lg border border-default-200/50">
              {/* Chart Component would go here */}
              <div className="flex items-center justify-center h-full text-muted-foreground">
                Chart Placeholder
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Key Metrics Card */}
        <Card className="bg-default-50 dark:bg-default-100/50 backdrop-blur-lg backdrop-saturate-150 border-default-200/50">
          <CardContent className="p-6">
            <h2 className="text-xl font-semibold text-foreground mb-6">Key Metrics</h2>
            <div className="space-y-4">
              <div className="p-4 bg-background/20 backdrop-blur-lg rounded-lg border border-default-200/50">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-sm text-muted-foreground">Win Rate</span>
                  <TrendingUp className="h-4 w-4 text-success" />
                </div>
                <p className="text-2xl font-bold text-foreground">68.5%</p>
              </div>

              <div className="p-4 bg-background/20 backdrop-blur-lg rounded-lg border border-default-200/50">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-sm text-muted-foreground">Profit Factor</span>
                  <TrendingUp className="h-4 w-4 text-success" />
                </div>
                <p className="text-2xl font-bold text-foreground">2.1</p>
              </div>

              <div className="p-4 bg-background/20 backdrop-blur-lg rounded-lg border border-default-200/50">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-sm text-muted-foreground">Max Drawdown</span>
                  <TrendingDown className="h-4 w-4 text-danger" />
                </div>
                <p className="text-2xl font-bold text-foreground">4.2%</p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Trade Distribution Card */}
        <Card className="bg-default-50 dark:bg-default-100/50 backdrop-blur-lg backdrop-saturate-150 border-default-200/50">
          <CardContent className="p-6">
            <div className="flex items-center gap-2 mb-6">
              <PieChart className="h-5 w-5 text-primary" />
              <h2 className="text-xl font-semibold text-foreground">Trade Distribution</h2>
            </div>
            <div className="h-[200px] bg-background/20 backdrop-blur-lg rounded-lg border border-default-200/50 mb-4">
              {/* Pie Chart Component would go here */}
              <div className="flex items-center justify-center h-full text-muted-foreground">
                Pie Chart Placeholder
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="text-center">
                <p className="text-sm text-muted-foreground">Long Trades</p>
                <p className="text-lg font-semibold text-foreground">58%</p>
              </div>
              <div className="text-center">
                <p className="text-sm text-muted-foreground">Short Trades</p>
                <p className="text-lg font-semibold text-foreground">42%</p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Trade Analysis Card */}
        <Card className="col-span-2 bg-default-50 dark:bg-default-100/50 backdrop-blur-lg backdrop-saturate-150 border-default-200/50">
          <CardContent className="p-6">
            <div className="flex items-center gap-2 mb-6">
              <BarChart2 className="h-5 w-5 text-primary" />
              <h2 className="text-xl font-semibold text-foreground">Trade Analysis</h2>
            </div>
            <div className="h-[200px] bg-background/20 backdrop-blur-lg rounded-lg border border-default-200/50 mb-4">
              {/* Bar Chart Component would go here */}
              <div className="flex items-center justify-center h-full text-muted-foreground">
                Bar Chart Placeholder
              </div>
            </div>
            <div className="grid grid-cols-4 gap-4">
              <div className="p-3 bg-background/20 backdrop-blur-lg rounded-lg border border-default-200/50">
                <p className="text-sm text-muted-foreground">Avg Win</p>
                <p className="text-lg font-semibold text-success">$420</p>
              </div>
              <div className="p-3 bg-background/20 backdrop-blur-lg rounded-lg border border-default-200/50">
                <p className="text-sm text-muted-foreground">Avg Loss</p>
                <p className="text-lg font-semibold text-danger">$180</p>
              </div>
              <div className="p-3 bg-background/20 backdrop-blur-lg rounded-lg border border-default-200/50">
                <p className="text-sm text-muted-foreground">Largest Win</p>
                <p className="text-lg font-semibold text-success">$1,200</p>
              </div>
              <div className="p-3 bg-background/20 backdrop-blur-lg rounded-lg border border-default-200/50">
                <p className="text-sm text-muted-foreground">Largest Loss</p>
                <p className="text-lg font-semibold text-danger">$450</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
} 