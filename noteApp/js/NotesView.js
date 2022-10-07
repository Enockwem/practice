export default class NotesView{
    constructor(root, {onNoteSelect, onNoteAdd, onNoteEdit, onNoteDelete} = {}){
        this.root = root;
        this.onNoteSelect = onNoteSelect;
        this.onNoteAdd = onNoteAdd;
        this.onNoteEdit = onNoteEdit;
        this.onNoteDelete = onNoteDelete;


        this.root.innerHTML = `
        <div class="sidebar-container">
            <button type="button" class="button_add">Add Notes</button>
            <div class="notes__list"></div>
        </div>
        <div class="notes__preview-container">
            <input type="text" class="notes__title" placeholder="Enter the title...">
            <textarea name="" id="" cols="30" rows="10" class="notes__body">Write a note...</textarea>
        </div>
        `;


        // Working on the eventListeners 
        const btnAdd = this.root.querySelector(".button_add")
        const inpTitle = this.root.querySelector(".notes__title")
        const inpBody = this.root.querySelector(".notes__body")

        btnAdd.addEventListener('click',()=>{
            // This method should communicate the click to the main.js
            this.onNoteAdd();
        })
    }
}