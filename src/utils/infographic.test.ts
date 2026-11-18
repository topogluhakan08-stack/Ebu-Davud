import test from 'node:test';
import assert from 'node:assert/strict';
import { DATA } from '../data/data';
import { matchesTrQuery, splitHighlightSegments } from './search';
import { MAP_BOUNDS, projectCoords } from './mapProjection';
import { collectVerifiableNames, verifyRenderedNames } from './verifyData';

test('Turkish case-insensitive search handles İ/i, I/ı and diacritics', () => {
  assert.equal(matchesTrQuery('İshâk b. Râhûye', 'ishâk'), true);
  assert.equal(matchesTrQuery('Sicistânî', 'sicistânî'), true);
  assert.equal(matchesTrQuery('Ahmed b. Hanbel', 'HANBEL'), true);
  assert.equal(matchesTrQuery('Dımaşk', 'dımaşk'), true);
  assert.equal(matchesTrQuery('Basra', 'Kûfe'), false);
});

test('splitHighlightSegments splits matches without losing characters', () => {
  const text = 'Ahmed b. Hanbel ve İshâk b. Râhûye';
  const segments = splitHighlightSegments(text, 'hanbel');
  assert.equal(segments.map((s) => s.text).join(''), text);
  assert.equal(segments.some((s) => s.isMatch && s.text === 'Hanbel'), true);

  const turkishI = splitHighlightSegments('İbn Hacer el-Askalânî', 'ibn');
  assert.equal(turkishI.map((s) => s.text).join(''), 'İbn Hacer el-Askalânî');
  assert.equal(turkishI[0].isMatch, true);
  assert.equal(turkishI[0].text, 'İbn');
});

test('Equirectangular map projection maps bounds accurately', () => {
  const topLeft = projectCoords(MAP_BOUNDS.lonMin, MAP_BOUNDS.latMax, 960, 520);
  assert.equal(topLeft.x, 0);
  assert.equal(topLeft.y, 0);

  const bottomRight = projectCoords(MAP_BOUNDS.lonMax, MAP_BOUNDS.latMin, 960, 520);
  assert.equal(bottomRight.x, 960);
  assert.equal(bottomRight.y, 520);

  // Baghdad (lon 44.4, lat 33.3) should be west of Sicistan (lon 61.9, lat 31.0)
  // and north of Basra (lon 47.8, lat 30.5)
  const baghdad = projectCoords(44.4, 33.3);
  const sicistan = projectCoords(61.9, 31.0);
  const basra = projectCoords(47.8, 30.5);
  assert.equal(baghdad.x < sicistan.x, true);
  assert.equal(baghdad.y < basra.y, true);
});

test('collectVerifiableNames includes all core people, cities, and works', () => {
  const names = collectVerifiableNames(DATA);
  assert.equal(names.includes('EBÛ DÂVÛD es-SİCİSTÂNÎ'), true);
  assert.equal(names.includes('Ahmed b. Hanbel'), true);
  assert.equal(names.includes('es-Sünen'), true);
  assert.equal(names.includes('el-Âdâbü\'ş-şer\'iyye'), true);
  assert.equal(names.includes('Brockelmann'), true);
  assert.equal(names.length >= 80, true);
});

test('verifyRenderedNames detects missing names and confirms full match', () => {
  const sampleNames = ['Ahmed b. Hanbel', 'es-Sünen', 'Ka\'nebî'];
  const fullBody = 'Burada Ahmed b. Hanbel, es-Sünen ve Ka\'nebî geçmektedir.';
  const ok = verifyRenderedNames(sampleNames, fullBody);
  assert.equal(ok.matchedCount, 3);
  assert.deepEqual(ok.missing, []);

  const missingOne = verifyRenderedNames(sampleNames, 'Ahmed b. Hanbel ve es-Sünen');
  assert.equal(missingOne.matchedCount, 2);
  assert.deepEqual(missingOne.missing, ['Ka\'nebî']);
});
