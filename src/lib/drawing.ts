import type { Registry } from './registry'
import { browser } from '$app/environment'

export const createRegistry = (): Registry => {
	return {
		svg: { x: 0, y: 0 },
		shapes: [],
		svgOnClick: undefined,
		svgOnMouseMove: undefined,
		svgOnMouseUp: undefined,
		svgOnMouseLeave: undefined,
		rectOnMouseDown: undefined,
	}
}

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

export const getDrawing = (id: string): Registry => {
	if (!browser) {
		return createRegistry()
	}
	const savedata = localStorage.getItem(`drawing.${id}`)
	if (savedata !== null) {
		return JSON.parse(savedata) as Registry
	}
	return createRegistry()
}

export const listDrawingIds = (): string[] => {
	let list: string[] = []

	if (!browser) {
		return list
	}

	for (let i = 0; i < localStorage.length; i++) {
		const key = localStorage.key(i)
		if (!key?.startsWith('drawing.')) {
			continue
		}

		const id = key.replace('drawing.', '')
		list.push(id)
	}

	return list
}
