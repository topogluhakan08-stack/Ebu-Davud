import { DATA } from '../data/data';
import { HighlightedText, MemorizableText } from './InfographicContext';

export function CoverAndSummary() {
  const { cover, quickSummary } = DATA;

  return (
    <>
      {/* BÖLÜM 0 – KAPAK */}
      <section
        id="bolum-0"
        aria-labelledby="bolum-0-heading"
        className="islamic-navy-bg text-[#f6efe0] rounded-2xl p-6 sm:p-10 shadow-lg border-2 border-[#c9a227]/60 relative overflow-hidden print-card"
      >
        <div className="max-w-5xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-[#c9a227]/15 border border-[#c9a227]/50 text-[#e8cb68] text-xs sm:text-sm font-semibold mb-4">
            <span aria-hidden="true">📜</span>
            <span>Bölüm 0 · Türkiye Diyanet Vakfı İslam Ansiklopedisi</span>
          </div>

          <h1
            id="bolum-0-heading"
            className="text-3xl sm:text-5xl font-bold tracking-tight text-white mb-3"
          >
            <HighlightedText text={cover.title} />
          </h1>

          <p className="text-lg sm:text-xl text-[#e8cb68] font-serif font-semibold mb-3">
            <HighlightedText text={cover.subtitle} />
          </p>

          <p className="text-base sm:text-lg text-[#f6efe0]/95 font-medium max-w-3xl mx-auto mb-8">
            <HighlightedText text={cover.fullName} />
          </p>

          {/* 4 Rakam Kutusu */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {cover.stats.map((stat, idx) => (
              <div
                key={idx}
                className="rounded-xl bg-[#f6efe0] text-[#12263f] p-4 border border-[#c9a227] shadow-sm flex flex-col justify-center"
              >
                <div className="text-2xl sm:text-3xl font-serif font-bold text-[#12263f] tabular-nums leading-tight">
                  <HighlightedText text={stat.value} />
                </div>
                <div className="text-sm font-medium text-[#12263f]/80 mt-1.5">
                  <HighlightedText text={stat.label} />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* BASİTLEŞTİRİLMİŞ HIZLI ÖZET BİLGİ KARTLARI */}
      <section
        aria-labelledby="hizli-ozet-heading"
        className="rounded-2xl bg-[#fbf7ed] border border-[#c9a227]/45 p-5 sm:p-6 shadow-sm print-card"
      >
        <div className="flex flex-wrap items-center justify-between gap-2 mb-4">
          <div>
            <h2
              id="hizli-ozet-heading"
              className="text-xl sm:text-2xl font-bold text-[#12263f] flex items-center gap-2"
            >
              <span aria-hidden="true">🧭</span>
              <span>Hızlı Özet Bilgi Kartları</span>
            </h2>
            <p className="text-sm text-[#12263f]/75 mt-0.5">{quickSummary.hint}</p>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
          {quickSummary.cards.map((card) => {
            const badgeColor =
              card.badge === 'Hoca'
                ? 'bg-[#c9a227] text-[#12263f]'
                : card.badge === 'Talebe'
                  ? 'bg-[#8a2c3b] text-white'
                  : 'bg-[#2a8c9a] text-white';

            return (
              <article
                key={card.id}
                className="rounded-xl bg-white border border-[#12263f]/15 p-4 shadow-xs flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between gap-2 mb-2">
                    <span
                      className={`inline-block px-2.5 py-0.5 rounded-md text-xs font-bold ${badgeColor}`}
                    >
                      {card.badge}
                    </span>
                    <a
                      href={card.targetHref}
                      className="no-print text-xs font-semibold text-[#1f7a5a] hover:underline"
                    >
                      {card.linkLabel}
                    </a>
                  </div>

                  <h3 className="text-lg font-bold text-[#12263f] mb-1.5">
                    {card.title}
                  </h3>
                  <p className="text-sm text-[#12263f]/75 mb-3">
                    <HighlightedText text={card.summaryNote} />
                  </p>

                  <ul className="space-y-1.5">
                    {card.items.map((item, i) => (
                      <li
                        key={item}
                        className="text-sm sm:text-base font-medium text-[#12263f] flex items-baseline gap-2"
                      >
                        <span className="text-xs font-bold text-[#c9a227] tabular-nums">
                          {i + 1}.
                        </span>
                        <MemorizableText
                          text={item}
                          memKey={`ozet-${card.id}-${i}`}
                        />
                      </li>
                    ))}
                  </ul>
                </div>
              </article>
            );
          })}
        </div>
      </section>
    </>
  );
}
