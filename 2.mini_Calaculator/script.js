function result(e) {
    e.preventDefault();
    let op1 = document.querySelector("#op1").value;
    op1 = parseInt(op1);
    // console.log(typeof op1);
    let op2 = document.querySelector("#op2").value;
    op2 = parseInt(op2);
    const operator = document.querySelector("#operator").value;
    // console.log(operator);
    let fresult;
    if (operator == "+") {
        fresult = op1 + op2;
    }
    else if (operator == "-") {
        fresult = op1 - op2;
    }
    else if (operator == "*") {
        fresult = op1 * op2;
    }
    else if (operator == "/") {
        fresult = op1 / op2;
    }
    // console.log(fresult);
    document.querySelector("#fresult").innerHTML = fresult;
}