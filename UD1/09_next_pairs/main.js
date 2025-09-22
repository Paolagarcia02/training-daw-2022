const assert = require('assert').strict;

function nextPairs(value) {
    let paresContiguos;
    if(value % 2 === 1){
        paresContiguos = [value-1, value+1]
    }
    else {
        paresContiguos = [value-2, value+2]  
    }
    return paresContiguos;
}
assert.deepStrictEqual(nextPairs(3), [2,4])
assert.deepStrictEqual(nextPairs(4), [2,6])