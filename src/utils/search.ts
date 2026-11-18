export interface TextSegment {
  text: string;
  isMatch: boolean;
}

export function normalizeTr(text: string): string {
  return text.toLocaleLowerCase('tr');
}

/**
 * Splits `text` into alternating non-matching and matching segments using
 * Turkish-locale case-insensitive matching (`toLocaleLowerCase('tr')`).
 * Keeps original indices aligned when lengths match; falls back gracefully
 * if a character changes length under Turkish case folding (e.g. İ -> i).
 */
export function splitHighlightSegments(text: string, query: string): TextSegment[] {
  const trimmed = query.trim();
  if (!trimmed) {
    return [{ text, isMatch: false }];
  }

  const lowerQuery = normalizeTr(trimmed);
  if (!lowerQuery) {
    return [{ text, isMatch: false }];
  }

  // Build index map from normalized chars back to original string indices
  const origIndices: number[] = [];
  let normStr = '';
  for (let i = 0; i < text.length; i++) {
    const ch = text[i];
    const folded = normalizeTr(ch);
    for (let k = 0; k < folded.length; k++) {
      origIndices.push(i);
    }
    normStr += folded;
  }
  origIndices.push(text.length);

  const segments: TextSegment[] = [];
  let searchPos = 0;
  let lastOrigPos = 0;

  while (searchPos <= normStr.length - lowerQuery.length) {
    const foundIdx = normStr.indexOf(lowerQuery, searchPos);
    if (foundIdx === -1) {
      break;
    }

    const origStart = origIndices[foundIdx];
    const origEnd = origIndices[foundIdx + lowerQuery.length];

    if (origStart > lastOrigPos) {
      segments.push({ text: text.slice(lastOrigPos, origStart), isMatch: false });
    }
    if (origEnd > origStart) {
      segments.push({ text: text.slice(origStart, origEnd), isMatch: true });
    }

    lastOrigPos = origEnd;
    searchPos = foundIdx + lowerQuery.length;
  }

  if (lastOrigPos < text.length) {
    segments.push({ text: text.slice(lastOrigPos), isMatch: false });
  }

  return segments.length > 0 ? segments : [{ text, isMatch: false }];
}

export function matchesTrQuery(text: string, query: string): boolean {
  const trimmed = query.trim();
  if (!trimmed) return false;
  return normalizeTr(text).includes(normalizeTr(trimmed));
}
