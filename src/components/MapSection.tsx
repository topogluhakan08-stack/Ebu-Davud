import { DATA, CityNode } from '../data/data';
import {
  CASPIAN_SEA_COORDS,
  LANDMASS_POLYGONS,
  MAP_BOUNDS,
  WATER_LABELS,
  projectCoords,
  toSvgPoints,
} from '../utils/mapProjection';
import { HighlightedText, MemorizableText, SectionHeader, useInfographic } from './InfographicContext';

export function MapSection() {
  const { selectedCityId, setSelectedCityId } = useInfographic();
  const { cities, route, hint, approxNote } = DATA.map;

  const cityById = new Map<string, CityNode>(cities.map((c) => [c.id, c]));
  const selectedCity = cityById.get(selectedCityId) ?? cities[0];

  const { width: W, height: H } = MAP_BOUNDS;

  // 17 duraklı rota segmentlerini oluştur
  const routeSegments = route.slice(0, -1).map((fromStep, idx) => {
    const toStep = route[idx + 1];
    const fromCity = cityById.get(fromStep.cityId)!;
    const toCity = cityById.get(toStep.cityId)!;
    const p1 = projectCoords(fromCity.lon, fromCity.lat, W, H);
    const p2 = projectCoords(toCity.lon, toCity.lat, W, H);
    const isApproxSegment = toStep.isApprox || fromStep.isApprox;

    // Hafif kavisli rota yolu ki gidiş-dönüş çizgileri üst üste binmesin
    const dx = p2.x - p1.x;
    const dy = p2.y - p1.y;
    const dist = Math.hypot(dx, dy) || 1;
    const curveOffset = Math.min(28, dist * 0.14) * (idx % 2 === 0 ? 1 : -1);
    const cx = (p1.x + p2.x) / 2 - (dy / dist) * curveOffset;
    const cy = (p1.y + p2.y) / 2 + (dx / dist) * curveOffset;

    return {
      key: `${fromStep.step}-${toStep.step}`,
      fromStep,
      toStep,
      d: `M ${p1.x.toFixed(1)} ${p1.y.toFixed(1)} Q ${cx.toFixed(1)} ${cy.toFixed(1)} ${p2.x.toFixed(1)} ${p2.y.toFixed(1)}`,
      isApproxSegment,
    };
  });

  // Enlem ve boylam ızgara çizgileri
  const lonTicks = [30, 40, 50, 60, 70];
  const latTicks = [20, 25, 30, 35, 40];

  return (
    <section
      id="bolum-2"
      aria-labelledby="bolum-2-heading"
      className="rounded-2xl bg-[#fbf7ed] border border-[#2a8c9a]/35 p-5 sm:p-8 shadow-sm"
    >
      <SectionHeader
        id="bolum-2"
        num="2"
        title="İlim Yolculuğu Haritası"
        hint={hint}
        color="#2a8c9a"
        icon="🧭"
      />

      {/* Harita + Bilgi Kutusu */}
      <div className="grid grid-cols-1 xl:grid-cols-12 gap-5 items-start">
        <div className="xl:col-span-8 rounded-xl overflow-hidden border border-[#12263f]/20 bg-[#dce8ec] shadow-xs">
          <svg
            viewBox={`0 0 ${W} ${H}`}
            className="w-full h-auto block select-none"
            role="img"
            aria-label="Ebû Dâvûd es-Sicistânî'nin 28°–72° D boylam ve 18°–42° K enlem aralığındaki 17 duraklı ilim yolculuğu haritası"
          >
            <title>Ebû Dâvûd es-Sicistânî İlim Yolculuğu Haritası (28°–72° D, 18°–42° K)</title>
            <defs>
              <marker
                id="route-arrow-exact"
                viewBox="0 0 10 10"
                refX="8"
                refY="5"
                markerWidth="5.5"
                markerHeight="5.5"
                orient="auto-start-reverse"
              >
                <path d="M 0 1 L 9 5 L 0 9 z" fill="#12263f" />
              </marker>
              <marker
                id="route-arrow-approx"
                viewBox="0 0 10 10"
                refX="8"
                refY="5"
                markerWidth="5.5"
                markerHeight="5.5"
                orient="auto-start-reverse"
              >
                <path d="M 0 1 L 9 5 L 0 9 z" fill="#8a2c3b" />
              </marker>
            </defs>

            {/* Deniz zemini */}
            <rect x={0} y={0} width={W} height={H} fill="#d8e6eb" />

            {/* Basitleştirilmiş kara kütleleri */}
            {LANDMASS_POLYGONS.map((poly) => (
              <polygon
                key={poly.id}
                points={toSvgPoints(poly.coords, W, H)}
                fill={poly.fill}
                stroke="#b7a786"
                strokeWidth="1.2"
                strokeLinejoin="round"
              />
            ))}

            {/* Hazar Denizi */}
            <polygon
              points={toSvgPoints(CASPIAN_SEA_COORDS, W, H)}
              fill="#d8e6eb"
              stroke="#9ab1bb"
              strokeWidth="1.1"
            />

            {/* Enlem / Boylam çizgileri */}
            <g stroke="#12263f" strokeOpacity="0.09" strokeWidth="0.8" strokeDasharray="3 4">
              {lonTicks.map((lon) => {
                const { x } = projectCoords(lon, MAP_BOUNDS.latMax, W, H);
                return (
                  <g key={`lon-${lon}`}>
                    <line x1={x} y1={0} x2={x} y2={H} />
                    <text
                      x={x + 3}
                      y={H - 6}
                      fontSize="10"
                      fill="#12263f"
                      fillOpacity="0.55"
                      stroke="none"
                    >
                      {lon}° D
                    </text>
                  </g>
                );
              })}
              {latTicks.map((lat) => {
                const { y } = projectCoords(MAP_BOUNDS.lonMin, lat, W, H);
                return (
                  <g key={`lat-${lat}`}>
                    <line x1={0} y1={y} x2={W} y2={y} />
                    <text
                      x={6}
                      y={y - 4}
                      fontSize="10"
                      fill="#12263f"
                      fillOpacity="0.55"
                      stroke="none"
                    >
                      {lat}° K
                    </text>
                  </g>
                );
              })}
            </g>

            {/* Deniz ve göl etiketleri (küçük italik) */}
            {WATER_LABELS.map((water) => {
              const { x, y } = projectCoords(water.lon, water.lat, W, H);
              return (
                <text
                  key={water.id}
                  x={x}
                  y={y}
                  textAnchor="middle"
                  fontSize="12"
                  fontStyle="italic"
                  fontFamily="Noto Serif, Georgia, serif"
                  fill="#245366"
                  fillOpacity="0.85"
                  transform={water.rotate ? `rotate(${water.rotate} ${x} ${y})` : undefined}
                >
                  {water.label}
                </text>
              );
            })}

            {/* Bölge halkaları (Sicistan ve Horasan) */}
            {cities
              .filter((c) => c.isRegion)
              .map((region) => {
                const { x, y } = projectCoords(region.lon, region.lat, W, H);
                return (
                  <ellipse
                    key={`region-${region.id}`}
                    cx={x}
                    cy={y}
                    rx={36}
                    ry={22}
                    fill="#c9a227"
                    fillOpacity="0.14"
                    stroke="#c9a227"
                    strokeWidth="1.2"
                    strokeDasharray="4 3"
                  />
                );
              })}

            {/* 17 Duraklı Kesik Çizgili Oklu Rota */}
            <g fill="none">
              {routeSegments.map((seg) => (
                <path
                  key={seg.key}
                  d={seg.d}
                  stroke={seg.isApproxSegment ? '#8a2c3b' : '#12263f'}
                  strokeWidth={seg.isApproxSegment ? 1.8 : 2.1}
                  strokeDasharray={seg.isApproxSegment ? '5 4' : '7 4'}
                  strokeOpacity={seg.isApproxSegment ? 0.78 : 0.88}
                  markerEnd={
                    seg.isApproxSegment
                      ? 'url(#route-arrow-approx)'
                      : 'url(#route-arrow-exact)'
                  }
                />
              ))}
            </g>

            {/* Şehir işaretleri ve kılavuz çizgili etiketler */}
            {cities.map((city) => {
              const { x, y } = projectCoords(city.lon, city.lat, W, H);
              const isSelected = city.id === selectedCity.id;
              const labelX = x + city.labelDx;
              const labelY = y + city.labelDy;
              const badgeText = city.steps.join(',');
              const labelText = city.isRegion ? `${city.name} (bölge)` : city.name;
              const boxWidth = Math.max(58, labelText.length * 6.8 + 16);

              return (
                <g
                  key={city.id}
                  role="button"
                  tabIndex={0}
                  aria-label={`${city.displayLabel} (Sıra: ${badgeText})`}
                  onClick={() => setSelectedCityId(city.id)}
                  onMouseEnter={() => setSelectedCityId(city.id)}
                  onFocus={() => setSelectedCityId(city.id)}
                  onKeyDown={(e) => {
                    if (e.key === 'Enter' || e.key === ' ') {
                      e.preventDefault();
                      setSelectedCityId(city.id);
                    }
                  }}
                  className="cursor-pointer focus:outline-none"
                >
                  {/* Kılavuz çizgi (leader line) */}
                  {city.useLeader && (
                    <line
                      x1={x}
                      y1={y}
                      x2={labelX}
                      y2={labelY - 4}
                      stroke={isSelected ? '#8a2c3b' : '#12263f'}
                      strokeOpacity={isSelected ? 0.9 : 0.45}
                      strokeWidth={isSelected ? 1.4 : 0.9}
                    />
                  )}

                  {/* Seçili halka */}
                  {isSelected && (
                    <circle
                      cx={x}
                      cy={y}
                      r={14}
                      fill="none"
                      stroke="#c9a227"
                      strokeWidth="2.4"
                    />
                  )}

                  {/* Şehir adı etiketi (merkezli kutu) */}
                  <rect
                    x={labelX - boxWidth / 2}
                    y={labelY - 12}
                    width={boxWidth}
                    height={17}
                    rx={4}
                    fill={isSelected ? '#12263f' : '#fbf7ed'}
                    fillOpacity={isSelected ? 0.96 : 0.94}
                    stroke={isSelected ? '#c9a227' : '#12263f'}
                    strokeOpacity={isSelected ? 1 : 0.28}
                    strokeWidth="0.9"
                  />
                  <text
                    x={labelX}
                    y={labelY}
                    textAnchor="middle"
                    fontSize="10.5"
                    fontWeight={isSelected ? '700' : '600'}
                    fill={isSelected ? '#f6efe0' : '#12263f'}
                  >
                    {labelText}
                  </text>

                  {/* Numaralı yuvarlak şehir işareti */}
                  <circle
                    cx={x}
                    cy={y}
                    r={city.steps.length > 1 ? 10.5 : 9}
                    fill={isSelected ? '#8a2c3b' : city.isRegion ? '#1f7a5a' : '#12263f'}
                    stroke="#f6efe0"
                    strokeWidth="1.8"
                  />
                  <text
                    x={x}
                    y={y + 3.5}
                    textAnchor="middle"
                    fontSize={city.steps.length > 1 ? '8.5' : '9.5'}
                    fontWeight="700"
                    fill="#ffffff"
                  >
                    {badgeText}
                  </text>
                </g>
              );
            })}
          </svg>

          {/* Harita alt çubuğu */}
          <div className="bg-[#f3ebd8] border-t border-[#12263f]/15 px-4 py-2.5 flex flex-wrap items-center justify-between gap-2 text-xs text-[#12263f]/85">
            <div className="flex flex-wrap items-center gap-4">
              <span className="inline-flex items-center gap-1.5 font-medium">
                <span className="inline-block w-5 border-t-2 border-dashed border-[#12263f]" />
                <span>Kesinleşmiş duraklar (1–3, 14–17)</span>
              </span>
              <span className="inline-flex items-center gap-1.5 font-medium text-[#8a2c3b]">
                <span className="inline-block w-5 border-t-2 border-dashed border-[#8a2c3b]" />
                <span>4–13: sıra yaklaşıktır</span>
              </span>
            </div>
            <span className="font-medium text-[#12263f]/70">
              Kapsam: 28°–72° D, 18°–42° K
            </span>
          </div>
        </div>

        {/* Seçili Şehir Bilgi Kutusu (Tıklama / Üzerine Gelme) */}
        <aside
          aria-live="polite"
          className="xl:col-span-4 rounded-xl bg-white border-2 border-[#2a8c9a]/45 p-5 shadow-xs"
        >
          <div className="flex items-center justify-between gap-2 mb-2">
            <span className="inline-block px-2.5 py-0.5 rounded-md bg-[#2a8c9a] text-white text-xs font-bold">
              Seçili Durak
            </span>
            <span className="text-xs font-bold text-[#12263f]/70 tabular-nums">
              Rota sırası: {selectedCity.steps.join(' · ')}
            </span>
          </div>

          <h3 className="text-xl sm:text-2xl font-bold text-[#12263f] mb-1">
            <HighlightedText text={selectedCity.displayLabel} />
          </h3>

          <p className="text-sm text-[#12263f]/80 mb-3">
            <HighlightedText text={selectedCity.note} /> ·{' '}
            <span className="tabular-nums">
              {selectedCity.lat}° K, {selectedCity.lon}° D
            </span>
          </p>

          <div className="border-t border-[#12263f]/12 pt-3">
            <h4 className="text-sm font-bold text-[#12263f] mb-2">
              Bu Şehirdeki Hocaları
            </h4>
            {selectedCity.teachers.length > 0 ? (
              <ul className="space-y-2">
                {selectedCity.teachers.map((t, idx) => (
                  <li
                    key={t.name}
                    className="rounded-lg bg-[#fbf7ed] border border-[#c9a227]/40 px-3 py-2 text-sm sm:text-base"
                  >
                    <span className="inline-block px-1.5 py-0.5 mr-2 rounded bg-[#c9a227] text-[#12263f] text-xs font-bold">
                      Hoca
                    </span>
                    <MemorizableText
                      text={t.name}
                      memKey={`map-info-${selectedCity.id}-${idx}`}
                      className="font-semibold text-[#12263f]"
                    />
                    {t.detail && (
                      <p className="text-xs sm:text-sm text-[#12263f]/80 mt-1">
                        <HighlightedText text={t.detail} />
                      </p>
                    )}
                  </li>
                ))}
              </ul>
            ) : (
              <p className="text-sm text-[#12263f]/75 italic">
                Bu durak için metinde belirli hoca ismi zikredilmemiştir ({selectedCity.note}).
              </p>
            )}
          </div>

          <p className="no-print text-xs text-[#12263f]/65 mt-4 pt-3 border-t border-[#12263f]/10">
            Harita üzerindeki bir şehre tıklayın veya üzerine gelin. Bütün şehirlerin hocaları aşağıdaki Bölüm 3 kartlarında da her zaman görünürdür.
          </p>
        </aside>
      </div>

      {/* Harita Altında Rota Lejantı (1 → 17) */}
      <div className="mt-5 rounded-xl bg-white border border-[#12263f]/15 p-4 shadow-xs print-card">
        <div className="flex flex-wrap items-center justify-between gap-2 mb-3">
          <h3 className="text-base sm:text-lg font-bold text-[#12263f]">
            Rota Lejantı (1 → 17)
          </h3>
          <span className="text-xs sm:text-sm font-semibold text-[#8a2c3b] bg-[#8a2c3b]/10 px-2.5 py-1 rounded-md">
            4–13: sıra yaklaşıktır
          </span>
        </div>

        <ol className="flex flex-wrap items-center gap-2">
          {route.map((r, idx) => {
            const isActive = r.cityId === selectedCity.id;
            return (
              <li key={r.step} className="inline-flex items-center gap-1.5">
                <button
                  type="button"
                  onClick={() => setSelectedCityId(r.cityId)}
                  className={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded-lg text-xs sm:text-sm font-medium border transition-colors ${
                    isActive
                      ? 'bg-[#12263f] text-[#f6efe0] border-[#12263f]'
                      : r.isApprox
                        ? 'bg-[#8a2c3b]/8 text-[#12263f] border-[#8a2c3b]/30 hover:bg-[#8a2c3b]/15'
                        : 'bg-[#fbf7ed] text-[#12263f] border-[#12263f]/20 hover:bg-[#f3ebd8]'
                  }`}
                >
                  <span
                    className={`inline-flex items-center justify-center w-5 h-5 rounded-full text-[11px] font-bold tabular-nums ${
                      r.isApprox
                        ? 'bg-[#8a2c3b] text-white'
                        : 'bg-[#2a8c9a] text-white'
                    }`}
                  >
                    {r.step}
                  </span>
                  <span>
                    <HighlightedText text={r.label} />
                  </span>
                </button>
                {idx < route.length - 1 && (
                  <span aria-hidden="true" className="text-[#12263f]/45 font-bold">
                    →
                  </span>
                )}
              </li>
            );
          })}
        </ol>
        <p className="text-xs text-[#12263f]/75 mt-2">{approxNote}</p>
      </div>
    </section>
  );
}
