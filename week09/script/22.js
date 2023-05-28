num1 = prompt("첫 번째 수를 입력하세요.");
operator = prompt("연산자를 입력하세요.\n+, -, *, /");
num2 = prompt("두 번째 수를 입력하세요.");

switch(operator)
{
    case "+":
        alert("계산 결과: " + (parseInt(num1) + parseInt(num2)));
        break;

    case "-":
        alert("계산 결과: " + (num1 - num2));
        break;

    case "*":
        alert("계산 결과: " + (num1 * num2));

    case "/":
        alert("계산 결과: " + (num1 / num2));
}