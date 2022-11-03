

function volCollector() {

    let three = ['1'];

    return function (num) {

        if (three.length !== 4) {

            three.push(num)
        }

        return three

    }
}

const recVolume = volCollector();

console.log(recVolume(2));
console.log(recVolume(2));
console.log(recVolume(4))
