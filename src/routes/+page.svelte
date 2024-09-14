<script lang="ts">
	import DrawCard from './DrawCard.svelte'
	import DrawCardNewLink from './DrawCardNewLink.svelte'
	import { listDrawingIds } from '$lib/drawing'

	let ids = listDrawingIds()
</script>

<section class="flex flex-row justify-start gap-3 flex-wrap">
	<DrawCardNewLink />
	{#each ids as id}
		<DrawCard id={id} />
	{/each}
</section>
