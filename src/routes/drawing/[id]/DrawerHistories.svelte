<script lang="ts">
	import type { Registry } from '$lib/registry'
	import type { Shape } from '$lib/shape'
	import DrawerThumbnail from './DrawerThumbnail.svelte'

	export let registry: Registry
	let histories: Shape[][] = []
	$: {
		histories = structuredClone(registry.histories)
		histories.reverse()
	}
</script>

Histories

{#each histories as history}
	<div class="border-solid border-[1px] mb-2">
		<DrawerThumbnail shapes={history} />
	</div>
{/each}
