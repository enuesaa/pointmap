<script lang="ts">
	import { type Shape } from '$lib/shape'
	import { type Registry } from '$lib/registry'

	export let shape: Shape
	export let registry: Registry

	function handleRectOnMouseDown(e: MouseEvent & { currentTarget: EventTarget & SVGRectElement }) {
		if (registry.rectOnMouseDown === undefined) {
			return
		}
		const x = e.clientX
		const y = e.clientY
		registry.rectOnMouseDown(shape, {x, y})
	}
</script>

<rect
	x={shape.x} y={shape.y} width={shape.width} height={shape.height} fill={shape.fill}
	on:mousedown={handleRectOnMouseDown}
/>
