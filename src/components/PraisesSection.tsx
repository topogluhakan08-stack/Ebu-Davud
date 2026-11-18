import { DATA } from '../data/data';
import { HighlightedText, MemorizableText, SectionHeader } from './InfographicContext';

export function PraisesSection() {
  const { praises } = DATA;

  return (
    <section
      id="bolum-5"
      aria-labelledby="bolum-5-heading"
      className="rounded-2xl bg-[#fbf7ed] border border-[#12263f]/20 p-5 sm:p-8 shadow-sm"
    >
      <SectionHeader
        id="bolum-5"
        num="5"
        title="Hakkındaki Övgüler"
        hint={praises.hint}
        color="#12263f"
        icon="🏛️"
      />

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {praises.items.map((item, idx) => (
          <article
            key={item.name}
            className="rounded-xl bg-white border border-[#12263f]/15 p-4 shadow-xs flex flex-col justify-between print-card"
          >
            <div>
              <div className="flex items-center justify-between gap-2 mb-2">
                <span className="inline-block px-2 py-0.5 rounded bg-[#12263f] text-[#e8cb68] text-xs font-bold">
                  Övgü
                </span>
                <span className="text-xs font-bold text-[#12263f]/50 tabular-nums">
                  {idx + 1}/8
                </span>
              </div>
              <h3 className="text-base sm:text-lg font-bold text-[#12263f] mb-1">
                <MemorizableText text={item.name} memKey={`praise-${idx}`} />
              </h3>
              {item.qualifier && (
                <p className="text-xs font-medium text-[#8a2c3b] mb-2">
                  <HighlightedText text={item.qualifier} />
                </p>
              )}
              <p className="text-sm sm:text-base text-[#12263f]/90 leading-relaxed">
                <HighlightedText text={item.text} />
              </p>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
