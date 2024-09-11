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

	// function handleRestore() {
	// 	const savedata = localStorage.getItem('drawing')
	// 	console.log(savedata)
	// 	if (savedata === null) {
	// 		return
	// 	}
	// 	registry = JSON.parse(savedata)
	// }
</script>

<button on:click|preventDefault={hanldeSave}>save</button>
<!-- <button on:click|preventDefault={handleRestore}>restore</button> -->
