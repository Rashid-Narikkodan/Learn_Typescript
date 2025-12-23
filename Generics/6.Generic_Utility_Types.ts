interface User{
    name:string,
    age:number,
    address:string
}
type OptionalUser = Partial<User>//makes al fields optional
const user:OptionalUser={
    name:'Rashid' //now age and address considered as optional- bcz of Partial<>
}

//

type CompleteUser = Required<User>//all fields is Mandatory
const userComplete:CompleteUser={
    name:'rashid',
    age:17,
    address:'adress of me' //now we need all fields mandatory bcz Required<Type>
}
//

type ReadOnlyUser=Readonly<User>//cannot mutate any single field, all are read only
const userReadOnly:ReadOnlyUser={
    name:'shifna',
    age:17,
    address:'kidangayi'
}
userReadOnly.address// can't assign a data to address bcz its read-only

//

type UserWithSelected = Pick<User, 'name'|'age'>// Pick<T, K> - pick specific keys from a type (here from User we only took name and age)
const userSelectedFields:UserWithSelected = {
    name:'Rinshad',
    age:18,//we cannot write address here bcz its only contains specific fields
}

//
type UserRemoveFields = Omit<User, 'age'>//Omit<T, K> - pick specific keys from a type (here from User we only took name and age)
const UserWithoutAge:UserRemoveFields = {
    name:'Rinshad',
    address:'trippanachi',//we cannot write age here bcz we omitted age from User
}

//
type Role = 'admin' | 'superAdmin' | 'Manager'
type UserRecords = Record<Role, Partial<User>>//here we just create a object with fixed keys and a specific data type as value 
const users:UserRecords={
    'admin':{name:'salman'},
    'superAdmin':{name:'rinshad'},
    'Manager':{name:'rashid'}//we cant change teh keys, bcz its fixed by Records
    //also al keys shou ld present in object
}
//
function createUser(name:string,age:number){
    return {name,age}
}
type UserReturn = ReturnType<typeof createUser>//create a type of a functions return type (return typeof createUser)
const returnResult:UserReturn = createUser('rashid',17)// return value type and teh type of return result will be same
//taht ReturnType< it contains the type of a function >


//
function greet(name:string,age:number){}
type greetParams = Parameters<typeof greet>//using Parameters we will get that functions parameters as a tuple
const params:greetParams = ['rashid',23]//[name:string, age:number] 
// Parameters < typeof that function >

//
async function fetchDB(){
    return {id:1,name:'rashid',age:17}
}
type promis = Awaited<ReturnType<typeof fetchDB>>//its same as ReturnType, but since its a promis function,
//  we need to unwrap the promise layer form ReturnType, so we use Awaited< Promise<Type> >