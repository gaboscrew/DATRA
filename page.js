const services = [
  {
    title: 'Market Intelligence',
    description:
      'Analizamos mercado, TIV, desempeño por segmento y oportunidades reales de crecimiento para agencias automotrices.',
  },
  {
    title: 'Lead Performance',
    description:
      'Medimos calidad, origen y conversión de leads para optimizar inversión comercial y aumentar cierres.',
  },
  {
    title: 'Dashboards & BI',
    description:
      'Creamos tableros ejecutivos en tiempo real para ventas, objetivos, embudos y desempeño comercial.',
  },
  {
    title: 'Automation',
    description:
      'Automatizamos reportes, alertas y seguimiento para que tu equipo tome decisiones más rápido.',
  },
];

const benefits = [
  'Más claridad para decidir',
  'Mejor lectura del mercado',
  'Menos intuición, más evidencia',
  'Dashboards listos para dirección',
];

const metrics = [
  { value: '360°', label: 'visión del negocio' },
  { value: '24/7', label: 'datos disponibles' },
  { value: '1', label: 'fuente de verdad' },
];

export default function Home() {
  return (
    <div className="min-h-screen bg-[#06101f] text-white">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(0,209,193,0.15),transparent_35%),radial-gradient(circle_at_right,rgba(29,161,242,0.12),transparent_30%)]" />

      <header className="sticky top-0 z-20 border-b border-white/10 bg-[#06101f]/80 backdrop-blur">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 lg:px-8">
          <div className="flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-2xl border border-cyan-400/30 bg-white/5 shadow-lg shadow-cyan-500/10">
              <div className="h-5 w-5 rounded-full border-2 border-cyan-300" />
            </div>
            <div>
              <div className="text-xl font-semibold tracking-tight">Datra</div>
              <div className="text-xs uppercase tracking-[0.28em] text-white/45">From data to growth</div>
            </div>
          </div>

          <nav className="hidden items-center gap-8 text-sm text-white/70 md:flex">
            <a href="#services" className="transition hover:text-white">Servicios</a>
            <a href="#why" className="transition hover:text-white">Valor</a>
            <a href="#contact" className="transition hover:text-white">Contacto</a>
          </nav>

          <a
            href="#contact"
            className="rounded-2xl border border-cyan-300/30 bg-cyan-400/10 px-4 py-2 text-sm font-medium text-cyan-200 transition hover:bg-cyan-400/20"
          >
            Solicitar demo
          </a>
        </div>
      </header>

      <main className="relative">
        <section className="mx-auto grid max-w-7xl gap-12 px-6 pb-20 pt-16 lg:grid-cols-[1.15fr_0.85fr] lg:px-8 lg:pb-28 lg:pt-24">
          <div className="max-w-3xl">
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-cyan-300/20 bg-white/5 px-4 py-2 text-sm text-cyan-200">
              <span className="h-2 w-2 rounded-full bg-cyan-300" />
              Data intelligence para agencias automotrices
            </div>

            <h1 className="max-w-4xl text-5xl font-semibold leading-tight tracking-tight text-white md:text-6xl lg:text-7xl">
              Convierte tus datos en <span className="text-cyan-300">más ventas</span>.
            </h1>

            <p className="mt-6 max-w-2xl text-lg leading-8 text-white/70 md:text-xl">
              Datra ayuda a agencias y equipos comerciales a entender su mercado, mejorar sus leads y tomar decisiones con dashboards, analítica y automatización.
            </p>

            <div className="mt-10 flex flex-col gap-4 sm:flex-row">
              <a
                href="#contact"
                className="rounded-2xl bg-cyan-300 px-6 py-3 text-center text-base font-semibold text-slate-950 transition hover:scale-[1.02]"
              >
                Agenda una presentación
              </a>
              <a
                href="#services"
                className="rounded-2xl border border-white/15 bg-white/5 px-6 py-3 text-center text-base font-medium text-white transition hover:bg-white/10"
              >
                Ver servicios
              </a>
            </div>

            <div className="mt-12 grid max-w-2xl grid-cols-3 gap-4">
              {metrics.map((item) => (
                <div key={item.label} className="rounded-3xl border border-white/10 bg-white/5 p-5 shadow-2xl shadow-black/10">
                  <div className="text-3xl font-semibold text-cyan-300">{item.value}</div>
                  <div className="mt-2 text-sm text-white/60">{item.label}</div>
                </div>
              ))}
            </div>
          </div>
<div className="mt-8 max-w-2xl">
  <img
    src="/dashboard-market.png"
    alt="Dashboard de mercado"
    className="block w-full rounded-2xl border border-white/10 shadow-2xl"
  />
</div>

        <div className="relative self-start">
            <div className="rounded-[2rem] border border-white/10 bg-white/5 p-5 shadow-2xl shadow-cyan-500/10 backdrop-blur">
              <div className="rounded-[1.5rem] border border-cyan-300/10 bg-[#081424] p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <div className="text-sm text-white/50">Executive Dashboard</div>
                    <div className="mt-1 text-xl font-semibold">Datra Insights</div>
                  </div>
                  <div className="rounded-full border border-cyan-300/20 bg-cyan-400/10 px-3 py-1 text-xs text-cyan-200">
                    Live data
                  </div>
                </div>

                <div className="mt-6 grid grid-cols-2 gap-4">
                  <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
                    <div className="text-sm text-white/50">Ventas</div>
                    <div className="mt-2 text-3xl font-semibold">+18%</div>
                    <div className="mt-1 text-xs text-cyan-300">vs periodo anterior</div>
                  </div>
                  <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
                    <div className="text-sm text-white/50">Leads útiles</div>
                    <div className="mt-2 text-3xl font-semibold">72%</div>
                    <div className="mt-1 text-xs text-cyan-300">calidad optimizada</div>
                  </div>
                </div>

                <div className="mt-4 rounded-3xl border border-white/10 bg-white/5 p-5">
                  <div className="mb-4 flex items-center justify-between text-sm text-white/60">
                    <span>Desempeño comercial</span>
                    <span>Últimos 6 meses</span>
                  </div>
                  <div className="flex h-40 items-end gap-3">
                    {[35, 48, 46, 63, 72, 84].map((height, i) => (
                      <div key={i} className="flex-1 rounded-t-2xl bg-gradient-to-t from-cyan-500/40 to-cyan-300" style={{ height: `${height}%` }} />
                    ))}
                  </div>
                </div>

                <div className="mt-4 rounded-3xl border border-white/10 bg-gradient-to-r from-cyan-400/15 to-sky-400/10 p-5 text-sm text-white/75">
                  Detecta oportunidades, corrige inversión y mejora resultados comerciales desde una sola vista.
                </div>
              </div>
            </div>
          </div>
        </section>
        <section id="platform" className="mx-auto max-w-7xl px-6 py-20 lg:px-8">
  <div className="max-w-2xl">
    <div className="text-sm uppercase tracking-[0.3em] text-cyan-300/80">
      Plataforma
    </div>

    <h2 className="mt-4 text-3xl font-semibold tracking-tight text-white md:text-4xl">
  Así se ve la inteligencia comercial en tu agencia
</h2>

    <p className="mt-4 text-lg text-white/65">
  Visualiza mercado, leads y desempeño en una sola vista. Menos reportes, más decisiones.
</p>
  </div>
<div className="mt-12 relative">
<div className="relative grid gap-8 lg:grid-cols-3 items-start bg-[#081a24] p-6 rounded-[2rem] border border-white/10 backdrop-blur">
  <img
    src="/dashboard-leads.png"
    alt="Dashboard de leads y conversión"
    className="rounded-[2rem] border border-white/10 shadow-2xl shadow-cyan-500/20 transition duration-300 hover:scale-[1.03]"
  />
</div>
</section>
        <section id="services" className="mx-auto max-w-7xl px-6 py-20 lg:px-8">
          <div className="max-w-2xl">
            <div className="text-sm uppercase tracking-[0.3em] text-cyan-300/80">Servicios</div>
            <h2 className="mt-4 text-3xl font-semibold tracking-tight md:text-4xl">Inteligencia comercial aplicada a ventas automotrices.</h2>
            <p className="mt-4 text-lg text-white/65">
              Diseñamos soluciones útiles para dirección, mercadotecnia y equipos comerciales que necesitan claridad, velocidad y control.
            </p>
          </div>

          <div className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
            {services.map((service) => (
              <div key={service.title} className="rounded-[2rem] border border-white/10 bg-white/5 p-6 shadow-xl shadow-black/10">
                <div className="mb-4 h-12 w-12 rounded-2xl bg-gradient-to-br from-cyan-300/30 to-sky-500/20" />
                <h3 className="text-xl font-semibold">{service.title}</h3>
                <p className="mt-3 text-sm leading-7 text-white/65">{service.description}</p>
              </div>
            ))}
          </div>
        </section>

        <section id="why" className="mx-auto max-w-7xl px-6 py-20 lg:px-8">
          <div className="grid gap-8 lg:grid-cols-2">
            <div className="rounded-[2rem] border border-white/10 bg-white/5 p-8">
              <div className="text-sm uppercase tracking-[0.3em] text-cyan-300/80">Por qué Datra</div>
              <h2 className="mt-4 text-3xl font-semibold tracking-tight">Una firma de datos con visión comercial.</h2>
              <p className="mt-4 max-w-xl text-lg leading-8 text-white/65">
                No entregamos reportes bonitos solamente. Construimos lectura estratégica para que tu agencia entienda qué está pasando, qué hacer y dónde crecer.
              </p>

              <div className="mt-8 space-y-4">
                {benefits.map((benefit) => (
                  <div key={benefit} className="flex items-center gap-3 rounded-2xl border border-white/10 bg-[#091526] px-4 py-4 text-white/80">
                    <span className="h-2.5 w-2.5 rounded-full bg-cyan-300" />
                    {benefit}
                  </div>
                ))}
              </div>
            </div>

            <div className="rounded-[2rem] border border-cyan-300/10 bg-gradient-to-br from-cyan-400/10 to-sky-500/5 p-8">
              <div className="text-sm uppercase tracking-[0.3em] text-cyan-300/80">Resultados</div>
              <h2 className="mt-4 text-3xl font-semibold tracking-tight">Más enfoque. Más control. Más crecimiento.</h2>

              <div className="mt-10 grid gap-4 sm:grid-cols-2">
                <div className="rounded-3xl border border-white/10 bg-[#081424] p-6">
                  <div className="text-4xl font-semibold text-cyan-300">01</div>
                  <p className="mt-3 text-white/70">Entendemos tu mercado y tus oportunidades reales.</p>
                </div>
                <div className="rounded-3xl border border-white/10 bg-[#081424] p-6">
                  <div className="text-4xl font-semibold text-cyan-300">02</div>
                  <p className="mt-3 text-white/70">Ordenamos la información crítica para dirección y ventas.</p>
                </div>
                <div className="rounded-3xl border border-white/10 bg-[#081424] p-6">
                  <div className="text-4xl font-semibold text-cyan-300">03</div>
                  <p className="mt-3 text-white/70">Convertimos datos dispersos en decisiones accionables.</p>
                </div>
                <div className="rounded-3xl border border-white/10 bg-[#081424] p-6">
                  <div className="text-4xl font-semibold text-cyan-300">04</div>
                  <p className="mt-3 text-white/70">Diseñamos sistemas escalables para crecer con orden.</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="contact" className="mx-auto max-w-5xl px-6 py-20 lg:px-8">
          <div className="rounded-[2.5rem] border border-cyan-300/15 bg-gradient-to-br from-[#0a1930] to-[#07101d] p-8 shadow-2xl shadow-cyan-500/10 md:p-12">
            <div className="text-sm uppercase tracking-[0.3em] text-cyan-300/80">Contacto</div>
            <h2 className="mt-4 max-w-3xl text-3xl font-semibold tracking-tight md:text-4xl">
              Lleva tu operación comercial a un nuevo nivel con inteligencia de datos.
            </h2>
            <p className="mt-4 max-w-2xl text-lg text-white/65">
              Presenta tu caso, tus objetivos y tu operación actual. Diseñamos una propuesta enfocada en crecimiento comercial real.
            </p>

            <div className="mt-8 grid gap-4 md:grid-cols-[1fr_auto]">
              <input
                type="email"
                placeholder="Correo de contacto"
                className="h-14 rounded-2xl border border-white/10 bg-white/5 px-5 text-white outline-none placeholder:text-white/35"
              />
              <button className="h-14 rounded-2xl bg-cyan-300 px-6 font-semibold text-slate-950 transition hover:scale-[1.02]">
                Solicitar propuesta
              </button>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
