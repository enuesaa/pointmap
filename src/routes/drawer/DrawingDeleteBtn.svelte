<script lang="ts">
	import { goto } from '$app/navigation'
	import { deleteDrawing } from '$lib/drawing'
	import * as AlertDialog from '$lib/components/ui/alert-dialog'

	export let id: string

	async function handleClick() {
		deleteDrawing(id)
		await goto('/')
	}
</script>

<AlertDialog.Root>
	<AlertDialog.Trigger>Delete</AlertDialog.Trigger>
	<AlertDialog.Content>
		<AlertDialog.Header>
			<AlertDialog.Title>Would you like to delete this drawing?</AlertDialog.Title>
		</AlertDialog.Header>
		<AlertDialog.Footer>
			<AlertDialog.Cancel>Cancel</AlertDialog.Cancel>
			<AlertDialog.Action on:click={handleClick}>Delete</AlertDialog.Action>
		</AlertDialog.Footer>
	</AlertDialog.Content>
</AlertDialog.Root>
