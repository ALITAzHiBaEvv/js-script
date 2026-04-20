// 1 задание: 3 переменные
let name = "Ali"; 
let age = 14;     
let nothing;      
console.log(nothing);
console.log(age < 10);
console.log(age > 10);
console.log(name / age);
console.log(typeof age);
console.log(typeof name);
// --- ЗАДАНИЕ 2: Калькулятор скидок ---

let price = Number(prompt("Введите сумму покупки в $:"));
let discount = 0;

if (price < 100) {
    discount = 0;
} else if (price >= 100 && price < 500) {
    discount = 5;
} else if (price >= 500 && price <= 1000) {
    discount = 10;
} else if (price > 1000) {
    discount = 15;
}

let discountMoney = (price * discount) / 100;
let finalPrice = price - discountMoney;

console.log("Сумма покупки: " + price + "$");
console.log("Скидка: " + discount + "%");
console.log("Итого к оплате: " + finalPrice + "$");