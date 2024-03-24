document.addEventListener("DOMContentLoaded", function() {
    class Fruit {
        constructor(name, qty) {
            this.name = name;
            this.qty = qty;
        }

        sayHello() {
            console.log(`Fruit Name: ${this.name} Quantity: ${this.qty}`);
            alert(`Fruit Name: ${this.name} Quantity: ${this.qty}`);

        }
    }

    const fruit1 = new Fruit("Banana", 1);
    const fruit2 = new Fruit("Apple", 10);

    document.getElementById("myButton").addEventListener("click", function() {
        fruit1.sayHello();
        fruit2.sayHello();
    });
});