import { DATA } from '../data/data';
import { VerificationResult } from '../utils/verifyData';
import { HighlightedText, MemorizableText, SectionHeader } from './InfographicContext';

export function QuotesAndStudiesSection({
  verification,
}: {
  verification: VerificationResult | null;
}) {
  const { quotes, studies, otherPeople } = DATA;

  return (
    <>
      {/* BÖLÜM 8 – GÜZEL SÖZLERİ VE "YETER" DEDİĞİ 4 HADİS */}
      <section
        id="bolum-8"
        aria-labelledby="bolum-8-heading"
        className="rounded-2xl bg-[#fbf7ed] border border-[#c9a227]/45 p-5 sm:p-8 shadow-sm"
      >
        <SectionHeader
          id="bolum-8"
          num="8"
          title={'Güzel Sözleri ve "Yeter" Dediği 4 Hadis'}
          hint={quotes.hint}
          color="#c9a227"
          icon="✍️"
        />

        {/* 3 Güzel Sözü */}
        <div className="mb-6">
          <h3 className="text-lg font-bold text-[#12263f] mb-3">
            {quotes.sayingsTitle}
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {quotes.sayings.map((saying, idx) => (
              <blockquote
                key={idx}
                className="rounded-xl bg-[#12263f] text-[#f6efe0] p-5 border border-[#c9a227]/60 shadow-xs font-serif text-base sm:text-lg leading-relaxed print-card"
              >
                <HighlightedText text={saying} />
              </blockquote>
            ))}
          </div>
        </div>

        {/* 4 Hadis */}
        <div className="rounded-xl bg-white border border-[#c9a227]/50 p-5 shadow-xs print-card">
          <p className="text-base font-semibold text-[#12263f] mb-4">
            <HighlightedText text={quotes.hadithsLead} />
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {quotes.hadiths.map((hadith) => (
              <article
                key={hadith.num}
                className="rounded-xl bg-[#fbf7ed] border border-[#12263f]/15 p-4 flex items-start gap-3"
              >
                <span className="inline-flex items-center justify-center w-8 h-8 rounded-lg bg-[#c9a227] text-[#12263f] font-serif font-bold text-base shrink-0 tabular-nums">
                  {hadith.num}
                </span>
                <p className="text-base text-[#12263f] leading-relaxed">
                  <HighlightedText text={hadith.text} />
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* BÖLÜM 9 – HAKKINDA YAPILAN ÇALIŞMALAR */}
      <section
        id="bolum-9"
        aria-labelledby="bolum-9-heading"
        className="rounded-2xl bg-[#fbf7ed] border border-[#8a2c3b]/30 p-5 sm:p-8 shadow-sm"
      >
        <SectionHeader
          id="bolum-9"
          num="9"
          title="Hakkında Yapılan Çalışmalar"
          hint={studies.hint}
          color="#8a2c3b"
          icon="📖"
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {studies.items.map((study, idx) => (
            <article
              key={study.title}
              className="rounded-xl bg-white border border-[#12263f]/15 p-5 shadow-xs print-card"
            >
              <div className="flex items-center justify-between gap-2 mb-2">
                <span className="inline-block px-2 py-0.5 rounded bg-[#8a2c3b] text-white text-xs font-bold">
                  Çalışma #{idx + 1}
                </span>
              </div>
              <h3 className="text-base font-bold text-[#12263f] mb-1">
                <MemorizableText
                  text={study.author}
                  memKey={`study-author-${idx}`}
                />
              </h3>
              <p className="text-base font-serif font-semibold text-[#1f7a5a] mb-1.5">
                <MemorizableText
                  text={study.title}
                  memKey={`study-title-${idx}`}
                />
              </p>
              {study.meta && (
                <p className="text-sm text-[#12263f]/75">
                  <HighlightedText text={study.meta} />
                </p>
              )}
            </article>
          ))}
        </div>
      </section>

      {/* BÖLÜM 10 – METİNDE GEÇEN DİĞER ŞAHISLAR VE KAYNAKLAR */}
      <section
        id="bolum-10"
        aria-labelledby="bolum-10-heading"
        className="rounded-2xl bg-[#fbf7ed] border border-[#12263f]/25 p-5 sm:p-8 shadow-sm print-card"
      >
        <SectionHeader
          id="bolum-10"
          num="10"
          title="Metinde Geçen Diğer Şahıslar ve Kaynaklar"
          hint={otherPeople.hint}
          color="#12263f"
          icon="🗂️"
        />

        <div className="flex flex-wrap gap-2.5">
          {otherPeople.names.map((person, idx) => (
            <span
              key={person}
              className="inline-flex items-center px-3 py-1.5 rounded-lg bg-white border border-[#12263f]/20 text-sm sm:text-base font-medium text-[#12263f] shadow-2xs"
            >
              <MemorizableText
                text={person}
                memKey={`other-person-${idx}`}
              />
            </span>
          ))}
        </div>

        {/* Doğrulama Rozeti (baskıda gizlenir) */}
        {verification && (
          <div className="no-print mt-6 pt-4 border-t border-[#12263f]/15 flex flex-wrap items-center justify-between gap-3">
            {verification.missing.length === 0 ? (
              <div
                data-testid="verification-badge"
                className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg bg-[#1f7a5a] text-white text-sm font-semibold tabular-nums shadow-xs"
              >
                <span>✓ {verification.matchedCount}/{verification.total} isim doğrulandı</span>
              </div>
            ) : (
              <div
                data-testid="verification-badge"
                className="rounded-lg bg-[#8a2c3b] text-white px-4 py-2 text-sm font-semibold"
              >
                <div>
                  Eksik isimler ({verification.matchedCount}/{verification.total}):
                </div>
                <ul className="list-disc pl-5 mt-1 text-xs">
                  {verification.missing.map((m) => (
                    <li key={m}>{m}</li>
                  ))}
                </ul>
              </div>
            )}
            <span className="text-xs text-[#12263f]/70">
              Kaynak: Türkiye Diyanet Vakfı İslam Ansiklopedisi, 10. Cilt, s. 119–121
            </span>
          </div>
        )}
      </section>
    </>
  );
}
