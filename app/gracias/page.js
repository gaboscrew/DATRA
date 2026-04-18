export default function GraciasPage() {
  return (
    <main className="min-h-screen bg-[#06101f] text-white flex items-center justify-center px-6">
      <div className="w-full max-w-2xl rounded-[2.5rem] border border-cyan-300/15 bg-gradient-to-br from-[#0a1930] to-[#07101d] p-10 shadow-2xl shadow-cyan-500/10 text-center">
        <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-full border border-cyan-300/30 bg-cyan-400/10">
          <div className="h-6 w-6 rounded-full bg-cyan-300" />
        </div>

        <div className="text-sm uppercase tracking-[0.3em] text-cyan-300/80">
          Mensaje recibido
        </div>

        <h1 className="mt-4 text-4xl font-semibold tracking-tight text-white">
          Gracias por contactarnos
        </h1>

        <p className="mt-4 text-lg text-white/65">
          Hemos recibido tu solicitud. En breve nos pondremos en contacto contigo para revisar tu caso y proponerte la mejor solución.
        </p>

        <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:justify-center">
          <a
            href="/"
            className="rounded-2xl bg-cyan-300 px-6 py-3 font-semibold text-slate-950 transition hover:scale-[1.02]"
          >
            Volver al inicio
          </a>

          <a
            href="mailto:hola@datra.com.mx"
            className="rounded-2xl border border-white/15 bg-white/5 px-6 py-3 font-medium text-white transition hover:bg-white/10"
          >
            Escribir por correo
          </a>
        </div>
      </div>
    </main>
  );
}
