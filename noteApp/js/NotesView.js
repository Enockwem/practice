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
        });

        // Now, working with the input fields.
        [inpTitle,inpBody].forEach(inputField=>{
            // Adding a listener to each inputfield.
            inputField.addEventListener("blur", ()=>{
                const inputT = inpTitle.value.trim();
                const inputB = inpBody.value.trim();

                // Now, call the method that will communicate to the main controller, 'main.js'
                this.onNoteEdit(inputT, inputB);
            });
        });

        // note preview visibility 
        this.updateNotePreviewVisibility(false)
    }

    _createListItemHTML(id, title, body, updated){
        const MAX_LENGHT_MESSAGE = 60;

        return `
        <div class="notes__list-item" data-note-id="${id}">
            <div class="notes__list__item-title">${title}</div>
            <div class="notes__list__item-body">
                ${body.substring(0, MAX_LENGHT_MESSAGE)}
                <!--Check whether the length of the body is not greater than the MAX_LENGTH_MESSAGE value-->
                ${body.length > MAX_LENGHT_MESSAGE ? "..." : ""}
            </div>
            <div class="notes__list__item-update">${updated.toLocaleString(undefined, {dateStyle: "full", timeStyle:"short"})}</div>
        </div>
        `
    }


    // Create an update notes function
    updateNotesList(notes){
        const  itemContainer = this.root.querySelector(".notes__list");

        for (const note of notes) {
            
            const html = this._createListItemHTML(note.id, note.title, note.body, new Date(note.updated))

            itemContainer.insertAdjacentHTML("beforeend", html)
        }


        // Giving the items list a click listener.
        console.log(itemContainer.querySelectorAll(".notes__list-item"))
        itemContainer.querySelectorAll(".notes__list-item").forEach(noteItem =>{
            noteItem.addEventListener("click",()=>{
                this.onNoteSelect(noteItem.dataset.noteId)
            });

            // Double click.
            noteItem.addEventListener("dblclick", ()=>{
                const doDelete = confirm("Are you sure you want to delete this note?")

                if(doDelete){
                    // communicate to the controller.
                    this.onNoteDelete(noteItem.dataset.noteId);
                }
            })
        });
    }

    updateActiveNotes(note){
        this.root.querySelector(".notes__list__item-title").value = note.title;
        this.root.querySelector(".notes__list__item-body").value = note.body;

        this.root.querySelectorAll(".notes__list-item").forEach(noteItem =>{
            noteItem.classList.remove(".notes__list__item-selected")
        });

        this.root.querySelector(`.notes__list-item[data-note-id="${note.id}"]`).classList.add("notes__list__item-selected")
    }


    updateNotePreviewVisibility(visible){
        this.root.querySelector(".notes__preview-container").style.visibility = visible ? "visible" : "hidden"
    }
}