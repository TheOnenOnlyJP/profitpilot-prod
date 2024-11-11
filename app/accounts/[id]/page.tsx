"use client";

import { Card, CardContent } from '@/components/ui/card';
import { BrokerIcon } from '@/components/ui/broker-icon';
import { 
  Wallet2, 
  TrendingUp,
  BarChart2,
  Clock,
  ArrowUp,
  ArrowDown,
  Calendar,
  Target,
  Percent,
  AlertCircle,
  LineChart,
  History
} from 'lucide-react';
import { Button, Chip } from "@nextui-org/react";
import { HeaderCard } from '@/components/ui/header-card';
import { accounts } from '../page'; // Import accounts data

export default function AccountDetailsPage({ params }: { params: { id: string } }) {
  const account = accounts.find(a => a.id === parseInt(params.id));
  
  if (!account) return <div>Account not found</div>;

  return (
    <div className="min-h-screen bg-background">
      <HeaderCard 
        title={`${account.broker} - ${account.type}`}
        subtitle={`$${account.accountSize.toLocaleString()} ${account.currency}`}
        icon={Wallet2}
      />
      
      <div className="max-w-7xl mx-auto py-8 px-6">
        {/* Account Overview */}
        <div className="grid grid-cols-3 gap-6 mb-8">
          <Card className="col-span-2 bg-default-50 dark:bg-default-100/50 backdrop-blur-lg backdrop-saturate-150 border-default-200/50">
            <CardContent className="p-6">
              <div className="flex items-center justify-between mb-6">
                <div className="flex items-center gap-4">
                  <BrokerIcon broker={account.broker} />
                  <div>
                    <h3 className="text-xl font-semibold text-foreground">Account Overview</h3>
                    <p className="text-sm text-muted-foreground">Real-time metrics</p>
                  </div>
                </div>
                <Chip
                  color="success"
                  variant="flat"
                >
                  Active
                </Chip>
              </div>
              
              <div className="grid grid-cols-3 gap-4">
                <div className="p-4 bg-background/20 backdrop-blur-lg rounded-lg border border-default-200/50">
                  <p className="text-sm text-muted-foreground mb-1">Current Balance</p>
                  <p className="text-2xl font-semibold text-foreground">
                    ${account.metrics.balance.toLocaleString()}
                  </p>
                  <p className="text-sm text-success flex items-center gap-1 mt-1">
                    <TrendingUp className="h-4 w-4" />
                    +2.45% from start
                  </p>
                </div>

                <div className="p-4 bg-background/20 backdrop-blur-lg rounded-lg border border-default-200/50">
                  <p className="text-sm text-muted-foreground mb-1">Current Equity</p>
                  <p className="text-2xl font-semibold text-foreground">
                    ${account.metrics.equity.toLocaleString()}
                  </p>
                  <p className="text-sm text-success flex items-center gap-1 mt-1">
                    <ArrowUp className="h-4 w-4" />
                    +${account.metrics.equity - account.metrics.balance}
                  </p>
                </div>

                <div className="p-4 bg-background/20 backdrop-blur-lg rounded-lg border border-default-200/50">
                  <p className="text-sm text-muted-foreground mb-1">Drawdown</p>
                  <p className="text-2xl font-semibold text-foreground">
                    {account.metrics.drawdown}%
                  </p>
                  <p className="text-sm text-warning flex items-center gap-1 mt-1">
                    <Target className="h-4 w-4" />
                    Max: 5%
                  </p>
                </div>
              </div>

              {/* Trading Chart Placeholder */}
              <div className="mt-6 h-[300px] bg-background/20 backdrop-blur-lg rounded-lg border border-default-200/50 flex items-center justify-center">
                <p className="text-muted-foreground">Trading Chart Coming Soon</p>
              </div>
            </CardContent>
          </Card>

          {/* Trading Rules */}
          <Card className="bg-default-50 dark:bg-default-100/50 backdrop-blur-lg backdrop-saturate-150 border-default-200/50">
            <CardContent className="p-6">
              <h3 className="text-xl font-semibold text-foreground mb-4">Trading Rules</h3>
              <div className="space-y-4">
                <div className="p-4 bg-background/20 backdrop-blur-lg rounded-lg border border-default-200/50">
                  <div className="flex items-center gap-2 mb-2">
                    <Target className="h-5 w-5 text-primary" />
                    <p className="font-medium text-foreground">Profit Target</p>
                  </div>
                  <p className="text-sm text-muted-foreground">8% to complete challenge</p>
                </div>

                <div className="p-4 bg-background/20 backdrop-blur-lg rounded-lg border border-default-200/50">
                  <div className="flex items-center gap-2 mb-2">
                    <Percent className="h-5 w-5 text-primary" />
                    <p className="font-medium text-foreground">Max Daily Loss</p>
                  </div>
                  <p className="text-sm text-muted-foreground">4% of initial balance</p>
                </div>

                <div className="p-4 bg-background/20 backdrop-blur-lg rounded-lg border border-default-200/50">
                  <div className="flex items-center gap-2 mb-2">
                    <Calendar className="h-5 w-5 text-primary" />
                    <p className="font-medium text-foreground">Trading Period</p>
                  </div>
                  <p className="text-sm text-muted-foreground">14 days remaining</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Trading Statistics */}
        <div className="grid grid-cols-2 gap-6 mb-8">
          <Card className="bg-default-50 dark:bg-default-100/50 backdrop-blur-lg backdrop-saturate-150 border-default-200/50">
            <CardContent className="p-6">
              <h3 className="text-xl font-semibold text-foreground mb-6">Performance Metrics</h3>
              <div className="grid grid-cols-2 gap-4">
                <div className="p-4 bg-background/20 backdrop-blur-lg rounded-lg border border-default-200/50">
                  <p className="text-sm text-muted-foreground mb-1">Win Rate</p>
                  <p className="text-lg font-semibold text-foreground">68%</p>
                </div>
                <div className="p-4 bg-background/20 backdrop-blur-lg rounded-lg border border-default-200/50">
                  <p className="text-sm text-muted-foreground mb-1">Avg RR Ratio</p>
                  <p className="text-lg font-semibold text-foreground">1:2.5</p>
                </div>
                <div className="p-4 bg-background/20 backdrop-blur-lg rounded-lg border border-default-200/50">
                  <p className="text-sm text-muted-foreground mb-1">Total Trades</p>
                  <p className="text-lg font-semibold text-foreground">42</p>
                </div>
                <div className="p-4 bg-background/20 backdrop-blur-lg rounded-lg border border-default-200/50">
                  <p className="text-sm text-muted-foreground mb-1">Avg Hold Time</p>
                  <p className="text-lg font-semibold text-foreground">2h 15m</p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="bg-default-50 dark:bg-default-100/50 backdrop-blur-lg backdrop-saturate-150 border-default-200/50">
            <CardContent className="p-6">
              <h3 className="text-xl font-semibold text-foreground mb-6">Recent Activity</h3>
              <div className="space-y-4">
                {[
                  { time: '2h ago', action: 'EURUSD Buy', result: '+$240' },
                  { time: '4h ago', action: 'GBPJPY Sell', result: '+$180' },
                  { time: '1d ago', action: 'USDCAD Buy', result: '-$120' },
                ].map((activity, index) => (
                  <div key={index} className="flex items-center justify-between p-4 bg-background/20 backdrop-blur-lg rounded-lg border border-default-200/50">
                    <div className="flex items-center gap-3">
                      <History className="h-5 w-5 text-primary" />
                      <div>
                        <p className="text-sm font-medium text-foreground">{activity.action}</p>
                        <p className="text-xs text-muted-foreground">{activity.time}</p>
                      </div>
                    </div>
                    <p className={`text-sm font-medium ${
                      activity.result.startsWith('+') ? 'text-success' : 'text-danger'
                    }`}>
                      {activity.result}
                    </p>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
} 