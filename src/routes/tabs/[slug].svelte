<script context="module">
	import tabs from "tabs"
	export async function preload(page, session) {
		const { slug } = page.params;

		const tab = tabs.find(tab => tab.slug === slug);

		return { tab };
	}
</script>

<script lang="ts">
	export let tab: { slug: string; title: string, image: any };
</script>

<style>
	h1 {
		text-align: center;
	}

	img {
		width: 100%;
		max-width: 100%;
		margin: 0 0 1em 0;
	}
</style>

<svelte:head>
	<title>{tab.title}</title>
</svelte:head>

<h1>{tab.title}</h1>

<div class="content">
	<img alt="{tab.title}" src="{tab.image}"/>
</div>
