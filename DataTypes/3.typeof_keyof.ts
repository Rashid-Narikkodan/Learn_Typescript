//typeof
const name = 'rashid'
type Name = typeof name //gives type as string

//give typeof a variable which is inferred or manully typed


//keyof
const user={
    name:'rashid',
    age:17
}
type UserKeys = keyof typeof user 

//used to get union of keys of a User type as new Type