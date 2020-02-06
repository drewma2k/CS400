// Drew Abram
// CS400
// PS1 Problem 3

// inputs:
//    str: string
//    fun: a function
//output: the result of passing str to fun
const pass = (str, fun) => fun(str);

// tests
// thanks for the regex!
console.log(pass('supercalifragilisticexpialidocious', s => s.replace(/c/g, '*c').split('*')));

console.log(pass('supercalifragilisticexpialidocious', (s) =>
    ({ originalString: s,
      modifiedString: s.replace(/a/g, 'A'),
      numberReplaced: s.replace(/a/g, 'A').match(/A/g).length,
      length: s.length
    })
));

