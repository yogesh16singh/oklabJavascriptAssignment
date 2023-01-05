var result = document.querySelector(".result")
var operand1 = "";
var operand2 = "";
var operator = "";
var fresult = 0;
var isoperator = false;

function operation(elem) {
    console.log(elem.innerHTML);
    if (isoperator) {
        operand2 += elem.innerHTML;
        // console.log("operand2", operand2);
    }
    result.innerHTML += elem.innerHTML;
    switch (elem.innerHTML) {
        case ("+"):
            isoperator = true;
            operand1 = result.innerHTML;
            // console.log("operand1= ", operand1);
            operator = "+"
            break;
        case ("-"):
            isoperator = true;
            operand1 = result.innerHTML;
            // console.log("operand1= ", operand1);
            operator = "-"
            break;
        case ("*"):
            isoperator = true;
            operand1 = result.innerHTML;
            // console.log("operand1= ", operand1);
            operator = "*"

            break;
        case ("/"):
            isoperator = true;
            operand1 = result.innerHTML;
            // console.log("operand1= ", operand1);
            operator = "/"

            break;
        case ("="):
            operand1 = parseInt(operand1);
            operand2 = parseInt(operand2);
            switch (operator) {
                case ("+"):
                    fresult = operand1 + operand2;
                    break;
                case ("-"):
                    fresult = operand1 - operand2;
                    break;
                case ("*"):
                    fresult = operand1 * operand2;
                    break;
                case ("/"):
                    fresult = operand1 / operand2;
                    break;
            }
            // console.log(fresult);
            result.innerHTML = fresult;
            break;

    }
    // console.log("operand1= ", typeof operand1);
    // console.log("operand2=", typeof operand2);

}