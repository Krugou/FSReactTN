"use strict";
var OptionalChainingNS;
(function (OptionalChainingNS) {
    class Automobile {
        wheels;
        constructor(wheels) {
            this.wheels = wheels;
        }
    }
    const car = new Automobile({
        count: undefined
    });
    console.log("car ", car);
    console.log("wheels ", car?.wheels);
    console.log("count ", car?.wheels?.count);
    // const count = !car ? 0 
    // : !car.wheels ? 0 
    // : !car.wheels.count ? 0
    // : car.wheels.count;
})(OptionalChainingNS || (OptionalChainingNS = {}));
