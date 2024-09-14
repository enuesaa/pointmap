<script lang="ts">
	import type { Registry } from '$lib/registry'
	import { browser } from '$app/environment'
	import Rect from './drawer/Rect.svelte'

	export let id: string

	let registry: Registry

	$: if (browser) {
		const savedata = localStorage.getItem(`drawing.${id}`)
		if (savedata !== null) {
			registry = JSON.parse(savedata)
		}
	}
</script>

<svg>
	{#each registry.shapes as shape}
		<Rect {shape} {registry} />
	{/each}
</svg>

<style lang="postcss">
	svg {
		width: 100%;
		height: 100%;
		border: solid 1px #000;
	}
</style>
