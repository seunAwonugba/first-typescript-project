#!/usr/bin/env node

import { User } from "./user";


const prompt = require("prompt-sync")();

const inputFirstName = prompt("Please input your firstname ");

const inputLastName = prompt("Please input your last name ");

const inputAge = prompt("How old are you ");



const user1 = new User(inputFirstName, inputLastName, inputAge)

console.log(user1.getUserDetails())