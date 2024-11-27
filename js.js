document.getElementById("number-form").addEventListener("submit", function (event) {
    event.preventDefault();

    const num1 = parseFloat(document.getElementById("number1").value);
    const num2 = parseFloat(document.getElementById("number2").value);
    const num3 = parseFloat(document.getElementById("number3").value);

    let resultMessage;

    if (num1 === num2 && num2 === num3) {
        resultMessage = "Усі три числа однакові.";
    } else {
        const max = Math.max(num1, num2, num3);
        resultMessage = `Найбільше число: ${max}`;
    }

    document.getElementById("result").innerText = resultMessage;
});