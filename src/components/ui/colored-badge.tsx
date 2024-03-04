import { cva } from "class-variance-authority"

import { cn } from "@/lib/utils"

export type ColoredBadgeVariant = "info" | "error" | "warning" | "success"

interface IColoredBadge extends React.HTMLAttributes<HTMLSpanElement> {
  variant: ColoredBadgeVariant
  children: React.ReactNode
}

const coloredBadgeVariants = cva(
  "me-2 rounded px-2.5 py-0.5 text-xs font-medium",
  {
    variants: {
      variant: {
        default:
          "bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-300",
        info: "bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-300",
        error: "bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-300",
        warning:
          "bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-300",
        success:
          "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-300",
        outline: "text-foreground",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  }
)

export const ColoredBadge: React.FC<IColoredBadge> = ({
  variant,
  className,
  children,
}) => {
  return (
    <span className={cn(coloredBadgeVariants({ variant }), className)}>
      {children}
    </span>
  )
}
