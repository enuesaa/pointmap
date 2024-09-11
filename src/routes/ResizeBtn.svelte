<script lang="ts">
	import type { Registry } from '$lib/registry'

	export let registry: Registry;

	let shapeId: string|undefined = undefined
	let initialMouseX = 0
	let initialWidth = 0

	function handleClick() {
		shapeId = undefined

		registry.svgOnClick = () => {}
		registry.svgOnMouseMove = ({x, y}) => {
			if (shapeId === undefined) {
				return
			}
			for (let i = 0; i < registry.shapes.length; i++) {
				if (registry.shapes[i].id === shapeId) {
					// registry.shapes[i].x = x - start.x
					// registry.shapes[i].y = y - start.y
					registry.shapes[i].width = initialWidth + x - initialMouseX
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
					initialMouseX = x
					initialWidth = registry.shapes[i].width // どんどん伸びていくから初期値を保持している
					shapeId = id
					break
				}
			}
		}
	}

	// function start(e: MouseEvent) {
	// 	resizing = true
	// 	initialMouseX = e.clientX
	// 	initialWidth = rect.width // どんどん伸びていくから初期値を保持している
	// }

	// function resize(e: MouseEvent) {
	// 	if (!resizing) {
	// 		return
	// 	}
	// 	rect.width = initialWidth + e.clientX - initialMouseX
	// }

	// function stop() {
	// 	resizing = false
	// }
</script>

<button on:click|preventDefault={handleClick}>resize</button>
