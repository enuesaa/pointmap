<script lang="ts">
	import type { Registry } from '$lib/registry'
	import DrawerMenu from './DrawerMenu.svelte'
	import DrawerDangerZone from './DrawerDangerZone.svelte'
	import { createRegistry } from '$lib/drawing'
	import DrawerSvg from './DrawerSvg.svelte'

	export let id: string | undefined = undefined
	export let registry: Registry = createRegistry()
</script>

<DrawerMenu bind:registry {id} />
<DrawerSvg bind:registry />
<DrawerDangerZone {id} />
