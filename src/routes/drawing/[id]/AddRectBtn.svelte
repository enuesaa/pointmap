<script lang="ts">
	import type { Registry } from '$lib/registry'
	import { onMount } from 'svelte'

	export let registry: Registry

	onMount(() => {
		handleClick()
	})

	function handleClick() {
		registry.svgOnClick = ({ x, y }) => {
			registry.shapes = [
				...registry.shapes,
				{
					id: crypto.randomUUID(),
					tag: 'rect',
					x,
					y,
					width: 20,
					height: 20,
					fill: '#000000',
				},
			]
		}
		registry.svgOnMouseMove = () => {}
		registry.svgOnMouseLeave = () => {}
		registry.svgOnMouseUp = () => {}
		registry.rectOnMouseDown = () => {}
	}
</script>

<button on:click|preventDefault={handleClick}>add</button>
