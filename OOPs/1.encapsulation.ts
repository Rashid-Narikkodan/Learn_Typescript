class UserEmailService{
    private isActive:boolean = true
    constructor(private email:string){}
    activate(){
        if(!this.isActive)this.isActive=true
    }
    deactivate(){
        if(this.isActive)this.isActive=false
    }
    getEmail(){
        return this.email
    }
}

const email = new UserEmailService('rashidnarikkodan20@gmail.com')
email.activate()// object email cannoot access the email or isActive in class , bcs its encapsulated