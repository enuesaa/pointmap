<script lang="ts">
	export let drawingId: string
</script>

<a href="/drawer/{drawingId}">
	{drawingId}
</a>

<style lang="postcss">
	a {
		@apply w-[32%] aspect-video border-black border-solid border-[1px] block;
	}
</style>
