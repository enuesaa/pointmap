<script lang="ts">
	import { updateDrawing } from '$lib/drawing'
	import type { Registry } from '$lib/registry'
	import type { Shape } from '$lib/shape'
	import DrawerThumbnail from './DrawerThumbnail.svelte'

	export let id: string | undefined = undefined
	export let registry: Registry

	let histories: Shape[][] = []
	$: {
		histories = structuredClone(registry.histories)
		histories.reverse()
	}

	function recover(history: Shape[]) {
		if (id === undefined) {
			return
		}
		registry.shapes = structuredClone(history)
		updateDrawing(id, registry)
		window.location.reload()
	}
</script>

Histories

{#each histories as history}
	<div class="border-solid border-[1px] mb-2 relative">
		<DrawerThumbnail shapes={history} />
		<button class="absolute top-0 right-0" on:click={() => recover(history)}>
			Recover
		</button>
	</div>
{/each}
