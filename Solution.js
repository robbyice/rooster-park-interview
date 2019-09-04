function maxConcatenate(inputArray) {
    inputArray.sort(sortByMaxConcatValue);

    return inputArray.join("");
}

function sortByMaxConcatValue(a, b) {
    var aDigits = intToDigitArray(a);
    var bDigits = intToDigitArray(b);

    var curr = 0;

    while(aDigits[curr] || bDigits[curr]) {
        if (!aDigits[curr]) { return 1; }
        if (!bDigits[curr]) { return -1; }

        if (aDigits[curr] > bDigits[curr]) { return -1; }
        if (bDigits[curr] > aDigits[curr]) { return 1; }

        curr++;
    }

    return 0;
}

function intToDigitArray(number) {
    console.log("number: " + number);
    var curr = number;
    var digits = [];

    while (curr > 0) {
        digits.push(curr % 10);
        curr = parseInt(curr / 10);
    }

    return digits.reverse();
}

var input1 = [1,2,3];
var input2 = [42, 39];
var input3 = [1, 10, 100];

var result1 = maxConcatenate(input1);
console.log("Actual: " + result1);
console.log("Expected: " + 321);

var result2 = maxConcatenate(input2);
console.log("Actual: " + result2);
console.log("Expected: " + 4239);

var result3 = maxConcatenate(input3);
console.log("Actual: " + result3);
console.log("Expected: " + 110100);

// var result4 = intToDigitArray(123);
// console.log(result4);
//
// var result5 = sortByMaxConcatValue([1, 2], [1]);
// console.log(result5);