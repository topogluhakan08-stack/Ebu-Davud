import { DATA } from '../data/data';
import { HighlightedText, SectionHeader } from './InfographicContext';

export function MethodologySection() {
  const { methodology } = DATA;

  return (
    <section
      id="bolum-6"
      aria-labelledby="bolum-6-heading"
      className="rounded-2xl bg-[#fbf7ed] border border-[#1f7a5a]/30 p-5 sm:p-8 shadow-sm"
    >
      <SectionHeader
        id="bolum-6"
        num="6"
        title="Hadisçiliği ve Fıkhî Konumu"
        hint={methodology.hint}
        color="#1f7a5a"
        icon="⚖️"
      />

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {methodology.cards.map((card, idx) => {
          const isWide = idx === 2 || idx === 6;
          return (
            <article
              key={card.title}
              className={`rounded-xl bg-white border border-[#12263f]/15 p-5 shadow-xs print-card ${
                isWide ? 'md:col-span-2 lg:col-span-3' : ''
              }`}
            >
              <div className="flex items-center gap-2 mb-2">
                <span className="inline-flex items-center justify-center w-6 h-6 rounded-md bg-[#1f7a5a] text-white text-xs font-bold tabular-nums">
                  {idx + 1}
                </span>
                <h3 className="text-lg font-bold text-[#12263f]">
                  {card.title}
                </h3>
              </div>
              <p className="text-base text-[#12263f]/90 leading-relaxed">
                <HighlightedText text={card.text} />
              </p>
            </article>
          );
        })}
      </div>
    </section>
  );
}
