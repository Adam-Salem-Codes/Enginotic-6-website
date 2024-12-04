"use client";
import { ChevronDown, LogOut, Plus, Settings, Menu } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { useTheme } from "next-themes";
import { usePathname } from "next/navigation";
import ThemeSwitcher from "./ThemeSwitcher";

const labels = [
  {
    label: <div>V5RC</div>,
    value: "v5rc",
  },
  {
    label: <div>VURC</div>,
    value: "vurc",
  },
  {
    label: <div>VIQRC</div>,
    value: "viqrc",
  },
  {
    label: <div>AI</div>,
    value: "vairc",
  },
  {
    label: <div>ADC</div>,
    value: "adc",
  },
];

export default function Navbar() {
  const { setTheme } = useTheme();
  const [reload, setReload] = useState(0);
  const [defaultTeam, setDefaultTeam] = useState("v5rc");
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const storedValue = localStorage.getItem("defaultTeamProgram");
    if (storedValue) {
      setDefaultTeam(storedValue);
    }
    const down = (e: KeyboardEvent) => {
      if (e.key === "k" && (e.metaKey || e.ctrlKey)) {
        e.preventDefault();
        setOpen((open) => !open);
      }
    };
    document.addEventListener("keydown", down);
    return () => document.removeEventListener("keydown", down);
  }, [reload]);

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
    <div className="fixed top-0 z-50 flex w-full flex-col items-center justify-center">
      <div
        className="card mt-2 flex h-full w-[95%] md:w-[85%] lg:w-[50vw] py-4 items-center rounded-xl
       border border-zinc-900 px-4 md:px-8 lg:px-12 backdrop-blur-lg transition-all duration-300
        hover:border-zinc-700 supports-backdrop-blur:bg-background/90"
      >
        <div className="flex w-full items-center justify-between lg:justify-center">
          {/* Logo */}
          <div className="flex items-center">
            <a
              href="/"
              className="mx-2 mr-6 lg:mr-12 flex items-center duration-300 hover:scale-105 hover:text-primary"
            ></a>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            <Menu className="h-6 w-6" />
          </button>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex justify-center space-x-12">
            <Link
              href="/search"
              className="font-medium tracking-tight transition-all duration-300 hover:scale-105 hover:text-gray-500"
            >
              Search
            </Link>
            <Link
              href="/workspace"
              className="font-medium tracking-tight transition-all duration-300 hover:scale-105 hover:text-gray-500"
            >
              Workspace
            </Link>
            <Link
              href="/pricing"
              className="font-medium tracking-tight transition-all duration-300 hover:scale-105 hover:text-gray-500"
            >
              Pricing
            </Link>
            <Link
              href="/about"
              className="font-medium tracking-tight transition-all duration-300 hover:scale-105 hover:text-gray-500"
            >
              About
            </Link>
          </nav>

          {/* User Menu - Desktop */}
          <div className="hidden lg:flex w-2/4 items-end justify-end">
            {isDropdownOpen && (
              <div className="absolute right-0 z-50 mt-2 flex w-48 flex-col items-center justify-center rounded-md border border-zinc-800 bg-zinc-900/90 py-1 shadow-lg backdrop-blur-lg transition-all duration-300 supports-backdrop-blur:bg-background/90">
                <div className="flex flex-col gap-y-2 py-1 w-full">
                  <a
                    href="/workspace?new"
                    className="flex items-center rounded px-4 py-2 text-sm text-gray-300 transition-colors duration-300 hover:bg-zinc-800/80"
                  >
                    <Plus className="mr-2 h-4 w-4" />
                    <span>New Workspace</span>
                  </a>
                  <a
                    href="/settings"
                    className="flex items-center rounded px-4 py-2 text-sm text-gray-300 transition-colors duration-300 hover:bg-zinc-800/80"
                  >
                    <Settings className="mr-2 h-4 w-4" />
                    <span>Settings</span>
                  </a>
                  <div className="my-1 h-px bg-zinc-800"></div>
                  <a
                    href="/logout"
                    className="flex items-center rounded px-4 py-2 text-sm text-red-400 transition-colors duration-300 hover:bg-zinc-800/80"
                  >
                    <LogOut className="mr-2 h-4 w-4" />
                    <span>Log out</span>
                  </a>
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Theme Switcher */}
        <div className="hidden lg:block">
          <ThemeSwitcher />
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="lg:hidden absolute top-full left-0 w-full mt-2 bg-zinc-900/90 backdrop-blur-lg border border-zinc-800 rounded-b-xl">
          <nav className="flex flex-col p-4 space-y-4">
            <Link
              href="/search"
              className="font-medium tracking-tight transition-all duration-300 hover:text-gray-500"
            >
              Search
            </Link>
            <Link
              href="/workspace"
              className="font-medium tracking-tight transition-all duration-300 hover:text-gray-500"
            >
              Workspace
            </Link>
            <Link
              href="/pricing"
              className="font-medium tracking-tight transition-all duration-300 hover:text-gray-500"
            >
              Pricing
            </Link>
            <Link
              href="/about"
              className="font-medium tracking-tight transition-all duration-300 hover:text-gray-500"
            >
              About
            </Link>
          </nav>
        </div>
      )}
    </div>
  );
}
