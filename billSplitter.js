// 13. Bill splitter
// A restaurant wants to calculate the total bill for a table based on the cost of each dish and the number of
// people sharing it. They require a function that takes in the cost of each dish and the number of people sharing
// it and returns an object that contains the total bill and the bill to be paid by each person in the group.

function calculateBill(costPerDish, numberOfPeople) {
    const totalBill = costPerDish.reduce((sum, cost) => sum + cost, 0);
    const billPerPerson = totalBill / numberOfPeople;

    const billDetails = {
        totalBill: totalBill,
        billPerPerson: billPerPerson
    };

    return billDetails;
}


const costPerDish = [200, 150, 100, 80]; 
const numberOfPeople = 4;

const billDetails = calculateBill(costPerDish, numberOfPeople);
console.log("Total Bill: Rs. " + billDetails.totalBill);
console.log("Bill per Person: Rs. " + billDetails.billPerPerson);
