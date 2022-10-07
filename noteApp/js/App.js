import NotesAPI from "./NotesAPI.js";
import NotesView from "./NotesView.js";

export default class App{
    constructor(root){
        this.notes = [];
        this.activeNote = null;
        this.view = new NotesView(root, this._handler());
    }

    _refreshNotes(){
        const notes = NotesAPI.getAllNotes();

        this._setNotes(notes);

        if(notes.length > 0){
            this._setActiveNote(notes[0])
        }
    }

    _setNotes(notes){
        this.notes = notes;
        this.view.updateNotesList(notes);
        this.view.updateActiveNotes(notes.length > 0)
    }

    _setActiveNote(note){
        this.activeNote = note;
        this.view.updateActiveNotes(note)
    }


    _handler(){
        // call the api from this handler.
        return{
            onNoteSelect: noteId =>{
                // console.log("Note selected is "+ noteId)
                const selectedNote = this.notes.find(note => note.id === noteId);

                this._setActiveNote(selectedNote)
            },

            onNoteAdd: ()=>{
                const newNote = {
                    title: "New note ...",
                    body: "Write here ..."
                }

                NotesAPI.saveNote(newNote)
                this._refreshNotes()
            },

            onNoteEdit:(title, body)=>{
                NotesAPI.saveNote({
                    id: this.activeNote.id,
                title:title,
                    body:body
                });

                this._refreshNotes()
            },

            onNoteDelete: noteId => {
                NotesAPI.deleteNote(noteId)
                this._refreshNotes()
            }
        }
    }
}