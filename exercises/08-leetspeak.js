// Write a function "leetspeak" which is given a string, and returns the
// leetspeak equivalent of the string.
// To convert text to its leetspeak version, make the following substitutions:
// A => 4
// E => 3
// G => 6
// I => 1
// O => 0
// S => 5
// T => 7
//
// Example:
// leetspeak('Leet') --> "l337"
function leetspeak (str) {
    str2 = str.charAt(0).toLowerCase()
    str3 = str.slice(1)
    str4 = str2 + str3
    str4 = str4.replace(/A/gi,4)
    str4 = str4.replace(/E/gi,3)
    str4 = str4.replace(/G/gi,6)
    str4 = str4.replace(/I/gi,1)
    str4 = str4.replace(/O/gi,0)
    str4 = str4.replace(/S/gi,5)
    str4 = str4.replace(/T/gi,7)
    return str4
}