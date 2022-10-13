import PostAPI from "./PostAPI.js";
export default class PostView{
    constructor(root, {onPreviewChange}={}){
        this.root = root;
        this.onPreviewChange = onPreviewChange;

        this.root.innerHTML = `
        <div class="container">
            <div class="sidebar__container">
                <div class="sidebar__section">Dashboard</div>
                <div class="sidebar__section">Posts</div>
                <div class="sidebar__section">Settings</div>
            </div>
            <div class="preview__section">
                <div class="preview_titile"></div>
                <div class="description"></div>
                <div class="recent-posts"></div>
            </div>
        </div>
        `

        this.root.querySelectorAll(".sidebar__section").forEach(element => {
            element.addEventListener("click",()=>{
                // window.alert("Clicked ", element.textContent)
                const section = element.textContent;
                this.onPreviewChange(section)
            })
        });
    }

    _makeAPost(){
        const preview = this.root.querySelector(".preview__section")
        const innerhtml = `
        <div class="make__post-section">
            <input type="text" class="post-title" placeholder="Write your title...">
            <textarea name="" id="" cols="30" rows="10" class="post-body">Write your post...</textarea>
            <button class="btn" style="margin-top:20px">Save Post</button>
        </div>
        `
        preview.innerHTML = innerhtml;

        // now time to add the click listener to the button 
        this.root.querySelector(".btn").addEventListener("click",()=>{
            const title = this.root.querySelector(".post-title").value;
            const body = this.root.querySelector(".post-body").value;
            if(title === "" || body === ""){
                window.alert("Can't save empty things.")
            }else{

                PostAPI.savePost(title, body)
            }
        });
    }
    showDashboard(){
        const preview = this.root.querySelector(".preview__section")
        const innerhtml = `
        <div class="preview__dashboard">
            <h1 class="welcome__note">Welcome to Enock's Dashboard</h1>
            <div class="description">I am a software developer looking to help people live better through technology.</div>
            <!--<div class="recent-posts">View recent posts</div>-->
            <button class="btn">Make a Post</button>
        </div>
        `

        preview.innerHTML = innerhtml;

        const btn = this.root.querySelector(".btn")

        btn.addEventListener("click",()=>{
            // console.log("It works")
            this._makeAPost()
        })
        // if(btn === undefined){
        // return preview;
        // }else{
        //     btn.addEventListener('click',()=>{
        //         console.log("The click listener works very well.")
        //     });

        //     return preview;
        // }
        // return preview;
    }

    _createPostSection(id, title, body, updated){
        return `
        <div class="post__section" data-post-id="${id}">
            <h2 class="post-title">${title}</h2>
            <p class="post-body">${body}</p>
            <h4 class="time-posted">${updated}</h4>
        </div>
        `
    }

    _createPostPreviewSection(title, body){
        return `
        <div class="post__preview-section">
            <nav class="preview_dashboard">
                <a href="" class="navbar-link">Home</a>
                <a href="" class="navbar-link">About</a>
                <a href="" class="navbar-link">Services</a>
            </nav>
            <div class="pre">
                <div class="post-preview-title">${title}</div>
                <div class="post-preview-body">${body}</div>
                <button class="btn">back<button>
            </div>
       </div>
        `
    }
    showPosts(){
        const posts = PostAPI.getAllPosts()
        const container = this.root.querySelector(".preview__section")

        container.innerHTML = ""
        for (const post of posts) {
            const html = this._createPostSection(post.id, post.title, post.body, post.updated)

            // container.append(html)
            
            container.insertAdjacentHTML("beforeend", html)
        }
        console.log(container)
        const postDisplay = this.root.querySelectorAll(".post__section")
        postDisplay.forEach(element=>{
            element.addEventListener('click',()=>{
                const post_id = element.dataset.postId;
                // console.log("Post id", post_id)
                let pos;
                for (const post of posts) {
                    if(post.id == post_id){
                        pos = post
                    }
                }
                
                this._createPostPreviewSection(pos.title,pos.body)
            });
        });
        return container;
    }
}