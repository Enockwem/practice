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

        // this.root.querySelector(".btn").addEventListener("click",(event)=>{
        //     window.alert(event.target.value)
        // })

        preview.innerHTML = innerhtml;
        return preview;
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

    showPosts(){
        const posts = PostAPI.getAllPosts()
        const container = this.root.querySelector(".preview__section")

        container.innerHTML = ""
        for (const post of posts) {
            const html = this._createPostSection(post.id, post.title, post.body, post.updated)

            // container.append(html)
            container.insertAdjacentHTML("beforeend", html)
        }
        return container;
    }
}