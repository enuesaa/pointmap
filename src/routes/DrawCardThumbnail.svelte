<script lang="ts">
	import Rect from './drawer/Rect.svelte'
	import { getDrawing } from '$lib/drawing'
	import type { Registry } from '$lib/registry'

	export let id: string

	let registry: Registry
	$: registry = getDrawing(id)
</script>

<svg class="w-full h-full">
	{#each registry.shapes as shape}
		<Rect {shape} {registry} />
	{/each}
</svg>
