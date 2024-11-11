import { Card, CardContent } from '@/components/ui/card';
import { NewsPreview } from '@/components/news-preview';
import { NewsEvent } from '@/types/news';
import { ArrowUp, ArrowDown, ChevronRight, Activity, Book, Wallet2 } from 'lucide-react';

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
        {/* Connected Accounts */}
        <Card className="border-border bg-card">
          <CardContent className="p-6">
            <div className="flex justify-between items-center mb-6">
              <div className="flex items-center gap-2">
                <div className="p-2 rounded-lg bg-primary/10">
                  <Wallet2 className="h-5 w-5 text-primary" />
                </div>
                <h2 className="text-xl font-semibold">Connected Accounts</h2>
              </div>
              <button className="inline-flex items-center gap-1 text-sm text-primary hover:text-primary/80">
                Accounts
                <ChevronRight className="h-4 w-4" />
              </button>
            </div>
            <p className="text-sm text-muted-foreground mb-4">3 Connected Accounts</p>
            <div className="space-y-3">
              {/* Account Items */}
              <div className="flex items-center justify-between p-3 bg-background/50 rounded-lg border border-border/50">
                <span className="text-foreground font-medium">$100,000 USD - FTMO Trading</span>
                <span className="h-2 w-2 rounded-full bg-emerald-500"></span>
              </div>
              <div className="flex items-center justify-between p-3 bg-background/50 rounded-lg border border-border/50">
                <span className="text-foreground font-medium">$50,526 USD - The 5%ers</span>
                <span className="h-2 w-2 rounded-full bg-emerald-500"></span>
              </div>
              <div className="flex items-center justify-between p-3 bg-background/50 rounded-lg border border-border/50">
                <span className="text-foreground font-medium">$5,000 USD - IC Markets</span>
                <span className="h-2 w-2 rounded-full bg-emerald-500"></span>
              </div>
            </div>

          </CardContent>
        </Card>

        {/* News Preview */}
        <div className="h-full">
          <NewsPreview previewNewsEvents={previewNewsEvents} />
        </div>

        {/* Advanced Analysis */}
        <Card className="border-border bg-card">
          <CardContent className="p-6">
            <div className="flex justify-between items-center mb-6">
              <div className="flex items-center gap-2">
                <div className="p-2 rounded-lg bg-primary/10">
                  <Activity className="h-5 w-5 text-primary" />
                </div>
                <h2 className="text-xl font-semibold">Advanced Analysis</h2>
              </div>
              <button className="inline-flex items-center gap-1 text-sm text-primary hover:text-primary/80">
                Analytics
                <ChevronRight className="h-4 w-4" />
              </button>
            </div>

            {/* AI Insight */}
            <div className="mb-6 p-4 bg-background/50 rounded-lg border border-border/50">
              <p className="text-foreground font-semibold mb-2">AI Insight:</p>
              <p className="text-muted-foreground text-sm">
                Based on recent performance, your strategy shows a strong win rate but could benefit from optimizing average risk-to-reward. Consider adjusting trade sizes to maximize profits while keeping drawdown low.
              </p>
            </div>

            {/* Metrics Overview */}
            <div className="space-y-5">
              {/* Win Rate */}
              <div>
                <div className="flex items-center justify-between mb-2">
                  <span className="text-sm font-medium">Win Rate</span>
                  <span className="text-sm font-semibold text-emerald-500">63%</span>
                </div>
                <div className="w-full bg-background/50 rounded-full h-2">
                  <div className="bg-emerald-500 h-2 rounded-full transition-all" style={{ width: '63%' }}></div>
                </div>
              </div>

              {/* Other metrics */}
              <div className="grid grid-cols-2 gap-4">
                <div className="p-4 bg-background/50 rounded-lg border border-border/50">
                  <p className="text-sm text-muted-foreground mb-1">Avg R/R</p>
                  <p className="text-lg font-semibold text-blue-500">1.5:1</p>
                </div>

                <div className="p-4 bg-background/50 rounded-lg border border-border/50">
                  <p className="text-sm text-muted-foreground mb-1">Total Trades</p>
                  <p className="text-lg font-semibold">90</p>
                </div>

                <div className="p-4 bg-background/50 rounded-lg border border-border/50">
                  <p className="text-sm text-muted-foreground mb-1">Total Profit</p>
                  <div className="flex items-center gap-2">
                    <p className="text-lg font-semibold text-emerald-500">$5,400</p>
                    <ArrowUp className="h-4 w-4 text-emerald-500" />
                  </div>
                </div>

                <div className="p-4 bg-background/50 rounded-lg border border-border/50">
                  <p className="text-sm text-muted-foreground mb-1">Total Loss</p>
                  <div className="flex items-center gap-2">
                    <p className="text-lg font-semibold text-red-500">$2,750</p>
                    <ArrowDown className="h-4 w-4 text-red-500" />
                  </div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Yesterday's Journal */}
        <Card className="border-border bg-card">
          <CardContent className="p-6">
            <div className="flex justify-between items-center mb-6">
              <div className="flex items-center gap-2">
                <div className="p-2 rounded-lg bg-primary/10">
                  <Book className="h-5 w-5 text-primary" />
                </div>
                <h2 className="text-xl font-semibold">Yesterday's Journal</h2>
              </div>
              <button className="inline-flex items-center gap-1 text-sm text-primary hover:text-primary/80">
                View
                <ChevronRight className="h-4 w-4" />
              </button>
            </div>
            <p className="text-sm text-muted-foreground mb-4">430 Words Written</p>
            <div className="p-4 bg-background/50 rounded-lg border border-border/50">
              <p className="font-medium mb-2">Oct 18th 2024 - Yesterday</p>
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