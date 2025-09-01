import Link from "next/link"
import { Container } from "./container"

const footerLinks = {
  company: [
    { href: "/", label: "Home" },
    { href: "/how-it-works", label: "How it works" },
    { href: "/pricing", label: "Pricing" },
  ],
  tools: [
    { href: "/demo", label: "Demo" },
    { href: "/api", label: "API" },
    { href: "/faq", label: "FAQ" },
  ],
  support: [
    { href: "/faq", label: "Help Center" },
    { href: "mailto:support@FetchTable.com", label: "Contact" },
  ],
  legal: [
    { href: "/legal/privacy", label: "Privacy Policy" },
    { href: "/legal/terms", label: "Terms of Service" },
  ],
}

export function Footer() {
  return (
    <footer className="bg-brand/80 dark:bg-slate-900 border-t border-slate-200 dark:border-slate-800">
      <Container>
        <div className="py-12">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div>
              <h3 className="font-semibold text-brand-ink dark:text-white mb-4">
                Company
              </h3>
              <ul className="space-y-3">
                {footerLinks.company.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="text-white hover:text-brand-ink dark:text-gray-400 dark:hover:text-white transition-colors text-sm"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h3 className="font-semibold text-brand-ink dark:text-white mb-4">
                Tools & API
              </h3>
              <ul className="space-y-3">
                {footerLinks.tools.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="text-white hover:text-brand-ink dark:text-gray-400 dark:hover:text-white transition-colors text-sm"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h3 className="font-semibold text-brand-ink dark:text-white mb-4">
                Support
              </h3>
              <ul className="space-y-3">
                {footerLinks.support.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="text-white hover:text-brand-ink dark:text-gray-400 dark:hover:text-white transition-colors text-sm"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h3 className="font-semibold text-brand-ink dark:text-white mb-4">
                Legal
              </h3>
              <ul className="space-y-3">
                {footerLinks.legal.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="text-white hover:text-brand-ink dark:text-gray-400 dark:hover:text-white transition-colors text-sm"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="mt-12 pt-8 border-t border-slate-200 dark:border-slate-800">
            <div className="flex flex-col md:flex-row justify-between items-center">
              <div className="flex items-center space-x-2">
                <div className="h-6 w-6 rounded bg-brand flex items-center justify-center">
                  <span className="text-white font-bold text-xs">FT</span>
                </div>
                <span className="font-semibold text-brand-ink dark:text-white">
                  FetchTable
                </span>
              </div>
              <p className="text-white dark:text-gray-400 text-sm mt-4 md:mt-0">
                © 2025 FetchTable. All rights reserved.
              </p>
            </div>
          </div>
        </div>
      </Container>
    </footer>
  )
}
