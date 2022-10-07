import NotesView from './NotesView.js'
import NotesAPI from './NotesAPI.js'

const app = document.getElementById('app')

const view = new NotesView(app, {
    onNoteAdd(){
        console.log("I have clicked it")
    },

    onNoteSelect(id){
        console.log("The Item selected is ", id)
    },

    onNoteDelete(id){
        NotesAPI.deleteNote(id);
    },

    onNoteEdit(inputT, inputB){
        console.log(inputT);
        console.log(inputB)
    }
}) 

view.updateNotesList(NotesAPI.getAllNotes())