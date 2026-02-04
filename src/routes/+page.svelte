<div class="relative flex h-screen w-screen flex-col items-center justify-center gap-10 bg-black">
	<div
		class="relative flex aspect-square w-[min(50vw,50vh)] items-center justify-center rounded-full border-3 border-white text-[calc(min(50vw,50vh)*0.45)] font-bold text-white"
		style="font-family: 'Andale Mono', monospace;"
	>
		40
		<div
			class="absolute flex aspect-square w-[38.2%] items-center justify-center rounded-full border-3 border-white bg-black text-[calc(min(50vw,50vh)*0.16)]"
			style="top: 14.645%; left: 14.645%; transform: translate(-50%, -50%);"
		>
			10
		</div>
		<div
			class="absolute flex aspect-square w-[38.2%] items-center justify-center rounded-full border-3 border-white bg-black text-[calc(min(50vw,50vh)*0.16)]"
			style="top: 85.355%; left: 85.355%; transform: translate(-50%, -50%);"
		>
			3
		</div>
	</div>
	<button
		class="flex aspect-square w-[calc(min(50vw,50vh)*0.618)] items-center justify-center gap-[10%] rounded-full border-3 border-white text-white hover:bg-white/10"
		aria-label="Pause"
	>
		<div class="h-[40%] w-[12%] rounded-full bg-white"></div>
		<div class="h-[40%] w-[12%] rounded-full bg-white"></div>
	</button>

	<!-- Bottom Left Circle -->
	<button
		class="absolute bottom-10 left-10 flex aspect-square w-[calc(min(50vw,50vh)*0.382)] items-center justify-center rounded-full border-3 border-white bg-black text-white hover:bg-white/10"
		aria-label="Menu"
	>
		<svg
			xmlns="http://www.w3.org/2000/svg"
			width="50%"
			height="50%"
			viewBox="0 0 24 24"
			fill="none"
			stroke="currentColor"
			stroke-width="2"
			stroke-linecap="round"
			stroke-linejoin="round"
			class="lucide lucide-menu"
			><line x1="4" x2="20" y1="12" y2="12" /><line x1="4" x2="20" y1="6" y2="6" /><line
				x1="4"
				x2="20"
				y1="18"
				y2="18"
			/></svg
		>
	</button>

	<!-- Bottom Right Circle -->
	<button
		class="absolute right-10 bottom-10 flex aspect-square w-[calc(min(50vw,50vh)*0.382)] items-center justify-center rounded-full border-3 border-white bg-black text-white hover:bg-white/10"
		aria-label="Settings"
	>
		<svg
			xmlns="http://www.w3.org/2000/svg"
			width="50%"
			height="50%"
			viewBox="0 0 24 24"
			fill="none"
			stroke="currentColor"
			stroke-width="2"
			stroke-linecap="round"
			stroke-linejoin="round"
			class="lucide lucide-wrench"
			><path
				d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z"
			/></svg
		>
	</button>
</div>
