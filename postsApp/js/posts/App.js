import PostView from "./PostView.js";

export default class App{
    constructor(root){
        this.root = root
        this.view = new PostView(this.root)
    }
}