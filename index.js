// Function to calculate the difference between two integers
function calculateDifference(a, b) {
    console.log(a - b);
}

// Function to check if a number is odd
function isOdd(a) {
    if (typeof a !== "number" || a <= 0) {
        console.log("Invalid input. Try again!");
    } else {
        if (a % 2 !== 0) {
            console.log(a + " is an odd number.");
        } else {
            console.log(a + " is an even number.");
        }
    }
}

// Function to find the smallest number in an array
function findMin(arr) {
    if (arr.length === 0) {
        console.log("Invalid input. Try again!");
        return;
    }
    let min = arr[0];
    for (let i = 1; i < arr.length; i++) {
        if (arr[i] < min) {
            min = arr[i];
        }
    }
    return min;
}

// Function to filter even and odd numbers in an array
function filterEvenNumber(arr1) {
    if (!Array.isArray(arr1) || arr1.length === 0) {
        console.log("Invalid input. Provide a non-empty array!");
        return;
    }
    for (let i = 0; i < arr1.length; i++) {
        if (arr1[i] === 0) {
            console.log(arr1[i] + " is zero.");
        } else if (arr1[i] % 2 === 0) {
            console.log(arr1[i] + " is an even number.");
        } else {
            console.log(arr1[i] + " is an odd number.");
        }
    }
}

// Function to sort an array in descending order
function sortArrayDescending(arr2) {
    if (arr2.length === 0) {
        console.log("Please enter array elements!");
    } else {
        console.log(arr2.slice().sort((a, b) => b - a));
    }
}

// Function to lowercase the first letter of a string
function lowercaseFirstLetter(s) {
    if (typeof s !== "string" || s.length === 0) {
        console.log("Please enter a valid string.");
    } else {
        console.log(s.charAt(0).toLowerCase() + s.slice(1));
    }
}

// Function to find the average of an array of numbers
function findAverage(arr3) {
    if (!Array.isArray(arr3) || arr3.length === 0) {
        console.log("Please enter array elements.");
        return;
    }
    let sum = 0;
    for (let i = 0; i < arr3.length; i++) {
        sum += arr3[i];
    }
    let average = sum / arr3.length;
    return average;
}

// Function to check if a year is a leap year
function isLeapYear(year) {
    if (typeof year !== "number" || year <= 0) {
        console.log("Invalid year. Enter a positive number.");
        return;
    }
    if ((year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0)) {
        console.log(year + " is a leap year.");
    } else {
        console.log(year + " is not a leap year.");
    }
}

calculateDifference(10, 5); 
isOdd(7); 
console.log(findMin([3, 5, 1, 2]));
filterEvenNumber([0, 1, 2, 3, 4]); 
sortArrayDescending([3, 1, 4, 1, 5]); 
lowercaseFirstLetter("Hello"); 
console.log(findAverage([2, 4, 6])); 
isLeapYear(2024); 