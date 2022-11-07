import App from "./js/App.js"
import QuotesAPI from "./js/QuotesAPI.js";

const root = document.getElementById("root");
const app = new App(root)
// const quote = new QuotesAPI();
console.log(QuotesAPI.getQuotes())