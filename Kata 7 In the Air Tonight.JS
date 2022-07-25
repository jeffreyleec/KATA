const checkAir = function (samples, threshold) {
    let cleanCount = 0
    let dirtyCount = 0
    let thresholdVal = 0
    for (let i = 0; i <= samples.length; i++) {
        if (samples[i] == 'clean') {
            cleanCount++

        } else if (samples[i] == 'dirty') {
            dirtyCount++
        }

    }
    thresholdVal = dirtyCount / samples.length
    if (thresholdVal < threshold) {
        return "Clean"

    } else {
        return "Polluted"
    }
};

console.log(checkAir(
    ['clean', 'clean', 'dirty', 'clean', 'dirty', 'clean', 'clean', 'dirty', 'clean', 'dirty'],
    0.3
));

console.log(checkAir(
    ['dirty', 'clean', 'clean', 'clean', 'clean'],
    0.25
));

console.log(checkAir(
    ['clean', 'dirty', 'dirty', 'dirty', 'dirty', 'dirty', 'clean'],
    0.9
))