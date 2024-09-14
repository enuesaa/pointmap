<script lang="ts">
	import Rect from './Rect.svelte'
	import type { Registry } from '$lib/registry'

	export let registry: Registry
</script>

<svg class="w-full h-full">
	{#each registry.shapes as shape}
		<Rect {shape} {registry} />
	{/each}
</svg>
