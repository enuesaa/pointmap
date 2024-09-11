<script lang="ts">
	import type { Registry } from '$lib/registry'

	export let registry: Registry;
	
	function hanldeSave() {
		const savedata = JSON.stringify(registry)
		console.log(savedata)
		localStorage.setItem('drawing', savedata)
	}

	function handleRestore() {
		const savedata = localStorage.getItem('drawing')
		console.log(savedata)
		if (savedata === null) {
			return
		}
		registry = JSON.parse(savedata)
	}
</script>

<button on:click|preventDefault={hanldeSave}>save</button>
<button on:click|preventDefault={handleRestore}>restore</button>
