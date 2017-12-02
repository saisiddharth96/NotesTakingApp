console.log("Starting App.js");

const fs = require("fs");
const _ = require("lodash");
const yargs = require("yargs");

const notes = require('./notes');

const argv = yargs.argv;
var command = argv._[0]; 

// console.log("Command",command);
// console.log("Yarg", argv);


if(command == "add" || command === 'Add'){
    // console.log("Adding new Notes");
   var noteToRead = notes.addNote(argv.title, argv.body);
    if (noteToRead) {
        console.log("Note Created");
       notes.logNote(noteToRead);
    } else {
        console.log("Please use a different title!");
    }
}
else if (command === 'read'|| command === 'Read') {
    // console.log("Reading Note");
    var noteToRead = notes.readNote(argv.title);
     if (noteToRead) {
         console.log("Note Found");
         notes.logNote(noteToRead);

     } else {
         console.log("Note not found");
     }

}
else if (command === 'Remove' || command === 'remove') {
    // console.log("Removing Note");

    var noteRemoved = notes.removeNote(argv.title);
    var message = noteRemoved ? "Note Was Removed" : "Note not found";
    console.log(message); 
} 
else if (command === "List" || command === "list") {
    // console.log("Here's the list of Notes!");
    notes.listNotes();
}
else{
    console.log("Command not recognized! Please Try Again :) ");
}
