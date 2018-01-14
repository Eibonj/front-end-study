import Human from "./human";

const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});
const async = require('async');

// SushiRestaurant
// Table
// Customer
// Kitchen
// Product - id, name, price
// OrderList
// Cashier

class OrderList {
    constructor() {
        this.products = [];
        this.products.push(new Product(1, "lkjl sushi", 20));
        this.products.push(new Product(2, "lkjl sushi", 20));

        this.ordered = [];
    }

    order(productNumber) {
        var foundProduct = this.products.find(product => {
            return product.id == productNumber;
        });

        this.ordered.push()
    }
}

class SushiRestaurant {

    constructor() {
        setup();
    }

    setup() {
        this.kitchen = new Kitchen();
        this.tables = [new Table(), new Table(), new Table()];
    }

    start() {
        async.series([
            (callback) => {
                rl.question("what is your name? ", answer => {
                    console.log(answer);
                    callback();
                });
            },
            (callback) => {
                rl.question("what is your age? ", age => {
                    console.log(age);
                    callback();
                });
            },
            (callback) => {
                rl.question("what is your gender? ", gender => {
                    console.log(gender);
                    callback();
                });
            }
        ], () => {
            rl.close();
        })
    }
}
  