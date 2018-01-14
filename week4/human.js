import Animal from "./animal"

export default class Human extends Animal {
    constructor(name) {
        super();
        this.name = name;
    }

    hello() {
        console.log("Hello, my name is " + this.name);
    }
}