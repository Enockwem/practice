export default class QuotesAPI{
    static getQuotes(){
        return fetch("https://type.fit/api/quotes")
        .then((response)=>{
            return response.json()
        })
    }
}