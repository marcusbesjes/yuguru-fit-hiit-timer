<script lang="ts">
	import type { Snippet } from 'svelte';
	let {
		children,
		class: className,
		...rest
	}: { children: Snippet; class?: string; [key: string]: any } = $props();
</script>

<div
	class="relative flex aspect-square w-[min(80vw,42vh)] items-center justify-center rounded-full border-3 border-white text-[calc(min(80vw,42vh)*0.45)] font-bold text-white {className}"
	style="font-family: 'Andale Mono', monospace;"
	{...rest}
>
	{@render children()}
</div>
