const logos = [
  { id: 'aw', src: '/aw-logo.svg', alt: 'Arieri World' },
  { id: 'microsoft', src: 'https://dummyimage.com/220x90/ffffff/0c4f4f&text=Microsoft', alt: 'Microsoft logo' },
  { id: 'helpscout', src: 'https://dummyimage.com/220x90/ffffff/0c4f4f&text=HelpScout', alt: 'HelpScout logo' },
  { id: 'jotform', src: 'https://dummyimage.com/220x90/ffffff/0c4f4f&text=Jotform', alt: 'Jotform logo' },
  { id: 'amazon', src: 'https://dummyimage.com/220x90/ffffff/0c4f4f&text=Amazon', alt: 'Amazon logo' },
  { id: 'notion', src: 'https://dummyimage.com/220x90/ffffff/0c4f4f&text=Notion', alt: 'Notion logo' },
  { id: 'linkedin', src: 'https://dummyimage.com/220x90/ffffff/0c4f4f&text=LinkedIn', alt: 'LinkedIn logo' },
  { id: 'circle', src: 'https://dummyimage.com/220x90/ffffff/0c4f4f&text=Circle', alt: 'Circle logo' },
]

export default function OurClients() {
  return (
    <div className="about-fade-up bg-[#eaf4f0] px-4 py-16 sm:px-8 sm:py-20">
      <div className="mx-auto w-full max-w-6xl rounded-2xl border border-[#0c4f4f]/10 bg-white px-6 py-10 shadow-xl shadow-[#0c4f4f]/8 sm:px-10 sm:py-14">
        <div className="mx-auto mb-6 h-1 w-20 rounded-full bg-[#f39a2d]" />
        <p className="text-center text-xs font-semibold uppercase tracking-[0.16em] text-[#f39a2d]">Our Partners</p>
        <h2 className="mt-4 text-center text-3xl font-semibold text-[#0c4f4f] sm:text-4xl">We work with the best partners</h2>

        <div className="mx-auto mt-10 grid max-w-4xl grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {logos.map((logo) => (
            <div
              key={logo.id}
              className="flex h-16 items-center justify-center rounded-xl border border-[#0c4f4f]/15 bg-[#f7fbf9] px-4 transition hover:-translate-y-0.5 hover:border-[#f39a2d] hover:bg-white"
            >
              <img src={logo.src} alt={logo.alt} className="h-9 w-full object-contain" loading="lazy" />
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
