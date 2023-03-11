"use strict";
var A;
(function (A) {
    class FirstClass {
    }
})(A || (A = {}));
var B;
(function (B) {
    class SecondClass {
    }
    const test = new FirstClass();
})(B || (B = {}));
