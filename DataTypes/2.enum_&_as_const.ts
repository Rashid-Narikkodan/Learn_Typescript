//enum
enum Status{
    Pending="PENDING",
    Success = "SUCCESS",
    Failed = "FAILED"
}
// - create  an object and allow reverse maping
// - enumes are mutable at run time, not at compile time

// as const
const stat={
    Pending:"PENDING",
    Success:"SUCCESS",
    Failed:"FAILED"
} as const
var name="Rashid"
// - config property of an object and make all properties to false 
// - as const is immutable at run time,bcz it makes all properties of a object to readonly
