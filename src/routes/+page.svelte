<script lang="ts">
	import DrawCard from './DrawCard.svelte'
	import DrawCardNewLink from './DrawCardNewLink.svelte'

	import { browser } from '$app/environment'

	let drawings: string[] = [];
	if (browser) {
		drawings = []
		for (let i = 0; i < localStorage.length; i++) {
			const key = localStorage.key(i)
			if (key?.startsWith('drawing.')) {
				const id = key.replace('drawing.', '')
				drawings.push(id)
			}
		}
	}
</script>

<main class="mx-auto container w-10/12 flex flex-row justify-start gap-3 flex-wrap">
	<DrawCardNewLink />
	{#each drawings as id}
		<DrawCard drawingId={id} />		
	{/each}
</main>
