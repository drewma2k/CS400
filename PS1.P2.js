// Drew Abram
// CS400
// PS1 Problem 2

// input exp: simple math expression as string
// output: a function that implements embedded operator

// the return values of this implementation don't look like the example one,
// but follows the instruction that the returned function should
// take a single string expression as input
const findOp = exp => {
    switch(exp.charAt(1)){
        case '*':
            return (expr) => expr.charAt(0) * expr.charAt(2);
        case '+':
            //use eval here to avoid concatenation
            return (expr) => eval(expr.charAt(0)) + eval(expr.charAt(2));
        case '/':
            return (expr) => expr.charAt(0) / expr.charAt(2);
        case '-':
            return (expr) => expr.charAt(0) - expr.charAt(2);
        case '%':
            return (expr) => expr.charAt(0) % expr.charAt(2);
    }
};
/* The wrong way to do it

const findOp = exp => {
    switch(exp.charAt(1)){
        case '*':
            return (left, right) => left * right;
        case '+':
            return (left, right) => left + right;
        case '/':
            return (left, right) => left / right;
        case '-':
            return (left, right) => left - right;
        case '%':
            return (left, right) => left % right;
    }
};
*/

const tests = ['4+2', '5*7', '6-1', '9/2'];
tests.map(test =>
    console.log(`${test} = ${findOp(test)(test)}`)
);

