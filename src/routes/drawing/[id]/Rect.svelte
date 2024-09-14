<script lang="ts">
	import { type Shape } from '$lib/shape'
	import { type Position, type Registry } from '$lib/registry'

	export let shape: Shape
	export let registry: Registry

	function rebaseXY(e: MouseEvent & { currentTarget: EventTarget & SVGRectElement }): Position {
		const x = e.clientX - registry.svg.x
		const y = e.clientY - registry.svg.y
		return { x, y }
	}

	function handleRectOnMouseDown(e: MouseEvent & { currentTarget: EventTarget & SVGRectElement }) {
		if (registry.rectOnMouseDown === undefined) {
			return
		}
		registry.rectOnMouseDown(shape.id, rebaseXY(e))
	}
</script>

<rect
	x={shape.x}
	y={shape.y}
	width={shape.width}
	height={shape.height}
	fill={shape.fill}
	on:mousedown={handleRectOnMouseDown}
/>
