import * as React from "react"
import * as TooltipPrimitives from "@radix-ui/react-tooltip"
import { cn } from "@/lib/utils"

const TooltipProvider = TooltipPrimitives.Provider
const Tooltip = TooltipPrimitives.Root
const TooltipTrigger = TooltipPrimitives.Trigger

const TooltipContent = React.forwardRef(function TooltipContent(
  { className, sideOffset = 4, ...props }: React.ComponentPropsWithoutRef<typeof TooltipPrimitives.Content>,
  ref: React.Ref<React.ElementRef<typeof TooltipPrimitives.Content>>
) {
  return (
    <TooltipPrimitives.Content
      ref={ref}
      sideOffset={sideOffset}
      className={cn("z-50 overflow-hidden rounded-md border bg-popover px-3 py-1.5 text-sm text-popover-foreground shadow-md", className)}
      {...props}
    />
  )
})

TooltipContent.displayName = TooltipPrimitives.Content.displayName

export { Tooltip, TooltipTrigger, TooltipContent, TooltipProvider }
