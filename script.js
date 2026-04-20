let myName = "John"; 
let myNumber = 42;
let empty; 
console.log(empty);             
console.log(myNumber < 0);       
console.log(myNumber > 0);      
console.log(myName / myNumber);
console.log(typeof myNumber);    
console.log(typeof myName);      
let totalPrice = Number(prompt("Введите сумму покупки ($):"));
let discountPercent = 0;

if (totalPrice < 100) {
    discountPercent = 0;
} else if (totalPrice >= 100 && totalPrice < 500) {
    discountPercent = 5;
} else if (totalPrice >= 500 && totalPrice <= 1000) {
    discountPercent = 10;
} else if (totalPrice > 1000) {
    discountPercent = 15;
}
let discountValue = (totalPrice * discountPercent) / 100; 
let finalAmount = totalPrice - discountValue;          
console.log("--- Калькулятор скидок ---");
console.log(`Сумма покупки: ${totalPrice}$`);
console.log(`Скидка: ${discountPercent}%`);
console.log(`Вы сэкономили: ${discountValue}$`);
console.log(`Итоговая сумма к оплате: ${finalAmount}$`);