<script lang="ts">
	import './app.css'
	import Header from './Header.svelte'
</script>

<Header />

<main class="mx-auto container w-10/12">
	<slot />
</main>
