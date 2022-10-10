export default class PostAPI{
    static getAllPosts(){
        const post = JSON.parse(localStorage.getItem("posts") || "[]")

        return post;
    }

    static savePost(title, body){
        // This function will help me save new posts to the localstorage of the web.
        localStorage.setItem("posts",JSON.stringify({
            id:Math.floor(Math.random() * 100000),
            title,
            body,
            updated: new Date().toISOString()
        }))
    }
}