import NotesAPI from "./NotesAPI.js";
import NotesView from "./NotesView.js";

export default class App{
    constructor(root){
        this.notes = [];
        this.activeNote = null;
        this.view = NotesView(root, this._handler());
    }

    _refreshNotes(){
        const notes = NotesAPI.getAllNotes();

        this._setNotes(notes);

        if(notes.length > 0){
            this._setActiveNote(notes[0])
        }
    }

    _setNotes(){

    }

    _setActiveNotes(note){
        this.activeNote = note;
    }

    
    _handler(){
        return{
            onNoteSelect: noteId =>{
                console.log("Note selected is "+ noteId)
            },

            onNoteAdd: ()=>{
                console.log("Note add");
            },

            onNoteEdit:(title, body)=>{
                console.log(title, body)
            },

            onNoteDelete: noteId => {
                console.log("Note deleted", noteId)
            }
        }
    }
}