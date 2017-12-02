// var obj = {
//     name : "Sid"
// };

// var stringObj = JSON.stringify(obj);
// console.log(typeof stringObj);
// console.log(stringObj);

// var personString  = '{"name" : "Sidd", "Age": 21}';
// var jsonstring = JSON.parse(personString);
// console.log(typeof jsonstring,jsonstring);

const fs = require("fs");

var originalNote = {
    title : "Some title",
    body : "Some body"
};

var originalNoteString = JSON.stringify(originalNote);

fs.writeFileSync("Notes.json", originalNoteString);

var noteString = fs.readFileSync("Notes.json");

var note = JSON.parse(noteString);
console.log(typeof note);
console.log(note.title);
