"use client"

import * as React from "react"
import { ChevronDown } from "lucide-react"
import { cn } from "@/lib/utils"

interface AccordionProps {
  children: React.ReactNode
  type?: "single" | "multiple"
  defaultValue?: string | string[]
  collapsible?: boolean
  className?: string
}

interface AccordionItemProps {
  value: string
  title?: React.ReactNode
  children: React.ReactNode
  className?: string
}

const AccordionContext = React.createContext<{
  expanded: string[]
  toggle: (value: string) => void
}>({ expanded: [], toggle: () => {} })

const Accordion = ({
  children,
  type = "single",
  defaultValue,
  collapsible = false,
  className,
}: AccordionProps) => {
  const [expanded, setExpanded] = React.useState<string[]>(() => {
    if (defaultValue) {
      return Array.isArray(defaultValue) ? defaultValue : [defaultValue]
    }
    return []
  })

  const toggle = React.useCallback((value: string) => {
    setExpanded(prev => {
      if (type === "single") {
        if (collapsible && prev[0] === value) {
          return []
        }
        return [value]
      }
      
      if (prev.includes(value)) {
        return prev.filter(v => v !== value)
      }
      return [...prev, value]
    })
  }, [type, collapsible])

  return (
    <AccordionContext.Provider value={{ expanded, toggle }}>
      <div className={cn("divide-y divide-border rounded-md", className)}>
        {children}
      </div>
    </AccordionContext.Provider>
  )
}

const AccordionItem = ({ value, title, children, className }: AccordionItemProps) => {
  const { expanded, toggle } = React.useContext(AccordionContext)
  const isExpanded = expanded.includes(value)

  return (
    <div className={cn("", className)}>
      <button
        type="button"
        onClick={() => toggle(value)}
        className="flex w-full items-center justify-between px-4 py-4 text-sm font-medium transition-all hover:bg-muted/50"
      >
        {title}
        <ChevronDown
          className={cn(
            "h-4 w-4 shrink-0 transition-transform duration-200",
            isExpanded ? "rotate-180" : ""
          )}
        />
      </button>
      {isExpanded && (
        <div className="px-4 pb-4 pt-0">
          {children}
        </div>
      )}
    </div>
  )
}

const AccordionTrigger = React.forwardRef<
  HTMLButtonElement,
  React.ButtonHTMLAttributes<HTMLButtonElement>
>(({ className, children, ...props }, ref) => (
  <button
    ref={ref}
    className={cn(
      "flex w-full items-center justify-between py-4 font-medium transition-all hover:underline",
      className
    )}
    {...props}
  >
    {children}
  </button>
))
AccordionTrigger.displayName = "AccordionTrigger"

const AccordionContent = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, children, ...props }, ref) => (
  <div
    ref={ref}
    className={cn("overflow-hidden text-sm", className)}
    {...props}
  >
    {children}
  </div>
))
AccordionContent.displayName = "AccordionContent"

export { Accordion, AccordionItem, AccordionTrigger, AccordionContent }