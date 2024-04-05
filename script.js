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
