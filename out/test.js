"use strict";
var Person = /** @class */ (function () {
    function Person() {
    }
    Person.prototype.greet = function () {
        console.log("From parent class");
    };
    return Person;
}());
