"use client";

import * as React from "react";
import { cn } from "@/helpers/lib/utils";
import { AlertCircle } from "lucide-react";

const Alert = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn(
      "flex items-center gap-4 rounded-md border p-4 text-sm",
      "border-primary/20 bg-primary/10 text-primary dark:border-primary/20 dark:bg-primary/5 dark:text-primary",
      className
    )}
    {...props}
  />
));
Alert.displayName = "Alert";

const AlertDescription = React.forwardRef<
  HTMLParagraphElement,
  React.HTMLAttributes<HTMLParagraphElement>
>(({ className, ...props }, ref) => (
  <p
    ref={ref}
    className={cn("text-sm [&_p]:leading-relaxed", className)}
    {...props}
  />
));
AlertDescription.displayName = "AlertDescription";

const AlertIcon = React.forwardRef<
  SVGSVGElement,
  React.HTMLAttributes<SVGSVGElement>
>(({ className, ...props }, ref) => (
  <AlertCircle
    ref={ref}
    className={cn("h-5 w-5 text-primary", className)}
    {...props}
  />
));
AlertIcon.displayName = "AlertIcon";

export { Alert, AlertDescription, AlertIcon };
