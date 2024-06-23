"use client";

import * as React from "react";
import Link from "next/link";

import { cn } from "@/lib/utils";
import { Logo } from "./logo";
import { components } from "@/lib/homePageData";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  navigationMenuTriggerStyle,
  navigationMenuTriggerRecebaStyle,
} from "@/components/ui/navigation-menu";



interface navItemModel {
  title: string,
  link: string
}

const NavItem = (params: any) => {
  return (
    <NavigationMenuItem>
      <Link href={params.item.link} legacyBehavior passHref>
        <NavigationMenuLink className={(params.item.title === "RECEBA SEU ANÚNCIO" ? navigationMenuTriggerRecebaStyle(): navigationMenuTriggerStyle())}>
          {(params.item.title).toUpperCase()}
        </NavigationMenuLink>
      </Link>
    </NavigationMenuItem>
  )
}

export function NavigationBar() {
  return (
    <NavigationMenu aria-label="dropdown-menu">
      <NavigationMenuList aria-label="dropdown-menu-list" className="p-6 hidden md:flex md:space-x-3 justify-around">
        {components.map((component, key)=> <NavItem item = {component} key = {key}/>) }
      </NavigationMenuList>
    </NavigationMenu>
  );
}

const ListItem = React.forwardRef<
  React.ElementRef<"a">,
  React.ComponentPropsWithoutRef<"a">
>(({ className, title, children, ...props }, ref) => {
  return (
    <li>
      <NavigationMenuLink asChild>
        <a
          ref={ref}
          className={cn(
            "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
            className
          )}
          {...props}
        >
          <div className="text-sm font-medium leading-none">{title}</div>
          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
            {children}
          </p>
        </a>
      </NavigationMenuLink>
    </li>
  );
});
ListItem.displayName = "ListItem";
