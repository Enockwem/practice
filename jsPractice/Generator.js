function* powers(n){
    for(let current = n;; current *= n){
        yield current;
    }
}

for(let power of powers(3)){
    if(power > 50) break;
    console.log(power);
}

async function findInStorage(nest, name){
    let local = await storage(nest, name);
    if(local != null) return local;

    let sources = network(nest).filter(n => n != nest.name);

}

// I need to just try something
// try{
//     setTimeout(()=>{
//         throw new Error("Woosh");
//     }, 20);
// }catch(_){
//     console.log("Caught!");
// }

let fifteen = Promise.resolve(15);
fifteen.then(value => console.log(`Got  ${value}`));