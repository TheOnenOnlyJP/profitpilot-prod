'use client';

import { Card, CardContent } from '@/components/ui/card';
import { BrokerIcon } from '@/components/ui/broker-icon';
import { 
  Wallet2, 
  ChevronRight, 
  TrendingUp, 
  Clock, 
  BarChart2, 
  Shield, 
  AlertCircle,
  Settings
} from 'lucide-react';
import { Button } from "@nextui-org/react";
import { HeaderCard } from '@/components/ui/header-card';
import { useRouter } from "next/navigation";

interface AccountMetrics {
  balance: number;
  equity: number;
  drawdown: number;
  openTrades: number;
  dailyPnL: number;
  lastTrade: string;
}

export const accounts = [
  {
    id: 1,
    broker: "FTMO",
    accountSize: 100000,
    currency: "USD",
    type: "Challenge Account",
    status: "active",
    metrics: {
      balance: 102450,
      equity: 102890,
      drawdown: 2.1,
      openTrades: 2,
      dailyPnL: 450,
      lastTrade: "2h ago"
    }
  },
  {
    id: 2,
    broker: "The 5%ers",
    accountSize: 50526,
    currency: "USD",
    type: "Funded Account",
    status: "active",
    metrics: {
      balance: 51200,
      equity: 51450,
      drawdown: 1.8,
      openTrades: 1,
      dailyPnL: 674,
      lastTrade: "4h ago"
    }
  },
  {
    id: 3,
    broker: "IC Markets",
    accountSize: 5000,
    currency: "USD",
    type: "Live Account",
    status: "active",
    metrics: {
      balance: 5120,
      equity: 5120,
      drawdown: 0,
      openTrades: 0,
      dailyPnL: 120,
      lastTrade: "1d ago"
    }
  }
];

export default function AccountsPage() {
  const router = useRouter();

  return (
    <div className="min-h-screen bg-background">
      <HeaderCard 
        title="Trading Accounts"
        subtitle="Manage and monitor your connected trading accounts"
        icon={Wallet2}
      />
      
      <div className="max-w-7xl mx-auto py-8 px-6">
        {/* Account Summary Cards */}
        <div className="grid grid-cols-4 gap-6 mb-8">
          <Card className="bg-default-50 dark:bg-default-100/50 backdrop-blur-lg backdrop-saturate-150 border-default-200/50">
            <CardContent className="p-6">
              <div className="flex items-center gap-2 mb-4">
                <div className="p-2 rounded-lg bg-primary/10">
                  <Wallet2 className="h-5 w-5 text-primary" />
                </div>
                <h3 className="text-foreground font-medium">Total Balance</h3>
              </div>
              <p className="text-2xl font-semibold text-foreground">$158,770</p>
              <p className="text-sm text-success flex items-center gap-1 mt-1">
                <TrendingUp className="h-4 w-4" />
                +2.4% today
              </p>
            </CardContent>
          </Card>

          <Card className="bg-default-50 dark:bg-default-100/50 backdrop-blur-lg backdrop-saturate-150 border-default-200/50">
            <CardContent className="p-6">
              <div className="flex items-center gap-2 mb-4">
                <div className="p-2 rounded-lg bg-primary/10">
                  <BarChart2 className="h-5 w-5 text-primary" />
                </div>
                <h3 className="text-foreground font-medium">Open Trades</h3>
              </div>
              <p className="text-2xl font-semibold text-foreground">3</p>
              <p className="text-sm text-muted-foreground mt-1">Across all accounts</p>
            </CardContent>
          </Card>

          <Card className="bg-default-50 dark:bg-default-100/50 backdrop-blur-lg backdrop-saturate-150 border-default-200/50">
            <CardContent className="p-6">
              <div className="flex items-center gap-2 mb-4">
                <div className="p-2 rounded-lg bg-primary/10">
                  <Shield className="h-5 w-5 text-primary" />
                </div>
                <h3 className="text-foreground font-medium">Max Drawdown</h3>
              </div>
              <p className="text-2xl font-semibold text-foreground">2.1%</p>
              <p className="text-sm text-muted-foreground mt-1">Monthly limit: 5%</p>
            </CardContent>
          </Card>

          <Card className="bg-default-50 dark:bg-default-100/50 backdrop-blur-lg backdrop-saturate-150 border-default-200/50">
            <CardContent className="p-6">
              <div className="flex items-center gap-2 mb-4">
                <div className="p-2 rounded-lg bg-primary/10">
                  <Clock className="h-5 w-5 text-primary" />
                </div>
                <h3 className="text-foreground font-medium">Trading Time</h3>
              </div>
              <p className="text-2xl font-semibold text-foreground">14d</p>
              <p className="text-sm text-muted-foreground mt-1">Challenge period</p>
            </CardContent>
          </Card>
        </div>

        {/* Connected Accounts */}
        <div className="space-y-6">
          {accounts.map((account) => (
            <Card key={account.id} className="bg-default-50 dark:bg-default-100/50 backdrop-blur-lg backdrop-saturate-150 border-default-200/50">
              <CardContent className="p-6">
                <div className="flex justify-between items-start mb-6">
                  <div className="flex items-center gap-4">
                    <BrokerIcon broker={account.broker} />
                    <div>
                      <h3 className="text-xl font-semibold text-foreground">{account.broker}</h3>
                      <p className="text-sm text-muted-foreground">{account.type}</p>
                    </div>
                  </div>
                  <div className="flex gap-2">
                    <Button
                      variant="flat"
                      color="primary"
                      className="bg-primary/10 hover:bg-primary/20 text-foreground"
                      startContent={<Settings className="h-4 w-4" />}
                      onClick={() => router.push(`/accounts/${account.id}/settings`)}
                    >
                      Settings
                    </Button>
                    <Button
                      variant="flat"
                      color="primary"
                      className="bg-primary/10 hover:bg-primary/20 text-foreground"
                      endContent={<ChevronRight className="h-4 w-4" />}
                      onClick={() => router.push(`/accounts/${account.id}`)}
                    >
                      View Details
                    </Button>
                  </div>
                </div>

                <div className="grid grid-cols-6 gap-6">
                  <div className="p-4 bg-background/20 backdrop-blur-lg rounded-lg border border-default-200/50">
                    <p className="text-sm text-muted-foreground mb-1">Balance</p>
                    <p className="text-lg font-semibold text-foreground">
                      ${account.metrics.balance.toLocaleString()}
                    </p>
                  </div>

                  <div className="p-4 bg-background/20 backdrop-blur-lg rounded-lg border border-default-200/50">
                    <p className="text-sm text-muted-foreground mb-1">Equity</p>
                    <p className="text-lg font-semibold text-foreground">
                      ${account.metrics.equity.toLocaleString()}
                    </p>
                  </div>

                  <div className="p-4 bg-background/20 backdrop-blur-lg rounded-lg border border-default-200/50">
                    <p className="text-sm text-muted-foreground mb-1">Drawdown</p>
                    <p className="text-lg font-semibold text-foreground">
                      {account.metrics.drawdown}%
                    </p>
                  </div>

                  <div className="p-4 bg-background/20 backdrop-blur-lg rounded-lg border border-default-200/50">
                    <p className="text-sm text-muted-foreground mb-1">Open Trades</p>
                    <p className="text-lg font-semibold text-foreground">
                      {account.metrics.openTrades}
                    </p>
                  </div>

                  <div className="p-4 bg-background/20 backdrop-blur-lg rounded-lg border border-default-200/50">
                    <p className="text-sm text-muted-foreground mb-1">Daily P&L</p>
                    <p className="text-lg font-semibold text-success">
                      +${account.metrics.dailyPnL}
                    </p>
                  </div>

                  <div className="p-4 bg-background/20 backdrop-blur-lg rounded-lg border border-default-200/50">
                    <p className="text-sm text-muted-foreground mb-1">Last Trade</p>
                    <p className="text-lg font-semibold text-foreground">
                      {account.metrics.lastTrade}
                    </p>
                  </div>
                </div>

                {account.type === "Challenge Account" && (
                  <div className="mt-6 p-4 bg-warning/10 text-warning rounded-lg flex items-center gap-2">
                    <AlertCircle className="h-5 w-5" />
                    <p className="text-sm">
                      Challenge ends in 14 days. Maximum drawdown: 5%
                    </p>
                  </div>
                )}
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
} 