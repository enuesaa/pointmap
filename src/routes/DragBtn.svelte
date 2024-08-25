<script lang="ts">
	import type { Registry } from '$lib/registry'

	export let registry: Registry;

	let dragging = false
	let offsetX = 0
	let offsetY = 0

	function handleClick() {
		registry.svgOnClick = () => {}
		registry.svgOnMouseMove = ({x, y}) => {
			if (!dragging) {
				return
			}
			registry.shapes[0].x = x - offsetX
			registry.shapes[0].y = y - offsetX
		}
		registry.svgOnMouseLeave = () => {
			dragging = false
		}
		registry.svgOnMouseUp = () => {
			dragging = false
		}
		registry.rectOnMouseDown = (shape, {x, y}) => {
			dragging = true
			offsetX = x - shape.x
			offsetY = y - shape.y
		}
	}
</script>

<button on:click|preventDefault={handleClick}>drag</button>
