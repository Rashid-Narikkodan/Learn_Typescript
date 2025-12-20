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

/* -------------------------------------------------------------------------------------- */

// 2.abstraction using abstract class




//Abstraction is a process of hiding implemntation details and expose essential behaviuors