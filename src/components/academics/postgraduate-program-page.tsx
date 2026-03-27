import Link from 'next/link';

import type { PostgraduateProgram } from '@/data/postgraduate-programs';

type PostgraduateProgramPageProps = {
  program: PostgraduateProgram;
};

function SectionCard({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <section className="rounded-xl border border-[var(--gold-border)] bg-[var(--surface)] p-6 md:p-8 shadow-[0_14px_36px_rgba(201,169,110,0.1)] animate-in fade-in slide-in-from-bottom-2 duration-500">
      <h2 className="font-heading text-4xl md:text-5xl font-normal text-[var(--foreground)] mb-4">{title}</h2>
      <div className="text-[var(--text-muted)] leading-8">{children}</div>
    </section>
  );
}

export function PostgraduateProgramPage({ program }: PostgraduateProgramPageProps) {
  return (
    <div className="min-h-screen bg-[radial-gradient(circle_at_50%_0%,rgba(201,169,110,0.16),transparent_50%),#09090b] text-[var(--foreground)]">
      <div className="max-w-6xl mx-auto px-4 md:px-6 py-8 md:py-12">
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
            <li>
              <Link href="/academics/postgraduate" className="hover:text-[var(--gold)] transition-colors">Postgraduate</Link>
            </li>
            <li aria-hidden="true" className="text-[var(--gold)]">→</li>
            <li className="text-[var(--gold)]">{program.courseName} ({program.degreeTitle})</li>
          </ol>
        </nav>

        <header className="rounded-xl border border-[var(--gold-border)] bg-[var(--surface)] p-6 md:p-10 mb-8 md:mb-10 shadow-[0_18px_44px_rgba(201,169,110,0.12)] animate-in fade-in duration-500">
          <p className="font-label uppercase tracking-[0.22em] text-[var(--gold)] text-xs md:text-sm mb-3">Postgraduate Program</p>
          <h1 className="font-heading text-5xl md:text-7xl font-light text-[var(--foreground)] leading-tight mb-4">
            {program.courseName}
          </h1>
          <div className="grid gap-2 text-[var(--foreground)] md:text-3xl font-heading">
            <p><span className="text-[var(--text-dim)] text-base md:text-xl font-sans">Degree:</span> {program.degreeTitle}</p>
            <p><span className="text-[var(--text-dim)] text-base md:text-xl font-sans">Department:</span> {program.departmentName}</p>
          </div>
          <p className="mt-5 text-[var(--text-muted)] max-w-3xl text-lg leading-8">{program.shortOverview}</p>
        </header>

        <div className="grid gap-6 md:gap-8">
          <SectionCard title="About the Program">
            <p className="mb-4">{program.about}</p>
            <h3 className="font-heading text-3xl text-[var(--foreground)] mb-2">Key Focus Areas</h3>
            <ul className="list-disc pl-5 space-y-1">
              {program.focusAreas.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </SectionCard>

          <SectionCard title="Program Objectives">
            <ul className="list-disc pl-5 space-y-2">
              {program.objectives.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </SectionCard>

          <SectionCard title="Curriculum Overview">
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h3 className="font-heading text-3xl text-[var(--foreground)] mb-2">Core Subjects</h3>
                <ul className="list-disc pl-5 space-y-1">
                  {program.curriculumCore.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </div>
              <div>
                <h3 className="font-heading text-3xl text-[var(--foreground)] mb-2">Electives</h3>
                <ul className="list-disc pl-5 space-y-1">
                  {program.curriculumElectives.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </div>
            </div>
            <p className="mt-4"><span className="text-[var(--gold)]">Research/Thesis:</span> {program.researchThesis}</p>
          </SectionCard>

          <SectionCard title="Laboratories and Facilities">
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h3 className="font-heading text-3xl text-[var(--foreground)] mb-2">Specialized Labs</h3>
                <ul className="list-disc pl-5 space-y-1">
                  {program.laboratories.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </div>
              <div>
                <h3 className="font-heading text-3xl text-[var(--foreground)] mb-2">Equipment and Infrastructure</h3>
                <ul className="list-disc pl-5 space-y-1">
                  {program.facilities.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </div>
            </div>
          </SectionCard>

          <SectionCard title="Career Opportunities">
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h3 className="font-heading text-3xl text-[var(--foreground)] mb-2">Industries</h3>
                <ul className="list-disc pl-5 space-y-1">
                  {program.careerIndustries.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </div>
              <div>
                <h3 className="font-heading text-3xl text-[var(--foreground)] mb-2">Job Roles</h3>
                <ul className="list-disc pl-5 space-y-1">
                  {program.careerRoles.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </div>
            </div>
          </SectionCard>

          <SectionCard title="Faculty">
            <div className="grid md:grid-cols-2 gap-4">
              {program.faculty.map((member) => (
                <article key={member.name} className="rounded-xl border border-[var(--border)] bg-[var(--surface-2)] p-4">
                  <h3 className="font-heading text-3xl text-[var(--foreground)]">{member.name}</h3>
                  <p className="text-[var(--text-muted)]">{member.expertise}</p>
                </article>
              ))}
            </div>
          </SectionCard>

          <SectionCard title="Admission Requirements">
            <ul className="list-disc pl-5 space-y-2 mb-4">
              {program.admissionRequirements.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
            <p><span className="text-[var(--gold)]">Entrance Exam:</span> {program.entranceExam}</p>
          </SectionCard>

          <SectionCard title="Contact Information">
            <div className="grid md:grid-cols-2 gap-5">
              <div className="rounded-xl border border-[var(--border)] bg-[var(--surface-2)] p-4">
                <h3 className="font-heading text-3xl text-[var(--foreground)] mb-2">Department Contact</h3>
                <p>Email: {program.contact.departmentEmail}</p>
                <p>Phone: {program.contact.departmentPhone}</p>
              </div>
              <div className="rounded-xl border border-[var(--border)] bg-[var(--surface-2)] p-4">
                <h3 className="font-heading text-3xl text-[var(--foreground)] mb-2">Program Coordinator</h3>
                <p>{program.contact.coordinatorName}</p>
                <p>Email: {program.contact.coordinatorEmail}</p>
              </div>
            </div>
          </SectionCard>
        </div>

        <div className="mt-10">
          <Link
            href="/academics/postgraduate"
            className="inline-flex items-center gap-2 rounded-lg border border-[var(--gold-border)] px-5 py-3 text-[var(--gold)] hover:text-[var(--foreground)] hover:bg-[var(--gold-dim)] transition-all"
          >
            ← Back to Programs
          </Link>
        </div>
      </div>
    </div>
  );
}
