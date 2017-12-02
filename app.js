//console.log("Starting App.js");

const fs = require("fs");
const _ = require("lodash");
const yargs = require("yargs");

const notes = require('./notes');
const title ={
    describe : "Title of note",
    demand : true,
    alias : "t"
};
const body =  {
    describe : "Body of Note",
    demand : true,
    alias : "b"                
};

const argv = yargs.
        command("add","Add a new Note",{
            title,
            body 
        })
        .command("list" , "List out the existing notes")
        .command("read", "Reads a specific note",{
            title 
        })
        .command("remove", "Remove a specific note",{
            title
        })
        .help()
        .argv;
var command = argv._[0]; 

// console.log("Command",command);
// console.log("Yarg", argv);


if(command == "add" || command === 'Add'){
    // console.log("Adding new Notes");
   var noteToShow = notes.addNote(argv.title, argv.body);
    if (noteToShow) {
        console.log("Note Created");
       notes.logNote(noteToShow);
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
   var allNotes = notes.listNotes();
   console.log(`Printing ${allNotes.length} notes(s)`);
   allNotes.forEach(note => {
       notes.logNote(note);
   });
}
else{
    console.log("Command not recognized! Please Try Again ) ");
}
