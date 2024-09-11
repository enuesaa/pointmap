<script lang="ts">
	import type { Registry } from '$lib/registry'
	import { goto } from '$app/navigation'
	import { nanoid } from 'nanoid'

	export let savedId: string|undefined;
	export let registry: Registry;
	
	async function hanldeSave() {
		const id = savedId ?? nanoid()
		const savedata = JSON.stringify(registry)
		localStorage.setItem(`drawing.${id}`, savedata)
		if (savedId === undefined) {
			await goto(`/drawer/${id}`)
		}
	}
</script>

<button on:click|preventDefault={hanldeSave}>save</button>
