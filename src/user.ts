export class User{
    firstName:string;
    lastNAme:string;
    age:number | string

    constructor(firstName:string, lastNAme:string, age:number ){
        this.firstName = firstName;
        this.lastNAme = lastNAme;
        this.age = age
    }

    getUserDetails():string{
        return `Hello ${this.firstName} ${this.lastNAme}, you are ${this.age} years old`
    }
}