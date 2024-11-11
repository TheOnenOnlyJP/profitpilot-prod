"use client";
import { useState, useMemo } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Clock, Info } from 'lucide-react';
import { HeaderCard } from '@/components/ui/header-card';
import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from '@/components/ui/accordion';
import { FlagIcon } from '@/components/ui/flag-icon';



interface MarketAlert {
  id: string;
  type: 'warning' | 'info' | 'critical';
  message: string;
  time: string;
}

export default function NewsPage() {
  const [timeZone] = useState('PST');
  const [activeFilters, setActiveFilters] = useState<{ [key: string]: boolean }>({
    'usd': true,
    'eur': true,
    'gbp': true,
    'jpy': true,
    '1_impact': true,
    '2_impact': true,
    '3_impact': true
  });

  const marketAlerts: MarketAlert[] = [
    {
      id: '1',
      type: 'critical',
      message: 'High impact news: US Retail Sales in 30 minutes',
      time: '5:30am'
    },
    {
      id: '2',
      type: 'warning',
      message: 'EUR/USD increased volatility expected',
      time: '5:45am'
    }
  ];

  const newsEvents = useMemo(() => {
    return [
      {
        id: '1',
        currency: 'USD',
        countryCode: 'US',
        event: 'Retail Sales m/m',
        time: '6:00am',
        forecast: 0.06,
        previous: 0.03,
        impactLevel: 3
      },
      {
        id: '2',
        currency: 'EUR',
        countryCode: 'EU',
        event: 'CPI y/y',
        time: '7:00am',
        forecast: 0.01,
        previous: 0.03,
        impactLevel: 3
      },
      {
        id: '3',
        currency: 'GBP',
        countryCode: 'GB',
        event: 'GDP q/q',
        time: '8:00am',
        forecast: -0.01,
        previous: 0.02,
        impactLevel: 2
      },
      {
        id: '4',
        currency: 'JPY',
        countryCode: 'JP',
        event: 'Unemployment Rate',
        time: '9:00am',
        forecast: 2.5,
        previous: 2.4,
        impactLevel: 1
      }
    ];
  }, []);

  const getImpactBars = (level: number) => (
    <div className="flex gap-0.5">
      <div className={`w-2 h-3 ${level >= 1 ? 'bg-red-500 dark:bg-red-400' : 'bg-muted'}`}></div>
      <div className={`w-2 h-3 ${level >= 2 ? 'bg-red-500 dark:bg-red-400' : 'bg-muted'}`}></div>
      <div className={`w-2 h-3 ${level >= 3 ? 'bg-red-500 dark:bg-red-400' : 'bg-muted'}`}></div>
    </div>
  );

  const handleFiltersChange = (filterKey: string, checked: boolean) => {
    setActiveFilters(prev => ({
      ...prev,
      [filterKey]: checked
    }));
  };

const memoizedNewsEvents = useMemo(() => {
  return newsEvents;
}, [newsEvents]);

  const filteredEvents = useMemo(() => {
    return memoizedNewsEvents.filter(event => {
      // Check if any filters are active
      const hasActiveFilters = Object.values(activeFilters).some(value => value);
      if (!hasActiveFilters) return true; // Show all events if no filters are active

      // Check currency filter
      const currencyMatch = activeFilters[event.currency.toLowerCase()];
      
      // Check impact filter
      const impactMatch = activeFilters[`${event.impactLevel}_impact`];

      // Event is shown if both currency and impact level are matched
      return currencyMatch && impactMatch;
    });
  }, [memoizedNewsEvents, activeFilters]);

  const getActiveFilterCount = (filters: { [key: string]: boolean }) => {
    const currencyFilters = ['usd', 'eur', 'gbp', 'jpy'];
    const impactFilters = ['1_impact', '2_impact', '3_impact'];
    
    const activeCurrencies = currencyFilters.filter(key => filters[key]).length;
    const activeImpacts = impactFilters.filter(key => filters[key]).length;
    
    return {
      currencies: activeCurrencies,
      impacts: activeImpacts,
      total: activeCurrencies + activeImpacts
    };
  };

  return (
    <div className="min-h-screen bg-background">
      <HeaderCard 
        title="Market News"
        timeZone={timeZone}
        onNotificationsClick={() => {
          // Handle notifications click
        }}
        onSettingsClick={() => {
          // Handle settings click if needed
        }}
      >
        <Accordion type="multiple" className="border-b border-border">
          <AccordionItem value="filters">
            <AccordionTrigger className="flex items-center justify-between px-4 py-3 font-semibold text-foreground">
              <span>Filters</span>
              <div className="flex items-center gap-2">
                {getActiveFilterCount(activeFilters).total > 0 && (
                  <div className="flex gap-2">
                    {getActiveFilterCount(activeFilters).currencies > 0 && (
                      <span className="px-2 py-0.5 text-xs rounded-full bg-emerald-500/10 text-emerald-500 dark:bg-emerald-500/20">
                        {getActiveFilterCount(activeFilters).currencies} Currencies
                      </span>
                    )}
                    {getActiveFilterCount(activeFilters).impacts > 0 && (
                      <span className="px-2 py-0.5 text-xs rounded-full bg-blue-500/10 text-blue-500 dark:bg-blue-500/20">
                        {getActiveFilterCount(activeFilters).impacts} Impact Levels
                      </span>
                    )}
                  </div>
                )}
                <span className="text-sm text-muted-foreground">
                  {getActiveFilterCount(activeFilters).total === 0 ? 'None' : ''}
                </span>
              </div>
            </AccordionTrigger>
            <AccordionContent>
              <div className="p-4">
                <div className="flex justify-between items-start">
                  {/* Left side - Currencies */}
                  <div>
                    <h3 className="text-sm font-medium mb-2 text-foreground">Currencies</h3>
                    <div className="flex gap-6">
                      <div className="flex items-center">
                        <input
                          type="checkbox"
                          id="currency-usd"
                          checked={activeFilters['usd']}
                          onChange={(e) => handleFiltersChange('usd', e.target.checked)}
                          className="mr-3"
                        />
                        <label htmlFor="currency-usd" className="text-foreground flex items-center gap-3">
                          <FlagIcon country="US" />
                          <span>USD</span>
                        </label>
                      </div>
                      <div className="flex items-center">
                        <input
                          type="checkbox"
                          id="currency-eur"
                          checked={activeFilters['eur']}
                          onChange={(e) => handleFiltersChange('eur', e.target.checked)}
                          className="mr-3"
                        />
                        <label htmlFor="currency-eur" className="text-foreground flex items-center gap-3">
                          <FlagIcon country="EU" />
                          <span>EUR</span>
                        </label>
                      </div>
                      <div className="flex items-center">
                        <input
                          type="checkbox"
                          id="currency-gbp"
                          checked={activeFilters['gbp']}
                          onChange={(e) => handleFiltersChange('gbp', e.target.checked)}
                          className="mr-3"
                        />
                        <label htmlFor="currency-gbp" className="text-foreground flex items-center gap-3">
                          <FlagIcon country="GB" />
                          <span>GBP</span>
                        </label>
                      </div>
                      <div className="flex items-center">
                        <input
                          type="checkbox"
                          id="currency-jpy"
                          checked={activeFilters['jpy']}
                          onChange={(e) => handleFiltersChange('jpy', e.target.checked)}
                          className="mr-3"
                        />
                        <label htmlFor="currency-jpy" className="text-foreground flex items-center gap-3">
                          <FlagIcon country="JP" />
                          <span>JPY</span>
                        </label>
                      </div>
                    </div>
                  </div>

                  {/* Right side - Impact */}
                  <div>
                    <h3 className="text-sm font-medium mb-2 text-foreground">Impact</h3>
                    <div className="flex gap-6">
                      <div className="flex items-center">
                        <input
                          type="checkbox"
                          id="impact-1"
                          checked={activeFilters['1_impact']}
                          onChange={(e) => handleFiltersChange('1_impact', e.target.checked)}
                          className="mr-3"
                        />
                        <label htmlFor="impact-1" className="text-foreground flex items-center gap-3">
                          <div className="flex gap-0.5">
                            <div className="w-2 h-3 bg-red-500 dark:bg-red-400"></div>
                            <div className="w-2 h-3 bg-muted"></div>
                            <div className="w-2 h-3 bg-muted"></div>
                          </div>
                          <span>Low Impact</span>
                        </label>
                      </div>
                      <div className="flex items-center">
                        <input
                          type="checkbox"
                          id="impact-2"
                          checked={activeFilters['2_impact']}
                          onChange={(e) => handleFiltersChange('2_impact', e.target.checked)}
                          className="mr-3"
                        />
                        <label htmlFor="impact-2" className="text-foreground flex items-center gap-3">
                          <div className="flex gap-0.5">
                            <div className="w-2 h-3 bg-red-500 dark:bg-red-400"></div>
                            <div className="w-2 h-3 bg-red-500 dark:bg-red-400"></div>
                            <div className="w-2 h-3 bg-muted"></div>
                          </div>
                          <span>Medium Impact</span>
                        </label>
                      </div>
                      <div className="flex items-center">
                        <input
                          type="checkbox"
                          id="impact-3"
                          checked={activeFilters['3_impact']}
                          onChange={(e) => handleFiltersChange('3_impact', e.target.checked)}
                          className="mr-3"
                        />
                        <label htmlFor="impact-3" className="text-foreground flex items-center gap-3">
                          <div className="flex gap-0.5">
                            <div className="w-2 h-3 bg-red-500 dark:bg-red-400"></div>
                            <div className="w-2 h-3 bg-red-500 dark:bg-red-400"></div>
                            <div className="w-2 h-3 bg-red-500 dark:bg-red-400"></div>
                          </div>
                          <span>High Impact</span>
                        </label>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </HeaderCard>
      
      {/* Main Content */}
      <div className="max-w-7xl mx-auto py-6 px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Upcoming News */}
          <div className="col-span-2">
            <Card className="border-border">
              <CardContent className="p-6">
                <h2 className="text-lg font-semibold mb-6 flex items-center gap-2 text-foreground">
                  <Clock className="h-5 w-5" />
                  Upcoming News Events
                </h2>
                <div className="space-y-4">
                  {/* Header Row */}
                  <div className="grid grid-cols-[1fr_1.5fr_1fr_1fr_1fr_1fr] items-center py-2 px-4 font-semibold text-muted-foreground">
                    <span>Currency</span>
                    <span>Event</span>
                    <span>Time</span>
                    <span>Impact</span>
                    <span>Forecast</span>
                    <span>Previous</span>
                  </div>
                  {/* News Events */}
                  {filteredEvents.map(event => (
                    <button 
                      key={event.id}
                      className="w-full grid grid-cols-[1fr_1.5fr_1fr_1fr_1fr_1fr] items-center py-3 px-4 hover:bg-accent rounded-lg text-left transition-colors"
                    >
                      <div className="flex items-center gap-3">
                        <FlagIcon country={event.countryCode} />
                        <span className="text-foreground">{event.currency}</span>
                      </div>
                      <div className="font-medium text-foreground">
                        {event.event}
                      </div>
                      <div className="flex items-center text-sm text-muted-foreground">
                        <Clock className="h-4 w-4 mr-2" />
                        {event.time}
                      </div>
                      <div className="flex items-center">
                        {getImpactBars(event.impactLevel)}
                      </div>
                      <div>
                        <span className={`inline-block px-3 py-1 rounded-full text-sm ${
                          Number(event.forecast) > Number(event.previous) 
                            ? 'bg-emerald-500/10 text-emerald-500 dark:bg-emerald-500/20'
                            : 'bg-red-500/10 text-red-500 dark:bg-red-500/20'
                        }`}>
                          {typeof event.forecast === 'number' ? event.forecast.toFixed(2) : event.forecast}
                        </span>
                      </div>
                      <div>
                        <span className="inline-block px-3 py-1 bg-muted rounded-full text-sm text-foreground">
                          {typeof event.previous === 'number' ? event.previous.toFixed(2) : event.previous}
                        </span>
                      </div>
                    </button>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Market Alerts and News Feed */}
          <div className="space-y-6">
            {/* Market Alerts */}
            <Card className="border-border rounded-lg">
              <CardContent className="p-6">
                <h2 className="text-lg font-semibold mb-4 flex items-center gap-2 text-foreground">
                  <Clock className="h-5 w-5" />
                  Market Alerts
                </h2>
                <div className="space-y-3">
                  {marketAlerts.map(alert => (
                    <div 
                      key={alert.id}
                      className={`p-4 rounded-lg flex items-center space-x-3 ${
                        alert.type === 'critical' ? 'bg-red-500/10 text-red-500 dark:bg-red-500/20' :
                        alert.type === 'warning' ? 'bg-amber-500/10 text-amber-500 dark:bg-amber-500/20' :
                        'bg-blue-500/10 text-blue-500 dark:bg-blue-500/20'
                      }`}
                    >
                      <Info className="h-5 w-5 flex-shrink-0" />
                      <div className="flex-1">
                        <p className="text-sm">{alert.message}</p>
                        <p className="text-xs opacity-75">{alert.time}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* News Feed */}
            <Card className="border-border rounded-lg">
              <CardContent className="p-6">
                <h2 className="text-lg font-semibold mb-6 flex items-center gap-2 text-foreground">
                  <Clock className="h-5 w-5" />
                  Latest Market News
                </h2>
                <div className="space-y-4">
                  {[
                    { time: '10:30 AM', title: 'EUR/USD rises after US retail data' },
                    { time: '10:15 AM', title: 'Fed officials signal cautious approach' }
                  ].map((news, index) => (
                    <div key={index} className="p-4 border border-border rounded-lg">
                      <p className="text-sm text-muted-foreground">{news.time}</p>
                      <p className="font-medium text-foreground">{news.title}</p>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}