<script lang="ts">
	import AddRectBtn from './AddRectBtn.svelte'
	import type { Registry } from '$lib/registry'
	import DragBtn from './DragBtn.svelte'
	import ResizeBtn from './ResizeBtn.svelte'
	import DrawingCreateBtn from './DrawingCreateBtn.svelte'
	import DrawingUpdateBtn from './DrawingUpdateBtn.svelte'

	export let id: string | undefined = undefined

	export let registry: Registry
</script>

<div class="flex justify-between items-center gap-2">
	<AddRectBtn bind:registry />
	<DragBtn bind:registry />
	<ResizeBtn bind:registry />

	<div class="flex-grow" />

	{#if id !== undefined}
		<DrawingUpdateBtn {id} {registry} />
	{:else}
		<DrawingCreateBtn {registry} />
	{/if}
</div>
