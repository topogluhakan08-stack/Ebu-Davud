import { DATA } from '../data/data';
import { HighlightedText, MemorizableText, SectionHeader } from './InfographicContext';

export function WorksSection() {
  const { works } = DATA;

  return (
    <section
      id="bolum-7"
      aria-labelledby="bolum-7-heading"
      className="rounded-2xl bg-[#fbf7ed] border border-[#2a8c9a]/35 p-5 sm:p-8 shadow-sm"
    >
      <SectionHeader
        id="bolum-7"
        num="7"
        title="Eserleri"
        hint={works.hint}
        color="#2a8c9a"
        icon="📚"
      />

      {/* Kitaplık / Raf Görünümü: 9 Numaralı Eser */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-6">
        {works.mainWorks.map((work) => (
          <article
            key={work.number}
            className="rounded-xl bg-white border border-[#12263f]/15 border-b-4 border-b-[#8a5a2b] p-5 shadow-xs flex flex-col justify-between print-card"
          >
            <div>
              <div className="flex items-center justify-between gap-2 mb-2.5">
                <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded bg-[#2a8c9a] text-white text-xs font-bold tabular-nums">
                  <span>Eser</span>
                  <span>#{work.number}</span>
                </span>
              </div>

              <h3 className="text-lg font-bold text-[#12263f] mb-1.5 leading-snug">
                <MemorizableText
                  text={work.title}
                  memKey={`work-${work.number}`}
                />
              </h3>

              {work.altTitle && (
                <p className="text-sm font-medium text-[#8a2c3b] mb-2">
                  (<HighlightedText text={work.altTitle} />)
                </p>
              )}

              {work.description && (
                <p className="text-sm sm:text-base text-[#12263f]/88 leading-relaxed">
                  <HighlightedText text={work.description} />
                </p>
              )}
            </div>
          </article>
        ))}
      </div>

      {/* Küçük Raf: Kaynaklarda adı geçen diğer eserleri (10 eser, HEPSİ) */}
      <div className="rounded-xl bg-[#f3ebd8] border border-[#8a5a2b]/35 border-b-4 border-b-[#8a5a2b] p-5 shadow-xs print-card">
        <div className="flex flex-wrap items-center justify-between gap-2 mb-3">
          <h3 className="text-lg font-bold text-[#12263f]">
            {works.otherWorksTitle}
          </h3>
          <span className="text-xs font-bold text-[#12263f]/75 tabular-nums">
            {works.otherWorks.length} eser (tam liste)
          </span>
        </div>

        <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-2.5">
          {works.otherWorks.map((item, idx) => (
            <li
              key={item.title}
              className="rounded-lg bg-white border border-[#12263f]/15 px-3 py-2.5 text-sm font-semibold text-[#12263f] flex items-start gap-2 shadow-2xs"
            >
              <span className="text-xs font-bold text-[#2a8c9a] tabular-nums mt-0.5">
                {idx + 1}.
              </span>
              <MemorizableText
                text={item.title}
                memKey={`other-work-${idx}`}
              />
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
