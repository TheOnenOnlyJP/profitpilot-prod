"use client";

import { usePathname } from 'next/navigation';
import { Tabs, Tab } from "@nextui-org/react";
import { 
  Home,
  Newspaper,
  LineChart,
  BookOpen,
  Wallet,
  Settings
} from 'lucide-react';

const navigationItems = [
  {
    label: 'Dashboard',
    value: '/',
    icon: Home
  },
  {
    label: 'News',
    value: '/news',
    icon: Newspaper
  },
  {
    label: 'Trading',
    value: '/trading',
    icon: LineChart
  },
  {
    label: 'Journal',
    value: '/journal',
    icon: BookOpen
  },
  {
    label: 'Accounts',
    value: '/accounts',
    icon: Wallet
  },
  {
    label: 'Settings',
    value: '/settings',
    icon: Settings
  }
];

export function MainNav() {
  const pathname = usePathname();

  return (
    <div className="w-full border-b border-divider bg-background/60 backdrop-blur-lg">
      <div className="max-w-7xl mx-auto px-4">
        <Tabs 
          aria-label="Navigation"
          selectedKey={pathname}
          classNames={{
            tabList: "gap-4",
            cursor: "w-full bg-primary",
            tab: "max-w-fit px-3 h-12",
            tabContent: "group-data-[selected=true]:text-primary-foreground"
          }}
        >
          {navigationItems.map((item) => {
            const Icon = item.icon;
            return (
              <Tab
                key={item.value}
                href={item.value}
                title={
                  <div className="flex items-center space-x-2">
                    <Icon className="h-4 w-4" />
                    <span>{item.label}</span>
                  </div>
                }
              />
            );
          })}
        </Tabs>
      </div>
    </div>
  );
} 