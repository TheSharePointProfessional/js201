// Write a function "factors" which is given a number and returns an array
// containing all its factors.
// What are factors? --> https://tinyurl.com/gncg62o
function factors (num) {
    var array = []
    if (num === 1) {
        array.push(1)
    }
    else {
        var half = Math.floor(num / 2) // Ensures a whole number <= number.
        array.push(1) // 1 will be a part of every solution.
        i = 0
        j = 0
        // Determine our increment value for the loop and starting point.
        num % 2 === 0 ? (i = 2, j = 1) : (i = 3, j = 2);
        for (i ; i <= half ; i += j) {
            num % i === 0 ? array.push(i) : false;
        }
        array.push(num); // Always include the original number.
    }
    return array
}
console.log(factors(1))