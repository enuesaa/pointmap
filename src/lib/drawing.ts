import type { Registry } from './registry'

export const createDrawing = (registry: Registry): string => {
  const id = crypto.randomUUID()
  const data = JSON.stringify(registry)
  localStorage.setItem(`drawing.${id}`, data)
  return id
}

export const updateDrawing = (id: string, registry: Registry) => {
  const data = JSON.stringify(registry)
  localStorage.setItem(`drawing.${id}`, data)
}

export const deleteDrawing = (id: string) => {
  localStorage.removeItem(`drawing.${id}`)
}
