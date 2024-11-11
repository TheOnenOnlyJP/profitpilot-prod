"use client"

import Link from 'next/link';
import { Search, Home, Calendar, Newspaper, BarChart, User, LogOut, Settings, Wallet } from 'lucide-react';
import Image from 'next/image';
import { ThemeToggle } from "@/components/theme-toggle"
import { useState } from 'react';
import { CommandMenu } from "@/components/ui/command-menu"

export default function Sidebar() {
  const [isExpanded, setIsExpanded] = useState(true);
  const [commandOpen, setCommandOpen] = useState(false);

  const navigation = [
    {
      section: 'Tools',
      items: [
        { name: 'Dashboard', href: '/', icon: Home },
        { name: 'Journal', href: '/journal', icon: Calendar },
        { name: 'News', href: '/news', icon: Newspaper },
        { name: 'Indicators', href: '/indicators', icon: BarChart },
        { name: "Accounts", href: "/accounts", icon: Wallet },
        { name: "Analytics", href: "/analytics", icon: BarChart },
      ],
    },
    {
      section: '',
      items: [
        { name: 'Profile', href: '/profile', icon: User },
        { name: 'Settings', href: '/settings', icon: Settings },
        { name: 'Sign Out', href: '/signout', icon: LogOut },
      ],
    },
  ];

  const iconClassName = 'h-5 w-5 text-default-500 group-hover:text-foreground transition-colors';
  const navItemClassName = `group flex items-center gap-3 rounded-lg px-3 py-3 text-sm font-medium hover:bg-default-100 dark:hover:bg-default-50 transition-colors mb-2 ${!isExpanded ? 'justify-center' : ''}`;

  return (
    <div
      className={`flex flex-col ${isExpanded ? 'w-72' : 'w-24'} bg-background border-r border-divider transition-all duration-300`}
      onMouseEnter={() => setIsExpanded(true)}
      onMouseLeave={() => setIsExpanded(false)}
    >
      {/* Logo Section */}
      <div className={`p-6 ${!isExpanded ? 'pb-0 flex justify-center' : ''}`}>
        <div className={`flex items-center gap-3 ${!isExpanded ? 'justify-center' : ''}`}>
          <Image 
            src="/assets/logo.svg" 
            alt="Profit Pilot" 
            width={isExpanded ? 50 : 60} 
            height={isExpanded ? 50 : 60} 
            className="p-1" 
          />
          {isExpanded && <span className="text-xl font-semibold text-foreground">Profit Pilot</span>}
        </div>
      </div>

      {/* User Section - Centered when minimized with reduced spacing */}
      <div className={`flex items-center ${isExpanded ? 'gap-3 px-6 pb-4' : 'justify-center py-4'}`}>
        <div className="relative h-10 w-10">
          <Image
            src="/assets/josh.png"
            alt="Profile"
            width={30}
            height={30}
            className="rounded-full object-cover"
          />
          <span className="absolute bottom-0 right-0 h-3 w-3 rounded-full bg-success"></span>
        </div>
        {isExpanded && (
          <div className="flex flex-col">
            <span className="text-sm font-medium text-foreground">Joshua Boyd</span>
            <span className="text-xs text-default-500">Signed in</span>
          </div>
        )}
      </div>

      {/* Search Bar */}
      {isExpanded && (
        <div className="px-6 pb-4">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-gray-400" />
            <button
              onClick={() => setCommandOpen(true)}
              className="w-full rounded-lg bg-gray-100 dark:bg-gray-800 py-2 pl-10 pr-4 text-sm text-left text-gray-600 dark:text-gray-300 outline-none placeholder:text-gray-400 dark:placeholder:text-gray-500"
            >
              Search... (⌘K)
            </button>
          </div>
        </div>
      )}

      {/* CommandMenu component */}
      <CommandMenu open={commandOpen} setOpen={setCommandOpen} />

      {/* Navigation */}
      <nav className={`flex-1 space-y-1 ${!isExpanded ? 'px-0' : 'px-4'}`}>
        {navigation.map((section, sectionIndex) => (
          <div
            key={sectionIndex}
            className={`py-2 ${sectionIndex === navigation.length - 1 ? 'mt-auto' : ''}`}
          >
            {isExpanded && section.section && (
              <div className="mb-2 px-3 text-xs font-medium uppercase text-default-400">
                {section.section}
              </div>
            )}
            {section.items.map((item) => {
              const Icon = item.icon;
              return (
                <Link key={item.name} href={item.href} className={navItemClassName}>
                  <Icon className={iconClassName} aria-hidden="true" />
                  {isExpanded && (
                    <span className="text-default-500 group-hover:text-foreground transition-colors">
                      {item.name}
                    </span>
                  )}
                </Link>
              );
            })}
          </div>
        ))}
      </nav>

      {/* Theme Toggle */}
      <div className="border-t border-divider p-6">
        <div className={`flex items-center gap-4 ${!isExpanded ? 'justify-center' : ''}`}>
          <ThemeToggle />
          {isExpanded && (
            <span className="text-sm text-default-500"></span>
          )}
        </div>
      </div>
    </div>
  );
}