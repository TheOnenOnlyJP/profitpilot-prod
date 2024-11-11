import { Card, CardContent } from '@/components/ui/card';
import { NewsPreview } from '@/components/news-preview';
import { NewsEvent } from '@/types/news';

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
    <div className="grid grid-cols-2 gap-4">
      {/* Connected Accounts */}
      <Card>
        <CardContent className="p-4">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-lg font-semibold">Connected Accounts</h2>
            <button className="text-sm text-emerald-500 dark:text-emerald-400">Accounts</button>
          </div>
          <p className="text-muted-foreground">3 Connected Accounts</p>
          <div className="mt-4 space-y-3">
            {/* Sample Account Data */}
            <div className="flex items-center justify-between p-2 bg-muted dark:bg-secondary rounded-md">
              <span className="text-foreground">$100,000 USD - FTMO Trading</span>
              <span className="text-emerald-500">●</span>
            </div>
            <div className="flex items-center justify-between p-2 bg-muted dark:bg-secondary rounded-md">
              <span className="text-foreground">$50,526 USD - The 5%ers</span>
              <span className="text-emerald-500">●</span>
            </div>
            <div className="flex items-center justify-between p-2 bg-muted dark:bg-secondary rounded-md">
              <span className="text-foreground">$5,000 USD - IC Markets</span>
              <span className="text-emerald-500">●</span>
            </div>
          </div>
          <button className="mt-4 px-4 py-2 bg-emerald-600 hover:bg-emerald-700 text-white rounded-md">
            Connect an Account
          </button>
        </CardContent>
      </Card>

      {/* News Preview */}
      <NewsPreview previewNewsEvents={previewNewsEvents} />

      {/* Advanced Analysis */}
      <Card>
        <CardContent className="p-6">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-lg font-semibold">Advanced Analysis</h2>
            <button className="text-sm text-emerald-500 dark:text-emerald-400">Analytics</button>
          </div>

          {/* AI Insight */}
          <div className="mb-6 p-4 bg-muted dark:bg-secondary rounded-lg">
            <p className="text-foreground font-semibold mb-2">AI Insight:</p>
            <p className="text-muted-foreground italic">
              Based on recent performance, your strategy shows a strong win rate but could benefit from optimizing average risk-to-reward. Consider adjusting trade sizes to maximize profits while keeping drawdown low.
            </p>
          </div>

          {/* Metrics Overview */}
          <div className="space-y-4">
            {/* Win Rate */}
            <div>
              <p className="text-foreground flex items-center">
                Win Rate: <span className="ml-2 font-semibold text-emerald-500 dark:text-emerald-400">63%</span>
              </p>
              <div className="w-full bg-muted dark:bg-secondary rounded-full h-2 mt-1">
                <div className="bg-emerald-500 dark:bg-emerald-400 h-2 rounded-full" style={{ width: '63%' }}></div>
              </div>
            </div>

            {/* Other metrics */}
            <div className="flex items-center">
              <p className="text-foreground">Avg R/R:</p>
              <span className="ml-2 font-semibold text-blue-500 dark:text-blue-400">1.5:1</span>
            </div>

            <div className="flex items-center">
              <p className="text-foreground">Total Trades:</p>
              <span className="ml-2 font-semibold text-foreground">90</span>
            </div>

            <div className="flex items-center">
              <p className="text-foreground">Total Profit:</p>
              <span className="ml-2 font-semibold text-emerald-500 dark:text-emerald-400">$5,400</span>
              <span className="ml-2 text-emerald-500 dark:text-emerald-400">▲</span>
            </div>

            <div className="flex items-center">
              <p className="text-foreground">Total Loss:</p>
              <span className="ml-2 font-semibold text-red-500 dark:text-red-400">$2,750</span>
              <span className="ml-2 text-red-500 dark:text-red-400">▼</span>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Yesterday's Journal */}
      <Card>
        <CardContent className="p-4">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-lg font-semibold">Yesterday's Journal</h2>
            <button className="text-sm text-emerald-500 dark:text-emerald-400">View</button>
          </div>
          <p className="text-muted-foreground">430 Words Written</p>
          <div className="mt-4 bg-muted dark:bg-secondary p-3 rounded-md">
            <p className="font-semibold mb-1">Oct 18th 2024 - Yesterday</p>
            <p className="text-muted-foreground">
              Yesterday the market was quite flat. I refrained from trading and focused more on software projects.
              Tomorrow, when I return to the charts, I hope to stay disciplined and avoid low-volume trades.
              Every day that I journal helps me follow my rules and set myself up for success.
            </p>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}