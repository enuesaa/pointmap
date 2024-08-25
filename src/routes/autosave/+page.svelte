<script lang="ts">
	import { writable, get } from 'svelte/store'

	const fileHandle = writable<FileSystemFileHandle|undefined>(undefined)

	async function selectFile() {
		// chrome でしか使えない
		const handle = await window.showSaveFilePicker()
		fileHandle.set(handle)
	}

	async function saveFile() {
		const handle = get(fileHandle)
		if (handle === undefined) {
			return;
		}

		const writable = await handle.createWritable()
		await writable.write(new Date().toISOString())
		await writable.close()
	}
</script>

<button on:click|preventDefault={selectFile}>
	select file
</button>

<button on:click|preventDefault={saveFile}>
	save
</button>


