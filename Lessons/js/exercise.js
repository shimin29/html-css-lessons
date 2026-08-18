// e1
// var fullName = "Thor Shi Min";
// var age = "19 years old";
// var isStudent = true;
// var greeting = "Hi, my name is " + fullName + " I am " + age  + "and it is " + isStudent + " that I am a student ."

// console.log(greeting)

// e2
// Call calculateArea three times with different values
// function calculateArea(length, width) {
//     return n1 * n2;
// }
// console.log("Area: " + calculateArea(5, 5)); // 25
// console.log("Area: " + calculateArea(5, 10)); // 50
// console.log("Area: " + calculateArea(10, 10)); // 100

// // Call checkTemperature twice with different values
// function checkTemperature(temp) {
//     if (temp >= 30) {
//         return "Hot";
//     } else {
//         return "Cold";
//     }
// }
// console.log(checkTemperature(35)); // Hot
// console.log(checkTemperature(25)); // Cold

// e3

// Call getLetterGrade with five different scores
// function getLetterGrade(grade) {
//     if (grade >= 90) {
//         return "A";
//     } else if (grade >= 80) {
//         return "B";
//     } else if (grade >= 70) {
//         return "C";
//     } else if (grade >= 60) {
//         return "D";
//     } else grade >= 50;
//     {
//         return "F";
//     }
// }
// console.log("Score 95: " + getLetterGrade(95)); // A
// console.log("Score 85: " + getLetterGrade(85)); // B
// console.log("Score 75: " + getLetterGrade(75)); // C
// console.log("Score 65: " + getLetterGrade(65)); // D
// console.log("Score 55: " + getLetterGrade(55)); // F

// // Call calculateTax with four different inputs
// function calculateTax(income, taxStatus){
//     if (taxStatus =="single") {
//        if(income<= 30000){
//         return income * 0.15
//        }else{
//         return income * 0.2
//        }
// }else{
//     if(income <=50000){
//         return income * 0.1
//     }else{
//         return income * 0.15
//     }
// }
// }

// // Call calculateTax with four different inputs
// console.log("Tax for single person earning 25000: " + calculateTax(25000, "single")); // 3750
// console.log("Tax for single person earning 50000: " + calculateTax(50000, "single")); // 10000
// console.log("Tax for married person earning 40000: " + calculateTax(40000, "married")); // 4000
// console.log("Tax for married person earning 60000: " + calculateTax(60000, "married")); // 9000

// const food = ["pizza", "sushi", "nasi lemak", "roti canai ", "ice cream"];
// console.log(food.length);
// for (var i = 0; i < food.length; i++) {
//     console.log(food[i]);
// }

// food.push(" laksa");
// console.log(food);

// food.pop("laksa");
// console.log(food);

// food.shift("pizza");
// console.log(food);

// food.unshift("cendol");
// console.log(food);

// food.splice(1, 1);
// console.log(food);

// const firstThree = food.slice(0, 3);
// console.log(firstThree);

function sumArray(numbers) {
    let sum = 0;
    for (let i = 0; i < numbers.length; i++) {
        sum += numbers[i];
    }
    return sum;
}
console.log(sumArray([1, 2, 3, 4, 5, 6, 7, 8, 9, 10])); // Expected output: 55let sum = 0

function sumEvenNumbers(numbers) {
    let sum = 0;

    for (let i = 0; i < numbers.length; i++) {
        if (numbers[i] % 2 === 0) {
            sum += numbers[i];
        }
    }

    return sum;
}
console.log(sumEvenNumbers([1, 2, 3, 4, 5, 6, 7, 8, 9, 10])); // Expected output: 30

function concatenateStrings(strings) {
    let result = "";

    for (let i = 0; i < strings.length; i++) {
        result += strings[i];
    }

    return result;
}

console.log(concatenateStrings(["Hello", "World", "in", "JavaScript"]));

function countSpecificLetterFrequency(letters, specificLetter) {
    let count = 0;

    for (let i = 0; i < letters.length; i++) {
        if (letters[i] === specificLetter) {
            count++;
        }
    }

    return count;
}

console.log(countSpecificLetterFrequency(["a", "b", "a", "c", "b", "a", "d"], "a"));
