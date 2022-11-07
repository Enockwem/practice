export default class QuotesAPI{
    static getQuotes(){
        return fetch("https://type.fit/api/quotes")
        .then((response)=>{
            console.log(response.status)
            return response.json()
        }).then((data)=>{
            console.log(data)
        })
    }
}