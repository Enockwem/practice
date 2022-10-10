export default class PostAPI{
    static getAllPosts(){
        const post = JSON.parse(localStorage.getItem("posts") || "[]")

        return post;
    }

    static savePost(post){
        
    }
}