// Check to see if a string has the same amount of 'x's and 'o's. The method must return a boolean and be case insensitive. The string can contain any char.
//
// Examples input/output:
//
// XO("ooxx") => true
// XO("xooxx") => false
// XO("ooxXm") => true
// XO("zpzpzpp") => true // when no 'x' and 'o' is present should return true
// XO("zzoo") => false

function XO(str) {
    const strX = str.toLowerCase().match(/x/g) ? str.toLowerCase().match(/x/g).length : 0;
    const strO = str.toLowerCase().match(/o/g) ? str.toLowerCase().match(/o/g).length : 0;
    return strX === strO;
}