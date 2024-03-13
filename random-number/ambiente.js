var arrOfSeq = [];

function randomNumPush (randNumRange, exclude) {
    var genNumRand;
    do {
        var genNumRand = Math.floor(Math.random()*randNumRange);
    } while (exclude.includes(genNumRand));
    return genNumRand;
}

function generateSequence () {
    var sequence = [];
    for (var i=0; i < 6; i++) {
        var genNumRand = randomNumPush(61, sequence);
        sequence.push(genNumRand);
    }
    sequence.sort(function(a,b) {
        return a - b;
    });

    arrOfSeq.push(sequence);
    return sequence;
}

console.log(generateSequence());