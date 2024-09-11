<script lang="ts">
	import type { Registry } from '$lib/registry'

	export let registry: Registry;

	let shapeId: string|undefined = undefined
	let initial = {x: 0, y: 0, width: 0, height: 0}

	function handleClick() {
		shapeId = undefined

		registry.svgOnClick = () => {}
		registry.svgOnMouseMove = ({x, y}) => {
			if (shapeId === undefined) {
				return
			}
			for (let i = 0; i < registry.shapes.length; i++) {
				if (registry.shapes[i].id === shapeId) {
					registry.shapes[i].width = initial.width + x - initial.x
					registry.shapes[i].height = initial.height + y - initial.y
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
					// どんどん伸びていくから初期値を保持している
					initial = {
						x,
						y,
						width: registry.shapes[i].width,
						height: registry.shapes[i].height,
					}
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
