<script lang="ts">
	import type { Registry, Position } from '$lib/registry'
	import Rect from './Rect.svelte'
	import Text from './Text.svelte'

	export let registry: Registry

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

<svg
	viewBox="0 0 1000 600"
	width="1000"
	height="600"
	on:click={handleClick}
	on:mousemove={handleMouseMove}
	on:mouseup={handleMouseUp}
	on:mouseleave={handleMouseLeave}
>
	{#each registry.shapes as shape}
		{#if shape.tag === 'rect'}
			<Rect {shape} {registry} />
		{:else if shape.tag === 'text'}
			<Text {shape} {registry} />
		{/if}
	{/each}
	<line
	x1={0}
	y1={0}
	x2={100}
	y2={100}
	stroke="black"
	stroke-width="2"
	marker-end="url(#arrowhead)"
/>
<defs>
	<marker
		id="arrowhead"
		markerWidth="10"
		markerHeight="10"
		refX="10"
		refY="5"
		orient="auto"
		markerUnits="userSpaceOnUse"
		stroke="black"
		fill="none"
	>
		<!-- 矢印の形を描く -->
		<path d="M 0 0 L 10 5 L 0 10" stroke="black" fill="none" stroke-width="2"/>
	</marker>
</defs>
</svg>

<style lang="postcss">
	svg {
		width: 1000px;
		height: 600px;
		border: solid 1px #000;
	}
</style>
