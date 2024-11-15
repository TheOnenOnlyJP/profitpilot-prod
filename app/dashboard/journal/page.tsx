"use client";

import { useState } from "react";
import { Card, CardContent } from "@/helpers/components/ui/card";
import { HeaderCard } from "@/helpers/components/ui/header-card";
import { Clock, PenLine, Calendar, TrendingUp } from "lucide-react";
import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from "@/helpers/components/ui/accordion";

interface JournalEntry {
  id: string;
  date: string;
  wordCount: number;
  content: string;
  trades?: {
    pair: string;
    result: "win" | "loss";
    pips: number;
  }[];
  mood?: "positive" | "neutral" | "negative";
}

export default function JournalPage() {
  const [timeZone] = useState("PST");
  const [activeFilters, setActiveFilters] = useState<{
    [key: string]: boolean;
  }>({
    last_week: true,
    this_week: true,
    wins: true,
    losses: true,
  });

  // Sample journal entries
  const journalEntries: JournalEntry[] = [
    {
      id: "1",
      date: "2024-03-18",
      wordCount: 430,
      content:
        "Yesterday the market was quite flat. I refrained from trading and focused more on software projects. Tomorrow, when I return to the charts, I hope to stay disciplined and avoid low-volume trades.",
      trades: [
        { pair: "EUR/USD", result: "win", pips: 15 },
        { pair: "GBP/JPY", result: "loss", pips: -8 },
      ],
      mood: "positive",
    },
    {
      id: "2",
      date: "2024-03-17",
      wordCount: 285,
      content:
        "Focused on USD pairs today due to high impact news. Managed to catch a good move on EUR/USD.",
      trades: [{ pair: "EUR/USD", result: "win", pips: 22 }],
      mood: "positive",
    },
  ];

  const getActiveFilterCount = (filters: { [key: string]: boolean }) => {
    const dateFilters = ["last_week", "this_week"];
    const resultFilters = ["wins", "losses"];

    const activeDates = dateFilters.filter((key) => filters[key]).length;
    const activeResults = resultFilters.filter((key) => filters[key]).length;

    return {
      dates: activeDates,
      results: activeResults,
      total: activeDates + activeResults,
    };
  };

  const handleFiltersChange = (filterKey: string, checked: boolean) => {
    setActiveFilters((prev) => ({
      ...prev,
      [filterKey]: checked,
    }));
  };

  return (
    <div className="min-h-screen bg-background">
      <HeaderCard
        title="Trading Journal"
        timeZone={timeZone}
        onNotificationsClick={() => {
          // Handle notifications click
        }}
        onSettingsClick={() => {
          // Handle settings click
        }}
      >
        <Accordion type="multiple" className="border-b border-border">
          <AccordionItem value="filters">
            <AccordionTrigger className="flex items-center justify-between px-4 py-3 font-semibold text-foreground">
              <span>Filters</span>
              <div className="flex items-center gap-2">
                {getActiveFilterCount(activeFilters).total > 0 && (
                  <div className="flex gap-2">
                    {getActiveFilterCount(activeFilters).dates > 0 && (
                      <span className="px-2 py-0.5 text-xs rounded-full bg-emerald-500/10 text-emerald-500 dark:bg-emerald-500/20">
                        {getActiveFilterCount(activeFilters).dates} Date Ranges
                      </span>
                    )}
                    {getActiveFilterCount(activeFilters).results > 0 && (
                      <span className="px-2 py-0.5 text-xs rounded-full bg-blue-500/10 text-blue-500 dark:bg-blue-500/20">
                        {getActiveFilterCount(activeFilters).results} Results
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
              <div className="p-4">
                <div className="flex justify-between items-start">
                  {/* Date Range Filters */}
                  <div>
                    <h3 className="text-sm font-medium mb-2 text-foreground">
                      Date Range
                    </h3>
                    <div className="flex gap-6">
                      <div className="flex items-center">
                        <input
                          type="checkbox"
                          id="last-week"
                          checked={activeFilters["last_week"]}
                          onChange={(e) =>
                            handleFiltersChange("last_week", e.target.checked)
                          }
                          className="mr-3"
                        />
                        <label
                          htmlFor="last-week"
                          className="text-foreground flex items-center gap-3"
                        >
                          <Calendar className="h-4 w-4" />
                          <span>Last Week</span>
                        </label>
                      </div>
                      <div className="flex items-center">
                        <input
                          type="checkbox"
                          id="this-week"
                          checked={activeFilters["this_week"]}
                          onChange={(e) =>
                            handleFiltersChange("this_week", e.target.checked)
                          }
                          className="mr-3"
                        />
                        <label
                          htmlFor="this-week"
                          className="text-foreground flex items-center gap-3"
                        >
                          <Calendar className="h-4 w-4" />
                          <span>This Week</span>
                        </label>
                      </div>
                    </div>
                  </div>

                  {/* Trade Result Filters */}
                  <div>
                    <h3 className="text-sm font-medium mb-2 text-foreground">
                      Trade Results
                    </h3>
                    <div className="flex gap-6">
                      <div className="flex items-center">
                        <input
                          type="checkbox"
                          id="wins"
                          checked={activeFilters["wins"]}
                          onChange={(e) =>
                            handleFiltersChange("wins", e.target.checked)
                          }
                          className="mr-3"
                        />
                        <label
                          htmlFor="wins"
                          className="text-foreground flex items-center gap-3"
                        >
                          <TrendingUp className="h-4 w-4 text-emerald-500" />
                          <span>Wins</span>
                        </label>
                      </div>
                      <div className="flex items-center">
                        <input
                          type="checkbox"
                          id="losses"
                          checked={activeFilters["losses"]}
                          onChange={(e) =>
                            handleFiltersChange("losses", e.target.checked)
                          }
                          className="mr-3"
                        />
                        <label
                          htmlFor="losses"
                          className="text-foreground flex items-center gap-3"
                        >
                          <TrendingUp className="h-4 w-4 text-red-500 rotate-180" />
                          <span>Losses</span>
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
          {/* Journal Entries */}
          <div className="col-span-2">
            <Card className="border-border">
              <CardContent className="p-6">
                <h2 className="text-lg font-semibold mb-6 flex items-center gap-2 text-foreground">
                  <PenLine className="h-5 w-5" />
                  Journal Entries
                </h2>
                <div className="space-y-4">
                  {journalEntries.map((entry) => (
                    <div
                      key={entry.id}
                      className="p-4 border border-border rounded-lg hover:bg-accent transition-colors"
                    >
                      <div className="flex justify-between items-start mb-2">
                        <div className="flex items-center gap-2">
                          <Clock className="h-4 w-4 text-muted-foreground" />
                          <span className="text-sm text-muted-foreground">
                            {entry.date}
                          </span>
                        </div>
                        <span className="text-sm text-muted-foreground">
                          {entry.wordCount} Words
                        </span>
                      </div>
                      <p className="text-foreground line-clamp-3">
                        {entry.content}
                      </p>
                      {entry.trades && entry.trades.length > 0 && (
                        <div className="mt-3 flex gap-2">
                          {entry.trades.map((trade, index) => (
                            <span
                              key={index}
                              className={`inline-flex items-center gap-1 px-2 py-1 rounded-full text-xs ${
                                trade.result === "win"
                                  ? "bg-emerald-500/10 text-emerald-500 dark:bg-emerald-500/20"
                                  : "bg-red-500/10 text-red-500 dark:bg-red-500/20"
                              }`}
                            >
                              {trade.pair} ({trade.pips} pips)
                            </span>
                          ))}
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Stats and Quick Entry */}
          <div className="space-y-6">
            {/* Quick Entry */}
            <Card className="border-border">
              <CardContent className="p-6">
                <h2 className="text-lg font-semibold mb-4 flex items-center gap-2 text-foreground">
                  <PenLine className="h-5 w-5" />
                  Quick Entry
                </h2>
                <textarea
                  className="w-full h-32 p-3 rounded-lg bg-background border border-border resize-none focus:outline-none focus:ring-2 focus:ring-ring"
                  placeholder="Write your journal entry..."
                />
                <button className="mt-3 w-full bg-primary text-primary-foreground rounded-lg py-2 hover:bg-primary/90 transition-colors">
                  Save Entry
                </button>
              </CardContent>
            </Card>

            {/* Weekly Stats */}
            <Card className="border-border">
              <CardContent className="p-6">
                <h2 className="text-lg font-semibold mb-4 flex items-center gap-2 text-foreground">
                  <TrendingUp className="h-5 w-5" />
                  Weekly Stats
                </h2>
                <div className="space-y-3">
                  <div className="flex justify-between items-center">
                    <span className="text-foreground">Total Entries</span>
                    <span className="text-foreground font-medium">12</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-foreground">Win Rate</span>
                    <span className="text-emerald-500 font-medium">68%</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-foreground">Total Pips</span>
                    <span className="text-emerald-500 font-medium">+145</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-foreground">Avg Words/Entry</span>
                    <span className="text-foreground font-medium">325</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}
