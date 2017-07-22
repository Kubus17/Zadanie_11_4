// scripts.js
function Phone(brand, price, color, memory) {
    this.brand = brand;
    this.price = price;
    this.color = color;
    this.memory = memory;
}
Phone.prototype.printInfo = function() {
    console.log("The phone brand is " + this.brand + ", color is " + this.color + " and the price is " + this.price + " and memory is " + this.memory + " GB . ");
};

var galaxyS6 = new Phone("Samsung", 3300, "black", 32),
    iPhone6S = new Phone("Apple", 2250, "white", 16),
    One = new Phone("OnePlus", 1250, "pink", 8);
iPhone6S.printInfo();
