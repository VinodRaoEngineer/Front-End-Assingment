function correctQuantityBug(cart) {
    
    for (let i = 0; i < cart.length; i++) {
        cart[i] *= 2;
    }

    
    return cart;
}
const originalCart = [1, 2, 3, 4, 5];
const correctedCart = correctQuantityBug(originalCart);

console.log("Original Cart: " + originalCart);
console.log("Corrected Cart: " + correctedCart);
