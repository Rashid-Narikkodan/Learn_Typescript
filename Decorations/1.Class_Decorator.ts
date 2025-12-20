// example 1
function Logger(constructor: Function) {
    console.log("Class created:", constructor.name);
  }
  
  @Logger
  class User {}


// example 2
function Timestamped(constructor: Function) {
    constructor.prototype.createdAt = new Date();
  }
  
  @Timestamped
  class Order {
    createdAt?: Date; // Type declaration for the property added by decorator
  }
  
  const order = new Order();
  console.log(order.createdAt);
  
  