

// class PizzShop {
//     constructor(){
//         this.orderNumber = 0
//     }

//     order(){
//         this.orderNumber++
//     }
//     dispalyOrderNumber(){
//         console.log(`current order number : ${this.orderNumber}`)
//     }
// }

// module.exports = PizzShop


const EventEmitter = require("node:events");


class PizzShop extends EventEmitter {
    constructor(){
        super()
        this.orderNumber = 0
    }

    order(size,topping){
        this.orderNumber++
        this.emit("order" , size ,topping)
    }
    dispalyOrderNumber(){
        console.log(`current order number : ${this.orderNumber}`)
    }
}

module.exports = PizzShop