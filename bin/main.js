#!/usr/bin/env node
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const user_1 = require("./user");
const prompt = require("prompt-sync")();
const inputFirstName = prompt("Please input your firstname ");
const inputLastName = prompt("Please input your last name ");
const inputAge = prompt("How old are you ");
const user1 = new user_1.User(inputFirstName, inputLastName, inputAge);
console.log(user1.getUserDetails());
