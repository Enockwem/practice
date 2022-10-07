export default class NotesAPI{

    // This method will retrieve all the notes from the local storage.
    static getAllNotes(){
        const notes = JSON.parse(localStorage.getItem("notesApp-storage") || "[]")
        return notes
    }

    // Saving the notes that are written 
    static saveNote(noteToSave){
        const notes = this.getAllNotes()

        const existing = notes.find(note=>{note.id === noteToSave.id})

        if(existing){
            // Just have to edit or update.
            existing.title = noteToSave.title
            existing.body = noteToSave.body
            existing.updated = new Date().toISOString()
        }else{
            // This is when you are making a new note
            const i = Math.floor(Math.random() * 100000)
            const timeStamp = new Date().toISOString()

            noteToSave.id = i
            noteToSave.updated = timeStamp
            notes.push(noteToSave)
        }

        // Now save to the localstorage.
        localStorage.setItem("notesApp-storage", JSON.stringify(notes))

    }

    static deleteNote(id){
        
    }
}