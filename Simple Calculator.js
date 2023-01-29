function simpleCalc(num1, num2, op) {

    let result = 0;

    switch(op) {
        case "multiply":
            result = num1 * num2;
            break;
        case "divide":
            result = num1 / num2;
            break;
        case "add":
            result = num1 + num2;
            break;
        case "subtract":
            result = num1 - num2;
            break;
    }
    console.log(result);

}
simpleCalc(5,
    5,
    'multiply'
    );
simpleCalc(40,
    8,
    'divide'
    );
simpleCalc(12,
    19,
    'add'
    );
simpleCalc(50,
    13,
    'subtract'
    );
