<script lang="ts">
	import type { Registry } from '$lib/registry'
	import { goto } from '$app/navigation'
	import { createDrawing } from '$lib/drawing'

	export let registry: Registry

	async function handleClick() {
		const id = createDrawing(registry)
		await goto(`/drawing/${id}`)
	}
</script>

<button on:click|preventDefault={handleClick}>save</button>
