<script lang="ts">
	import { page } from '$app/stores'
	import type { Registry } from '$lib/registry'
	import { browser } from '$app/environment'
	import Drawer from '../Drawer.svelte'

	let id: string
	$: id = $page.params.id

	let registry: Registry

	$: if (browser) {
		const savedata = localStorage.getItem(`drawing.${id}`)
		if (savedata !== null) {
			registry = JSON.parse(savedata)
		}
	}
</script>

<main class="mx-auto container w-10/12">
	<Drawer {registry} {id} />
</main>
