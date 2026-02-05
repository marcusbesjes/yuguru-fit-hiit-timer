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
		class="flex aspect-square w-[calc(min(80vw,42vh)*0.382)] items-center justify-center rounded-full border-3 border-white bg-black text-[calc(min(80vw,42vh)*0.16)] text-white hover:bg-white/10 {className}"
		style="font-family: 'Andale Mono', monospace;"
		aria-label={label}
		{onclick}
		{...rest}
	>
		{@render children()}
	</button>
{:else}
	<div
		class="flex aspect-square w-[calc(min(80vw,42vh)*0.382)] items-center justify-center rounded-full border-3 border-white bg-black text-[calc(min(80vw,42vh)*0.16)] text-white {className}"
		style="font-family: 'Andale Mono', monospace;"
		{...rest}
	>
		{@render children()}
	</div>
{/if}
