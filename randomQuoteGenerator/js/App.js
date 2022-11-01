export default class App{
    constructor(root){
        this.root =  root;

        this.root.innerHTML = `<div class="container">
        <div class="previous-quotes">
            <div class="quote-content previous-quote">Lorem ipsum dolor sit amet, 
                consectetur adipisicing elit. 
                Commodi ipsum eius quas architecto omnis. 
                Vel sint totam labore praesentium doloribus, 
                modi voluptates, officiis quis mollitia eius 
                consequatur suscipit ullam id.
            </div>
            <div class="author-section previous-quote">wasswaenockmale</div>
        </div>
        <div class="preview-quote-section">
            <div class="quote-content">
                A web application can help create a 
                budget for those who want to have a function.
                One can tell, the money they have, the people 
                they are expecting and then we help them make 
                a budget for them. And then make the party colorful.
            </div>
            <div class="author-section">@author wasswaenockmale</div>
            <button class="generate-btn">Generate</button>
        </div>
    </div>`
    }
}