import React, { useState } from 'react'
import { Link } from 'react-router-dom'

export default function NavigationBar() {
  const [menuOpen, setMenuOpen] = useState(false)

  const navItems = [
    { label: 'Home', href: '/' },
    { label: 'About', href: '#about' },
    { label: 'Services', href: '#services' },
    { label: 'Partners', href: '#partners' },
    { label: 'Careers', href: '#careers' },
    { label: 'Contact', href: '/contact' },
  ]

  return (
    <header className="absolute left-0 right-0 top-0 z-30 px-3 pt-4 sm:px-6">
      <div className="mx-auto w-full max-w-7xl rounded-2xl border border-white/80 bg-white/90 px-4 py-3 shadow-lg shadow-[#0c4f4f]/10 backdrop-blur md:px-6">
        <div className="flex items-center justify-between gap-4">
          <Link to="/" className="flex items-center gap-2">
            logo
            <span className="text-2xl font-semibold tracking-wide text-[#0c4f4f]">Boat</span>
          </Link>

          <nav className="hidden items-center gap-5 text-sm text-[#0c4f4f] lg:flex">
            {navItems.map((item) => (
              item.href.startsWith('/') ? (
                <Link key={item.label} to={item.href} className="transition hover:text-[#f39a2d]">
                  {item.label}
                </Link>
              ) : (
                <a key={item.label} href={item.href} className="transition hover:text-[#f39a2d]">
                  {item.label}
                </a>
              )
            ))}
          </nav>

          <div className="hidden items-center gap-2 lg:flex">
            <Link
              to="/contact"
              className="rounded-full bg-[#0c4f4f] px-4 py-2 text-sm font-semibold text-white transition hover:bg-[#f39a2d]"
            >
              Contact Us
            </Link>
          </div>

          <button
            type="button"
            onClick={() => setMenuOpen((prev) => !prev)}
            className="inline-flex h-10 w-10 items-center justify-center rounded-lg border border-[#0c4f4f]/25 text-[#0c4f4f] lg:hidden"
            aria-label="Toggle menu"
            aria-expanded={menuOpen}
          >
            {menuOpen ? (
              <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M6 6l12 12M18 6 6 18" />
              </svg>
            ) : (
              <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M4 7h16M4 12h16M4 17h16" />
              </svg>
            )}
          </button>
        </div>

        {menuOpen && (
          <div className="mt-3 border-t border-[#0c4f4f]/15 pt-3 lg:hidden">
            <nav className="flex flex-col gap-2 text-sm text-[#0c4f4f]">
              {navItems.map((item) => (
                item.href.startsWith('/') ? (
                  <Link
                    key={item.label}
                    to={item.href}
                    className="rounded-md px-2 py-2 transition hover:bg-[#0c4f4f]/5 hover:text-[#f39a2d]"
                  >
                    {item.label}
                  </Link>
                ) : (
                  <a
                    key={item.label}
                    href={item.href}
                    className="rounded-md px-2 py-2 transition hover:bg-[#0c4f4f]/5 hover:text-[#f39a2d]"
                  >
                    {item.label}
                  </a>
                )
              ))}
            </nav>
            <Link
              to="/contact"
              className="mt-3 inline-flex w-full items-center justify-center rounded-full bg-[#0c4f4f] px-4 py-2 text-sm font-semibold text-white transition hover:bg-[#f39a2d]"
            >
              Contact Us
            </Link>
          </div>
        )}
      </div>
    </header>
  )
}
