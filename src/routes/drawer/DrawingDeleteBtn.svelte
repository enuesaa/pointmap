<script lang="ts">
	import { goto } from '$app/navigation'
	import { deleteDrawing } from '$lib/drawing'

	export let id: string

	async function handleClick() {
		deleteDrawing(id)
		await goto('/')
	}
</script>

<button on:click|preventDefault={handleClick}>delete</button>
