export type SurfaceStyle = {
  strokeColor: string
  fillColor: string
}

const surfaceStyleA: SurfaceStyle = {
  strokeColor: '#805a55',
  fillColor: '#a00040'
}

const surfaceStyleB: SurfaceStyle = {
  strokeColor: '#5a8055',
  fillColor: '#00a040'
}

const surfaceStyleC: SurfaceStyle = {
  strokeColor: '#ef8000',
  fillColor: '#ef8000'
}

export function getGraphSeriesStyle(seriesLength: number) {
  switch (seriesLength) {
    case 1:
      return [surfaceStyleA]
    case 2:
      return [surfaceStyleA, surfaceStyleB]
    default:
      return [surfaceStyleA, surfaceStyleB, surfaceStyleC]
  }
}
