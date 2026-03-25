import NavigationBar from './NavigationBar'

export default function HeroSection() {
  return (
    <section className="relative min-h-[75vh] overflow-hidden bg-linear-to-b from-[#d7ece5] via-white to-[#f2f8f5]">
      <div className="pointer-events-none absolute -left-20 top-24 h-64 w-64 rounded-full bg-[#f39a2d]/20 blur-3xl" />
      <div className="pointer-events-none absolute bottom-8 -right-25 h-72 w-72 rounded-full bg-[#0c4f4f]/15 blur-3xl" />

      <NavigationBar />

      <div className="mx-auto grid min-h-[75vh] w-full max-w-7xl grid-cols-1 items-center gap-10 px-6 pb-12 pt-28 md:pt-32 lg:grid-cols-2 lg:gap-14 lg:px-8">
        <div className="relative z-10 reveal-up" style={{ animationDelay: '80ms' }}>
          <h1 className="text-4xl font-bold leading-tight text-[#0c4f4f] sm:text-5xl lg:text-6xl">
            Welcome to Boat
          </h1>
          <p className="mt-5 max-w-xl text-base leading-7 text-[#0c4f4f]/80 sm:text-lg">
            Boat is a sales, marketing, and technology company helping brands grow faster through
            smart digital campaigns, modern automation, and data-driven strategy.
          </p>

          <div className="mt-8 flex flex-wrap items-center gap-3">
            <a
              href="#"
              className="rounded-full bg-[#0c4f4f] px-6 py-3 text-sm font-semibold text-white transition duration-300 hover:-translate-y-0.5 hover:bg-[#f39a2d]"
            >
              Learn More
            </a>
            <a
              href="#"
              className="rounded-full border border-[#0c4f4f] bg-white px-6 py-3 text-sm font-semibold text-[#0c4f4f] transition duration-300 hover:-translate-y-0.5 hover:border-[#f39a2d] hover:text-[#f39a2d]"
            >
              Get Started
            </a>
          </div>
        </div>

        <div className="relative z-10 reveal-right" style={{ animationDelay: '180ms' }}>
          <div className="float-soft flex items-end justify-center p-2">
            <img
              src="/hero-human.svg"
              alt="Professional representing Boat sales, marketing, and technology services"
              className="h-72 w-full max-w-xl object-contain drop-shadow-[0_22px_40px_rgba(12,79,79,0.25)] sm:h-96 lg:h-120"
            />
          </div>
        </div>
      </div>
    </section>
  )
}
