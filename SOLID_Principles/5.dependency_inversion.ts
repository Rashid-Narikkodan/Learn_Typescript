interface PaymentGateway{
    payment(rupees:number):string
}
class RazorPay implements PaymentGateway{
    payment(rupees:number): string {
        return ''
    }
}
class PayPal implements PaymentGateway{
    payment(rupees:number): string {
        return ''
    }
}
class OrderService{
    constructor(private payment:PaymentGateway){}
    placeOrder(product:string,price:number){
        //validation
        //db fetch
        this.payment.payment(20)
    }
}

const order = new OrderService(new RazorPay())

//high level modules should not depend on low level modules(both shouldn't be in a class),
//Both should depend on a abstract class

//Abstraction(interface) should not depend on details, but details should depend on abstraction(interface)