// Use the value below whenever you need the value of Pi
const PI = 3.14159;

const sphereVolume = function (radius) {
    // Code here!
    let vol = ((4 / 3) * PI * Math.pow(radius, 3))
    return vol;
}

console.log(4186 < sphereVolume(10) && sphereVolume(10) < 4189);

const coneVolume = function (radius, height) {
    // V=13πr2h
    let vol = (1 / 3 * PI * Math.pow(radius, 2) * height)
    return vol;
}

console.log(45 < coneVolume(3, 5) && coneVolume(3, 5) < 49);

const prismVolume = function (height, width, depth) {
    let base = width * depth;
    let vol = base * height;
    return vol;// Probably here too!
}

console.log(prismVolume(3, 4, 5) === 60);

const totalVolume = function (solids) {
    let totalVol = 0;
    for (let i = 0; i <= solids.length - 1; i++) {
        if (solids[i]['type'] == 'sphere') {
            totalVol += sphereVolume(solids[i]['radius'])
        } else if (solids[i]['type'] == 'cone') {
            totalVol += coneVolume(solids[i]['radius'], solids[i]['height'])
        } else if (solids[i]['type'] == 'prism') {
            totalVol += prismVolume(solids[i]['height'], solids[i]['width'], solids[i]['depth'])
        }

    }
    return totalVol;
}

const largeSphere = {
    type: 'sphere',
    radius: 40
}

const smallSphere = {
    type: 'sphere',
    radius: 10
}

const cone = {
    type: 'cone',
    radius: 3,
    height: 5
}

const duck = [
    largeSphere,
    smallSphere,
    cone
]

console.log(272000 < totalVolume(duck) && totalVolume(duck) < 275000);