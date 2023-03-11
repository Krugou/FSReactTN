"use strict";
class Person {
    msg;
    constructor(msg) {
        this.msg = msg;
    }
    speak() {
        this.msg = "speak " + this.msg;
        console.log(this.msg);
    }
}
const tom = new Person("hello");
// tom.msg = "hello";
tom.speak();
