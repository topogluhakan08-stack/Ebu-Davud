/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useEffect, useMemo, useState } from 'react';
import { DATA } from './data/data';
import { InfographicProvider } from './components/InfographicContext';
import { StickyHeader } from './components/StickyHeader';
import { CoverAndSummary } from './components/CoverAndSummary';
import { TimelineSection } from './components/TimelineSection';
import { MapSection } from './components/MapSection';
import { TeachersSection } from './components/TeachersSection';
import { StudentsSection } from './components/StudentsSection';
import { PraisesSection } from './components/PraisesSection';
import { MethodologySection } from './components/MethodologySection';
import { WorksSection } from './components/WorksSection';
import { QuotesAndStudiesSection } from './components/QuotesAndStudiesSection';
import { matchesTrQuery } from './utils/search';
import {
  VerificationResult,
  collectVerifiableNames,
  verifyRenderedNames,
} from './utils/verifyData';

export default function App() {
  const [searchQuery, setSearchQuery] = useState('');
  const [memorizeMode, setMemorizeMode] = useState(false);
  const [revealedKeys, setRevealedKeys] = useState<Record<string, boolean>>({});
  const [selectedCityId, setSelectedCityId] = useState<string>('basra');
  const [verification, setVerification] = useState<VerificationResult | null>(null);

  const toggleReveal = (key: string) => {
    setRevealedKeys((prev) => ({ ...prev, [key]: !prev[key] }));
  };

  const toggleMemorizeMode = () => {
    setMemorizeMode((prev) => {
      if (prev) {
        setRevealedKeys({});
      }
      return !prev;
    });
  };

  const allVerifiableNames = useMemo(() => collectVerifiableNames(DATA), []);

  const matchCount = useMemo(() => {
    if (!searchQuery.trim()) return 0;
    return allVerifiableNames.filter((item) => matchesTrQuery(item, searchQuery)).length;
  }, [allVerifiableNames, searchQuery]);

  // Sayfa yüklenince DATA içindeki her isim/eser metnini document.body.textContent içinde doğrula
  useEffect(() => {
    const bodyText = document.body.textContent ?? '';
    const result = verifyRenderedNames(allVerifiableNames, bodyText);
    setVerification(result);
    if (result.missing.length === 0) {
      console.log(`✓ ${result.matchedCount}/${result.total} isim doğrulandı`);
    } else {
      console.warn(
        `Doğrulama eksik (${result.matchedCount}/${result.total}):`,
        result.missing
      );
    }
  }, [allVerifiableNames]);

  return (
    <InfographicProvider
      value={{
        searchQuery,
        memorizeMode,
        revealedKeys,
        toggleReveal,
        selectedCityId,
        setSelectedCityId,
      }}
    >
      <div className="min-h-screen islamic-parchment-bg text-[#12263f]">
        <StickyHeader
          searchQuery={searchQuery}
          onSearchChange={setSearchQuery}
          matchCount={matchCount}
          memorizeMode={memorizeMode}
          onToggleMemorize={toggleMemorizeMode}
          onResetRevealed={() => setRevealedKeys({})}
        />

        <main className="max-w-7xl mx-auto px-3 sm:px-6 py-6 sm:py-8 space-y-8">
          <CoverAndSummary />
          <TimelineSection />
          <MapSection />
          <TeachersSection />
          <StudentsSection />
          <PraisesSection />
          <MethodologySection />
          <WorksSection />
          <QuotesAndStudiesSection verification={verification} />
        </main>
      </div>
    </InfographicProvider>
  );
}
