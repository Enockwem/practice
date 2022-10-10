export default class PostView{
    constructor(root, {onPostSelecte, onColorChange}={}){
        this.root = root;
        this.onPostSelecte = onPostSelecte;
        this.onColorChange = onColorChange;

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
    }
}