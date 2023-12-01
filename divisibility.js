function printNumbersDivisibleByThreeNotByTwo(numbers) {
    for (let i = 0; i < numbers.length; i++) {
    
        if (numbers[i] % 3 === 0 && numbers[i] % 2 !== 0) {
            console.log(numbers[i]);
        }
    }
}


const numberArray = [1, 3, 6, 9, 12, 15, 18];
printNumbersDivisibleByThreeNotByTwo(numberArray);
