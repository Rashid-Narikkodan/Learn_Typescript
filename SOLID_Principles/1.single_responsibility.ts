//this is wrong , bcz a Service should only responsible for a single service
//here we have a service to Order, but it contains multiple responsibilies like fetchDB, PaymentServices
class OrderSerivces{
    fetchUser(){}
    placeOrder(){}
    razorpay(){}

}

//Solved
//based on single responsibility

class RazorPay{
    pay(rupees:string){}
}
class FetchUser{
    fetch(id:string){}
}
class OrderSerivce{
    placeOrder(){
        //call other servics from here
    }
}