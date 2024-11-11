"use client"

import { useState, useEffect } from 'react'
import { Command } from 'cmdk'
import { Search, Settings, Home, Calendar, Newspaper, BarChart, Wallet, User, LogOut } from 'lucide-react'
import { useRouter } from 'next/navigation'
import { useCallback } from 'react'
import { VisuallyHidden } from '@radix-ui/react-visually-hidden'

export function CommandMenu({ open, setOpen }: { open: boolean; setOpen: (open: boolean) => void }) {
  const router = useRouter()
  const [inputValue, setInputValue] = useState('')

  // Handle keyboard shortcuts
  useEffect(() => {
    const down = (e: KeyboardEvent) => {
      if (e.key === 'k' && (e.metaKey || e.ctrlKey)) {
        e.preventDefault()
        setOpen((open) => !open)
      }
      if (e.key === 'Escape') {
        setOpen(false)
      }
    }

    document.addEventListener('keydown', down)
    return () => document.removeEventListener('keydown', down)
  }, [setOpen])

  // Fast navigation handler
  const handleSelect = useCallback((href: string) => {
    setOpen(false)
    router.push(href)
  }, [router, setOpen])

  const groups = [
    {
      name: 'Quick Actions',
      items: [
        { name: 'Dashboard', icon: Home, href: '/', shortcut: 'D' },
        { name: 'Journal', icon: Calendar, href: '/journal', shortcut: 'J' },
        { name: 'News', icon: Newspaper, href: '/news', shortcut: 'N' },
        { name: 'Indicators', icon: BarChart, href: '/indicators', shortcut: 'I' },
        { name: 'Accounts', icon: Wallet, href: '/accounts', shortcut: 'A' },
      ],
    },
    {
      name: 'Account',
      items: [
        { name: 'Profile', icon: User, href: '/profile', shortcut: 'P' },
        { name: 'Settings', icon: Settings, href: '/settings', shortcut: 'S' },
        { name: 'Sign Out', icon: LogOut, href: '/signout', shortcut: 'L' },
      ],
    },
  ]

  return (
    <Command.Dialog
      open={open}
      onOpenChange={setOpen}
      className="fixed top-[20%] left-1/2 -translate-x-1/2 w-[640px] max-w-[90vw] rounded-xl border border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-950 shadow-lg animate-in fade-in-0 zoom-in-95"
    >
      <div className="flex items-center border-b border-gray-200 dark:border-gray-800 px-3">
        <Search className="h-4 w-4 text-gray-400" />
        <Command.Input 
          placeholder="Type a command or search..." 
          className="flex-1 px-3 py-4 text-sm bg-transparent outline-none placeholder:text-gray-400 text-gray-900 dark:text-gray-100"
          onValueChange={setInputValue}
          value={inputValue}
        />
        <kbd className="hidden sm:inline-block px-2 py-0.5 text-xs text-gray-500 bg-gray-100 dark:bg-gray-800 rounded">
          ESC
        </kbd>
      </div>
      <Command.List className="max-h-[400px] overflow-y-auto p-2">
        <Command.Empty className="py-6 text-center text-sm text-gray-500">
          No results found.
        </Command.Empty>
        
        {groups.map((group) => (
          <Command.Group key={group.name} heading={group.name} className="px-2 py-1">
            {group.items.map((item) => {
              const Icon = item.icon
              return (
                <Command.Item
                  key={item.name}
                  value={item.name}
                  onSelect={() => handleSelect(item.href)}
                  className="flex items-center justify-between px-3 py-2 rounded-lg text-sm text-gray-900 dark:text-gray-100 hover:bg-gray-100 dark:hover:bg-gray-800 cursor-pointer"
                >
                  <div className="flex items-center gap-3">
                    <Icon className="h-4 w-4" />
                    {item.name}
                  </div>
                  <kbd className="hidden sm:inline-block px-1.5 py-0.5 text-xs text-gray-400 bg-gray-100 dark:bg-gray-800 rounded">
                    {item.shortcut}
                  </kbd>
                </Command.Item>
              )
            })}
          </Command.Group>
        ))}
      </Command.List>
    </Command.Dialog>
  )
} 