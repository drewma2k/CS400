// Drew Abram
// CS400
// PS2 P2

//generator that takes a sentence and emits words
function* getWords (sentence) {
    let words = sentence.split(" ");
    for (const word of words) {
        yield word;
    }
}

//testing
const Mywords = getWords('All I know is something like a bird within her sang');
let next = Mywords.next();
while (next.done !== true){
    console.log(next.value);
    next = Mywords.next();

}