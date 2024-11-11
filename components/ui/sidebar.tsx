"use client"

import Link from 'next/link';
import { Search, Home, LineChart, Calendar, Newspaper, BarChart, User, LogOut } from 'lucide-react';
import Image from 'next/image';
import { ThemeToggle } from "@/components/theme-toggle"
import { useState } from 'react';

export default function Sidebar() {
  const [isExpanded, setIsExpanded] = useState(true); // Initial state set to expanded

  const navigation = [
    {
      section: 'Tools',
      items: [
        { name: 'Dashboard', href: '/', icon: Home },
        { name: 'Journal', href: '/journal', icon: Calendar },
        { name: 'News', href: '/news', icon: Newspaper },
        { name: 'Indicators', href: '/indicators', icon: BarChart },
      ],
    },
    {
      section: '',
      items: [
        { name: 'Profile', href: '/profile', icon: User },
        { name: 'Sign Out', href: '/signout', icon: LogOut },
      ],
    },
  ];

  const iconClassName = 'h-6 w-6 text-gray-700 dark:text-gray-200'; // Consistent icon size and color
  const navItemClassName = 'flex items-center gap-3 px-3 py-2 text-gray-700 dark:text-gray-200 hover:bg-accent dark:hover:bg-secondary rounded-md mb-1 transition-colors';

  return (
    <div
      className={`flex flex-col h-screen ${isExpanded ? 'w-64' : 'w-20'} bg-background border-r border-border transition-width duration-300`}
      onMouseEnter={() => setIsExpanded(true)} // Expand on mouse enter
      onMouseLeave={() => setIsExpanded(false)} // Minimize on mouse leave
    >
      {/* Logo and User Section */}
      <div className="p-4">
        <div className="flex items-center gap-2 mb-4">
          <Image src="/assets/logo.svg" alt="Profit Pilot" width={32} height={32} />
          {isExpanded && <span className="text-xl font-semibold text-foreground">Profit Pilot</span>}
        </div>

        <div className="flex items-center gap-3 mb-4">
          <div className="w-10 h-10 rounded-full flex items-center justify-center">
            <Image
              src="/assets/josh.png"
              alt="Profile"
              width={32}
              height={32}
              className="rounded-full"
            />
          </div>
          {isExpanded && (
            <div>
              <div className="font-medium text-foreground">Joshua Boyd</div>
              <div className="text-sm text-muted-foreground">Signed in</div>
            </div>
          )}
        </div>

        {/* Search Bar */}
        {isExpanded && (
          <div className="relative mb-6">
            <Search className="absolute left-3 top-2.5 h-4 w-4 text-muted-foreground" />
            <input
              type="text"
              placeholder="Search..."
              className="w-full pl-10 pr-4 py-2 bg-card dark:bg-secondary rounded-md text-sm border-0 focus:ring-1 focus:ring-ring placeholder:text-muted-foreground"
              aria-label="Search"
            />
          </div>
        )}
      </div>

      {/* Navigation */}
      <nav className="flex-1 px-4">
        {navigation.map((section, sectionIndex) => (
          <div
            key={sectionIndex}
            className={`mb-6 ${sectionIndex === navigation.length - 1 ? 'mt-auto' : ''}`}
          >
            {isExpanded && section.section && (
              <div className="text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-2">
                {section.section}
              </div>
            )}
            {section.items.map((item) => {
              const Icon = item.icon;
              return (
                <Link key={item.name} href={item.href} className={navItemClassName}>
                  <Icon className={`${iconClassName} transition-none`} aria-hidden="true" />
                  {isExpanded && item.name}
                </Link>
              );
            })}
          </div>
        ))}
      </nav>

      {/* Theme Toggle */}
      <div className="p-4 border-t border-border">
        <div className="flex items-center gap-4">
          <ThemeToggle />
          {isExpanded && <span className="text-sm text-muted-foreground">Toggle theme</span>}
        </div>
      </div>
    </div>
  );
}