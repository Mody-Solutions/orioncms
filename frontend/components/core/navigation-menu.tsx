'use client';

import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import NavigationMenuInterface, {NavigationMenuItemInterface} from "@/interfaces/navigation-menu";
import Link from "next/link";
import React from "react";
import {cn} from "@/lib/utils";

export default function CoreNavigationMenu({items}: NavigationMenuInterface) {
  return (
    <NavigationMenu>
      <NavigationMenuList>
        {items.map((item: NavigationMenuItemInterface) => {
          return (
            <NavigationMenuItem key={`menu-item-${item.id}`}>
              {item?.sub_items && item?.sub_items?.length === 0 && (
                <Link href={item.path}>
                  {item.label}
                </Link>
              )}
              {item?.sub_items && item?.sub_items?.length !== 0 && (
                <span>
                  <NavigationMenuTrigger>{item.label}</NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px] ">
                      {item?.sub_items && item?.sub_items.map((sub_item: NavigationMenuItemInterface) => {
                          return (
                            <ListItem
                              key={`menu-sub-item-${sub_item.id}`}
                              title={sub_item.label}
                              href={sub_item.path}
                            >
                              {sub_item.label}
                            </ListItem>
                          )
                        }
                      )}
                    </ul>
                  </NavigationMenuContent>
                </span>
              )}
            </NavigationMenuItem>
          );
        })}
      </NavigationMenuList>
    </NavigationMenu>
  );
}

const ListItem = React.forwardRef<
  React.ElementRef<"a">,
  React.ComponentPropsWithoutRef<"a">
>(({className, title, children, ...props}, ref) => {
  return (
    <li>
      <a
        ref={ref}
        className={cn(
          "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none",
          "transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent",
          "focus:text-accent-foreground",
          className
        )}
        {...props}
      >
        <span className="text-sm font-medium leading-none">{title}</span>
        <span className="line-clamp-2 text-sm leading-snug text-muted-foreground">
            {children}
          </span>
      </a>
    </li>
  )
})
ListItem.displayName = "ListItem"