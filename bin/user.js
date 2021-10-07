"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.User = void 0;
class User {
    constructor(firstName, lastNAme, age) {
        this.firstName = firstName;
        this.lastNAme = lastNAme;
        this.age = age;
    }
    getUserDetails() {
        return `Hello ${this.firstName} ${this.lastNAme}, you are ${this.age} years old`;
    }
}
exports.User = User;
