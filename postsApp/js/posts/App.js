import PostView from "./PostView.js";

export default class App{
    constructor(root){
        this.root = root
        this.view = new PostView(this.root, this._handler())
    }

    _handler(){
        return {
            onPreviewChange: section=>{
                switch(section){
                    case "Dashboard":
                        // window.alert("Dashboard")
                        this.view.showDashboard()
                        break;
                    case "Posts":
                        this.view.showPosts()
                        break;
                    case "Settings":
                        window.alert("Settings")
                        break;
                    default:
                        window.alert("Nothing selected")
                        break;

                }
            }
        }
    }
}