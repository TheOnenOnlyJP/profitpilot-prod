"use client";
import { useState, useMemo } from "react";
import { Card, CardContent } from "@/helpers/components/ui/card";
import { Clock, Info, Filter, Bell, Newspaper } from "lucide-react";
import { HeaderCard } from "@/helpers/components/ui/header-card";
import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from "@/helpers/components/ui/accordion";
import { FlagIcon } from "@/helpers/components/ui/flag-icon";
import { NewsEvent } from "@/types/news";

interface MarketAlert {
  id: string;
  type: "warning" | "info" | "critical";
  message: string;
  time: string;
}

export default function NewsPage() {
  const [timeZone] = useState("PST");
  const [activeFilters, setActiveFilters] = useState<{
    [key: string]: boolean;
  }>({
    usd: true,
    eur: true,
    gbp: true,
    jpy: true,
    "1_impact": true,
    "2_impact": true,
    "3_impact": true,
  });

  const marketAlerts: MarketAlert[] = [
    {
      id: "1",
      type: "critical",
      message: "High impact news: US Retail Sales in 30 minutes",
      time: "5:30am",
    },
    {
      id: "2",
      type: "warning",
      message: "EUR/USD increased volatility expected",
      time: "5:45am",
    },
  ];

  const newsEvents = useMemo<NewsEvent[]>(() => {
    return [
      {
        id: "1",
        currency: "USD",
        countryCode: "US",
        event: "Retail Sales m/m",
        time: "6:00am",
        forecast: 0.06,
        previous: 0.03,
        impactLevel: 3 as 1 | 2 | 3,
      },
      {
        id: "2",
        currency: "EUR",
        countryCode: "EU",
        event: "CPI y/y",
        time: "7:00am",
        forecast: 0.01,
        previous: 0.03,
        impactLevel: 3 as 1 | 2 | 3,
      },
      {
        id: "3",
        currency: "GBP",
        countryCode: "GB",
        event: "GDP q/q",
        time: "8:00am",
        forecast: -0.01,
        previous: 0.02,
        impactLevel: 2 as 1 | 2 | 3,
      },
      {
        id: "4",
        currency: "JPY",
        countryCode: "JP",
        event: "Unemployment Rate",
        time: "9:00am",
        forecast: 2.5,
        previous: 2.4,
        impactLevel: 1 as 1 | 2 | 3,
      },
    ];
  }, []);

  const getImpactBars = (level: number) => (
    <div className="flex gap-0.5">
      <div
        className={`w-2 h-3 ${level >= 1 ? "bg-red-500 dark:bg-red-400" : "bg-muted"}`}
      ></div>
      <div
        className={`w-2 h-3 ${level >= 2 ? "bg-red-500 dark:bg-red-400" : "bg-muted"}`}
      ></div>
      <div
        className={`w-2 h-3 ${level >= 3 ? "bg-red-500 dark:bg-red-400" : "bg-muted"}`}
      ></div>
    </div>
  );

  const handleFiltersChange = (filterKey: string, checked: boolean) => {
    setActiveFilters((prev) => ({
      ...prev,
      [filterKey]: checked,
    }));
  };

  const memoizedNewsEvents = useMemo(() => {
    return newsEvents;
  }, [newsEvents]);

  const filteredEvents = useMemo(() => {
    return memoizedNewsEvents.filter((event) => {
      // Check if any filters are active
      const hasActiveFilters = Object.values(activeFilters).some(
        (value) => value
      );
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
    const currencyFilters = ["usd", "eur", "gbp", "jpy"];
    const impactFilters = ["1_impact", "2_impact", "3_impact"];

    const activeCurrencies = currencyFilters.filter(
      (key) => filters[key]
    ).length;
    const activeImpacts = impactFilters.filter((key) => filters[key]).length;

    return {
      currencies: activeCurrencies,
      impacts: activeImpacts,
      total: activeCurrencies + activeImpacts,
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
        <Accordion type="multiple" className="border-b border-border/50">
          <AccordionItem value="filters" className="border-none">
            <AccordionTrigger className="flex items-center justify-between px-6 py-4 hover:bg-accent/50 transition-colors">
              <div className="flex items-center gap-2">
                <div className="p-2 rounded-lg bg-primary/10">
                  <Filter className="h-5 w-5 text-primary" />
                </div>
                <span className="font-medium">Filters</span>
              </div>
              <div className="flex items-center gap-2">
                {getActiveFilterCount(activeFilters).total > 0 && (
                  <div className="flex gap-2">
                    {getActiveFilterCount(activeFilters).currencies > 0 && (
                      <span className="px-2.5 py-0.5 text-xs font-medium rounded-full bg-emerald-500/10 text-emerald-500 dark:bg-emerald-500/20">
                        {getActiveFilterCount(activeFilters).currencies}{" "}
                        Currencies
                      </span>
                    )}
                    {getActiveFilterCount(activeFilters).impacts > 0 && (
                      <span className="px-2.5 py-0.5 text-xs font-medium rounded-full bg-blue-500/10 text-blue-500 dark:bg-blue-500/20">
                        {getActiveFilterCount(activeFilters).impacts} Impact
                        Levels
                      </span>
                    )}
                  </div>
                )}
                <span className="text-sm text-muted-foreground">
                  {getActiveFilterCount(activeFilters).total === 0
                    ? "None"
                    : ""}
                </span>
              </div>
            </AccordionTrigger>
            <AccordionContent>
              <div className="p-6">
                <div className="flex justify-between items-start gap-12">
                  {/* Left side - Currencies */}
                  <div className="flex-1">
                    <h3 className="text-sm font-medium mb-4 text-foreground">
                      Currencies
                    </h3>
                    <div className="grid grid-cols-2 gap-4">
                      {["USD", "EUR", "GBP", "JPY"].map((currency) => (
                        <div key={currency} className="flex items-center">
                          <label className="flex items-center gap-3 cursor-pointer group">
                            <input
                              type="checkbox"
                              id={`currency-${currency.toLowerCase()}`}
                              checked={activeFilters[currency.toLowerCase()]}
                              onChange={(e) =>
                                handleFiltersChange(
                                  currency.toLowerCase(),
                                  e.target.checked
                                )
                              }
                              className="w-4 h-4 rounded border-border text-primary focus:ring-primary/20"
                            />
                            <div className="flex items-center gap-2 group-hover:text-foreground transition-colors">
                              <FlagIcon
                                country={
                                  currency === "EUR"
                                    ? "EU"
                                    : currency.slice(0, 2)
                                }
                              />
                              <span>{currency}</span>
                            </div>
                          </label>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Right side - Impact */}
                  <div className="flex-1">
                    <h3 className="text-sm font-medium mb-4 text-foreground">
                      Impact
                    </h3>
                    <div className="space-y-4">
                      {[
                        { id: "1_impact", label: "Low Impact", bars: 1 },
                        { id: "2_impact", label: "Medium Impact", bars: 2 },
                        { id: "3_impact", label: "High Impact", bars: 3 },
                      ].map(({ id, label, bars }) => (
                        <div key={id} className="flex items-center">
                          <label className="flex items-center gap-3 cursor-pointer group">
                            <input
                              type="checkbox"
                              id={`impact-${id}`}
                              checked={activeFilters[id]}
                              onChange={(e) =>
                                handleFiltersChange(id, e.target.checked)
                              }
                              className="w-4 h-4 rounded border-border text-primary focus:ring-primary/20"
                            />
                            <div className="flex items-center gap-3 group-hover:text-foreground transition-colors">
                              <div className="flex gap-0.5">
                                {Array.from({ length: 3 }).map((_, i) => (
                                  <div
                                    key={i}
                                    className={`w-2 h-3 ${i < bars ? "bg-red-500 dark:bg-red-400" : "bg-muted"}`}
                                  />
                                ))}
                              </div>
                              <span>{label}</span>
                            </div>
                          </label>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </HeaderCard>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto py-8 px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Upcoming News */}
          <div className="col-span-2">
            <Card className="border-border">
              <CardContent className="p-6">
                <div className="flex items-center justify-between mb-6">
                  <div className="flex items-center gap-2">
                    <div className="p-2 rounded-lg bg-primary/10">
                      <Clock className="h-5 w-5 text-primary" />
                    </div>
                    <h2 className="text-xl font-semibold">
                      Upcoming News Events
                    </h2>
                  </div>
                </div>

                <div className="space-y-2">
                  {/* Header Row */}
                  <div className="grid grid-cols-[1fr_1.5fr_1fr_1fr_1fr_1fr] items-center py-2 px-4 text-sm font-medium text-muted-foreground">
                    <span>Currency</span>
                    <span>Event</span>
                    <span>Time</span>
                    <span>Impact</span>
                    <span>Forecast</span>
                    <span>Previous</span>
                  </div>

                  {/* News Events */}
                  {filteredEvents.map((event) => (
                    <button
                      key={event.id}
                      className="w-full grid grid-cols-[1fr_1.5fr_1fr_1fr_1fr_1fr] items-center py-3 px-4 hover:bg-accent/50 rounded-lg text-left transition-colors"
                    >
                      <div className="flex items-center gap-3">
                        <FlagIcon country={event.countryCode} />
                        <span className="font-medium">{event.currency}</span>
                      </div>
                      <div className="font-medium">{event.event}</div>
                      <div className="flex items-center text-sm text-muted-foreground">
                        <Clock className="h-4 w-4 mr-2" />
                        {event.time}
                      </div>
                      <div className="flex items-center">
                        {getImpactBars(event.impactLevel)}
                      </div>
                      <div>
                        <span
                          className={`inline-block px-3 py-1 rounded-full text-sm font-medium ${
                            Number(event.forecast) > Number(event.previous)
                              ? "bg-emerald-500/10 text-emerald-500 dark:bg-emerald-500/20"
                              : "bg-red-500/10 text-red-500 dark:bg-red-500/20"
                          }`}
                        >
                          {typeof event.forecast === "number"
                            ? event.forecast.toFixed(2)
                            : event.forecast}
                        </span>
                      </div>
                      <div>
                        <span className="inline-block px-3 py-1 bg-accent rounded-full text-sm font-medium">
                          {typeof event.previous === "number"
                            ? event.previous.toFixed(2)
                            : event.previous}
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
            <Card className="border-border">
              <CardContent className="p-6">
                <div className="flex items-center gap-2 mb-6">
                  <div className="p-2 rounded-lg bg-primary/10">
                    <Bell className="h-5 w-5 text-primary" />
                  </div>
                  <h2 className="text-xl font-semibold">Market Alerts</h2>
                </div>
                <div className="space-y-3">
                  {marketAlerts.map((alert) => (
                    <div
                      key={alert.id}
                      className={`p-4 rounded-lg flex items-center space-x-3 ${
                        alert.type === "critical"
                          ? "bg-red-500/10 text-red-500 dark:bg-red-500/20"
                          : alert.type === "warning"
                            ? "bg-amber-500/10 text-amber-500 dark:bg-amber-500/20"
                            : "bg-blue-500/10 text-blue-500 dark:bg-blue-500/20"
                      }`}
                    >
                      <Info className="h-5 w-5 flex-shrink-0" />
                      <div className="flex-1">
                        <p className="text-sm font-medium">{alert.message}</p>
                        <p className="text-xs opacity-75 mt-1">{alert.time}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* News Feed */}
            <Card className="border-border">
              <CardContent className="p-6">
                <div className="flex items-center gap-2 mb-6">
                  <div className="p-2 rounded-lg bg-primary/10">
                    <Newspaper className="h-5 w-5 text-primary" />
                  </div>
                  <h2 className="text-xl font-semibold">Latest Market News</h2>
                </div>
                <div className="space-y-4">
                  {[
                    {
                      time: "10:30 AM",
                      title: "EUR/USD rises after US retail data",
                    },
                    {
                      time: "10:15 AM",
                      title: "Fed officials signal cautious approach",
                    },
                  ].map((news, index) => (
                    <div
                      key={index}
                      className="p-4 bg-accent/50 rounded-lg hover:bg-accent transition-colors"
                    >
                      <p className="text-sm text-muted-foreground">
                        {news.time}
                      </p>
                      <p className="font-medium mt-1">{news.title}</p>
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
