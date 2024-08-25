<script lang="ts">
	import type { Registry } from '$lib/registry'

	export let registry: Registry;

	let shapeId: string|undefined = undefined
	let offsetX = 0
	let offsetY = 0

	function handleClick() {
		shapeId = undefined

		registry.svgOnClick = () => {}
		registry.svgOnMouseMove = ({x, y}) => {
			if (shapeId === undefined) {
				return
			}
			for (let i = 0; i < registry.shapes.length; i++) {
				if (registry.shapes[i].id === shapeId) {
					registry.shapes[i].x = x - offsetX
					registry.shapes[i].y = y - offsetY
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
		registry.rectOnMouseDown = (id, {x, y}) => {
			for (let i = 0; i < registry.shapes.length; i++) {
				if (registry.shapes[i].id === id) {
					offsetX = x - registry.shapes[i].x
					offsetY = y - registry.shapes[i].y
					shapeId = id
					break
				}
			}
		}
	}
</script>

<button on:click|preventDefault={handleClick}>drag</button>
