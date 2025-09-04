"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ThemeToggle } from "@/components/ui/theme-toggle"
import { Container } from "./container"
import { content } from "@/content/copy"
import { cn } from "@/lib/utils"

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 24)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <header 
      className={cn(
        "sticky top-0 z-50 transition-all duration-300 animate-fade-in bg-brand-accent/60",
        // isScrolled 
        //   ? "bg-brand/90 backdrop-blur-sm border-b border-border/30 shadow-lg" 
        //   : "bg-brand-accent/40"
      )}
    >
      <Container>
        <div className="flex h-16 items-center justify-between">
          <Link href="/" className="flex items-center space-x-2 group">
            <div className={cn(
              "h-8 w-8 rounded-lg flex items-center justify-center transition-all duration-300 group-hover:scale-110 group-hover:rotate-3",
              isScrolled 
                ? 'bg-primary shadow-md' 
                : 'bg-brand/80 shadow-sm'
            )}>
              <span className="text-primary-foreground font-bold text-sm transition-transform duration-300 group-hover:scale-110">FT</span>
            </div>
            <span className="font-semibold text-foreground transition-colors duration-300 group-hover:text-primary">
              FetchTable
            </span>
          </Link>

          <nav className="hidden md:flex items-center space-x-8">
            {content.nav.items.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="text-sm font-medium transition-all duration-300 text-primary-foreground hover:text-primary hover:scale-105 relative group"
              >
                {item.label}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full"></span>
              </Link>
            ))}
          </nav>

          <div className="flex items-center space-x-3">
            {/* <ThemeToggle className="mr-1" /> */}
            <Button 
              asChild 
              className={cn(
                "transition-all duration-300 shadow-md hover:shadow-lg",
                isScrolled 
                  ? 'bg-primary hover:bg-primary/90 hover:scale-105' 
                  : 'bg-brand hover:bg-brand/90 hover:scale-105'
              )}
            >
              <Link href="/demo">{content.nav.cta}</Link>
            </Button>
          </div>
        </div>
      </Container>
    </header>
  )
}
