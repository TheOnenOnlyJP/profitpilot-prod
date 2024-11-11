import { Card, CardContent } from '@/components/ui/card';
import { NewsEvent } from '@/types/news';
import { NewsPreview } from '@/components/news-preview';
import { ArrowUp, ArrowDown, ChevronRight, Activity, Book, Wallet2 } from 'lucide-react';
import { Button } from "@nextui-org/react";
import { BrokerIcon } from '@/components/ui/broker-icon';

// Sample news events (smaller subset of your main news data)
const previewNewsEvents: NewsEvent[] = [
  {
    id: '1',
    currency: 'USD',
    countryCode: 'US',
    event: 'Retail Sales m/m',
    time: '6:00am',
    forecast: 0.06,
    previous: 0.03,
    impactLevel: 3 as 1 | 2 | 3
  },
  {
    id: '2',
    currency: 'EUR',
    countryCode: 'EU',
    event: 'CPI y/y',
    time: '7:00am',
    forecast: 0.01,
    previous: 0.03,
    impactLevel: 3 as 1 | 2 | 3
  },
  {
    id: '3',
    currency: 'GBP',
    countryCode: 'GB',
    event: 'GDP q/q',
    time: '8:00am',
    forecast: -0.01,
    previous: 0.02,
    impactLevel: 2 as 1 | 2 | 3
  }
];

export default function HomePage() {
  return (
    <div className="min-h-screen bg-background p-8">
      <div className="grid grid-cols-2 gap-6">
        {/* Connected Accounts Card */}
        <Card className="bg-default-50 dark:bg-default-100/50 backdrop-blur-lg backdrop-saturate-150 border-default-200/50">
          <CardContent className="p-6">
            <div className="flex justify-between items-center mb-6">
              <div className="flex items-center gap-2">
                <div className="p-2 rounded-lg bg-primary/10 backdrop-blur-lg">
                  <Wallet2 className="h-5 w-5 text-primary" />
                </div>
                <h2 className="text-xl font-semibold text-foreground">Connected Accounts</h2>
              </div>
              <Button
                as="a"
                href="/accounts"
                variant="flat"
                color="primary"
                endContent={<ChevronRight className="h-4 w-4" />}
                className="bg-primary/10 hover:bg-primary/20 text-foreground"
              >
                View Accounts
              </Button>
            </div>
            <div className="space-y-4">
              <div className="flex items-center h-[84px] justify-between p-5 bg-background/20 backdrop-blur-lg rounded-lg border border-default-200/50">
                <div className="flex items-center gap-4">
                  <BrokerIcon broker="FTMO" />
                  <div className="flex flex-col gap-1">
                    <span className="text-base text-foreground/90 font-medium">$100,000 USD</span>
                    <span className="text-sm text-muted-foreground">FTMO Trading</span>
                  </div>
                </div>
                <span className="h-3 w-3 rounded-full bg-emerald-500"></span>
              </div>
              <div className="flex items-center h-[84px] justify-between p-5 bg-background/20 backdrop-blur-lg rounded-lg border border-default-200/50">
                <div className="flex items-center gap-3">
                  <BrokerIcon broker="The 5%ers" />
                  <div className="flex flex-col gap-1">
                    <span className="text-base text-foreground/90 font-medium">$50,526 USD</span>
                    <span className="text-sm text-muted-foreground">The 5%ers</span>
                  </div>
                </div>
                <span className="h-3 w-3 rounded-full bg-emerald-500"></span>
              </div>
              <div className="flex items-center h-[84px] justify-between p-5 bg-background/20 backdrop-blur-lg rounded-lg border border-default-200/50">
                <div className="flex items-center gap-3">
                  <BrokerIcon broker="IC Markets" />
                  <div className="flex flex-col gap-1">
                    <span className="text-base text-foreground/90 font-medium">$5,000 USD</span>
                    <span className="text-sm text-muted-foreground">IC Markets</span>
                  </div>
                </div>
                <span className="h-3 w-3 rounded-full bg-emerald-500"></span>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* News Preview */}
        <div className="h-full">
          <NewsPreview previewNewsEvents={previewNewsEvents} />
        </div>

        {/* Advanced Analysis Card */}
        <Card className="bg-default-50 dark:bg-default-100/50 backdrop-blur-lg backdrop-saturate-150 border-default-200/50">
          <CardContent className="p-6">
            <div className="flex justify-between items-center mb-6">
              <div className="flex items-center gap-2">
                <div className="p-2 rounded-lg bg-primary/10 backdrop-blur-lg">
                  <Activity className="h-5 w-5 text-primary" />
                </div>
                <h2 className="text-xl font-semibold text-foreground">Advanced Analysis</h2>
              </div>
              <Button
                as="a"
                href="/analytics"
                variant="flat"
                color="primary"
                endContent={<ChevronRight className="h-4 w-4" />}
                className="bg-primary/10 hover:bg-primary/20 text-foreground"
              >
                View Analytics
              </Button>
            </div>

            {/* AI Insight with updated styling */}
            <div className="mb-6 p-4 bg-background/20 backdrop-blur-lg rounded-lg border border-default-200/50">
              <p className="text-foreground font-semibold mb-2">AI Insight:</p>
              <p className="text-muted-foreground text-sm">
                Based on recent performance, your strategy shows a strong win rate but could benefit from optimizing average risk-to-reward. Consider adjusting trade sizes to maximize profits while keeping drawdown low.
              </p>
            </div>

            {/* Metrics with updated styling */}
            <div className="grid grid-cols-2 gap-4">
              <div className="p-4 bg-background/20 backdrop-blur-lg rounded-lg border border-default-200/50">
                <p className="text-sm text-muted-foreground mb-1">Avg R/R</p>
                <p className="text-lg font-semibold text-primary">1.5:1</p>
              </div>

              <div className="p-4 bg-background/20 backdrop-blur-lg rounded-lg border border-default-200/50">
                <p className="text-sm text-muted-foreground mb-1">Total Trades</p>
                <p className="text-lg font-semibold text-foreground">90</p>
              </div>

              <div className="p-4 bg-background/20 backdrop-blur-lg rounded-lg border border-default-200/50">
                <p className="text-sm text-muted-foreground mb-1">Total Profit</p>
                <div className="flex items-center gap-2">
                  <p className="text-lg font-semibold text-success">$5,400</p>
                  <ArrowUp className="h-4 w-4 text-success" />
                </div>
              </div>

              <div className="p-4 bg-background/20 backdrop-blur-lg rounded-lg border border-default-200/50">
                <p className="text-sm text-muted-foreground mb-1">Total Loss</p>
                <div className="flex items-center gap-2">
                  <p className="text-lg font-semibold text-danger">$2,750</p>
                  <ArrowDown className="h-4 w-4 text-danger" />
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Yesterday's Journal Card */}
        <Card className="bg-default-50 dark:bg-default-100/50 backdrop-blur-lg backdrop-saturate-150 border-default-200/50">
          <CardContent className="p-6">
            <div className="flex justify-between items-center mb-6">
              <div className="flex items-center gap-2">
                <div className="p-2 rounded-lg bg-primary/10 backdrop-blur-lg">
                  <Book className="h-5 w-5 text-primary" />
                </div>
                <h2 className="text-xl font-semibold text-foreground">Yesterday's Journal</h2>
              </div>
              <Button
                as="a"
                href="/journal"
                variant="flat"
                color="primary"
                endContent={<ChevronRight className="h-4 w-4" />}
                className="bg-primary/10 hover:bg-primary/20 text-foreground"
              >
                View Journal
              </Button>
            </div>
            <p className="text-sm text-muted-foreground mb-4">430 Words Written</p>
            <div className="p-4 bg-background/20 backdrop-blur-lg rounded-lg border border-default-200/50">
              <p className="font-medium text-foreground mb-2">Oct 18th 2024 - Yesterday</p>
              <p className="text-sm text-muted-foreground">
                Yesterday the market was quite flat. I refrained from trading and focused more on software projects.
                Tomorrow, when I return to the charts, I hope to stay disciplined and avoid low-volume trades.
                Every day that I journal helps me follow my rules and set myself up for success.
              </p>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}