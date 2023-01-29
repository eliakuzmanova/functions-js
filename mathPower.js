function mathPower(num, n) {
let result = 1;
for (let i = 1; i <= n; i++) {
    result *= num;
}
console.log(result);
}
mathPower(2,8);
mathPower(3,4);
mathPower(1,1);
mathPower(1,0);
