<script lang="ts">
	import AddRectBtn from './AddRectBtn.svelte'
	import type { Registry, Position } from '$lib/registry'
	import Rect from './Rect.svelte'
	import DragBtn from './DragBtn.svelte'

	let registry: Registry = {
		svg: {x: 0, y:0},
		shapes: [],
		svgOnClick: undefined,
		svgOnMouseMove: undefined,
		svgOnMouseUp: undefined,
		svgOnMouseLeave: undefined,
		rectOnMouseDown: undefined,
	}

	function updateSvgPosition(e: MouseEvent & { currentTarget: EventTarget & SVGSVGElement }) {
		const { left, top } = e.currentTarget.getBoundingClientRect()
		registry.svg.x = left
		registry.svg.y = top
	}

	function rebaseXY(e: MouseEvent & { currentTarget: EventTarget & SVGSVGElement }): Position {
		const x = e.clientX - registry.svg.x
		const y = e.clientY - registry.svg.y
		return { x, y }
	}

	function handleClick(e: MouseEvent & { currentTarget: EventTarget & SVGSVGElement }) {
		updateSvgPosition(e)
		if (registry.svgOnClick === undefined) {
			return
		}
		registry.svgOnClick(rebaseXY(e))
	}

	function handleMouseMove(e: MouseEvent & { currentTarget: EventTarget & SVGSVGElement }) {
		if (registry.svgOnMouseMove === undefined) {
			return
		}
		registry.svgOnMouseMove(rebaseXY(e))
	}

	function handleMouseUp(e: MouseEvent & { currentTarget: EventTarget & SVGSVGElement }) {
		if (registry.svgOnMouseUp === undefined) {
			return
		}
		registry.svgOnMouseUp(rebaseXY(e))
	}

	function handleMouseLeave(e: MouseEvent & { currentTarget: EventTarget & SVGSVGElement }) {
		if (registry.svgOnMouseLeave === undefined) {
			return
		}
		registry.svgOnMouseLeave(rebaseXY(e))
	}
</script>

<AddRectBtn bind:registry={registry} />
<DragBtn bind:registry={registry} />

<svg
	on:click={handleClick}
	on:mousemove={handleMouseMove}
	on:mouseup={handleMouseUp}
	on:mouseleave={handleMouseLeave}
>
	{#each registry.shapes as shape}
		<Rect {shape} {registry} />
	{/each}
</svg>

<style lang="postcss">
	svg {
		width: 100%;
		height: 100vh;
		border: solid 1px #000;
	}
</style>
