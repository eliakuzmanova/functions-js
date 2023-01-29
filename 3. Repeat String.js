function stringRepeat(str, n) {
    let total = "";
    for (let i = 1; i <= n; i++) {
        total += str;
    }
    console.log(total);
}
stringRepeat("abc", 3);
stringRepeat("String", 2);
