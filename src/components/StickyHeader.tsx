import { DATA } from '../data/data';

interface StickyHeaderProps {
  searchQuery: string;
  onSearchChange: (value: string) => void;
  matchCount: number;
  memorizeMode: boolean;
  onToggleMemorize: () => void;
  onResetRevealed: () => void;
}

export function StickyHeader({
  searchQuery,
  onSearchChange,
  matchCount,
  memorizeMode,
  onToggleMemorize,
  onResetRevealed,
}: StickyHeaderProps) {
  const navSections = DATA.sections.filter((s) => Number(s.num) >= 1 && Number(s.num) <= 10);

  return (
    <header className="no-print sticky top-0 z-40 bg-[#12263f]/95 backdrop-blur-sm text-[#f6efe0] border-b border-[#c9a227]/35 shadow-md">
      <div className="max-w-7xl mx-auto px-3 sm:px-5 py-2 flex flex-wrap xl:flex-nowrap items-center justify-between gap-2">
        {/* Bölüm menüsü (1-10) */}
        <nav
          aria-label="Bölüm menüsü"
          className="flex items-center gap-0.5 overflow-x-auto max-w-full py-0.5"
        >
          <a
            href="#bolum-0"
            className="px-2 py-1 rounded text-xs font-semibold text-[#c9a227] hover:bg-white/10 whitespace-nowrap shrink-0 transition-colors"
          >
            Kapak
          </a>
          {navSections.map((sec) => (
            <a
              key={sec.id}
              href={`#${sec.id}`}
              className="px-1.5 py-1 rounded text-xs font-medium text-[#f6efe0]/90 hover:text-white hover:bg-white/10 whitespace-nowrap shrink-0 transition-colors flex items-center gap-1"
            >
              <span
                className="inline-flex items-center justify-center w-4 h-4 rounded text-[11px] font-bold text-white tabular-nums"
                style={{ backgroundColor: sec.color }}
              >
                {sec.num}
              </span>
              <span className="hidden 2xl:inline xl:inline">{sec.shortLabel}</span>
            </a>
          ))}
        </nav>

        {/* Arama, Ezber Modu ve Yazdır */}
        <div className="flex items-center gap-2 shrink-0">
          <div className="relative flex items-center">
            <label htmlFor="infografik-arama" className="sr-only">
              İsim veya eser ara
            </label>
            <input
              id="infografik-arama"
              type="search"
              value={searchQuery}
              onChange={(e) => onSearchChange(e.target.value)}
              placeholder="İsim veya eser ara..."
              className="w-36 sm:w-44 px-2.5 py-1 rounded-lg bg-[#f6efe0] text-[#12263f] placeholder-[#12263f]/55 text-xs sm:text-sm border border-[#c9a227]/60 focus:outline-none focus:ring-2 focus:ring-[#c9a227]"
            />
            {searchQuery.trim().length > 0 && (
              <span
                className="ml-1.5 text-xs font-semibold text-[#c9a227] whitespace-nowrap tabular-nums"
                aria-live="polite"
              >
                {matchCount} eşleşme
              </span>
            )}
          </div>

          <button
            type="button"
            onClick={onToggleMemorize}
            aria-pressed={memorizeMode}
            className={`px-2.5 py-1 rounded-lg text-xs font-semibold whitespace-nowrap shrink-0 transition-colors border ${
              memorizeMode
                ? 'bg-[#c9a227] text-[#12263f] border-[#c9a227]'
                : 'bg-white/10 text-[#f6efe0] border-white/25 hover:bg-white/20'
            }`}
          >
            {memorizeMode ? 'Ezber Modu: Açık' : 'Ezber Modu: Kapalı'}
          </button>

          {memorizeMode && (
            <button
              type="button"
              onClick={onResetRevealed}
              className="px-2 py-1 rounded-lg text-xs font-medium bg-white/10 text-[#f6efe0] hover:bg-white/20 border border-white/20 whitespace-nowrap shrink-0"
            >
              Gizle
            </button>
          )}

          <button
            type="button"
            onClick={() => window.print()}
            className="px-2.5 py-1 rounded-lg text-xs font-semibold bg-[#1f7a5a] hover:bg-[#196449] text-white whitespace-nowrap shrink-0 transition-colors"
          >
            Yazdır
          </button>
        </div>
      </div>
    </header>
  );
}
