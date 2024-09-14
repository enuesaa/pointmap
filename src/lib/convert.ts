import type { Registry } from './registry'

export const convertToSvg = (registry: Registry): string => {
  let svg = '<svg xmlns="http://www.w3.org/2000/svg">'
  for (const shape of registry.shapes) {
    svg += `<rect x="${shape.x}" y="${shape.y}" width="${shape.width}" height="${shape.height}" fill="${shape.fill}" />`
  }
  svg += '</svg>'

  return svg
}
