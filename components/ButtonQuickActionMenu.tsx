import { Button } from "@/shared/components/button";
import { DropdownMenu, DropdownMenuTrigger, DropdownMenuContent, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuItem } from "@/shared/components/dropdown-menu";
import { TooltipProvider, Tooltip, TooltipTrigger, TooltipContent } from "@/shared/components/tooltip";
import { GripIcon } from "lucide-react";
import React from "react";

const ButtonQuickActionMenu: React.FC = () => {
  return (
    <DropdownMenu>
      <TooltipProvider delayDuration={200}>
        <Tooltip>
          <TooltipTrigger asChild>
            {/* biome-ignore lint/a11y/noNoninteractiveTabindex: <explanation> */}
            <span tabIndex={0}>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" size="sm">
                  <GripIcon size="20" />
                </Button>
              </DropdownMenuTrigger>
            </span>
          </TooltipTrigger>
          <TooltipContent>
            <p>Quick Action Menu</p>
          </TooltipContent>
        </Tooltip>
      </TooltipProvider>
      <DropdownMenuContent>
        <DropdownMenuLabel>My Account</DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuItem>Profile</DropdownMenuItem>
        <DropdownMenuItem>Billing</DropdownMenuItem>
        <DropdownMenuItem>Team</DropdownMenuItem>
        <DropdownMenuItem>Subscription</DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default ButtonQuickActionMenu;
