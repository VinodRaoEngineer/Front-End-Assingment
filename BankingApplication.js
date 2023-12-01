// 17. Build a banking application
// A banking application needs to manage customer accounts and transactions. The user detail is stored in an
// object with a keys name and balance. Write functions using object methods to update a customer's account
// balance based on a deposit or withdrawal.


// Create a sample customer account
const customerAccount = {
    name: "John Doe",
    balance: 1000
};

// Function to deposit money into the account
const deposit = (account, amount) => {
    account.balance += amount;
    console.log(`Deposit of Rs. ${amount} successful. New balance: Rs. ${account.balance}`);
};

// Function to withdraw money from the account
const withdraw = (account, amount) => {
    if (amount <= account.balance) {
        account.balance -= amount;
        console.log(`Withdrawal of Rs. ${amount} successful. New balance: Rs. ${account.balance}`);
    } else {
        console.log("Insufficient funds. Withdrawal unsuccessful.");
    }
};

// Example usage:
console.log("Initial Account Balance: Rs. " + customerAccount.balance);

deposit(customerAccount, 500);
withdraw(customerAccount, 200);
withdraw(customerAccount, 1000); // Attempt to withdraw more than the balance

console.log("Final Account Balance: Rs. " + customerAccount.balance);
