export const MAP_BOUNDS = {
  lonMin: 28,
  lonMax: 72,
  latMin: 18,
  latMax: 42,
  width: 960,
  height: 520,
} as const;

export interface Point2D {
  x: number;
  y: number;
}

export function projectCoords(
  lon: number,
  lat: number,
  W: number = MAP_BOUNDS.width,
  H: number = MAP_BOUNDS.height
): Point2D {
  const x = ((lon - MAP_BOUNDS.lonMin) / (MAP_BOUNDS.lonMax - MAP_BOUNDS.lonMin)) * W;
  const y = ((MAP_BOUNDS.latMax - lat) / (MAP_BOUNDS.latMax - MAP_BOUNDS.latMin)) * H;
  return { x, y };
}

export function toSvgPoints(
  coords: ReadonlyArray<readonly [number, number]>,
  W: number = MAP_BOUNDS.width,
  H: number = MAP_BOUNDS.height
): string {
  return coords
    .map(([lon, lat]) => {
      const { x, y } = projectCoords(lon, lat, W, H);
      return `${x.toFixed(1)},${y.toFixed(1)}`;
    })
    .join(' ');
}

export interface RegionPolygon {
  id: string;
  label: string;
  coords: ReadonlyArray<readonly [number, number]>;
  fill: string;
}

// Basitleştirilmiş coğrafi [lon, lat] poligonları (Anadolu, Suriye-Irak, Arap Yarımadası, İran Platosu, Orta Asya, Mısır/Kuzeydoğu Afrika)
export const LANDMASS_POLYGONS: RegionPolygon[] = [
  {
    id: 'misir-afrika',
    label: 'Mısır / Kuzeydoğu Afrika',
    fill: '#efe4cc',
    coords: [
      [28.0, 31.4],
      [30.0, 31.5],
      [32.4, 31.2],
      [32.6, 29.9],
      [34.2, 26.8],
      [35.6, 23.8],
      [37.2, 21.0],
      [38.4, 18.0],
      [28.0, 18.0],
    ],
  },
  {
    id: 'anadolu',
    label: 'Anadolu',
    fill: '#f3ebd8',
    coords: [
      [28.0, 41.2],
      [32.5, 42.0],
      [36.2, 41.7],
      [41.5, 41.5],
      [44.2, 39.6],
      [43.8, 37.3],
      [39.8, 36.9],
      [36.2, 36.8],
      [34.8, 36.6],
      [32.2, 36.1],
      [29.5, 36.5],
      [28.0, 37.0],
    ],
  },
  {
    id: 'suriye-irak',
    label: 'Suriye-Irak',
    fill: '#f6efe0',
    coords: [
      [36.1, 36.8],
      [39.8, 36.9],
      [43.8, 37.3],
      [46.5, 35.0],
      [48.5, 30.1],
      [46.2, 29.8],
      [41.5, 31.5],
      [36.8, 31.8],
      [34.6, 31.3],
      [35.5, 33.4],
      [35.9, 35.4],
    ],
  },
  {
    id: 'arap-yarimadasi',
    label: 'Arap Yarımadası',
    fill: '#efe5ce',
    coords: [
      [32.6, 31.1],
      [34.6, 31.3],
      [36.8, 31.8],
      [41.5, 31.5],
      [46.2, 29.8],
      [48.5, 30.1],
      [50.2, 26.2],
      [51.6, 24.4],
      [56.4, 26.1],
      [59.8, 22.5],
      [57.5, 19.8],
      [52.0, 18.0],
      [43.2, 18.0],
      [40.4, 19.6],
      [38.4, 21.6],
      [36.8, 25.0],
      [34.8, 28.0],
      [32.6, 29.9],
    ],
  },
  {
    id: 'iran-platosu',
    label: 'İran Platosu',
    fill: '#f4ecda',
    coords: [
      [44.2, 39.6],
      [48.5, 39.2],
      [49.2, 37.3],
      [51.5, 36.6],
      [54.0, 37.0],
      [58.5, 37.6],
      [62.4, 36.3],
      [63.5, 34.0],
      [64.2, 30.0],
      [61.6, 25.2],
      [57.0, 25.8],
      [54.0, 26.7],
      [50.5, 28.8],
      [48.5, 30.1],
      [46.5, 35.0],
      [43.8, 37.3],
    ],
  },
  {
    id: 'orta-asya',
    label: 'Orta Asya',
    fill: '#ede3cb',
    coords: [
      [53.8, 42.0],
      [72.0, 42.0],
      [72.0, 26.5],
      [66.8, 25.4],
      [61.6, 25.2],
      [64.2, 30.0],
      [63.5, 34.0],
      [62.4, 36.3],
      [58.5, 37.6],
      [54.0, 37.0],
      [53.4, 39.8],
    ],
  },
  {
    id: 'kafkas-kuzey',
    label: 'Kafkasya / Kuzey',
    fill: '#ede3cb',
    coords: [
      [41.5, 42.0],
      [48.5, 42.0],
      [48.5, 39.2],
      [44.2, 39.6],
      [41.5, 41.5],
    ],
  },
];

// Hazar Denizi iç göl poligonu
export const CASPIAN_SEA_COORDS: ReadonlyArray<readonly [number, number]> = [
  [48.5, 42.0],
  [53.8, 42.0],
  [53.4, 39.8],
  [54.0, 37.0],
  [51.5, 36.6],
  [49.2, 37.3],
  [48.5, 39.2],
];

export interface WaterLabel {
  id: string;
  label: string;
  lon: number;
  lat: number;
  rotate?: number;
}

export const WATER_LABELS: WaterLabel[] = [
  { id: 'akdeniz', label: 'Akdeniz', lon: 31.8, lat: 33.8 },
  { id: 'kizildeniz', label: 'Kızıldeniz', lon: 36.8, lat: 22.8, rotate: 58 },
  { id: 'basra-korfezi', label: 'Basra Körfezi', lon: 51.8, lat: 26.9, rotate: -26 },
  { id: 'hazar-denizi', label: 'Hazar Denizi', lon: 51.0, lat: 39.5 },
];
