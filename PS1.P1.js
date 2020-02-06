// Drew Abram
// CS400
// PS1 Problem 1

// input str: string
// output: new string with characters of str in alphabetical order
const alphabetize = str => str.split("").sort().join("");

console.log(alphabetize("supercalifragilisticexpialidocious"));