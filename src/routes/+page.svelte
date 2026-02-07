<script lang="ts">
	import BigCircle from '$lib/components/BigCircle.svelte';
	import MidCircle from '$lib/components/MidCircle.svelte';
	import SmallCircle from '$lib/components/SmallCircle.svelte';
	import { Menu, Wrench, Pause, Play } from 'lucide-svelte';
	import { Timer } from '$lib/timer.svelte';

	let currentMode = $state<'work' | 'rest'>('work');

	const workTimer = new Timer({
		initialTime: 3,
		onFinish: () => {
			currentMode = 'rest';
			workTimer.reset();
			restTimer.start();
		}
	});

	const restTimer = new Timer({
		initialTime: 10,
		onFinish: () => {
			currentMode = 'work';
			restTimer.reset();
			workTimer.start();
		}
	});

	let isRunning = $derived(workTimer.isRunning || restTimer.isRunning);

	function toggleTimer() {
		const activeTimer = currentMode === 'work' ? workTimer : restTimer;
		if (activeTimer.isRunning) {
			activeTimer.pause();
		} else {
			activeTimer.start();
		}
	}
</script>

<div
	class="relative flex h-screen w-screen flex-col items-center justify-center gap-[calc(min(60vw,42vh)*0.191)] bg-black pt-[5vh]"
>
	<BigCircle isRunning={workTimer.isRunning}>
		{workTimer.timeLeft}
		<SmallCircle
			isRunning={restTimer.isRunning}
			class="absolute"
			style="top: -7.2%; left: -7.2%; transform: translate(-50%, -50%);"
		>
			{restTimer.timeLeft}
		</SmallCircle>
		<SmallCircle
			class="absolute"
			style="top: 107.2%; left: 107.2%; transform: translate(-50%, -50%);"
		>
			3
		</SmallCircle>
	</BigCircle>

	<MidCircle onclick={toggleTimer} label={isRunning ? 'Pause' : 'Play'}>
		{#if isRunning}
			<Pause class="h-1/2 w-1/2" fill="currentColor" />
		{:else}
			<Play class="h-1/2 w-1/2 translate-x-[5%]" fill="currentColor" />
		{/if}
	</MidCircle>

	<!-- Bottom Left Circle -->
	<SmallCircle class="absolute bottom-[5vh] left-[5vw]" onclick={() => {}} label="Menu">
		<Menu class="h-1/2 w-1/2" />
	</SmallCircle>

	<!-- Bottom Right Circle -->
	<SmallCircle class="absolute right-[5vw] bottom-[5vh]" onclick={() => {}} label="Settings">
		<Wrench class="h-1/2 w-1/2" />
	</SmallCircle>
</div>
