let display = document.querySelector(".display");
let buttons = document.querySelectorAll(".btn");
let expression = document.querySelector(".expression");
// let expression=document.querySelector(".expression");
let result = document.querySelectorAll(".result"); // not used yet

buttons.forEach(button => {
    button.addEventListener("click", () => {
        let val = button.textContent;
        if (val === "AC") {
            expression.textContent = "0";
        } 
        else if (val === "DC") {
            expression.textContent = expression.textContent.slice(0, -1);
            if (expression.textContent === "") {
                expression.textContent = "0";
            }
        } 
        else if (val === "=") {
            try {
                let replaceSymbols = expression.textContent.replace(/\^/g, '**');
                expression.textContent = eval(replaceSymbols);
            } catch (e) {
                expression.textContent = "Error";
            }
        }
        else {
            updateExpression(val);
        }
    });
});

function updateExpression(value) {
    if (expression.textContent === "0") {
        expression.textContent="";
        expression.textContent = value;
    } else {
        expression.textContent += value;
    }
}
