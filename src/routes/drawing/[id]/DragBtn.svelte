<script lang="ts">
	import type { Position, Registry } from '$lib/registry'

	export let registry: Registry

	let shapeId: string | undefined = undefined
	let start: Position = { x: 0, y: 0 }

	function handleClick() {
		shapeId = undefined

		registry.svgOnClick = () => {}
		registry.svgOnMouseMove = ({ x, y }) => {
			if (shapeId === undefined) {
				return
			}
			for (let i = 0; i < registry.shapes.length; i++) {
				if (registry.shapes[i].id === shapeId) {
					registry.shapes[i].x = x - start.x
					registry.shapes[i].y = y - start.y
					break
				}
			}
		}
		registry.svgOnMouseLeave = () => {
			shapeId = undefined
		}
		registry.svgOnMouseUp = () => {
			shapeId = undefined
		}
		registry.rectOnMouseDown = (id, { x, y }) => {
			for (let i = 0; i < registry.shapes.length; i++) {
				if (registry.shapes[i].id === id) {
					start.x = x - registry.shapes[i].x
					start.y = y - registry.shapes[i].y
					shapeId = id
					break
				}
			}
		}
	}
</script>

<button on:click|preventDefault={handleClick}>Drag</button>

<style lang="postcss">
	button {
		@apply text-sm border-solid border-[1px] rounded mb-1 p-1;
	}
</style>
