// const a = require("./index")
// a.average(10,20);
// a.sum(1,2,3)

// module caching :- means remember

// const superHero = require("./superHero")
// console.log(superHero.getName())
// superHero.setName("harshit")
// console.log(superHero.getName())

// caching simply means remember whenever we change the value of any module our module remems the most recent value and when we call it again it prints that value
// const newSp = require("./superHero")
// console.log(newSp.getName())

// const PizzShop = require("./pizza.js")
// const Drink = require("./drink.js")


// const pizzaShop = new PizzShop();
// const drink = new Drink()
// pizzaShop.on("order" , (size , topping) =>{
// console.log(`order recieved! baking a ${size} pizza with ${topping}`)
// drink.serveDrint(size)
// })

// pizzaShop.order("large" , "mashroom");

// pizzaShop.order("medium" , "mashroom");
// pizzaShop.dispalyOrderNumber()


// const fs = require("node:fs");

// const content = fs.readFileSync("./text.txt", "utf8")
// console.log(content)

// fs.readFile("./text.txt","utf-8" ,(err , data)=>{
// if(err){
//     console.log(err)
// }else{
//     console.log(data)
// }
// })

// writeFileSync is a method which takes two parameters 1st files name and sencd content itself when we will run the file  it will add a new file to your folder the specific name

// fs.writeFileSync("./har.txt" , "I miss you harshit")

//this is asynchonous way

// fs.writeFile("./shai.txt" , "hii shailja gupta" , (err) =>{
//     if(err){
//         console.log(err);
//     }else{
//         console.log("hii shailja")
//     }
// })


// const fs = require("node:fs/promises");

// fs.readFile("./har.txt" , "utf-8")
// .then(data => console.log(data))
// .catch((err) => console.log(err))


// async function readFile() {
//     try{
//         const data = await fs.readFile("./har.txt" , "utf-8");
//         console.log(data)
//     }catch(err){
//         console.log(err)
//     }
// }
// readFile()

const fs = require("node:fs");

const readAbleData = fs.createReadStream("./har.txt" , {
    encoding :"utf-8",
    
    // to fix the size of data , which size of data we want by default it is 64 kilobites
    highWaterMark:2 
})

const writeAbleStream = fs.createWriteStream("./shai.txt");

readAbleData.on("data" , (chunk)=>{
console.log(chunk)
writeAbleStream.write(chunk)
})

// or we can write using pipe

readAbleData.pipe(writeAbleStream)