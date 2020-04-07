//1. Given a number. Print “odd” if the number is odd and “even” if it’s even.

function evenOrOdd(num) {
    if (typeof num === "number" && !isNaN(num) && num % 2 === 0) {
        return num + " is even"
    } else return num + " is odd"
}

//console.log("1 is " + evenOrOdd(true));
//console.log("2 is " + evenOrOdd(2));
// console.log("3 is " + evenOrOdd(3));
// console.log("4 is " + evenOrOdd(4));

//2. Given two numbers print 1 if one of them is divisible by the other one, otherwise print 0.
function divisibleByEachOther(num1, num2) {
    if (num1 % num2 === 0 || num2 % num1 === 0) {
        return "1";
    } else return "0";

}

// console.log(divisibleByEachOther(1, 2));
// console.log(divisibleByEachOther(2, 3));
// console.log(divisibleByEachOther(3, 1));

//3. Given two variables, which are the angles of a triangle. Find the third angle of the triangle. (Sum of the angles of a triangle equals 180 degrees).
function findAngleOfTrinagle(angle1, angle2) {
    if (angle1 + angle2 < 180 && angle1 > 0 && angle2 > 0) {
        const angle3 = 180 - (angle1 + angle2);
        return angle3;
    } else return "This is not a trinagle";
}

// console.log(findAngleOfTrinagle(0, 70))
// console.log(findAngleOfTrinagle(10, 10))

//4. Given number n (positive integer). Print the value of n + nn + nnn(not multiplication).
function findSumOfDigitOfInteger(num) {
    if (typeof num === "number" && !isNaN(num)) {
        return "" + num + num * 2 + num * 3;
    } else return "not a number";

}

// console.log(findSumOfDigitOfInteger(100))
// console.log(findSumOfDigitOfInteger("asdasd"))
// console.log(NaN)

//5. Given a positive integer. Bring the last digit of the number to the beginning. Print the new
//number. If the last digit of the inserted number is 0, number remains the same.
function poxelTexery(num) {
    if (typeof num === "number" && !isNaN(num)) {
        const lastDigit = num % 10;
        let finalString = ('' + lastDigit + num);
        if (lastDigit !== 0) {
            return finalString.substr(0, lastDigit1.length - 1);
        } else return num;
    } else return "not a number";
}

//console.log(poxelTexery(NaN))

//6. Given five numbers as input. Calculate and print the average of the numbers(withoutusing arrays).
function averageOfNumbers(num1, num2, num3, num4, num5) {
    return (num1 + num2 + num3 + num4 + num5) / 5;
}

//console.log(averageOfNumbers(1, 2, 3, 4, 5))

//7. Check if a number is a multiple of 3, 5 or 7 and output the appropriate message.
function getDivisibleBy_3_5_7(num) {
    if (num % 3 === 0 && num % 5 === 0 && num % 7 === 0) {
        return "Divisible by 3, 5, 7";
    } else if (num % 3 === 0 && num % 5 === 0) {
        return "Divisible by 3 and 5";
    } else if (num % 5 === 0 && num % 7 === 0) {
        return "Divisible by 5 and 7";
    } else if (num % 3 === 0 && num % 7 === 0) {
        return "Divisible by 3 and 7";
    } else if (num % 3 === 0) {
        return "Divisible by 3"
    } else if (num % 5 === 0) {
        return "Divisible by 5";
    } else if (num % 7 === 0) {
        return "Divisible by 7"
    }
    return "Something went wrong"

}

//console.log(getDivisibleBy_3_5_7(105));


//8. Given an age, figure out whether someone is a baby(1 months - 12 months), toddler (1
//year - 2 years), child(3 years - 12 years ), teenager(13 years - 17 years) or adult(18
//years and more ). Also check that age in months is between 1 and 12.
function determineAge(num, month) {
    if ((num >= 1 || num <= 12) && month === "months") {
        return "baby";
    } else if ((num >= 1 || num <= 2) && month === "year") {
        return "toddler";
    } else if ((num >= 3 || num <= 12) && month === "year") {
        return "child";
    } else if ((num >= 13 || num <= 17) && month === "year") {
        return "teenager";
    } else if (num >= 18 && month === "year") {
        return "adult";
    }
    return "Entered values are incorrect";
}

//console.log(determineAge(3, "yearssss"))

//9. Given three numbers. Sort them by the ascending order.
function ascendingSort(num1, num2, num3) {
    if (num1 < num2 && num1 < num3) {
        if (num2 < num3) {
            return "" + num1 + " " + num2 + " " + num3;
        } else return "" + num1 + "" + num3 + "" + num2;
    } else if (num2 < num1 && num2 < num3) {
        if (num1 < num3) {
            return "" + num2 + " " + num1 + " " + num3;
        } else return "" + num2 + " " + num1 + " " + num3;
    } else if (num3 < num1 && num3 < num2) {
        if (num1 < num2) {
            return " " + num3 + " " + num1 + " " + num2;
        } else return " " + num3 + " " + num2 + " " + num1;
    } else return "Something went wrong"
}

//console.log(ascendingSort(NaN, 7, 3))


//10. Percentage marks obtained by a student in three exams are to be entered to a
// computer. An indication of Pass or Fail is given out after the three marks are entered.
// The criteria for passing are as follows:
// a. A student passes if all three examinations are passed.
// b. Additionally a student may pass if only one subject is failed but the overall
// average is greater than or equal to 50.
// The pass mark for an individual subject is 40.
function passOrFailExam(num1, num2, num3) {
    if ((num1 > 40 && num2 > 40 && num3 > 40) || (num1 + num2 + num3) >= 50) {
        return "Passed";
    } else return "Not Passed";
}

//console.log(passOrFailExam(65, 70, 70))


//11. Find the sign of product of three numbers without multiplication operator. Display the
// specified sign.
function findSignOfProduct(num1, num2, num3) {
    if (num1 === 0 || num2 === 0 || num3 === 0) {
        return "unsigned"
    } else if (num1 < 0 && num2 < 0 && num3 < 0) {
        return "The sign is -"
    } else if (num1 > 0 && num2 < 0 && num3 < 0) {
        return "The sign is +"
    } else if (num1 < 0 && num2 > 0 && num3 < 0) {
        return "The sign is +"
    } else return "The sign is -"
}

console.log(findSignOfProduct(0, -2, -3))

//12. Input three numbers a, b, c respectively, where a is a non zero number and write a
// program to solve quadratic equations: . (Hint: use Math.pow or Math.sqrt).
function quadraticEquation(a, b, c) {
    const solution1 = (-1 * b + Math.sqrt((Math.pow(b, 2) - 4 * a * c))) / 2;
    const solution2 = (-1 * b - Math.sqrt((Math.pow(b, 2) - 4 * a * c))) / 2;
    if (a === 0) {
        return "Enter valid constant"
    } else if ((Math.pow(b, 2) - 4 * a * c) < 0)
        return "Solution does not exist";
    else if (solution1 === solution2) {
        return "Solution is " + solution1
    }

    return "Solutions are " + solution1 + " and " + solution2
}

//console.log(quadraticEquation(5, 0, 0))

//13. Given the following code rewrite it using only two if operators. (Hint: use logical
// operators).
var n = +prompt();
var i = 0;
var j = 0;
if (n % 2 === 0 && Math.floor(n / 10)) {
    i += 1
}
if (n % 3 === 0 && n % 10 === 1) {
    j += 1

}


//14. Insert a digit and a number. Check whether the digits contains in the number or not.
function checkDigitOfNumber(digit, num) {
    let lastDigit = num % 10;
    while (num > 0) {
        num = Math.floor(num / 10)
        if (lastDigit === digit || digit === num){
            return "Yes"
        }


    }return "No";
}

console.log(checkDigitOfNumber(2, 0))


//15. Enter a number. Reverse its first and last digits. Print the new number.
function reverseFirstAndLastDigits(num) {
    const lastDigit = num % 10;
    if (lastDigit !== num) {
        const middleDigits = num.toString();
        while (num >= 10) {
            num = Math.floor(num / 10);
            firstDigit = num;
        }
        //console.log("firstDigit---" + firstDigit);
        return "" + lastDigit + middleDigits.substr(1, middleDigits.length - 2) + firstDigit;
    }
    return num
}

console.log(reverseFirstAndLastDigits(10));


//17. Write a program which will compute the area of a rectangular or a triangle after
// prompting the user to type the name of the figure name. Also check that entered
// numbers are positive.
// For the triangle entered numbers are height and and base.
function computingofArea(typeofRectangular, num1, num2) {
    areaOfTringale = num1 * num2 / 2;
    areaOfRectange = num1 * num2;
    if (num1 !== 0 && num2 !== 0) {
        if (typeofRectangular === "trinagle") {
            return areaOfTringale;
        } else if (typeofRectangular === "rectange") {
            return areaOfRectange;
        } else return "1"
    } else return "Something went wrong"

}

//console.log(computingofArea("trinagle", 77, 77))


//18. (***) Enter a number. Find the difference between its biggest and smallest digits.
function findDifferenceBetweenBiggestAndSmallest(num) {

    let smallestNumber = 9;
    let largestNumber = 0;

    while (num > 0) {
        let specificNumber = num % 10;
        largestNumber = Math.max(specificNumber, largestNumber);
        smallestNumber = Math.min(specificNumber, smallestNumber);
        num = Math.floor(num / 10);
    }
    return largestNumber - smallestNumber;

}

//console.log(findDifferenceBetweenBiggestAndSmallest(1))