// Drew Abram
// CS400
// PS2 P1

//fibonacci number generator
function* fibs () {
    let [val1, val2, result] = [0, 1, 0];
    yield val1;
    yield val2;
    while (true) {
        result = val1+val2;
        val1 = val2;
        val2 = result;
        yield result;
    }
}

//even fibonacci numbers
function* evenFibs () {
    let Fibs = fibs();
    while (true){
        let next = Fibs.next().value;
        while ((next % 2) !== 0){
            next = Fibs.next().value
        }
     yield next
    }
}

//test code
getEvens = evenFibs();
let count = 6;
while (count --> 0) {
    console.log(getEvens.next().value);
}
