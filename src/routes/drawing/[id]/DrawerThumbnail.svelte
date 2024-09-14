<script lang="ts">
	import RectFixed from './RectFixed.svelte'
	import type { Shape } from '$lib/shape'

	export let shapes: Shape[]
</script>

<svg class="w-full h-full">
	{#each shapes as shape}
		<RectFixed {shape} />
	{/each}
</svg>
