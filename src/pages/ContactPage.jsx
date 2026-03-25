import { Link } from 'react-router-dom'
import Footer from '../components/Footer'

export default function ContactPage() {
  return (
    <div id="top" className="bg-(--color-page-bg) text-(--color-brand-green)">
      <div className="relative overflow-hidden bg-linear-to-b from-[#eaf4f0] to-white px-6 py-16 lg:px-8">
        <div className="pointer-events-none absolute -left-24 top-10 h-56 w-56 rounded-full bg-[#f39a2d]/20 blur-3xl" />
        <div className="pointer-events-none absolute -right-24 bottom-0 h-56 w-56 rounded-full bg-[#0c4f4f]/10 blur-3xl" />

        <div className="relative mx-auto w-full max-w-6xl">
          <div className="mb-10 flex flex-wrap items-center justify-between gap-3">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.16em] text-[#f39a2d]">Contact Us</p>
              <h1 className="mt-2 text-4xl font-bold text-[#0c4f4f] sm:text-5xl">Let&apos;s Start A Project</h1>
            </div>

            <Link
              to="/"
              className="inline-flex items-center rounded-full border border-[#0c4f4f]/20 bg-white px-5 py-2 text-sm font-semibold text-[#0c4f4f] transition hover:border-[#f39a2d] hover:text-[#f39a2d]"
            >
              Back To Home
            </Link>
          </div>

          <div className="grid gap-6 lg:grid-cols-[1.1fr_0.9fr]">
            <div className="rounded-2xl border border-[#0c4f4f]/15 bg-white p-6 shadow-lg shadow-[#0c4f4f]/10 sm:p-8">
              <h2 className="text-2xl font-semibold text-[#0c4f4f]">Send A Message</h2>
              <p className="mt-2 text-sm text-[#0c4f4f]/75">
                Tell us about your goals and we&apos;ll respond with the right strategy.
              </p>

              <form className="mt-6 grid gap-4 sm:grid-cols-2">
                <label className="flex flex-col gap-2 text-sm font-medium text-[#0c4f4f]">
                  Full Name
                  <input
                    type="text"
                    placeholder="Jane Doe"
                    className="h-11 rounded-lg border border-[#0c4f4f]/20 px-3 text-sm outline-none transition focus:border-[#f39a2d]"
                  />
                </label>

                <label className="flex flex-col gap-2 text-sm font-medium text-[#0c4f4f]">
                  Email
                  <input
                    type="email"
                    placeholder="jane@company.com"
                    className="h-11 rounded-lg border border-[#0c4f4f]/20 px-3 text-sm outline-none transition focus:border-[#f39a2d]"
                  />
                </label>

                <label className="flex flex-col gap-2 text-sm font-medium text-[#0c4f4f] sm:col-span-2">
                  Subject
                  <input
                    type="text"
                    placeholder="Need growth strategy support"
                    className="h-11 rounded-lg border border-[#0c4f4f]/20 px-3 text-sm outline-none transition focus:border-[#f39a2d]"
                  />
                </label>

                <label className="flex flex-col gap-2 text-sm font-medium text-[#0c4f4f] sm:col-span-2">
                  Message
                  <textarea
                    rows="5"
                    placeholder="Share your project details..."
                    className="rounded-lg border border-[#0c4f4f]/20 px-3 py-3 text-sm outline-none transition focus:border-[#f39a2d]"
                  />
                </label>

                <button
                  type="button"
                  className="sm:col-span-2 inline-flex h-11 items-center justify-center rounded-full bg-[#0c4f4f] px-6 text-sm font-semibold text-white transition hover:bg-[#f39a2d] hover:text-[#0c4f4f]"
                >
                  Send Inquiry
                </button>
              </form>
            </div>

            <div className="space-y-4">
              <div className="rounded-2xl border border-[#0c4f4f]/15 bg-white p-6 shadow-lg shadow-[#0c4f4f]/10">
                <h3 className="text-lg font-semibold text-[#0c4f4f]">Office</h3>
                <p className="mt-2 text-sm text-[#0c4f4f]/75">Nairobi, Kenya</p>
              </div>

              <div className="rounded-2xl border border-[#0c4f4f]/15 bg-white p-6 shadow-lg shadow-[#0c4f4f]/10">
                <h3 className="text-lg font-semibold text-[#0c4f4f]">Email</h3>
                <p className="mt-2 text-sm text-[#0c4f4f]/75">hello@boatworld.co</p>
              </div>

              <div className="rounded-2xl border border-[#0c4f4f]/15 bg-white p-6 shadow-lg shadow-[#0c4f4f]/10">
                <h3 className="text-lg font-semibold text-[#0c4f4f]">Phone</h3>
                <p className="mt-2 text-sm text-[#0c4f4f]/75">+254 700 000 000</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  )
}
