<script lang="ts">
	import { getDrawing } from '$lib/drawing'
	import type { Registry } from '$lib/registry'
	import DrawerThumbnail from './drawing/[id]/DrawerThumbnail.svelte'

	export let id: string

	let registry: Registry
	$: registry = getDrawing(id)
</script>

<a href="/drawing/{id}">
	<DrawerThumbnail shapes={registry.shapes} />
</a>

<style lang="postcss">
	a {
		@apply w-[32%] aspect-video border-black border-solid border-[1px] block;
	}
</style>
