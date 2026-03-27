'use client';

import React, { useState } from 'react';
import { GlowCard } from '@/components/ui/spotlight-card';
import { ImageCarousel } from '@/components/ui/image-carousel';

interface DepartmentSection {
  id: string;
  title: string;
  content: string | React.ReactNode;
}

interface DepartmentPageProps {
  departmentName: string;
  headName: string;
  headImage: string;
  headTitle: string;
  sections: DepartmentSection[];
  campusImages?: string[];
  highlights?: { title: string; description: string }[];
}

const DepartmentPage: React.FC<DepartmentPageProps> = ({
  departmentName,
  headName,
  headImage,
  headTitle,
  sections,
  campusImages = [
    'https://images.unsplash.com/photo-1517694712202-14dd11fa65e1?auto=format&fit=crop&w=800&q=80',
    'https://images.unsplash.com/photo-1497633762265-25c147e2e6d5?auto=format&fit=crop&w=800&q=80',
    'https://images.unsplash.com/photo-1522071820081-940485675e7e?auto=format&fit=crop&w=800&q=80',
    'https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=800&q=80'
  ],
  highlights = []
}) => {
  const [activeSection, setActiveSection] = useState(sections[0]?.id || '');

  const currentSection = sections.find(s => s.id === activeSection);

  return (
    <div className="min-h-screen bg-[radial-gradient(circle_at_50%_0%,rgba(201,169,110,0.16),transparent_50%),#09090b] text-[var(--foreground)]">
      {/* Header */}
      <header className="py-16 px-6 border-b border-[var(--border)]">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col md:flex-row items-center gap-12">
            <GlowCard glowColor="gold" customSize width={200} height={200}>
              <img
                src={headImage}
                alt={headName}
                className="w-full h-full object-cover rounded-2xl"
              />
            </GlowCard>
            <div>
              <h1 className="font-heading text-5xl md:text-7xl font-light mb-4 text-[var(--foreground)]">
                {departmentName}
              </h1>
              <h2 className="font-heading text-4xl text-[var(--gold)] mb-2">{headName}</h2>
              <p className="text-[var(--text-muted)] text-lg">{headTitle}</p>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-6xl mx-auto px-6 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Sidebar Navigation */}
          <aside className="lg:col-span-1">
            <nav className="sticky top-8 space-y-2 bg-[var(--surface)] rounded-lg p-4 border border-[var(--border)]">
              <h3 className="font-label text-[var(--gold)] mb-4 text-xs tracking-[0.16em] uppercase">Navigation</h3>
              {sections.map(section => (
                <button
                  key={section.id}
                  onClick={() => setActiveSection(section.id)}
                  className={`w-full text-left px-4 py-3 rounded-lg transition-all duration-300 ${
                    activeSection === section.id
                      ? 'bg-[var(--gold-dim)] border-l-4 border-[var(--gold)] text-[var(--gold)]'
                      : 'text-[var(--text-muted)] hover:bg-[var(--surface-2)]'
                  }`}
                >
                  {section.title}
                </button>
              ))}
            </nav>
          </aside>

          {/* Content Area */}
          <div className="lg:col-span-3">
            {currentSection && (
              <div className="animate-fade-in">
                <GlowCard glowColor="gold" customSize width="100%" height="auto" className="!p-8">
                  <h2 className="font-heading text-5xl font-normal mb-6 text-[var(--foreground)]">{currentSection.title}</h2>
                  <div className="text-[var(--text-muted)] space-y-4 leading-relaxed">
                    {typeof currentSection.content === 'string' ? (
                      <p>{currentSection.content}</p>
                    ) : (
                      currentSection.content
                    )}
                  </div>
                </GlowCard>
              </div>
            )}

            {/* Image Carousel */}
            {campusImages.length > 0 && (
              <div className="mt-12">
                <h3 className="font-heading text-4xl mb-4 text-[var(--foreground)]">Campus Gallery</h3>
                <ImageCarousel
                  images={campusImages}
                  interval={3000}
                  className="h-96 shadow-2xl rounded-xl overflow-hidden"
                />
              </div>
            )}

            {/* Highlights */}
            {highlights.length > 0 && (
              <div className="mt-12">
                <h3 className="font-heading text-4xl mb-6 text-[var(--foreground)]">Key Highlights</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {highlights.map((highlight, index) => (
                    <GlowCard
                      key={index}
                      glowColor="gold"
                      customSize
                      width="100%"
                      height="auto"
                      className="!p-6"
                    >
                      <h4 className="font-heading text-3xl text-[var(--foreground)] mb-2">{highlight.title}</h4>
                      <p className="text-[var(--text-muted)]">{highlight.description}</p>
                    </GlowCard>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      </main>

      <style jsx>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        :global(.animate-fade-in) {
          animation: fadeIn 0.3s ease-out;
        }
      `}</style>
    </div>
  );
};

export { DepartmentPage };
