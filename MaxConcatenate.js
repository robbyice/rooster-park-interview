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
    var curr = number;
    var digits = [];

    while (curr > 0) {
        digits.push(curr % 10);
        curr = parseInt(curr / 10);
    }

    return digits.reverse();
}

module.exports = maxConcatenate;

//If run with any command line arguments
if (process.argv.slice(2).length > 0) {
    var commandLineArgs = process.argv.slice(2);

    var inputArray = commandLineArgs.map( (arg) => {
        return parseInt(arg);
    });

    console.log("Input: " + inputArray);

    var result = maxConcatenate(inputArray);
    console.log("Solution: " + result);
}