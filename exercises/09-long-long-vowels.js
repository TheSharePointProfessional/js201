// Write a function "longLongVowels" which is given a string, and returns a
// version of that string extending any long vowels to 5 characters.
//
// Examples:
// > longLongVowels('Good')
// 'Goooood'
// > longLongVowels('Cheese')
// 'Cheeeeese'
// > longLongVowels('Man')
// 'Man'
function longLongVowels (str) {
    newStr = str.replace("aa", "aaaaa")
    newStr = newStr.replace("ee", "eeeee")
    newStr = newStr.replace("ii", "iiiii")
    newStr = newStr.replace("oo", "ooooo")
    newStr = newStr.replace("uu", "uuuuu")
    return newStr
}