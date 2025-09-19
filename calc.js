document.write("<table>");
document.write("<caption>Calculation Results</caption>");
document.write("<tr><th>Number 1</th><th>Operator</th><th>Number 2</th><th>Result</th></tr>");

let results = [];

while (true) {
    let inputX = prompt("Enter the first number (x) or click 'Cancel' to exit:");
    if (inputX === null) {
        break;
    }
    
    let inputY = prompt("Enter the second number (y):");
    if (inputY === null) {
        break;
    }
    
    let operator = prompt("Enter an arithmetic operator (+, -, *, /, %):");
    if (operator === null) {
        break;
    }

    let x = parseFloat(inputX);
    let y = parseFloat(inputY);
    let result;
    let isError = false;

    if (isNaN(x) || isNaN(y)) {
        result = "Error: Non-numeric input";
        isError = true;
    } else {
        switch (operator) {
            case '+':
                result = x + y;
                break;
            case '-':
                result = x - y;
                break;
            case '*':
                result = x * y;
                break;
            case '/':
                if (y === 0) {
                    result = "Error: Division by zero";
                    isError = true;
                } else {
                    result = x / y;
                }
                break;
            case '%':
                result = x % y;
                break;
            default:
                result = "Error: Invalid operator";
                isError = true;
        }
    }

    document.write(`<tr><td>${inputX}</td><td>${operator}</td><td>${inputY}</td><td>${result}</td></tr>`);

    if (!isError) {
        results.push(result);
    }
}

document.write("</table>");

// Summary Table
if (results.length > 0) {
    let min = Math.min(...results);
    let max = Math.max(...results);
    let total = results.reduce((acc, curr) => acc + curr, 0);
    let avg = total / results.length;

    document.write("<table>");
    document.write("<caption>Summary of Valid Results</caption>");
    document.write("<tr><th>Minimum</th><th>Maximum</th><th>Average</th><th>Total</th></tr>");
    document.write(`<tr><td>${min.toFixed(2)}</td><td>${max.toFixed(2)}</td><td>${avg.toFixed(2)}</td><td>${total.toFixed(2)}</td></tr>`);
    document.write("</table>");
}