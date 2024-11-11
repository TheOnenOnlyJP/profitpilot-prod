import { NewsEvent } from '@/types/news';
import { FlagIcon } from '@/components/ui/flag-icon';

interface NewsEventItemProps {
  event: NewsEvent;
}

export function NewsEventItem({ event }: NewsEventItemProps) {
  return (
    <div className="flex items-center justify-between p-4 bg-background/20 backdrop-blur-lg rounded-lg border border-default-200/50">
      <div className="flex items-center gap-4">
        <FlagIcon country={event.countryCode} />
        <div className="flex flex-col gap-1">
          <div className="flex items-center gap-2">
            <span className="text-foreground/90 font-medium">{event.currency}</span>
            <span className="text-sm text-muted-foreground">{event.time}</span>
          </div>
          <div className="flex items-center gap-2 text-sm text-muted-foreground">
            <span>{event.event}</span>
            <span>Forecast: {event.forecast}%</span>
            <span>Previous: {event.previous}%</span>
          </div>
        </div>
      </div>
      <span className="h-3 w-3 rounded-full bg-red-500"></span>
    </div>
  );
} 