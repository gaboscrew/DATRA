const services = [
 {
  title: 'Market Intelligence',
  description: 'Analizamos mercado, TIV, desempeño por segmento y oportunidades reales de crecimiento para agencias automotrices.',
  icon: 'chart',
},
 {
  title: 'Lead Performance',
  description: 'Medimos calidad, origen y conversión de leads para optimizar inversión comercial y aumentar cierres.',
  icon: 'target',
},
  {
  title: 'Dashboards & BI',
  description: 'Creamos tableros ejecutivos en tiempo real para ventas, objetivos, embudos y desempeño comercial.',
  icon: 'screen',
},
  {
  title: 'Automation',
  description: 'Automatizamos reportes, alertas y seguimiento para que tu equipo tome decisiones más rápido.',
  icon: 'bolt',
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
              <div className="text-xs uppercase tracking-[0.28em] text-white/45">
  MENOS REPORTES. MÁS DECISIONES.
</div>
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
        <section className="mx-auto grid max-w-7xl gap-12 px-6 pb-8 pt-16 lg:grid-cols-[1.15fr_0.85fr] items-stretch">
         <div className="max-w-3xl h-full">
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-cyan-300/20 bg-white/5 px-4 py-2 text-sm text-cyan-200">
              <span className="h-2 w-2 rounded-full bg-cyan-300" />
              Data intelligence para agencias automotrices
            </div>

         <h1 className="max-w-4xl text-5xl font-semibold leading-tight tracking-tight text-white md:text-6xl lg:text-6xl">
  Estás perdiendo ventas… <span className="text-cyan-300">y no sabes dónde</span>.
</h1>

<p className="mt-6 max-w-2xl text-lg leading-8 text-white/70 md:text-xl">
  DATRA conecta mercado y CRM para decirte exactamente qué está frenando tus ventas y dónde actuar primero.
</p>

<p className="mt-4 text-sm text-cyan-300/80">
  Mercado + CRM en una sola vista ejecutiva.
</p>

<div className="mt-10 flex flex-col gap-4 sm:flex-row sm:items-center">
  <a
    href="#contact"
    className="rounded-2xl bg-cyan-300 px-6 py-3 text-center text-base font-semibold text-slate-950 transition hover:scale-[1.02]"
  >
    Detectar qué está frenando mis ventas
  </a>

  <a
    href="#services"
    className="rounded-2xl border border-white/15 bg-white/5 px-6 py-3 text-center text-base font-medium text-white transition hover:bg-white/10"
  >
    Ver cómo funciona con datos reales
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
                            <div className="mt-8 max-w-2xl overflow-hidden rounded-2xl border border-white/10 shadow-2xl">
  <img
    src="/dashboard-market.png"
    alt="Dashboard de mercado"
    className="block w-full rounded-2xl"
  />
</div>
          </div>
          <div className="relative h-full flex flex-col justify-between">
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
                 <img
  src="/dashboard-leads.png"
  alt="Dashboard de leads"
  className="mt-6 w-full rounded-2xl border border-white/10"
/>
                <div className="mt-4 rounded-3xl border border-white/10 bg-white/5 p-5">
                 <div className="mb-4 flex items-center justify-between text-sm text-white/60">
  <span className="font-medium text-white/80">Desempeño comercial</span>
  <span>Últimos 6 meses</span>
</div>

<div className="mb-3 text-xs text-cyan-300/90">
  +18% vs periodo anterior
</div>

<div className="relative overflow-hidden rounded-2xl bg-white/[0.03] p-4">
  <div className="absolute inset-0 opacity-10">
    <div className="mt-8 border-t border-white" />
    <div className="mt-8 border-t border-white" />
    <div className="mt-8 border-t border-white" />
  </div>

  <div className="relative flex h-40 items-end gap-4 px-2">
   {[10, 18, 25, 40, 60, 84].map((height, i) => (
     <div key={i} className="flex h-full flex-1 flex-col items-center gap-2">
  <span className="text-xs text-cyan-300 font-semibold mb-1">
    {height}%
  </span>

  <div className="relative flex h-[140px] w-full items-end">
    <div
      className="w-full rounded-t-3xl bg-gradient-to-t from-cyan-500 via-cyan-400 to-cyan-300 shadow-[0_0_25px_rgba(34,211,238,0.35)] transition-all duration-700"
      style={{
        height: `${height}%`,
        animation: `grow 0.8s ease-out ${i * 0.12}s both`,
      }}
    ></div>
  </div>

  <span className="text-[11px] text-white/40 tracking-wide">
    {["Ene", "Feb", "Mar", "Abr", "May", "Jun"][i]}
  </span>
</div>
    ))}
  </div>
</div>
</div>
                <div className="mt-4 rounded-3xl border border-white/10 bg-gradient-to-r from-cyan-400/15 to-sky-400/10 p-5 text-sm text-white/75">
                  Detecta oportunidades, corrige inversión y mejora resultados comerciales desde una sola vista.
                </div>
              </div>
          </div>
      </div>
        </section>
<section className="mx-auto max-w-7xl px-6 py-12 lg:px-8">
  <div className="rounded-[2rem] border border-white/10 bg-white/[0.04] p-8 shadow-2xl shadow-black/10">
    <div className="text-sm uppercase tracking-[0.3em] text-cyan-300/80">
      Problema
    </div>

    <h2 className="mt-4 max-w-3xl text-3xl font-semibold tracking-tight text-white md:text-4xl">
      Hoy muchas decisiones comerciales se toman con información incompleta.
    </h2>

    <div className="mt-8 grid gap-4 md:grid-cols-3">
      {[
        "No sabes qué modelos impulsar primero",
        "No detectas fugas reales en tu embudo",
        "Inviertes en marketing sin claridad comercial",
      ].map((problem) => (
        <div
          key={problem}
          className="rounded-2xl border border-white/10 bg-[#081424] p-5 text-white/75 transition-all duration-300 ease-out hover:scale-105 hover:border-cyan-400/40 hover:bg-[#0b1a2f] hover:shadow-2xl hover:shadow-cyan-500/10"
        >
          {problem}
        </div>
      ))}
    </div>
  </div>
</section>

<section id="services" className="mx-auto max-w-7xl px-6 py-20 lg:px-8">
        
          <div className="max-w-2xl">
            <div className="text-sm uppercase tracking-[0.3em] text-cyan-300/80">Servicios</div>
           <h2 className="mt-4 text-3xl font-semibold tracking-tight text-white md:text-4xl">
  Aumenta tus ventas con datos reales, no con intuición.
</h2>

<p className="mt-4 text-lg text-white/65">
  DATRA te muestra dónde estás perdiendo ventas, qué modelos impulsar y cómo optimizar tu inversión comercial en tiempo real.
</p>
          </div>

          <div className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
            {services.map((service) => (
             <div key={service.title} className="rounded-[2rem] border border-white/10 bg-gradient-to-b from-white/8 to-white/[0.03] p-6 shadow-xl shadow-black/10">
  <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-2xl bg-cyan-400/10 border border-cyan-400/20 shadow-lg shadow-cyan-500/10">
  {service.icon === 'chart' && (
  <svg viewBox="0 0 24 24" className="h-6 w-6 text-cyan-300">
  <path d="M4 19h16" stroke="currentColor" strokeWidth="1.8" fill="none" />
  <path d="M6 16V10" stroke="currentColor" strokeWidth="1.8" fill="none" />
  <path d="M10 16V6" stroke="currentColor" strokeWidth="1.8" fill="none" />
  <path d="M14 16v-3" stroke="currentColor" strokeWidth="1.8" fill="none" />
  <path d="M18 16V8" stroke="currentColor" strokeWidth="1.8" fill="none" />
  </svg>
  )}                        
              
{service.icon === 'target' && (
  <svg viewBox="0 0 24 24" className="h-6 w-6 text-cyan-300">
    <circle cx="12" cy="12" r="8" stroke="currentColor" strokeWidth="1.8" fill="none" />
    <circle cx="12" cy="12" r="4" stroke="currentColor" strokeWidth="1.8" fill="none" />
  </svg>
)}

{service.icon === 'screen' && (
  <svg viewBox="0 0 24 24" className="h-6 w-6 text-cyan-300">
    <rect x="3" y="4" width="18" height="12" rx="2" stroke="currentColor" strokeWidth="1.8" fill="none" />
    <path d="M8 20h8" stroke="currentColor" strokeWidth="1.8" />
  </svg>
)}

{service.icon === 'bolt' && (
  <svg viewBox="0 0 24 24" className="h-6 w-6 text-cyan-300">
    <path d="M13 2L3 14h7l-1 8 10-12h-7z" stroke="currentColor" strokeWidth="1.8" fill="none" />
  </svg>
)}
</div>
     <div className="mt-4 text-lg font-semibold text-white">
  {service.title}
</div>

<p className="mt-2 text-sm text-white/65">
  {service.description}
</p>

</div>
))}
          </div>
        </section>

 
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
<section className="mx-auto max-w-7xl px-6 py-20 lg:px-8">
  <div className="rounded-[2rem] border border-cyan-300/10 bg-gradient-to-br from-cyan-400/10 to-sky-500/5 p-8">
    <div className="text-sm uppercase tracking-[0.3em] text-cyan-300/80">
      RESULTADOS REALES
    </div>

    <h2 className="mt-4 text-3xl font-semibold tracking-tight text-white">
      Esto es lo que cambia cuando usas datos bien aplicados
    </h2>

    <div className="mt-10 grid gap-4 sm:grid-cols-2">
      <div className="rounded-3xl border border-white/10 bg-[#081424] p-6">
        <div className="text-4xl font-semibold text-cyan-300">+30%</div>
        <p className="mt-3 text-white/70">Incremento en conversión de leads a ventas.</p>
      </div>

      <div className="rounded-3xl border border-white/10 bg-[#081424] p-6">
        <div className="text-4xl font-semibold text-cyan-300">-25%</div>
        <p className="mt-3 text-white/70">Reducción en fuga de oportunidades comerciales.</p>
      </div>

      <div className="rounded-3xl border border-white/10 bg-[#081424] p-6">
        <div className="text-4xl font-semibold text-cyan-300">+40%</div>
        <p className="mt-3 text-white/70">Mejor aprovechamiento del presupuesto de marketing.</p>
      </div>

      <div className="rounded-3xl border border-white/10 bg-[#081424] p-6">
        <div className="text-4xl font-semibold text-cyan-300">Tiempo real</div>
        <p className="mt-3 text-white/70">Decisiones comerciales basadas en datos actualizados.</p>
      </div>
    </div>

    <div className="mt-12 text-center">
      <a
        href="https://wa.me/525569760932?text=Hola%2C%20quiero%20una%20demo%20para%20ver%20d%C3%B3nde%20estoy%20perdiendo%20ventas"
        target="_blank"
        rel="noopener noreferrer"
        className="inline-block rounded-2xl bg-cyan-300 px-8 py-4 text-lg font-semibold text-slate-900 shadow-lg transition hover:scale-105 hover:bg-cyan-200 animate-pulse"
      >
        Ver oportunidades en mi agencia
      </a>

      <p className="mt-4 text-sm text-white/60">
        Agenda una demo y detecta oportunidades en tu agencia en minutos.
      </p>
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
  href="https://wa.me/525569760932?text=Hola%2C%20quiero%20una%20demo%20de%20Datra"
  target="_blank"
  rel="noopener noreferrer"
  className="fixed bottom-6 right-6 z-30 flex items-center gap-3 rounded-full border border-emerald-400/30 bg-[#0b1a14]/95 px-5 py-3 text-sm font-medium text-white hover:scale-110 hover:shadow-emerald-500/40 transition-all duration-300 shadow-lg shadow-emerald-500/20"
>
  <span className="flex h-10 w-10 items-center justify-center rounded-full bg-emerald-500 text-white animate-pulse">
    <svg viewBox="0 0 24 24" className="h-5 w-5 fill-current" aria-hidden="true">
      <path d="M19.05 4.91A9.82 9.82 0 0 0 12.06 2C6.65 2 2.25 6.4 2.25 11.81c0 1.73.45 3.41 1.31 4.9L2 22l5.45-1.43a9.77 9.77 0 0 0 4.61 1.18h.01c5.41 0 9.81-4.4 9.81-9.81a9.8 9.8 0 0 0-2.83-7.03zM12.07 20a8.2 8.2 0 0 1-4.18-1.14l-.3-.18-3.23.85.86-3.15-.2-.32a8.18 8.18 0 0 1-1.25-4.36c0-4.52 3.68-8.2 8.2-8.2 2.19 0 4.25.85 5.8 2.4a8.13 8.13 0 0 1 2.4 5.8c0 4.52-3.68 8.2-8.2 8.2zm4.52-6.16c-.25-.12-1.47-.73-1.7-.82-.23-.09-.4-.12-.57.12-.17.25-.65.82-.8.99-.15.17-.3.19-.55.06-.25-.12-1.05-.39-2-1.25-.74-.66-1.24-1.47-1.38-1.72-.14-.25-.01-.38.11-.5.11-.11.25-.3.37-.45.12-.15.16-.25.25-.42.08-.17.04-.32-.02-.45-.06-.12-.57-1.37-.78-1.88-.21-.5-.42-.43-.57-.44l-.49-.01c-.17 0-.45.06-.69.32-.24.25-.91.89-.91 2.16 0 1.27.93 2.5 1.06 2.67.13.17 1.83 2.8 4.44 3.93.62.27 1.1.43 1.47.55.62.2 1.18.17 1.62.1.5-.07 1.47-.6 1.68-1.18.21-.58.21-1.08.15-1.18-.06-.1-.23-.16-.48-.28z"/>
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

