export class Timer {
    timeLeft = $state(0);
    initialTime = 0;
    isRunning = $state(false);
    interval: ReturnType<typeof setInterval> | null = null;
    onFinish: () => void;

    constructor({ initialTime, onFinish }: { initialTime: number, onFinish: () => void }) {
        this.initialTime = initialTime;
        this.timeLeft = initialTime;
        this.onFinish = onFinish;
    }

    start() {
        if (this.isRunning) return;
        this.isRunning = true;
        this.interval = setInterval(() => {
            if (this.timeLeft > 0) {
                this.timeLeft -= 1;
            }
            if (this.timeLeft === 0) {
                this.pause();
                this.onFinish();
            }
        }, 1000);
    }

    pause() {
        if (this.interval) {
            clearInterval(this.interval);
            this.interval = null;
        }
        this.isRunning = false;
    }

    reset() {
        this.pause();
        const resetInterval = setInterval(() => {
            this.timeLeft += 1;
            if (this.timeLeft === this.initialTime) {
                clearInterval(resetInterval);
            }
        }, 50);
    }
}
