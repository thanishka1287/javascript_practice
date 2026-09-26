//it hides implementatio details and provide essential features


class Car {
    start() {
        console.log("Car started");
    }

    drive() {
        console.log("Car is moving");
    }
}

let car = new Car();

car.start();           //car started
car.drive();           //car is moving



class ATM {
    #balance = 5000;

    checkBalance() {
        console.log("Balance:", this.#balance);
    }

    withdraw(amount) {
        if (amount <= this.#balance) {
            this.#balance -= amount;
            console.log("Withdrawal successful");
        } else {
            console.log("Insufficient balance");
        }
    }
}

let atm = new ATM();

atm.checkBalance();
atm.withdraw(1000);
atm.checkBalance();
//output:Balance: 5000
//       Withdrawal successful
//       Balance: 4000