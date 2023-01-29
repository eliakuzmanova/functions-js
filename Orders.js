function orders(product, n) {
    let price = 0;

    if (product === "coffee") {
        price = 1.50;
    } else if (product === "water") {
        price = 1;
    } else if (product === "coke") {
        price = 1.40;
    } else {
        price = 2;
    }
    
    console.log(`${(price * n).toFixed(2)}`);
}
orders("water", 5);
orders("coffee", 2);

// •	coffee - 1.50
// •	water - 1.00
// •	coke - 1.40
// •	snacks - 2.00
