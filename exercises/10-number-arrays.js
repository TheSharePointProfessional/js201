// Write a function "sumNumbers" which is given an array of numbers and returns
// the sum of the numbers.
// Example:
// sumNumbers([1, 4, 8]) --> 13
function sumNumbers(array) {
    function getSum(total, num) {
        var total = 0
        var num = 0
        var sum = total + num
        return sum
    }
    return array.reduce(getSum)
}
// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
// Write a function "positiveNumbers" which is given an array of numbers and
// returns a new array containing only the positive numbers within the given array.
// Examples:
// positiveNumbers([1, -3, 5, -3, 0]) --> [1, 5, 0]
// positiveNumbers([1, 2, 3]) --> [1, 2, 3]
// positiveNumbers([-1, -2, -3]) --> []
function positiveNumbers() {

}