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

          <div className="relative">
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
             <div key={service.title} className="rounded-[2rem] border border-white/10 bg-gradient-to-b from-white/8 to-white/[0.03] p-6 shadow-xl shadow-black/10 transition duration-300 hover:-translate-y-1 hover:border-cyan-300/25 hover:shadow-2xl hover:shadow-cyan-500/10">
             <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-2xl border border-cyan-300/20 bg-gradient-to-br from-cyan-300/20 to-sky-500/10 shadow-lg shadow-cyan-500/10">
  <svg viewBox="0 0 24 24" className="h-6 w-6 text-cyan-300 fill-none stroke-current stroke-[1.8]">
    <path d="M4 19h16" />
    <path d="M6 16V10" />
    <path d="M10 16V6" />
    <path d="M14 16v-3" />
    <path d="M18 16V8" />
  </svg>
</div>
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
    
    <div className="text-sm uppercase tracking-[0.3em] text-cyan-300/80">
      Contacto
    </div>

    <h2 className="mt-4 max-w-3xl text-3xl font-semibold tracking-tight text-white md:text-4xl">
      Lleva tu operación comercial a un nuevo nivel con inteligencia de datos.
    </h2>

    <p className="mt-4 max-w-2xl text-lg text-white/65">
      Presenta tu caso, tus objetivos y tu operación actual. Diseñamos una propuesta enfocada en crecimiento comercial real.
    </p>

    <form
      action="https://formsubmit.co/hola@datra.com.mx"
      method="POST"
      className="mt-8 grid gap-4 md:grid-cols-[1fr_auto]"
    >
      <input
        type="email"
        name="email"
        placeholder="Correo de contacto"
        required
        className="h-14 rounded-2xl border border-white/10 bg-white/5 px-5 text-white outline-none placeholder:text-white/35"
      />

      <input type="hidden" name="_captcha" value="false" />
     <input type="hidden" name="_next" value="https://www.datra.com.mx/gracias" />
      <button
        type="submit"
        className="h-14 rounded-2xl bg-gradient-to-r from-cyan-300 to-sky-400 px-6 font-semibold text-slate-950 shadow-lg shadow-cyan-500/20 transition duration-300 hover:scale-[1.02] hover:shadow-cyan-400/30"
      >
        Solicitar propuesta
      </button>
    </form>
   <a
 href="https://wa.me/5213351074205?text=Hola,%20quiero%20una%20propuesta%20para%20mi%20agencia%20automotriz.%20%C2%BFPodemos%20hablar?"
  target="_blank"
  rel="noreferrer"
  className="fixed bottom-6 right-6 z-30 flex items-center gap-3 rounded-full border border-emerald-400/30 bg-[#0b1a14]/95 px-5 py-3 text-sm font-semibold text-white shadow-2xl shadow-emerald-500/20 transition hover:scale-[1.02] hover:bg-[#10231a]"
>
  <span className="flex h-10 w-10 items-center justify-center rounded-full bg-emerald-500 text-white">
    <svg viewBox="0 0 24 24" className="h-5 w-5 fill-current" aria-hidden="true">
      <path d="M19.05 4.91A9.82 9.82 0 0 0 12.06 2C6.65 2 2.25 6.4 2.25 11.81c0 1.73.45 3.41 1.31 4.9L2 22l5.42-1.51a9.78 9.78 0 0 0 4.64 1.18h.01c5.41 0 9.81-4.4 9.82-9.81a9.75 9.75 0 0 0-2.84-6.95Zm-6.99 15.1h-.01a8.12 8.12 0 0 1-4.13-1.13l-.3-.18-3.21.89.86-3.13-.2-.32a8.1 8.1 0 0 1-1.25-4.33c0-4.49 3.66-8.15 8.16-8.15 2.17 0 4.21.84 5.75 2.38a8.07 8.07 0 0 1 2.38 5.77c0 4.49-3.66 8.15-8.15 8.15Zm4.47-6.11c-.24-.12-1.43-.71-1.65-.79-.22-.08-.38-.12-.54.12-.16.24-.62.79-.76.95-.14.16-.28.18-.52.06-.24-.12-1-.37-1.9-1.17-.7-.62-1.17-1.39-1.31-1.63-.14-.24-.01-.37.11-.49.11-.11.24-.28.36-.42.12-.14.16-.24.24-.4.08-.16.04-.3-.02-.42-.06-.12-.54-1.29-.74-1.77-.2-.47-.4-.4-.54-.41h-.46c-.16 0-.42.06-.64.3-.22.24-.84.82-.84 2s.86 2.31.98 2.47c.12.16 1.69 2.58 4.1 3.62.57.25 1.02.4 1.37.51.57.18 1.09.16 1.5.1.46-.07 1.43-.58 1.63-1.14.2-.56.2-1.04.14-1.14-.06-.1-.22-.16-.46-.28Z" />
    </svg>
  </span>
  <span className="hidden sm:inline">WhatsApp</span>
</a>
  </div>
</section>
</main>
</div>
);
}

