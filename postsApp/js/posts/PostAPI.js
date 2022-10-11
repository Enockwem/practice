export default class PostAPI{
    static getAllPosts(){
        const post = JSON.parse(localStorage.getItem("posts") || "[]")

        // return post
        return post.sort((a,b)=>{
            return new Date(a.updated) > new Date(b.updated) ? -1: 1;
        });
    }

    static savePost(title, body){
        // This function will help me save new posts to the localstorage of the web.
        const posts = this.getAllPosts()

        // console.log(posts)
        posts.push({id:Math.floor(Math.random() * 100000),
            title,
            body,
            updated: new Date().toISOString()})
        localStorage.setItem("posts",JSON.stringify(posts))
    }
}