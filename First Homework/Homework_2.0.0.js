
//1.Insert a number. Print ‘yes’ if the number is prime, ‘no’ otherwise.

function isPrimeNumber(num) {
    if (num <= 1 || isNaN(num)){
        return "Number is wrong";
    }
    for (let i=2; i < Math.sqrt(num)-1; i++ ){
        if (num % i === 0){
            return "no";
        }
        return "yes";
    }
}
//console.log(isPrimeNumber(NaN))

//2.Given a number n ( n>= 0 ). Print nth Fibonacci number.  (Fibonacci series: 0, 1, 1, 2, 3, 5, 8 …, ak = ak-1 + ak-2)
function lastFibonacciNumber(num) {
    let a = 0, b = 1, c;
    if (num < 0 || isNaN(num)){
        return "Number is wrong";
    }
    for (let i = 2; i < num; i++){
         c = a + b;
         a = b;
         b = c;
    }
    return b

}

console.log(lastFibonacciNumber(5))

//3.Given a number n( n> 0 ). Print Fibonacci series up to n.
function allFibonacciNumbers(num) {
    let arrOfFibonacci = [0, 1];
    let a = 0, b = 1, c;
    if (num < 0 || isNaN(num)){
        return "Number is wrong";
    }
    for (let i = 2; i < num; i++){
        c = a + b;
        a = b;
        b = c;
        if (b < num){
            arrOfFibonacci.push(b)
        }

    }
return arrOfFibonacci

}
//console.log(allFibonacciNumbers(45));

// 4.Insert a number. Calculate product and sum of the digits of the number. If product is divisible by the sum, print the quotient, otherwise print the remainder.
function isProductDivisibleBySum(num) {
    let lastDigit = num % 10;
    product = 1;
    sum = 0;
    if (num < 0 || isNaN(num))
        return "number is wrong";
    while (num / 10 > 1){
        num = Math.floor(num/10);
        product *= num%10;
        sum += num%10;
    }
    product = product * lastDigit;
    sum = sum + lastDigit;
    if (product === 0){
        return "cannot calculate"
    }
    if (product % sum === 0){
        return "Quotient is " + product/sum;
    }
    return "reminder is " + product % sum
}
console.log(isProductDivisibleBySum(455));



//9.Given three numbers a, b (a ≤ b) and num. Create an array of evenly spaced numbers by the given num length over the specified interval (from a to b).

function arrayOfEvenlySpacedNumbers(a,b,num) {
    let arr = [a];
    let step = (b - a)/(num - 1);
    for (let i = 0; i< num - 2; i++){
        let eachNuumberAfterStep = (i+1) * step + a;
        arr.push(eachNuumberAfterStep);
    }
    if (num > 1){
        arr.push(b);
    }
    return arr;

}
console.log(arrayOfEvenlySpacedNumbers(1,5,6));

//10.Given an array of numbers. Find the index of the second maximum element.

function findIndexOfSecondMaxNumberOfArray(arr) {
    let temp = 0;
    let sorted = false;
    while (!sorted){
        sorted = true;
        for (let i = 1; i < arr.length; i++){
            if(arr[i-1] > arr[i]){
                temp = arr[i-1];
                arr[i-1] = arr[i];
                arr[i] = temp;
                sorted=false;
            }

        }
    }
    return arr[arr.length-2];
}
console.log(findIndexOfSecondMaxNumberOfArray([5,4,3,2,1]));


function repeatingArrayByPadding(arr, padAmount, repeat) {
    if (padAmount>arr.length){
        return "Invalid padding amount"
    }
    let firstPartOfArray = [];
    let lastPartOfArray = [];
    for (let k = 0; k < repeat; k++){
        for (let i = 0; i < padAmount; i++){
            firstPartOfArray.push(arr[i]);
        }
        for (let j = arr.length-padAmount; j < arr.length; j++){
            lastPartOfArray.push(arr[j]);
        }
    }

        return "" + firstPartOfArray + "," + arr + "," + lastPartOfArray

}

console.log(repeatingArrayByPadding([1], 2, 3));
