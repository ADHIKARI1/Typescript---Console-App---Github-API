"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Person = /** @class */ (function () {
    /*firstName : string;
    lastName : string;*/
    function Person(firstName, lastName) {
    }
    Person.prototype.greet = function () {
        console.log("From parent class");
    };
    return Person;
}());
exports.Person = Person;
var foo = new Person("samson", "doe");
