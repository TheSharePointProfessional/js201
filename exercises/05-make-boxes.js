// Write a function "makeSquare" which is given a size and returns a square of
// that size using asterisks.
// Example:
// makeSquare(5)
// *****
// *****
// *****
// *****
// *****
function makeSquare (size) {
    var str = []
    var asterisk = "*".repeat(size)
    var i = 0
    while (i < size) {
        str.push(asterisk)
        i++
    }
    return str.join('\n')
}
// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
// Write a function "makeBox" which is given a width and height and returns a
// hollow box of those dimensions.
// Example:
// makeBox(6, 4)
// ******
// *    *
// *    *
// ******
function makeBox (width, height) {
    // build outter rows loop
    var i = 1
    var outter = []
    var asterisk = "*"
    while (i <= width) {
        outter.push(asterisk)
        i++
    }
    outterString = outter.join("")
    // build inner rows loop
    i = 1
    var inner = []
    var newasterisk = " "
    while (i <= width) {
        if (i === 1) {
            inner.push(asterisk)
            i++
        }
        else if (i === width) {
            inner.push(asterisk)
            i++
        }
        else {
            inner.push(newasterisk)
            i++
        }
    }
    innerString = inner.join("")
    // build a box using outterString & innerString
    var box = []
    var i = 1
    while (i <= height) {
        if (i === 1) {
            box.push(outterString)
            i++
        }
        else if (i === height) {
            box.push(outterString)
            i++
        }
        else {
            box.push(innerString)
            i++
        }
    }
    return box.join("\n")
}
// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
// Write a function "makeBanner" which is given some text and returns a banner
// with a border surrounding the text. The border should stretch to the length
// of the text.
// Example:
// makeBanner('Welcome to DigitalCrafts')
// ****************************
// * Welcome to DigitalCrafts *
// ****************************
function makeBanner (text) {
    // count characters in the text
    stringCounter = text.length
    borderLength = stringCounter + 4
    // build an outter row
    var outterString = "*".repeat(borderLength)
    // build the inner row
    var inner = []
    var space = " "
    var asterisk = "*"
    var i = 0
    while (i <= 4) {
        if (i === 0) {
            inner.push(asterisk)
            i++
        }
        else if (i === 1) {
            inner.push(space)
            i++
        }
        else if (i === 3) {
            inner.push(space)
            i++
        }
        else if (i === 4) {
            inner.push(asterisk)
            i++
        }
        else {
            inner.push(text)
            i++
        }
    }
    completedInner = inner.join("")
    // build the banner
    var banner = []
    i = 1
    while (i <= 3) {
        if (i === 2) {
            banner.push(completedInner)
            i++
        }
        else {
            banner.push(outterString)
            i++
        }
    }
    return banner.join('\n')
}
console.log(makeBanner('Welcome to DigitalCrafts'))