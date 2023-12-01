function removeDuplicates(cart) {
    const uniqueCart = [...new Set(cart)];
    return uniqueCart;
}

// Example usage:
const customerCart = ["item1", "item2", "item1", "item3", "item2"];
const cartWithoutDuplicates = removeDuplicates(customerCart);
console.log("Original Cart: " + customerCart);
console.log("Cart Without Duplicates: " + cartWithoutDuplicates);
