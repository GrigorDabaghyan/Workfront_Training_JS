// 1. Write a recursive function to determine whether all digits of the number are odd or not.
function allDigitsAreOddWithRecursion(num) {
    if (num > 0) {
        if ((num % 10) % 2 === 0) {
            return false;
        } else {
            return allDigitsAreOddWithRecursion(Math.floor(num / 10))
        }
    }return true;

}

console.log(allDigitsAreOddWithRecursion(1));


//2.Given an array of numbers. Write a recursive function to find its minimal positive
// element. (if such element does not exist, return -1)․

function findMinimumPositiveNumberOfArray(array, minimumPositiveNumber = Infinity, index = 0) {
    const element = array[index];
    if (array.length === index) {
        if(minimumPositiveNumber  === Infinity){
            return -1;
        }
        return minimumPositiveNumber;
    }
    if (element >=0 && (minimumPositiveNumber > element || minimumPositiveNumber === Infinity)){
        minimumPositiveNumber = element;
    }
    index++;
    return findMinimumPositiveNumberOfArray(array, minimumPositiveNumber,index);

}

console.log(findMinimumPositiveNumberOfArray([3,4,-5,6,2]));
console.log(findMinimumPositiveNumberOfArray([-1]));

//3. Write a recursive function which receives a number as arguments and returns the
// fibonacci sequence as array.
function findFibonacciSeriesWithrecursion(num) {
    if (num === 0){
        return []
    }
    if (num === 1){
        return [0,1];

    } else {
        let arrayOfFibonacci = findFibonacciSeriesWithrecursion(num-1);
        arrayOfFibonacci.push(arrayOfFibonacci[arrayOfFibonacci.length-1] + arrayOfFibonacci[arrayOfFibonacci.length-2]);
        return arrayOfFibonacci
    }
}
console.log(findFibonacciSeriesWithrecursion(3));


//4. Given an array of nested arrays. Write a recursive function that flattens it. (Hint create
// function that concats arrays).

function flattenArray(array){
    if (Array.isArray(array)){
        return array.concat.apply([], array.map(flattenArray))

    }return array
}

console.log(flattenArray([1,[2,4,7],3,4,5]));

//5. Given a number. Write a function that calculates its sum of the digits and if that sum
// has more than 1 digit find the sum of digits of that number. Repeat that process if needed and
// return the result.

function sumOfDigitsOfNymbersUnitllOne(num) {
    if (num < 10){
        return num
    }return sumOfDigitsOfNymbersUnitllOne(num%10 + sumOfDigitsOfNymbersUnitllOne(Math.floor(num/10)));
}


console.log(sumOfDigitsOfNymbersUnitllOne(12345));
