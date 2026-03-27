import { notFound } from 'next/navigation';

import { PostgraduateProgramPage } from '@/components/academics/postgraduate-program-page';
import { postgraduateProgramBySlug, postgraduatePrograms } from '@/data/postgraduate-programs';

type Params = {
  slug: string;
};

export function generateStaticParams(): Params[] {
  return postgraduatePrograms.map((program) => ({ slug: program.slug }));
}

export default async function ProgramDetailPage({ params }: { params: Promise<Params> }) {
  const { slug } = await params;
  const program = postgraduateProgramBySlug[slug];

  if (!program) {
    notFound();
  }

  return <PostgraduateProgramPage program={program} />;
}
