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
                <div class="preview_titile">Title</div>
                <div class="description">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Impedit nisi assumenda, ullam libero fuga perferendis perspiciatis quia nam recusandae debitis quae unde sint ab qui voluptatem illum voluptatibus? Fuga, ad.</div>
                <div class="recent-posts">View recent posts</div>
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
            <div class="recent-posts">View recent posts</div>
        </div>
        `

        preview.innerHTML = innerhtml;
        return preview;
    }
}