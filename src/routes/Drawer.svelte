<script lang="ts">
	import AddRectBtn from './AddRectBtn.svelte'
	import type { Registry, Position } from '$lib/registry'
	import Rect from './Rect.svelte'
	import DragBtn from './DragBtn.svelte'

	let registry: Registry = {
		svgLeft: 0,
		svgTop: 0,
		shapes: [],
		svgOnClick: undefined,
		svgOnMouseMove: undefined,
		svgOnMouseUp: undefined,
		svgOnMouseLeave: undefined,
		rectOnMouseDown: undefined,
	}

	function updateSvgPosition(e: MouseEvent & { currentTarget: EventTarget & SVGSVGElement }) {
		const { left, top } = e.currentTarget.getBoundingClientRect()
		registry.svgLeft = left
		registry.svgTop = top
	}

	function calcXY(e: MouseEvent & { currentTarget: EventTarget & SVGSVGElement }): Position {
		const x = e.clientX - registry.svgLeft;
		const y = e.clientY - registry.svgTop;
		return { x, y }
	}

	function handleClick(e: MouseEvent & { currentTarget: EventTarget & SVGSVGElement }) {
		if (registry.svgOnClick === undefined) {
			return
		}
		updateSvgPosition(e)
		registry.svgOnClick(calcXY(e))
	}

	function handleMouseMove(e: MouseEvent & { currentTarget: EventTarget & SVGSVGElement }) {
		if (registry.svgOnMouseMove === undefined) {
			return
		}
		registry.svgOnMouseMove(calcXY(e))
	}

	function handleMouseUp(e: MouseEvent & { currentTarget: EventTarget & SVGSVGElement }) {
		if (registry.svgOnMouseUp === undefined) {
			return
		}
		updateSvgPosition(e)
		registry.svgOnMouseUp(calcXY(e))
	}

	function handleMouseLeave(e: MouseEvent & { currentTarget: EventTarget & SVGSVGElement }) {
		if (registry.svgOnMouseLeave === undefined) {
			return
		}
		registry.svgOnMouseLeave(calcXY(e))
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
