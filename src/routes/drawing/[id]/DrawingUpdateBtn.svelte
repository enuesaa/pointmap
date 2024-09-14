<script lang="ts">
	import type { Registry } from '$lib/registry'
	import { updateDrawing } from '$lib/drawing'

	export let id: string
	export let registry: Registry

	function handleClick() {
		updateDrawing(id, registry)
	}
</script>

<button on:click|preventDefault={handleClick}>save</button>
