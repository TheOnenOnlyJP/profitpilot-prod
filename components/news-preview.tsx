import { Card, CardContent } from '@/components/ui/card';
import { NewsEvent } from '@/types/news';
import { Newspaper, ChevronRight } from 'lucide-react';
import { Button } from "@nextui-org/react";
import { NewsEventItem } from './news-event-item';

interface NewsPreviewProps {
  previewNewsEvents: NewsEvent[];
}

export function NewsPreview({ previewNewsEvents }: NewsPreviewProps) {
  return (
    <Card className="h-full bg-default-50 dark:bg-default-100/50 backdrop-blur-lg backdrop-saturate-150 border-default-200/50">
      <CardContent className="p-6">
        <div className="flex justify-between items-center mb-6">
          <div className="flex items-center gap-2">
            <div className="p-2 rounded-lg bg-primary/10 backdrop-blur-lg">
              <Newspaper className="h-5 w-5 text-primary" />
            </div>
            <h2 className="text-xl font-semibold text-foreground">Economic Calendar</h2>
          </div>
          <Button
            as="a"
            href="/news"
            variant="flat"
            color="primary"
            endContent={<ChevronRight className="h-4 w-4" />}
            className="bg-primary/10 hover:bg-primary/20 text-foreground"
          >
            View News
          </Button>
        </div>
        <div className="space-y-4">
          {previewNewsEvents.map((event) => (
            <NewsEventItem key={event.id} event={event} />
          ))}
        </div>
        <div className="mt-4 flex justify-center">
          <a href="/news" className="text-xs text-muted-foreground hover:text-foreground">
            View All News Events
          </a>
        </div>
      </CardContent>
    </Card>
  );
} 