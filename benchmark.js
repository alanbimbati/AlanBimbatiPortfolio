function debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}

function runBenchmark() {
    console.log("Starting Resize Benchmark...");

    const BATCH_SIZE = 100;

    // Test 1: Without debounce
    let withoutDebounceCount = 0;
    const withoutDebounce = () => {
        withoutDebounceCount++;
    };

    console.log(`Simulating ${BATCH_SIZE} rapid resize events WITHOUT debounce...`);
    for (let i = 0; i < BATCH_SIZE; i++) {
        withoutDebounce();
    }
    console.log(`Function executed ${withoutDebounceCount} times.\n`);

    // Test 2: With debounce
    let withDebounceCount = 0;
    const withDebounceOriginal = () => {
        withDebounceCount++;
    };
    const withDebounce = debounce(withDebounceOriginal, 100);

    console.log(`Simulating ${BATCH_SIZE} rapid resize events WITH debounce (100ms)...`);
    for (let i = 0; i < BATCH_SIZE; i++) {
        withDebounce();
    }

    // Wait for the debounce to trigger
    setTimeout(() => {
        console.log(`Function executed ${withDebounceCount} times.`);

        console.log("\n--- Summary ---");
        console.log(`Reduction in calls: ${((withoutDebounceCount - withDebounceCount) / withoutDebounceCount * 100).toFixed(2)}%`);
    }, 200);
}

runBenchmark();
