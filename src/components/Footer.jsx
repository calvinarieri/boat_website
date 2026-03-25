import React from 'react'

export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="relative overflow-hidden bg-[#0c4f4f] text-white">
      <div className="absolute inset-x-0 top-0 h-1 bg-[#f39a2d]" />
      <div className="pointer-events-none absolute -left-20 top-0 h-64 w-64 rounded-full bg-[#f39a2d]/20 blur-3xl" />
      <div className="pointer-events-none absolute -right-10 bottom-0 h-56 w-56 rounded-full bg-white/10 blur-3xl" />

      <div className="relative mx-auto max-w-7xl px-6 py-14 lg:px-8">
        <div className="grid grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-4">
          <div className="lg:col-span-2">
            <h2 className="text-2xl font-bold tracking-tight text-[#f39a2d]">Boat</h2>
            <p className="mt-4 max-w-md text-sm leading-6 text-white/85">
              We craft premium marine experiences, from weekend getaways to private charters.
              Discover the coast in comfort, style, and safety.
            </p>

            <div className="mt-6 flex flex-wrap gap-3">
              <a
                href="#"
                aria-label="Instagram"
                className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/25 bg-white/5 transition hover:-translate-y-0.5 hover:border-[#f39a2d] hover:text-[#f39a2d]"
              >
                <svg viewBox="0 0 24 24" className="h-5 w-5 fill-current" aria-hidden="true">
                  <path d="M7.75 2h8.5A5.75 5.75 0 0 1 22 7.75v8.5A5.75 5.75 0 0 1 16.25 22h-8.5A5.75 5.75 0 0 1 2 16.25v-8.5A5.75 5.75 0 0 1 7.75 2Zm-.2 1.8A3.95 3.95 0 0 0 3.8 7.55v8.9a3.95 3.95 0 0 0 3.75 3.75h8.9a3.95 3.95 0 0 0 3.75-3.75v-8.9a3.95 3.95 0 0 0-3.75-3.75h-8.9ZM17.3 6.7a1.1 1.1 0 1 1 0 2.2 1.1 1.1 0 0 1 0-2.2ZM12 7.35a4.65 4.65 0 1 1 0 9.3 4.65 4.65 0 0 1 0-9.3Zm0 1.8a2.85 2.85 0 1 0 0 5.7 2.85 2.85 0 0 0 0-5.7Z" />
                </svg>
              </a>
              <a
                href="#"
                aria-label="Facebook"
                className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/25 bg-white/5 transition hover:-translate-y-0.5 hover:border-[#f39a2d] hover:text-[#f39a2d]"
              >
                <svg viewBox="0 0 24 24" className="h-5 w-5 fill-current" aria-hidden="true">
                  <path d="M13.6 21v-7.45h2.5l.4-2.9h-2.9V8.8c0-.85.25-1.4 1.45-1.4h1.55V4.8c-.75-.1-1.5-.15-2.25-.15-2.25 0-3.8 1.35-3.8 3.9v2.1H8v2.9h2.55V21h3.05Z" />
                </svg>
              </a>
              <a
                href="#"
                aria-label="X"
                className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/25 bg-white/5 transition hover:-translate-y-0.5 hover:border-[#f39a2d] hover:text-[#f39a2d]"
              >
                <svg viewBox="0 0 24 24" className="h-5 w-5 fill-current" aria-hidden="true">
                  <path d="M18.9 3H21l-4.7 5.4L22 21h-4.5l-3.5-4.9L9.6 21H7.5l5-5.8L2 3h4.6l3.1 4.4L13.9 3h5Zm-.8 16.3h1.2L9.8 4.6H8.5l9.6 14.7Z" />
                </svg>
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-[#f39a2d]">Quick Links</h3>
            <ul className="mt-4 space-y-3 text-sm text-white/85">
              <li><a href="#" className="transition hover:text-[#f39a2d]">Home</a></li>
              <li><a href="#" className="transition hover:text-[#f39a2d]">Fleet</a></li>
              <li><a href="#" className="transition hover:text-[#f39a2d]">Destinations</a></li>
              <li><a href="#" className="transition hover:text-[#f39a2d]">Bookings</a></li>
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-[#f39a2d]">Contact</h3>
            <ul className="mt-4 space-y-3 text-sm text-white/85">
              <li>+254 700 123 456</li>
              <li>hello@boatwave.com</li>
              <li>Mombasa, Kenya</li>
            </ul>
            <a
              href="#top"
              className="mt-5 inline-flex items-center gap-2 rounded-full bg-[#f39a2d] px-4 py-2 text-xs font-semibold uppercase tracking-wide text-[#0c4f4f] transition hover:bg-white"
            >
              Back To Top
              <span aria-hidden="true">↑</span>
            </a>
          </div>
        </div>

        <div className="mt-10 border-t border-white/20 pt-5 text-center text-xs text-white/70">
          © {year} BoatWave. All rights reserved.
        </div>
      </div>
    </footer>
  )
}
