"use client";
import { ChevronDown, LogOut, Plus, Settings, Menu } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { useTheme } from "next-themes";
import { usePathname } from "next/navigation";
import ThemeSwitcher from "./ThemeSwitcher";
import config from "../siteconfig";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu"
import React from "react";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
export default function Navbar() {
  const { setTheme } = useTheme();
  const [reload, setReload] = useState(0);
  const [defaultTeam, setDefaultTeam] = useState("v5rc");
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [open, setOpen] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  const pathname = usePathname();

  if (
    pathname.includes("/workspace") ||
    pathname.includes("/login") ||
    pathname.includes("/logout") ||
    pathname.includes("/settings")
  ) {
    return null;
  }

  return (
    <motion.div transition={{ duration: 0.25, type: "spring", bounce: 0.25 }} className="fixed top-0 z-50 flex w-full flex-col items-center justify-center">
      {isHovered && (
        <motion.div className="fixed inset-0 z-40 bg-black/50" transition={{ duration: 0.25, type: "spring", bounce: 0.25 }}
          initial={{ filter: "blur(0px)", opacity: 1 }} whileInView={{ filter: "blur(8px)", backdropFilter: "blur(25px)", opacity: 1 }}
          exit={{ filter: "blur(0px)", backdropFilter: "blur(0px)", opacity: 0 }}
        />
      )}
      <div className="card mt-2 z-50 flex h-full w-[45vw] max-sm:w-full items-center rounded-xl border border-zinc-900 px-4 md:px-8 lg:px-12 backdrop-blur-lg transition-all duration-300 hover:border-zinc-700 supports-backdrop-blur:bg-background/90">
        <div className="flex w-full items-center justify-between">
          {/* Logo AND HOME BUTTON */}
          <Link href="/">
            <Image
              src={config.logo}
              alt="Enginotic 6 Robotics Logo"
              width={125}
              height={125}
              className="invert-0 dark:invert py-2"
            />
          </Link>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            <Menu className="h-6 w-6" />
          </button>

          {/* Desktop Navigation */}
          <NavigationMenu className="hidden lg:flex" onMouseEnter={() => setIsHovered(true)} // Show blur
            onMouseLeave={() => setIsHovered(false)} >
            <NavigationMenuList>
              {config.navItems.map((item) => (
                <NavigationMenuItem key={item.path} >
                  {item.label === 'Contact' ? (
                    <Link href={item.path} className={navigationMenuTriggerStyle()}>
                      {item.label}
                    </Link>
                  ) : (
                    <>
                      <NavigationMenuTrigger >
                        {item.label}
                      </NavigationMenuTrigger>
                      <NavigationMenuContent className="">
                        <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px] ">
                          {item.navMenuItems.map((component) => (
                            <ListItem
                              key={component.title}
                              title={component.title}
                              href={component.href}
                            >
                              {component.description}
                            </ListItem>
                          ))}
                        </ul>
                      </NavigationMenuContent>
                    </>
                  )}
                </NavigationMenuItem>
              ))}
            </NavigationMenuList>
          </NavigationMenu>

          {/* User Menu - Desktop */}
          <div className="hidden lg:flex items-center gap-4">
            <ThemeSwitcher />

            <NavigationMenu>
              <NavigationMenuList>
                <NavigationMenuItem>
                  {isDropdownOpen && (
                    <NavigationMenuContent>
                      <ul className="w-48 p-2">
                        <li>
                          <Link href="/workspace?new" className="flex items-center px-4 py-2 text-sm hover:bg-accent rounded-md">
                            <Plus className="mr-2 h-4 w-4" />
                            <span>New Workspace</span>
                          </Link>
                        </li>
                        <li>
                          <Link href="/settings" className="flex items-center px-4 py-2 text-sm hover:bg-accent rounded-md">
                            <Settings className="mr-2 h-4 w-4" />
                            <span>Settings</span>
                          </Link>
                        </li>
                        <li className="my-1 h-px bg-border" />
                        <li>
                          <Link href="/logout" className="flex items-center px-4 py-2 text-sm text-red-500 hover:bg-accent rounded-md">
                            <LogOut className="mr-2 h-4 w-4" />
                            <span>Log out</span>
                          </Link>
                        </li>
                      </ul>
                    </NavigationMenuContent>
                  )}
                </NavigationMenuItem>
              </NavigationMenuList>
            </NavigationMenu>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {
        isMobileMenuOpen && (
          <div className="lg:hidden absolute top-full left-0 w-full mt-2 bg-background/95 backdrop-blur-lg border border-border rounded-b-xl">
            <nav className="flex flex-col p-4 space-y-4">
              {config.navItems.map((item) => (
                <Link
                  key={item.path}
                  href={item.path}
                  className="font-medium tracking-tight transition-colors hover:text-muted-foreground"
                >
                  {item.label}
                </Link>
              ))}
              <div className="flex items-center justify-between pt-4 border-t border-border">
                <ThemeSwitcher />
              </div>
            </nav>
          </div>
        )
      }
    </motion.div >
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
  )
})
ListItem.displayName = "ListItem"