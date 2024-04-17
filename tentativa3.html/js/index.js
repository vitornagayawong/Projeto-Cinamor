
cart = []

function add_cart(itemName){

    let found = false;

    for(let i = 0 ; i < cart.length ; i++){

        if(cart[i].name === itemName){
            cart[i].itemQuantity = cart[i].itemQuantity + 1; 
            found = true;

            break;
        }
    }

    if(found == false){
        cart.push(itemName)
    }

    localStorage.setItem("cart", JSON.stringify(cart));

    console.log(cart[1]);
}