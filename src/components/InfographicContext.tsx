import React, { createContext, useContext } from 'react';
import { splitHighlightSegments } from '../utils/search';

interface InfographicContextValue {
  searchQuery: string;
  memorizeMode: boolean;
  revealedKeys: Record<string, boolean>;
  toggleReveal: (key: string) => void;
  selectedCityId: string;
  setSelectedCityId: (id: string) => void;
}

const InfographicContext = createContext<InfographicContextValue | null>(null);

export const InfographicProvider = InfographicContext.Provider;

export function useInfographic() {
  const ctx = useContext(InfographicContext);
  if (!ctx) {
    throw new Error('useInfographic must be used within InfographicProvider');
  }
  return ctx;
}

export function HighlightedText({ text }: { text: string }) {
  const { searchQuery } = useInfographic();
  const segments = splitHighlightSegments(text, searchQuery);

  return (
    <>
      {segments.map((seg, idx) =>
        seg.isMatch ? (
          <mark key={idx} className="search-hit font-semibold">
            {seg.text}
          </mark>
        ) : (
          <React.Fragment key={idx}>{seg.text}</React.Fragment>
        )
      )}
    </>
  );
}

export function MemorizableText({
  text,
  memKey,
  className = '',
}: {
  text: string;
  memKey: string;
  className?: string;
}) {
  const { memorizeMode, revealedKeys, toggleReveal } = useInfographic();

  if (!memorizeMode) {
    return (
      <span className={className}>
        <HighlightedText text={text} />
      </span>
    );
  }

  const isRevealed = Boolean(revealedKeys[memKey]);

  return (
    <button
      type="button"
      onClick={() => toggleReveal(memKey)}
      aria-pressed={isRevealed}
      aria-label={isRevealed ? `${text} (gizle)` : 'Gizli ismi görmek için tıklayın'}
      title={isRevealed ? 'Gizlemek için tıklayın' : 'Görmek için tıklayın'}
      className={`inline text-left font-inherit leading-inherit align-baseline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#c9a227] ${
        isRevealed ? 'memorize-revealed' : 'memorize-blur'
      } ${className}`}
    >
      <HighlightedText text={text} />
    </button>
  );
}

export function SectionHeader({
  id,
  num,
  title,
  hint,
  color,
  icon,
}: {
  id: string;
  num: string;
  title: string;
  hint: string;
  color: string;
  icon: string;
}) {
  return (
    <div className="mb-5">
      <div className="flex flex-wrap items-center gap-3 mb-2">
        <span
          className="inline-flex items-center justify-center min-w-[2.25rem] h-9 px-2.5 rounded-lg text-white font-serif font-bold text-base tabular-nums shadow-sm"
          style={{ backgroundColor: color }}
        >
          {num}
        </span>
        <span aria-hidden="true" className="text-xl select-none">
          {icon}
        </span>
        <h2
          id={`${id}-heading`}
          className="text-2xl sm:text-3xl font-bold tracking-tight text-[#12263f]"
        >
          {title}
        </h2>
      </div>
      <p className="text-sm sm:text-base text-[#12263f]/80 font-medium">
        {hint}
      </p>
      <div className="islamic-divider-pattern mt-3" aria-hidden="true" />
    </div>
  );
}
