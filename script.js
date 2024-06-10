function incrementValue() {
    var inputField = document.getElementById('inputField');
    var value = parseInt(inputField.value);
    value++;
    var result = inputField.value = value;
    function addToTal() {
        var totalDisplay =  document.getElementById("total");
        if (result) {
          var all =  result * 125.00;
            totalDisplay.innerHTML = `$ ${all}.00` ;
        }
    }
    addToTal()
};

function decrementValue() {
    var inputField = document.getElementById('inputField');
    var value = parseInt(inputField.value);
    value--;
    var final = inputField.value = value >= 0 ? value : 0;
    function minusTotal() {
        var totalDisplayTwo = document.getElementById("total");
       if (final) {
        var finalresult = final * 125.00;
        totalDisplayTwo.innerHTML  = `$ ${finalresult}`
       }else if(final <= 0){
        totalDisplayTwo.innerHTML = "0"
       }
    }
    minusTotal()
};

function addToCart() {
    var outPut = document.getElementById("inputField");
    var outPutResult = outPut.value;
    document.getElementById("cart-btn").innerHTML = outPutResult
};


// Product class
class Product {
    constructor(id, name, price) {
      this.id = id;
      this.name = name;
      this.price = price;
    }
  }
  
  // ShoppingCartItem class
  class ShoppingCartItem {
    constructor(product, quantity) {
      this.product = product;
      this.quantity = quantity;
    }
  
    // Method to calculate the total price of the item
    getTotalPrice() {
      return this.product.price * this.quantity;
    }
  }
  
  // ShoppingCart class
  class ShoppingCart {
    constructor() {
      this.items = [];
    }
  
    // Method to get the total number of items inside the cart
    getTotalItems() {
      return this.items.length;
    }
  
    // Method to add items to the cart
    addItem(item) {
      this.items.push(item);
    }
  
    // Method to remove items from the cart
    removeItem(index) {
      this.items.splice(index, 1);
    }
  
    // Method to display cart items
    displayItems() {
      this.items.forEach((item, index) => {
        console.log(`Item ${index + 1}: ${item.product.name} - Quantity: ${item.quantity}`);
      });
    }
  
    // Method to calculate the total price of all items in the cart
    calculateTotalPrice() {
      return this.items.reduce((total, item) => total + item.getTotalPrice(), 0);
    }
  }
  
  // Test the classes
  const product1 = new Product(1, "Product 1", 10);
  const product2 = new Product(2, "Product 2", 20);
  
  const item1 = new ShoppingCartItem(product1, 2);
  const item2 = new ShoppingCartItem(product2, 1);
  
  const cart = new ShoppingCart();
  cart.addItem(item1);
  cart.addItem(item2);
  
  console.log("Total Items in Cart:", cart.getTotalItems());
  console.log("Displaying Cart Items:");
  cart.displayItems();
  console.log("Total Price of Cart:", cart.calculateTotalPrice());
  
  // Removing an item from the cart
  cart.removeItem(0);
  console.log("Total Items in Cart After Removing:", cart.getTotalItems());
  console.log("Displaying Cart Items After Removing:");
  cart.displayItems();
  console.log("Total Price of Cart After Removing:", cart.calculateTotalPrice());
  
