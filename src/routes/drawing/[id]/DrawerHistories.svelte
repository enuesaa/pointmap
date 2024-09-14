<script lang="ts">
	import type { Registry } from '$lib/registry'
	import DrawerThumbnail from './DrawerThumbnail.svelte'

	export let registry: Registry

	const histories = structuredClone(registry.histories)
	histories.reverse()
</script>

Histories

{#each histories as history}
	<div class="border-solid border-[1px] mb-2">
		<DrawerThumbnail registry={{...registry, shapes: history}} />
	</div>
{/each}
