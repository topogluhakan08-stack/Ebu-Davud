import { DATA } from '../data/data';
import { HighlightedText, MemorizableText, SectionHeader } from './InfographicContext';

export function StudentsSection() {
  const { students } = DATA;

  return (
    <section
      id="bolum-4"
      aria-labelledby="bolum-4-heading"
      className="rounded-2xl bg-[#fbf7ed] border border-[#8a2c3b]/30 p-5 sm:p-8 shadow-sm"
    >
      <SectionHeader
        id="bolum-4"
        num="4"
        title="Talebeleri"
        hint={students.hint}
        color="#8a2c3b"
        icon="🧑🎓"
      />

      {/* Merkezde Ebû Dâvûd, etrafında 3-5 elemanlı kartlar */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-5 items-center mb-6">
        {/* Sol kart */}
        <article className="rounded-xl bg-white border border-[#8a2c3b]/25 p-5 shadow-xs print-card">
          <h3 className="text-base font-bold text-[#8a2c3b] mb-3">
            {students.groups[0].groupTitle}
          </h3>
          <ul className="space-y-2.5">
            {students.groups[0].students.map((st, idx) => (
              <li key={st.name} className="text-base text-[#12263f]">
                <span className="inline-block px-1.5 py-0.5 mr-2 rounded bg-[#8a2c3b] text-white text-xs font-bold">
                  Talebe
                </span>
                <MemorizableText
                  text={st.name}
                  memKey={`st-g0-${idx}`}
                  className="font-semibold"
                />
                {st.note && (
                  <span className="text-sm text-[#12263f]/75 ml-1">
                    <HighlightedText text={st.note} />
                  </span>
                )}
              </li>
            ))}
          </ul>
        </article>

        {/* Merkez Hub */}
        <div className="rounded-2xl islamic-navy-bg text-[#f6efe0] p-6 text-center border-2 border-[#c9a227] shadow-md print-card">
          <div className="text-xs font-semibold text-[#e8cb68] mb-1">
            İlim Halkası Merkezi
          </div>
          <div className="text-2xl font-serif font-bold text-white mb-2">
            <HighlightedText text={students.centerName} />
          </div>
          <p className="text-sm text-[#f6efe0]/85">
            Basra ve diğer ilim merkezlerinde kendisinden pek çok muhaddis faydalandı.
          </p>
        </div>

        {/* Sağ kart */}
        <article className="rounded-xl bg-white border border-[#8a2c3b]/25 p-5 shadow-xs print-card">
          <h3 className="text-base font-bold text-[#8a2c3b] mb-3">
            {students.groups[1].groupTitle}
          </h3>
          <ul className="space-y-2.5">
            {students.groups[1].students.map((st, idx) => (
              <li key={st.name} className="text-base text-[#12263f]">
                <span className="inline-block px-1.5 py-0.5 mr-2 rounded bg-[#8a2c3b] text-white text-xs font-bold">
                  Talebe
                </span>
                <MemorizableText
                  text={st.name}
                  memKey={`st-g1-${idx}`}
                  className="font-semibold"
                />
              </li>
            ))}
          </ul>
        </article>
      </div>

      {/* Alt sıra: 3. talebe grubu, Altın Kutu, Ek Not */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-5">
        <article className="rounded-xl bg-white border border-[#8a2c3b]/25 p-5 shadow-xs print-card">
          <h3 className="text-base font-bold text-[#8a2c3b] mb-3">
            {students.groups[2].groupTitle}
          </h3>
          <ul className="space-y-2.5">
            {students.groups[2].students.map((st, idx) => (
              <li key={st.name} className="text-base text-[#12263f]">
                <span className="inline-block px-1.5 py-0.5 mr-2 rounded bg-[#8a2c3b] text-white text-xs font-bold">
                  Talebe
                </span>
                <MemorizableText
                  text={st.name}
                  memKey={`st-g2-${idx}`}
                  className="font-semibold"
                />
              </li>
            ))}
          </ul>
        </article>

        {/* Altın Kutu */}
        <article className="rounded-xl bg-[#f7ebc1] border-2 border-[#c9a227] p-5 shadow-xs print-card">
          <div className="inline-block px-2.5 py-0.5 rounded bg-[#c9a227] text-[#12263f] text-xs font-bold mb-2">
            Altın Kutu · es-Sünen Râvileri
          </div>
          <h3 className="text-base font-bold text-[#12263f] mb-2.5">
            <HighlightedText text={students.goldBox.title} />
          </h3>
          <ul className="space-y-2">
            {students.goldBox.names.map((name, idx) => (
              <li key={name} className="text-base font-bold text-[#12263f]">
                <span className="inline-block px-1.5 py-0.5 mr-2 rounded bg-[#12263f] text-[#f6efe0] text-xs font-bold">
                  Talebe
                </span>
                <MemorizableText text={name} memKey={`st-gold-${idx}`} />
              </li>
            ))}
          </ul>
        </article>

        {/* Ek Not */}
        <article className="rounded-xl bg-white border border-[#12263f]/15 p-5 shadow-xs print-card">
          <h3 className="text-base font-bold text-[#12263f] mb-2">
            {students.extraNoteTitle}
          </h3>
          <p className="text-sm sm:text-base text-[#12263f]/90 leading-relaxed">
            <HighlightedText text={students.extraNoteText} />
          </p>
        </article>
      </div>
    </section>
  );
}
