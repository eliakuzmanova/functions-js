function formatGrade(grade) {
    let print;
    let isPassed = true;
    if (grade < 3) {
        isPassed = false;
        console.log(`Fail (2)`);
    } else if (grade < 3.50) {
        print = "Poor"
    } else if (grade < 4.50) {
        print = "Good"
    } else if (grade < 5.50) {
        print = "Very good"
    } else {
        print = "Excellent"
    }
    
    if(isPassed) {
        console.log(`${print} (${grade.toFixed(2)})`);
    }
}
formatGrade(2);
formatGrade(3.33);
formatGrade(4.56);
formatGrade(5.50);