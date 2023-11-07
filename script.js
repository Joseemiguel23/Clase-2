document.addEventListener("DOMContentLoaded", function() {
    const operando1 = document.getElementById("operando1");
    const operando2 = document.getElementById("operando2");
    const sumaBtn = document.getElementById("suma");
    const restarBtn = document.getElementById("resta");
    const multiplicarBtn = document.getElementById("multiplicar");
    const divideBtn = document.getElementById("divide");
    const resultadoSpan = document.getElementById("resultado");

    sumaBtn.addEventListener("click", function() {
        const num1 = parseFloat(operando1.value);
        const num2 = parseFloat(operando2.value);
        const result = num1 + num2;
        resultadoSpan.textContent = result;
    });

    restarBtn.addEventListener("click", function() {
        const num1 = parseFloat(operando1.value);
        const num2 = parseFloat(operando2.value);
        const result = num1 - num2;
        resultadoSpan.textContent = result;
    });

    multiplicarBtn.addEventListener("click", function() {
        const num1 = parseFloat(operando1.value);
        const num2 = parseFloat(operando2.value);
        const result = num1 * num2;
        resultadoSpan.textContent = result;
    });

    divideBtn.addEventListener("click", function() {
        const num1 = parseFloat(operando1.value);
        const num2 = parseFloat(operando2.value);
        if (num2 !== 0) {
            const result = num1 / num2;
            resultadoSpan.textContent = result;
        } else {
            resultadoSpan.textContent = "Error: División por cero";
        }
    });
});
