import { useState } from 'react'

const bentoItems = [
  {
    title: 'Growth Strategy',
    desc: 'Positioning and funnels for sustainable growth.',
    layout: 'col-start-1 col-end-8 row-start-1 row-end-7',
    image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=1200&q=80',
  },
  {
    title: 'Performance Marketing',
    desc: 'Paid campaigns with creative testing.',
    layout: 'col-start-8 col-end-13 row-start-1 row-end-4',
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1200&q=80',
  },
  {
    title: 'Sales Enablement',
    desc: 'Playbooks, scripts, and CRM automation.',
    layout: 'col-start-8 col-end-13 row-start-4 row-end-7',
    image: 'https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&w=1200&q=80',
  },
  {
    title: 'Product Design',
    desc: 'Modern UX with conversion-focused experiences.',
    layout: 'col-start-1 col-end-4 row-start-7 row-end-10',
    image: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=1200&q=80',
  },
  {
    title: 'Tech Integration',
    desc: 'Reliable systems and integration workflows.',
    layout: 'col-start-4 col-end-8 row-start-7 row-end-10',
    image: 'https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=1200&q=80',
  },
  {
    title: 'Digital Products',
    desc: 'Launch-ready bundles for onboarding and retention.',
    layout: 'col-start-8 col-end-10 row-start-7 row-end-10',
    image: 'https://images.unsplash.com/photo-1551281044-8f4e4f38f2d8?auto=format&fit=crop&w=900&q=80',
  },
  {
    title: 'Consulting',
    desc: 'Strategic advisory for scaling teams.',
    layout: 'col-start-10 col-end-13 row-start-7 row-end-10',
    image: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=900&q=80',
  },
]

export default function ServicesProductsBento() {
  const [showAll, setShowAll] = useState(false)
  const maxVisible = 7
  const hasMore = bentoItems.length > maxVisible
  const isDense = bentoItems.length > 7
  const visibleItems = showAll ? bentoItems : bentoItems.slice(0, maxVisible)

  return (
    <div className="mx-auto flex min-h-[75vh] w-full max-w-7xl flex-col justify-center px-6 py-14 lg:px-8">
      <div className="bento-fade-up mb-8 text-left">
        <p className="text-xs font-semibold uppercase tracking-[0.16em] text-[#f39a2d]">What We Offer</p>
        <h2 className="mt-2 text-3xl font-bold text-[#0c4f4f] sm:text-4xl">Best Services & Products</h2>
        <p className="mt-3 max-w-3xl text-[#0c4f4f]/80">
          Explore our bento-style lineup of solutions designed to connect sales, marketing,
          and technology into one growth engine.
        </p>
      </div>

      <div className="grid grid-cols-1 gap-5 md:hidden">
        {visibleItems.map((item, idx) => (
          <article
            key={item.title}
            className={`group bento-fade-up relative overflow-hidden rounded-2xl ${isDense ? 'min-h-28' : 'min-h-32'}`}
            style={{ animationDelay: `${idx * 80}ms` }}
          >
            <img src={item.image} alt={item.title} className="absolute inset-0 h-full w-full object-cover" />
            <div className="absolute inset-0 bg-linear-to-t from-[#0c4f4f]/90 via-[#0c4f4f]/45 to-transparent" />

            <div className="absolute inset-x-0 bottom-0 p-5 text-white">
              <h3 className="text-xl font-semibold">{item.title}</h3>
              <p className="mt-1 text-sm opacity-90">{item.desc}</p>
            </div>

            <div className="absolute inset-0 flex items-end justify-between bg-[#0c4f4f]/80 p-5 opacity-0 transition duration-300 group-hover:opacity-100">
              <span className="text-sm font-semibold text-white">Learn More</span>
              <button
                type="button"
                aria-label={`Learn more about ${item.title}`}
                className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-[#f39a2d] text-[#0c4f4f]"
              >
                <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M5 12h14M13 5l7 7-7 7" />
                </svg>
              </button>
            </div>
          </article>
        ))}
      </div>

      <div className="relative hidden w-full md:block">
        <div className={`bento-fade-up mx-auto aspect-square w-full rounded-2xl bg-white/40 p-1 ${isDense ? 'max-w-3xl' : 'max-w-4xl'}`}>
          <div className="grid h-full w-full grid-cols-12 grid-rows-10 gap-5">
        {visibleItems.map((item, idx) => (
          <article
            key={item.title}
            className={`group bento-fade-up relative overflow-hidden rounded-xl shadow-lg shadow-[#0c4f4f]/10 transition duration-300 hover:-translate-y-1 ${item.layout}`}
            style={{ animationDelay: `${idx * 80}ms` }}
          >
            <img src={item.image} alt={item.title} className="absolute inset-0 h-full w-full object-cover" />
            <div className="absolute inset-0 bg-linear-to-t from-[#0c4f4f]/90 via-[#0c4f4f]/40 to-transparent" />

            <div className="absolute inset-x-0 bottom-0 p-4 text-white">
              <h3 className="text-lg font-semibold">{item.title}</h3>
              <p className="mt-1 line-clamp-2 text-xs opacity-90">{item.desc}</p>
            </div>

            <div className="absolute inset-0 flex items-end justify-between bg-[#0c4f4f]/80 p-5 opacity-0 transition duration-300 group-hover:opacity-100">
              <span className="text-sm font-semibold text-white">Learn More</span>
              <button
                type="button"
                aria-label={`Learn more about ${item.title}`}
                className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-[#f39a2d] text-[#0c4f4f]"
              >
                <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M5 12h14M13 5l7 7-7 7" />
                </svg>
              </button>
            </div>
          </article>
        ))}
          </div>
        </div>
      </div>

      <div className="mt-8 bento-fade-up">
        <button
          type="button"
          onClick={() => {
            if (hasMore) setShowAll((prev) => !prev)
          }}
          className="inline-flex items-center gap-2 rounded-full bg-[#0c4f4f] px-6 py-3 text-sm font-semibold text-white transition hover:bg-[#f39a2d] hover:text-[#0c4f4f]"
        >
          {hasMore ? (showAll ? 'Show Less' : 'More') : 'More'}
          <span aria-hidden="true">→</span>
        </button>
      </div>
    </div>
  )
}
