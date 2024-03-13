let numbers = [1,2,2];
let sumQuadr = 0;

function squareSum(numbers) {
    for (let i = 0; i < numbers.length; i++) {
        sumQuadr += numbers[i] ** 2;
    }
    return sumQuadr;
}

console.log(squareSum(numbers)); 