var contacts = [ // é um array com length = 3
    {
        firstName: "Malu",
        lastName: "Becker",
        number: "0597846254", //estamos usando o num como string, pois começa com 0
        likes: ["Running", "Math", "Donuts"]
    },

    {
        firstName: "James",
        lastName: "Barns",
        number: "unknown",
        likes: ["Cars", "Football", "Pizza"]
    },

    {
        firstName: "Erika",
        lastName: "Dowson",
        number: "04589726478",
        likes: ["Guitar", "Coding", "Fries"]
    }
];

/* Se o nome não bater com os da lista então deve retornar "No such content" e 
caso haja o nome, mas não haja a propriedade deve retornar "No such property"
*/

function lookUpProfile(name, prop) {
    for (var i = 0; i < contacts.length; i++) {
        if (contacts[i].firstName === name) {
            return contacts[i][prop] || "No such property";
        }
    }
    return "No such contact";
}  

var data = lookUpProfile("Malu", "number");
console.log(data);

/*
var person = {"Person Name": "Juliet", age: 35};

var person2 = [{"Person Name": "Jude", age: 27}];

console.log(person["Person Name"] + " " + person.age);
console.log(person2[0]["Person Name"] + " " + person2[0]["age"])
*/