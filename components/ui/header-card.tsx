import { Bell, Settings } from "lucide-react";
import { Card } from "@/components/ui/card";

interface HeaderCardProps {
  title: string;
  timeZone: string;
  onNotificationsClick?: () => void;
  onSettingsClick?: () => void;
  children?: React.ReactNode;
}

export function HeaderCard({
  title,
  timeZone,
  onNotificationsClick,
  onSettingsClick,
  children,
}: HeaderCardProps) {
  return (
    <Card className="border-b border-border sticky top-0 z-10">
      <div className="max-w-7xl mx-auto">
        <div className="flex items-center justify-between h-16 px-4">
          <div className="flex items-center space-x-4">
            <h1 className="text-2xl font-bold text-foreground">{title}</h1>
            <span className="text-muted-foreground">{timeZone} Time Zone</span>
          </div>
          <div className="flex items-center space-x-4">
            <button
              onClick={onNotificationsClick}
              className="p-2 text-muted-foreground hover:text-foreground transition-colors"
            >
              <Bell className="h-5 w-5" />
            </button>
            <button
              onClick={onSettingsClick}
              className="p-2 text-muted-foreground hover:text-foreground transition-colors"
            >
              <Settings className="h-5 w-5" />
            </button>
          </div>
        </div>
        {children}
      </div>
    </Card>
  );
}
