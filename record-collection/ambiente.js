var collection = { // creating an object
    2548: {
        album: "Slippery When Wet",
        artist: "Bon Jovi",
        tracks: ["Let It Rock", "You Give Love a Bad Name"]
    },

    1245: {
        artist: "Robert Palmer",
        tracks: []
    },

    8966: {
        album: "ABBA Gold"
    }
}

var collectionCopy = JSON.parse(JSON.stringify(collection));

function updateRecords(id, prop, value) {
    if (value === "") {
        delete collection[id][prop];
    } else if (prop === "tracks") {
        collection[id][prop] = collection[id][prop] || [];
        collection[id][prop].push(value);
    } else {
        collection[id][prop] = value;
    }

    return collection;
}

console.log(updateRecords(8966, "tracks", "I Have a Dream"));

// console.log(updateRecords(2548, "tracks", "Livin' On a Prayer"));