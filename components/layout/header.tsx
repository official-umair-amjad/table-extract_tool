"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
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
        "sticky top-0 z-50 transition-all duration-200",
        isScrolled 
          ? "bg-brand/90 backdrop-blur-sm border-b border-white/10 shadow-md" 
          : "bg-brand-accent/60"
      )}
    >
      <Container>
        <div className="flex h-16 items-center justify-between">
          <Link href="/" className="flex items-center space-x-2">
            <div className={`h-8 w-8 rounded-lg flex items-center justify-center ${isScrolled ? 'bg-brand-accent' : 'bg-brand'}`}>
              <span className="text-white font-bold text-sm" >FT</span>
            </div>
            <span className="font-semibold text-brand-ink dark:text-white">
              FetchTable
            </span>
          </Link>

          <nav className="hidden md:flex items-center space-x-8">
            {content.nav.items.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="text-sm font-medium transition-colors"
              >
                {item.label}
              </Link>
            ))}
          </nav>

          <div className="flex items-center space-x-4">
            <Button asChild className={`${isScrolled ? 'bg-brand-accent hover:bg-brand-accent/90' : 'bg-brand hover:bg-brand/90'}`}>
              <Link href="/demo">{content.nav.cta}</Link>
            </Button>
          </div>
        </div>
      </Container>
    </header>
  )
}
