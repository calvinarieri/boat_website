export default function CallToAction() {
  return (
    <div className="mx-auto w-full max-w-7xl px-6 py-16 lg:px-8">
      <div className="about-fade-up relative overflow-hidden rounded-3xl bg-[#0c4f4f] px-6 py-12 text-white shadow-2xl shadow-[#0c4f4f]/20 sm:px-10 lg:px-14">
        <div className="pointer-events-none absolute -right-16 -top-16 h-56 w-56 rounded-full bg-[#f39a2d]/30 blur-3xl" />
        <div className="pointer-events-none absolute -left-10 -bottom-20 h-56 w-56 rounded-full bg-white/10 blur-3xl" />

        <div className="relative z-10 flex flex-col gap-8 lg:flex-row lg:items-center lg:justify-between">
          <div className="max-w-2xl">
            <p className="text-xs font-semibold uppercase tracking-[0.16em] text-[#f39a2d]">Ready To Grow</p>
            <h2 className="mt-3 text-3xl font-bold leading-tight sm:text-4xl">Let&apos;s build your next sales, marketing, and tech win</h2>
            <p className="mt-4 text-sm leading-7 text-white/85 sm:text-base">
              Partner with Boat to launch smarter campaigns, improve conversions, and ship digital
              products faster with confidence.
            </p>
          </div>

          <div className="flex flex-wrap gap-3">
            <a
              href="#"
              className="inline-flex items-center rounded-full bg-[#f39a2d] px-6 py-3 text-sm font-semibold text-[#0c4f4f] transition hover:bg-white"
            >
              Get Started
            </a>
            <a
              href="#"
              className="inline-flex items-center rounded-full border border-white/70 px-6 py-3 text-sm font-semibold text-white transition hover:border-[#f39a2d] hover:text-[#f39a2d]"
            >
              Book A Call
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}
