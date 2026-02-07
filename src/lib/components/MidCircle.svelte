<script lang="ts">
	import type { Snippet } from 'svelte';
	let {
		children,
		class: className,
		onclick,
		label,
		...rest
	}: {
		children: Snippet;
		class?: string;
		onclick?: () => void;
		label?: string;
		[key: string]: any;
	} = $props();
</script>

{#if onclick}
	<button
		class="flex aspect-square w-[calc(min(60vw,42vh)*0.618)] items-center justify-center rounded-full border-3 border-white text-white hover:bg-white/10 {className}"
		aria-label={label}
		{onclick}
		{...rest}
	>
		{@render children()}
	</button>
{:else}
	<div
		class="flex aspect-square w-[calc(min(60vw,42vh)*0.618)] items-center justify-center rounded-full border-3 border-white text-white {className}"
		{...rest}
	>
		{@render children()}
	</div>
{/if}
