<script lang="ts">
	import DrawCard from './DrawCard.svelte'
	import DrawCardNewLink from './DrawCardNewLink.svelte'
</script>

<main class="mx-auto container w-10/12 flex flex-row justify-start gap-3 flex-wrap">
	<DrawCardNewLink />
	<DrawCard drawingId='a' />
	<DrawCard drawingId='b' />
	<DrawCard drawingId='c' />
	<DrawCard drawingId='c' />
	<DrawCard drawingId='c' />
	<DrawCard drawingId='c' />
	<DrawCard drawingId='c' />
</main>
