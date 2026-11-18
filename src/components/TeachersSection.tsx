import { DATA } from '../data/data';
import { HighlightedText, MemorizableText, SectionHeader, useInfographic } from './InfographicContext';

export function TeachersSection() {
  const { selectedCityId, setSelectedCityId } = useInfographic();
  const { cities } = DATA.map;
  const {
    hint,
    unlocatedTitle,
    unlocatedTeachers,
    evaluationTitle,
    evaluationText,
    sourceNoteTitle,
    sourceNoteText,
  } = DATA.teachers;

  return (
    <section
      id="bolum-3"
      aria-labelledby="bolum-3-heading"
      className="rounded-2xl bg-[#fbf7ed] border border-[#c9a227]/45 p-5 sm:p-8 shadow-sm"
    >
      <SectionHeader
        id="bolum-3"
        num="3"
        title="Hocaları"
        hint={hint}
        color="#c9a227"
        icon="🎓"
      />

      {/* Bütün şehir kartları her zaman görünür */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 mb-6">
        {cities.map((city) => {
          const isSelected = city.id === selectedCityId;
          return (
            <article
              key={city.id}
              onClick={() => setSelectedCityId(city.id)}
              className={`rounded-xl bg-white p-4 border transition-colors shadow-xs print-card cursor-pointer ${
                isSelected
                  ? 'border-[#2a8c9a] ring-2 ring-[#2a8c9a]/30'
                  : 'border-[#12263f]/12 hover:border-[#c9a227]'
              }`}
            >
              <div className="flex items-center justify-between gap-2 mb-2">
                <h3 className="text-lg font-bold text-[#12263f]">
                  <HighlightedText text={city.displayLabel} />
                </h3>
                <span className="inline-flex items-center px-2 py-0.5 rounded bg-[#12263f]/8 text-[#12263f] text-xs font-bold tabular-nums">
                  Durak {city.steps.join(', ')}
                </span>
              </div>

              {city.teachers.length > 0 ? (
                <ul className="space-y-1.5">
                  {city.teachers.map((teacher, idx) => (
                    <li key={teacher.name} className="text-sm sm:text-base text-[#12263f]">
                      <span className="inline-block px-1.5 py-0.5 mr-1.5 rounded bg-[#c9a227]/25 text-[#12263f] text-xs font-bold">
                        Hoca
                      </span>
                      <MemorizableText
                        text={teacher.name}
                        memKey={`teacher-${city.id}-${idx}`}
                        className="font-semibold"
                      />
                      {teacher.detail && (
                        <span className="block text-xs sm:text-sm text-[#12263f]/75 mt-0.5">
                          (<HighlightedText text={teacher.detail} />)
                        </span>
                      )}
                    </li>
                  ))}
                </ul>
              ) : (
                <p className="text-sm text-[#12263f]/80">
                  <HighlightedText text={city.note} />
                </p>
              )}
            </article>
          );
        })}
      </div>

      {/* Şehri belirtilmeyenler, değerlendirme ve kaynak notu */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
        <article className="rounded-xl bg-white border border-[#c9a227]/50 p-5 shadow-xs print-card">
          <div className="inline-block px-2 py-0.5 rounded bg-[#c9a227] text-[#12263f] text-xs font-bold mb-2">
            Hoca
          </div>
          <h3 className="text-lg font-bold text-[#12263f] mb-2">
            {unlocatedTitle}
          </h3>
          <ul className="space-y-1.5">
            {unlocatedTeachers.map((t, idx) => (
              <li key={t.name} className="text-base font-semibold text-[#12263f]">
                <span className="text-[#c9a227] mr-2">•</span>
                <MemorizableText text={t.name} memKey={`teacher-unloc-${idx}`} />
              </li>
            ))}
          </ul>
        </article>

        <article className="rounded-xl bg-[#12263f] text-[#f6efe0] p-5 shadow-xs print-card">
          <h3 className="text-lg font-bold text-[#e8cb68] mb-2">
            {evaluationTitle}
          </h3>
          <p className="text-base leading-relaxed">
            <HighlightedText text={evaluationText} />
          </p>
        </article>

        <article className="rounded-xl bg-white border border-[#12263f]/15 p-5 shadow-xs print-card">
          <h3 className="text-lg font-bold text-[#12263f] mb-2">
            {sourceNoteTitle}
          </h3>
          <p className="text-sm sm:text-base text-[#12263f]/90 leading-relaxed">
            <HighlightedText text={sourceNoteText} />
          </p>
        </article>
      </div>
    </section>
  );
}
