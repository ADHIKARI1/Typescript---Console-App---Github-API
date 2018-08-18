"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Person = /** @class */ (function () {
    function Person() {
    }
    Person.prototype.greet = function () {
        console.log("From parent class");
    };
    Person.prototype.getFullName = function () {
        //getter
        return this.firstName + " " + this.lastName;
    };
    Person.prototype.setFullName = function (fname, lname) {
        this.firstName = fname;
        this.lastName = lname;
    };
    return Person;
}());
var Programmer = /** @class */ (function (_super) {
    __extends(Programmer, _super);
    function Programmer() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    // inheritance
    Programmer.prototype.greet = function () {
        console.log("Greet over writing");
    };
    Programmer.prototype.greetLikePeople = function () {
        //this.greet();
        _super.prototype.greet.call(this);
    };
    return Programmer;
}(Person));
/*interface Human{
    fname:string;
    lname:string;
    getFullName():string; // in interfaces only declare methode not body
}

class Foo implements Human{
    fname:string;
    lname:string;
    getFullName():string{
        return this.fname +" "+ this.lname;
    }
}*/
//var aPerson = new Person("samitha", "hmm");
/*aPerson.firstName = "samitha";
aPerson.lastName = "adikari";*/
//console.log(aPerson.firstName);
//console.log(aPerson.getFullName());
//var aProgrammer = new Programmer();
var aProgrammer = new Programmer();
aProgrammer.greet();
aProgrammer.setFullName("samitha", "oopz");
console.log(aProgrammer.getFullName());
//aProgrammer.greetLikePeople() // this can't access by type perosn
//let aPerson : Person
