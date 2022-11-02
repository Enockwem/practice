import QuotesAPI from "./QuotesAPI"


export default class QuoteController{
    constructor({onGenerate,onQuoteSelected}={}){
        
    };

    // return only one quote
    generateQuote(){
        return new QuotesAPI.getQuotes().then((data)=>{
            data
        })
    }

}