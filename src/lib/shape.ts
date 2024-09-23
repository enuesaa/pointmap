export type Rect = {
	id: string
	tag: 'rect'
	x: number
	y: number
	width: number
	height: number
	fill: string
}
export type Text = {
	id: string
	tag: 'text'
	x: number
	y: number
	value: string
}

export type Shape = Rect|Text
