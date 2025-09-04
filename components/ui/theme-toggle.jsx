"use client"

import * as React from "react"
import { useTheme } from "next-themes"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"

export function ThemeToggle({ className, ...props }) {
  const { theme, setTheme } = useTheme()
  const [mounted, setMounted] = React.useState(false)
  const [isChanging, setIsChanging] = React.useState(false)

  React.useEffect(() => {
    setMounted(true)
  }, [])

  React.useEffect(() => {
    if (mounted) {
      setIsChanging(true)
      const timer = setTimeout(() => setIsChanging(false), 500)
      return () => clearTimeout(timer)
    }
  }, [theme, mounted])

  if (!mounted) {
    return (
      <Button
        variant="ghost"
        size="sm"
        className={cn(
          "w-9 h-9 px-0 relative overflow-hidden",
          "hover:bg-muted/80 transition-all duration-300",
          "border border-border/50 hover:border-border",
          className
        )}
        {...props}
      >
        <div className="w-4 h-4 opacity-50" />
      </Button>
    )
  }

  const isDark = theme === "dark"

  const toggleTheme = () => {
    setTheme(isDark ? "light" : "dark")
  }

  return (
    <Button
      variant="ghost"
      size="md"
      onClick={toggleTheme}
      className={cn(
        "w-9 h-9 px-0 relative overflow-hidden group",
        "hover:bg-muted/80 transition-all duration-300",
        "hover:scale-105 active:scale-95",
        isChanging && "animate-pulse-glow",
        className
      )}
      {...props}
    >
      {/* Background gradient animation */}
      <div 
        className={cn(
          "absolute inset-0 transition-all duration-500 opacity-0 group-hover:opacity-100",
          isDark 
            ? "bg-gradient-to-br from-blue-500/10 to-purple-500/10" 
            : "bg-gradient-to-br from-yellow-400/10 to-orange-400/10"
        )}
      />
      
      {/* Sun Icon */}
      <div 
        className={cn(
          "absolute transition-all duration-500 ease-in-out",
          isDark 
            ? "rotate-90 scale-0 opacity-0" 
            : "rotate-0 scale-100 opacity-100"
        )}
      >
        <svg
          className="w-8 h-8 text-orange-500 drop-shadow-sm"
          fill="currentColor"
          viewBox="0 0 20 20"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fillRule="evenodd"
            d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z"
            clipRule="evenodd"
          />
        </svg>
      </div>

      {/* Moon Icon */}
      <div 
        className={cn(
          "absolute transition-all duration-500 ease-in-out",
          isDark 
            ? "-rotate-90 scale-100 opacity-100" 
            : "rotate-0 scale-0 opacity-0"
        )}
      >
        <svg
          className="w-8 h-8 text-blue-600 drop-shadow-sm"
          fill="currentColor"
          viewBox="0 0 20 20"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z" />
        </svg>
      </div>

      {/* Ripple effect */}
      <div 
        className={cn(
          "absolute inset-0 rounded-full transition-all duration-300 opacity-0 group-active:opacity-30",
          isDark 
            ? "bg-blue-600" 
            : "bg-orange-400"
        )}
        style={{
          animation: "ping 0.3s cubic-bezier(0, 0, 0.2, 1)"
        }}
      />
    </Button>
  )
}
