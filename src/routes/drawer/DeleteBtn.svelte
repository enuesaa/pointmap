<script lang="ts">
	import { goto } from '$app/navigation'

	export let id: string

	async function handleClick() {
		localStorage.removeItem(`drawing.${id}`)
		await goto('/')
	}
</script>

<button on:click|preventDefault={handleClick}>delete</button>
