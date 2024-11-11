'use client';

import { Card, CardContent } from '@/components/ui/card';
import { Clock } from 'lucide-react';
import { FlagIcon } from '@/components/ui/flag-icon';
import { useRouter } from 'next/navigation';

interface NewsEvent {
  id: string;
  currency: string;
  countryCode: string;
  event: string;
  time: string;
  forecast: string | number;
  previous: string | number;
  impactLevel: 1 | 2 | 3;
}

interface NewsPreviewProps {
  previewNewsEvents: NewsEvent[];
}

export function NewsPreview({ previewNewsEvents }: NewsPreviewProps) {
  const router = useRouter();

  return (
    <Card>
      <CardContent className="p-4">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-lg font-semibold flex items-center gap-2">
            <Clock className="h-5 w-5" />
            Upcoming News
          </h2>
          <button 
            onClick={() => router.push('/news')}
            className="text-sm text-emerald-500 dark:text-emerald-400 hover:underline"
          >
            News Feed
          </button>
        </div>

        <div className="space-y-2">
          {/* Header Row */}
          <div className="grid grid-cols-[1fr_1.5fr_1fr_1fr] items-center py-2 text-sm font-medium text-muted-foreground">
            <span>Currency</span>
            <span>Event</span>
            <span>Time</span>
            <span>Impact</span>
          </div>

          {/* News Events */}
          <div className="space-y-1">
            {previewNewsEvents.map(event => (
              <button 
                key={event.id}
                onClick={() => router.push('/news')}
                className="w-full grid grid-cols-[1fr_1.5fr_1fr_1fr] items-center py-2 px-2 hover:bg-accent rounded-lg text-left transition-colors text-sm"
              >
                <div className="flex items-center gap-2">
                  <FlagIcon country={event.countryCode} />
                  <span className="text-foreground">{event.currency}</span>
                </div>
                <div className="font-medium text-foreground">
                  {event.event}
                </div>
                <div className="flex items-center text-muted-foreground">
                  <Clock className="h-4 w-4 mr-2" />
                  {event.time}
                </div>
                <div className="flex items-center">
                  <div className="flex gap-0.5">
                    <div className={`w-2 h-3 ${event.impactLevel >= 1 ? 'bg-red-500 dark:bg-red-400' : 'bg-muted'}`}></div>
                    <div className={`w-2 h-3 ${event.impactLevel >= 2 ? 'bg-red-500 dark:bg-red-400' : 'bg-muted'}`}></div>
                    <div className={`w-2 h-3 ${event.impactLevel >= 3 ? 'bg-red-500 dark:bg-red-400' : 'bg-muted'}`}></div>
                  </div>
                </div>
              </button>
            ))}
          </div>
        </div>

        {/* View More Link */}
        <div className="mt-4 text-center">
          <button 
            onClick={() => router.push('/news')}
            className="text-sm text-emerald-500 dark:text-emerald-400 hover:underline"
          >
            View All News Events →
          </button>
        </div>
      </CardContent>
    </Card>
  );
} 