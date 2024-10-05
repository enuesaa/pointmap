<script lang="ts">
	import DrawerDeleteBtn from './DrawerDeleteBtn.svelte'

	export let id: string | undefined = undefined
</script>

<div class="flex justify-end">
	{#if id !== undefined}
		<DrawerDeleteBtn {id} />
	{/if}
</div>
