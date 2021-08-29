<script>
	import tabs from 'tabs';
</script>

<style>
	ul {
		margin: 0 0 1em 0;
		line-height: 1.5;
	}
</style>

<svelte:head>
	<title>Tabs</title>
</svelte:head>

<h1>Available Guitar Tabs</h1>
<ul>
	{#each tabs as tab}
		<li><a href="tabs/{tab.slug}">{tab.title}</a></li>
	{/each}
</ul>