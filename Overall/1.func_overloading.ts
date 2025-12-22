function format(value:string):string
function format(value:number,decimal:number):number

function format(value:string|number,decimal?:number):(string|number){
    if(typeof value === 'string') return value.trim()
        return value.toFixed(decimal)
}

console.log(format('  hello  '))
console.log(format(3.14159,2))