// 1.abstraction using interface
interface PaymentGateway{
    pay(money:number):string
}
class Razorpay implements PaymentGateway{
    pay(){
       return 'success'
    }
}
// use case of interface abstraction
class OrderSerivce{
    constructor(
        private payment:PaymentGateway
    ){}
    placeOrder(order:any){
        this.payment.pay(100)//depend on interface or abstraction(what works)
        return 'orderPlaced'
    }
}
const order1 = new OrderSerivce(new Razorpay)
order1.placeOrder({product:'laptop',price:34})

/*------------------------------------------------------------------------------------------------------*/

// 2.abstraction using abstract class

abstract class PaymentGateWay{
    constructor(protected apiKey:string){}   // can use constructor in abstract class
    abstract pay(moeny:number):string        // abstract methods in abstract class
    log(money:number):void{                  //we can write normal methods also in abstract class
        console.log('payment happened')
    }
}

class RazorPay1 extends PaymentGateWay{
    pay(){
        return ''
    }
    log(money:number){}// we can also use a method thats exists in that abstract class 
    // (not neccessary to overrride log(), but pay() is neccessary bcz tats abstract method)
}




//Abstraction is a process of hiding implemntation details and expose essential behaviuors