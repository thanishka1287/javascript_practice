class BankAccount{
    constructor(balance){
        this.balance=balance;
    }
    deposit(amount){
        this.balance+=amount;
    }
    showBalance(){
        console.log(this.balance);
    }
}
let account=new BankAccount(1000);
account.deposit(500);
account.showBalance();              //output:1500


class BankAccount{
    #balance;
    constructor(balance){
        this.#balance=balance;
    }
    showBalance(){
        console.log(this.#balance);
    }
}
let account=new BankAccount(1000);
account.showBalance();                //output:1000
console.log(account.#balance);        //Error


class Student {
    #marks;
    constructor(marks) {
        this.#marks = marks;
    }
}
let student = new Student(95);
console.log(student.#marks);         //output:Error


class Student{
    #marks;
    constructor(marks){
        this.#marks=marks;
    }
    getMarks(){
        return this.#marks;
    }
}
let student= new Student(95);
console.log(student.getMarks());      //output:95


class BankAccount {
    #balance;
    constructor(balance) {
        this.#balance = balance;
    }
    showBalance() {
        console.log(this.#balance);
    }
}
let account = new BankAccount(5000);
account.showBalance();                   //output:5000

