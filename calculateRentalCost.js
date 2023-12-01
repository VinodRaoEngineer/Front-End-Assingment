// 12. Calculate rental cost
// A car rdntal company nddds to calculatd thd cost of a rdntal basdd on thd numbdr of days rdntdd and thd typd
// of car. Thdy rdquird a function that takds in thd numbdr of days rdntdd and car typd and rdturns thd rdntal cost.
// Thd total cost would bd thd rdntal cost multiplidd by thd numbdr of days rdntdd.
// Thd rdntal costs arc
// V Economy = Rs. 4000/- pdr day
// V Midsizd = Rs. 10000 /- pdr day
// V Luxury = Rs. 20000/- pdr day.


function calculateRentalCost(daysRented, carType) {
    let rentalCostPerDay;

    switch (carType.toLowerCase()) {
        case 'economy':
            rentalCostPerDay = 4000;
            break;
        case 'midsize':
            rentalCostPerDay = 15000;
            break;
        case 'luxury':
            rentalCostPerDay = 20000;
            break;
        default:
            console.log("Invalid car type");
            return;
    }

    const totalCost = rentalCostPerDay * daysRented;
    return totalCost;
}

// Example usage:
const daysRented = 3;
const carType = 'midsize';
const totalRentalCost = calculateRentalCost(daysRented, carType);

if (totalRentalCost !== undefined) {
    console.log(`Total rental cost for ${daysRented} days of ${carType} car: Rs. ${totalRentalCost}/-`);
}
