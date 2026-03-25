export default function About() {
	return (
		<div className="mx-auto flex min-h-[75vh] w-full max-w-7xl items-center px-6 py-10 lg:px-8">
			<div className="about-fade-up grid w-full items-center gap-10 md:grid-cols-[46%_54%]">
				<div className="flex min-h-[58vh] items-center justify-center">
					<img
						src="https://images.unsplash.com/photo-1556740749-887f6717d7e4?auto=format&fit=crop&w=900&q=80"
						alt="Handshake between business partners"
						className="h-[56vh] w-full rounded-3xl object-cover"
					/>
				</div>

				<div className="text-left">
					<p className="mb-2 text-xs font-semibold uppercase tracking-[0.16em] text-[#f39a2d]">About Boat</p>
					<h2 className="text-3xl font-bold text-[#0c4f4f] sm:text-4xl">About Our Company</h2>
					<p className="mt-4 max-w-2xl text-base leading-8 text-[#0c4f4f]/80 sm:text-lg">
						Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante
						venenatis dapibus posuere velit aliquet. Curabitur blandit tempus porttitor, maecenas
						sed diam eget risus varius blandit sit amet non magna, et posuere consectetur est at
						lobortis. Donec id elit non mi porta gravida at eget metus, nullam id dolor id nibh
						ultricies vehicula ut id elit.
					</p>
				</div>
			</div>
		</div>
	)
}
