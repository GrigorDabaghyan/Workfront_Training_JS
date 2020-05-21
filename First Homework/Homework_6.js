//1. Given an array. Determine whether it consists only from unique elements or not.

function determineUniquenessOfArray(arr) {

    for (let i = 0; i< arr.length-1; i++) {
        for (let j = i+1; j < arr.length; j++){
            if (arr[i] === arr[j]){
                return 'not only uniques'
            }
            else {
                return 'only uniques';
            }
        }
    }
}

console.log(determineUniquenessOfArray([1,2,3,6,5]));


//2.Given an array of numbers. Find the sum of numbers’ quadratic which are even.

function sumOfArrayNumbers(arr) {
    let sum = 0;
    for (let i = 0; i< arr.length; i++){
        if (Math.sqrt(arr[i]) % 2 === 0){
            sum += arr[i];
        }
    }
    return sum;

}

console.log(sumOfArrayNumbers([1,4,9,16]));

//3.Check whether string is palindrome, or not.

function checkIfStringIsPolindrome(str) {
    let temparr = str.split('');
    let reversed = temparr.reverse().join('');

    return str === reversed;


}

console.log(checkIfStringIsPolindrome('ababa'));

//4.Given a word and a list of possible anagrams, select the correct sublist.

function findAnagram(str, arr) {
    let expectedOutput = [];

    let tempArrFromWord = str.split('').sort().toString();
    for (let i = 0; i < arr.length; i++){
        if (arr[i].split('').sort().toString() === temparrFromWord){
            expectedOutput.push(arr[i]);
        }

    }
    return expectedOutput;

}

console.log(findAnagram('listen', ['listen','google','iniets','listen']));