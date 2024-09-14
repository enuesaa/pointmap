<script lang="ts">
	import DrawCardThumbnail from './DrawCardThumbnail.svelte'

	export let id: string
</script>

<a href="/drawing/{id}">
	<DrawCardThumbnail {id} />
</a>

<style lang="postcss">
	a {
		@apply w-[32%] aspect-video border-black border-solid border-[1px] block;
	}
</style>
