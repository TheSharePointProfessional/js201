// Write a function "cipher" which is given a string, a shift, and returns
// the Caesar cipher of the string.
// Caesar cipher --> http://practicalcryptography.com/ciphers/caesar-cipher/
//
// Examples:
// > cipher('Genius without education is like silver in the mine', 5)
// 'ljsnzx bnymtzy jizhfynts nx qnpj xnqajw ns ymj rnsj'
// > cipher('We hold these truths to be self-evident', 8)
// 'em pwtl bpmam bzcbpa bw jm amtn-mdqlmvb'
function cipher (aString, shift) {
    var ciphertext = ""
    for(var i = 0; i < aString.length; i++) {
        var plainCharacter = aString.charCodeAt(i)
        if (plainCharacter >= 97 && plainCharacter <= 122) {
            ciphertext += String.fromCharCode((plainCharacter - 97 + shift) % 26 + 97)
        }
        else if (plainCharacter >= 65 && plainCharacter <= 90) {
            ciphertext += (String.fromCharCode((plainCharacter - 65 + shift) % 26 + 65).toLowerCase())
        } 
        else {
            ciphertext += String.fromCharCode(plainCharacter)
        }
    }
    return ciphertext
}
// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
// Write a function "decipher" which is given a string, a shift, and returns the
// decoded Caesar cipher message.
//
// Examples:
// > decipher('cvvcem cv fcyp!', 2)
// 'attack at dawn!'
// > decipher('ehz czlod otgpcrpo ty l hzzo', 11)
// 'two roads diverged in a wood'
function decipher (aString, shift) {
    var ciphertext = ""
    for(var i = 0; i < aString.length; i++) {
        var plainCharacter = aString.charCodeAt(i)
        if (plainCharacter >= 97 && plainCharacter <= 120 && plainCharacter) {
            ciphertext += String.fromCharCode((plainCharacter - 97 + shift) % 26 + 93)
            console.log(plainCharacter)
        }
        else if (plainCharacter >= 65 && plainCharacter <= 90) {
            ciphertext += (String.fromCharCode((plainCharacter - 65 + shift) % 26 + 61).toLowerCase())
            console.log(plainCharacter)
        }
        else if (plainCharacter == 121) {
            ciphertext += String.fromCharCode((plainCharacter - 97 + shift) % 26 + 119)
            console.log(plainCharacter)
        }
        else {
            ciphertext += String.fromCharCode(plainCharacter)
            console.log(plainCharacter)
        }
    }
    return ciphertext
}