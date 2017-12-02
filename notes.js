console.log('Starting Notes.js');

const fs = require("fs");

var fetchNotes = ()=>{
    try {
        var read_data = fs.readFileSync("notes-data.json");
        return JSON.parse(read_data);
    } catch (error) {
        return [];
    }
};

var saveNotes = (notes) =>{
    fs.writeFileSync("notes-data.json",JSON.stringify(notes));
};

var addNote = (title,body) =>{
    var notes = fetchNotes();
    var note = {
        title,body
    };
    var duplicateNotes = notes.filter((note)=> note.title === title);
    if(duplicateNotes.length === 0){
        notes.push(note);
        saveNotes(notes);
        return note;
    }
};

var listNotes = () =>{
    console.log(`Here's a list of your notes!`);
};

var readNote = (title)=>{
    var notes = fetchNotes();
    var noteFound = notes.filter((note)=> note.title === title);
    return noteFound[0];

};

var removeNote = (title) =>{
    //console.log(`Removing note with title "${title}"`);
    var notes = fetchNotes();
    var filteredNotes = notes.filter((note)=> note.title !== title);
    saveNotes(filteredNotes);

    return notes.length !== filteredNotes.length;    
};

var logNote = (noteToRead) =>{
    debugger; 
    console.log("--");
    console.log(`Title :- ${noteToRead.title}`);
    console.log(`Note:- ${noteToRead.body}:`);
};


module.exports = {
    addNote, listNotes,readNote,removeNote,logNote
};