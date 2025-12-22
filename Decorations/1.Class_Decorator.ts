// example 1
function Logger(constructor: Function) {
    console.log("Class created:", constructor);
  }
  
  @Logger
  class User {}


// example 2
function Timestamped(con: Function) {
    con.prototype.createdAt = new Date();
  }
  
  @Timestamped
  class Order {
    createdAt?: Date; // Type declaration for the property added by decorator
  }
  
  const order = new Order();
  console.log(order.createdAt);
  
  