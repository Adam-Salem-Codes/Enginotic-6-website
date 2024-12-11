import { useRef } from "react";
import { flushSync } from "react-dom";
import { MoonIcon, SunIcon } from "lucide-react";
import * as Switch from "@radix-ui/react-switch";
import { useTheme } from "next-themes";

export default function ThemeSwitcher() {
  const ref = useRef<HTMLSpanElement>(null);
  const { setTheme, resolvedTheme } = useTheme(); // Use `resolvedTheme` for the current theme

  const toggleDarkMode = async (isDarkMode: boolean) => {
    /**
     * Return early if View Transition API is not supported
     * or user prefers reduced motion
     */
    if (
      !ref.current ||
      !document.startViewTransition ||
      window.matchMedia("(prefers-reduced-motion: reduce)").matches
    ) {
      setTheme(isDarkMode ? "dark" : "light");
      return;
    }

    await document.startViewTransition(() => {
      flushSync(() => {
        setTheme(isDarkMode ? "dark" : "light");
      });
    }).ready;

    const { top, left, width, height } = ref.current.getBoundingClientRect();
    const x = left + width / 2;
    const y = top + height / 2;
    const right = window.innerWidth - left;
    const bottom = window.innerHeight - top;
    const maxRadius = Math.hypot(Math.max(left, right), Math.max(top, bottom));

    document.documentElement.animate(
      {
        clipPath: [
          `circle(0px at ${x}px ${y}px)`,
          `circle(${maxRadius}px at ${x}px ${y}px)`,
        ],
      },
      {
        duration: 1000,
        easing: "ease-in-out",
        pseudoElement: "::view-transition-new(root)",
      }
    );
  };

  return (
    <div className="flex">
      <Switch.Root
        checked={resolvedTheme === "dark"} // Use `resolvedTheme` to get the active theme
        onCheckedChange={toggleDarkMode}
        className=""
      >
        <Switch.Thumb ref={ref}>
          {resolvedTheme === "dark" ? (
            <SunIcon size={15} />
          ) : (
            <MoonIcon size={15} />
          )}
        </Switch.Thumb>
      </Switch.Root>
    </div>
  );
}
