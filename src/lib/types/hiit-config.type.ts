interface HiitConfig {
    workSeconds: number;
    restSeconds: number;
    cycles: { type: 'countUp' } | { type: 'countDown'; from: number };
}