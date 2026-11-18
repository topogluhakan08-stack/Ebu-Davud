import { DATA } from '../data/data';
import { HighlightedText, SectionHeader } from './InfographicContext';

export function TimelineSection() {
  const { life } = DATA;

  return (
    <section
      id="bolum-1"
      aria-labelledby="bolum-1-heading"
      className="rounded-2xl bg-[#fbf7ed] border border-[#1f7a5a]/30 p-5 sm:p-8 shadow-sm"
    >
      <SectionHeader
        id="bolum-1"
        num="1"
        title="Hayatı"
        hint={life.hint}
        color="#1f7a5a"
        icon="🕌"
      />

      <ol className="relative space-y-4 sm:space-y-5 pl-6 sm:pl-8 before:content-[''] before:absolute before:left-3 sm:before:left-4 before:top-2 before:bottom-2 before:w-0.5 before:bg-[#1f7a5a]/30">
        {life.items.map((item) => (
          <li key={item.num} className="relative print-card">
            <span
              className="absolute -left-6 sm:-left-8 top-1.5 inline-flex items-center justify-center w-6 h-6 sm:w-8 sm:h-8 rounded-full bg-[#1f7a5a] text-white text-xs sm:text-sm font-bold tabular-nums shadow-sm ring-4 ring-[#fbf7ed]"
              aria-hidden="true"
            >
              {item.num}
            </span>

            <article className="rounded-xl bg-white border border-[#12263f]/12 p-4 shadow-xs">
              <div className="flex items-baseline gap-2 mb-1">
                <span className="text-xs font-bold text-[#1f7a5a] tabular-nums">
                  {item.num}. Durak
                </span>
                <h3 className="text-base sm:text-lg font-bold text-[#12263f]">
                  <HighlightedText text={item.title} />
                </h3>
              </div>
              <p className="text-base text-[#12263f]/90 leading-relaxed">
                <HighlightedText text={item.text} />
              </p>
            </article>
          </li>
        ))}
      </ol>
    </section>
  );
}
