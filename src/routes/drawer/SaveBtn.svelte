<script lang="ts">
	import type { Registry } from '$lib/registry'
	import { nanoid } from 'nanoid'

	export let registry: Registry;
	
	function hanldeSave() {
		const id = nanoid()
		const savedata = JSON.stringify(registry)
		console.log(id, savedata)
		localStorage.setItem(`drawing.${id}`, savedata)
	}
</script>

<button on:click|preventDefault={hanldeSave}>save</button>
