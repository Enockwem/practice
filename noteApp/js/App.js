import NotesView from "./NotesView.js";

export default class App{
    constructor(root){
        this.notes = [];
        this.activeNote = null;
        this.view = NotesView(root, this._handler());
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