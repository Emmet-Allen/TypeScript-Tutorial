"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var id = 5;
console.log('ID:', id);
var company = "Traversy Media";
var isPublised = true;
var x = "Hello";
x = 5;
var age;
age = 27;
var ids = [1, 2, 3, 4, 5];
var arr = [1, true, "hello"];
var person = ["Bob", 43, true];
var employee;
employee = [
    [1, "Jim"],
    [2, "Billy"],
    [3, "John"]
];
var player;
player = 1;
player = "Ken";
var Directon1;
(function (Directon1) {
    Directon1[Directon1["Up"] = 0] = "Up";
    Directon1[Directon1["Down"] = 20] = "Down";
    Directon1[Directon1["Left"] = 21] = "Left";
    Directon1[Directon1["Right"] = 22] = "Right";
})(Directon1 || (Directon1 = {}));
;
console.log(Directon1.Up);
console.log(Directon1.Left);
var Directon2;
(function (Directon2) {
    Directon2["Up"] = "Up";
    Directon2["Down"] = "Down";
    Directon2["Left"] = "Left";
    Directon2["Right"] = "Right";
})(Directon2 || (Directon2 = {}));
;
console.log(Directon2.Right);
var user = {
    id: 1,
    name: "John"
};
var user2 = {
    id: 1,
    name: "David"
};
var cid = 1;
var customerId = cid;
var customerID = cid;
function addNum(x, y) {
    return x + y;
}
function log(message) {
    console.log(message);
}
;
var Dog = {
    id: 2,
    name: "Coby"
};
var p1 = 5;
var add = function (x, y) { return x + y; };
var subtract = function (x, y) { return (x - y); };
var sum = add(3, 5);
console.log(sum);
var diff = subtract(5, 3);
console.log(diff);
var Person = (function () {
    function Person(id, name, married, kids) {
        this.id = id;
        this.name = name;
        this.married = married;
        this.kids = kids;
    }
    Person.prototype.getName = function () {
        return this.name;
    };
    Person.prototype.isRegistered = function () {
        return this.name + " is registered.";
    };
    return Person;
}());
var brad = new Person(23, "Brad", true);
var will = new Person(28, "Will", false, 2);
console.log(brad.married);
console.log(brad, will);
console.log(will.getName());
console.log(brad.isRegistered());
var Empl = (function () {
    function Empl(id, name, salary) {
        var _this = this;
        this.isEmployeed = function () { return true; };
        this.getFullId = function () { return _this.id + " is " + _this.name + "'s full Employee Id Number"; };
        this.id = id;
        this.name = name;
        this.salary = salary;
    }
    return Empl;
}());
var jim = new Empl(1234, "Jim", 90000);
console.log(jim.isEmployeed());
console.log(jim.getFullId());
var PerDiemEmpl = (function (_super) {
    __extends(PerDiemEmpl, _super);
    function PerDiemEmpl(id, name, salary, position) {
        var _this = _super.call(this, id, name, salary) || this;
        _this.position = position;
        return _this;
    }
    return PerDiemEmpl;
}(Empl));
var sally = new PerDiemEmpl(5678, "Sally", 1000000, "Software Engineer");
console.log(sally.name);
console.log(sally.getFullId());
console.log(sally.isEmployeed());
