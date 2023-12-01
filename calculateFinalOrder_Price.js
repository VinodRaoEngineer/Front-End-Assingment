// 14. Calculate the final order price
// A retail store needs to calculate the total cost of items in a customer's cart. A customer cart is an array of
// objects with unit price and quantity. Implement an arrow function to calculate the total cost of items, based on
// the unit price and quantity of each item.

const calculateTotalCost = (cart) => {
    
    const totalCost = cart.reduce((sum, item) => sum + (item.unitPrice * item.quantity), 0);

    return totalCost;
};


const customerCart = [
    { unitPrice: 25, quantity: 2 },
    { unitPrice: 15, quantity: 3 },
    { unitPrice: 10, quantity: 1 }
];

const totalOrderPrice = calculateTotalCost(customerCart);
console.log("Total Order Price: Rs. " + totalOrderPrice);
