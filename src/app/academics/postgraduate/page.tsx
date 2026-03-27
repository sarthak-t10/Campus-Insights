import Link from 'next/link';

import { postgraduatePrograms } from '@/data/postgraduate-programs';

export default function PostgraduateProgramsPage() {
  return (
    <main className="min-h-screen bg-[radial-gradient(circle_at_50%_0%,rgba(201,169,110,0.16),transparent_50%),#09090b] text-[var(--foreground)]">
      <div className="max-w-6xl mx-auto px-4 md:px-6 py-10 md:py-14">
        <nav aria-label="Breadcrumb" className="font-label text-xs tracking-[0.12em] text-[var(--text-muted)] mb-8 uppercase">
          <ol className="flex flex-wrap items-center gap-2">
            <li>
              <Link href="/index.html" className="hover:text-[var(--gold)] transition-colors">Home</Link>
            </li>
            <li aria-hidden="true" className="text-[var(--gold)]">→</li>
            <li>
              <Link href="/academics.html" className="hover:text-[var(--gold)] transition-colors">Academics</Link>
            </li>
            <li aria-hidden="true" className="text-[var(--gold)]">→</li>
            <li className="text-[var(--gold)]">Postgraduate Programs</li>
          </ol>
        </nav>

        <header className="rounded-xl border border-[var(--gold-border)] bg-[var(--surface)]/90 p-6 md:p-10 mb-8 md:mb-10 shadow-[0_18px_44px_rgba(201,169,110,0.12)] animate-in fade-in duration-500">
          <p className="font-label uppercase tracking-[0.22em] text-[var(--gold)] text-xs md:text-sm mb-3">Academics</p>
          <h1 className="font-heading text-4xl md:text-6xl font-light text-[var(--foreground)] leading-tight mb-4">M.Tech Postgraduate Programs</h1>
          <p className="text-[var(--text-muted)] max-w-3xl leading-8">
            Explore advanced specializations designed for deep technical mastery, research, and industry leadership.
          </p>
        </header>

        <section className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-6">
          {postgraduatePrograms.map((program) => (
            <Link
              key={program.slug}
              href={`/academics/postgraduate/${program.slug}`}
              className="group rounded-xl border border-[var(--border)] bg-[var(--surface)] p-5 md:p-6 hover:-translate-y-1 hover:border-[var(--gold-border)] hover:bg-[#16161a] hover:shadow-[0_0_30px_rgba(201,169,110,0.24)] transition-all duration-300"
            >
              <p className="font-label text-[11px] uppercase tracking-[0.12em] text-[var(--gold)] mb-2">M.Tech</p>
              <h2 className="font-heading text-3xl font-normal text-[var(--foreground)] mb-2">{program.courseName}</h2>
              <p className="text-[var(--text-muted)] text-sm leading-7">{program.shortOverview}</p>
              <p className="mt-4 text-[var(--gold)] text-sm font-label uppercase tracking-[0.08em]">Explore program →</p>
            </Link>
          ))}
        </section>
      </div>
    </main>
  );
}
