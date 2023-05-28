document.getElementById("oper").onclick = result;

function result() {
    var a = document.getElementById("op1").value;
    var b = document.getElementById("op2").value;

    switch (document.getElementById("operator").value) {
        case "+":
            document.getElementById("result").value = parseInt(a) + parseInt(b);
            break;
        
        case "-":
            document.getElementById("result").value = a - b;
            break;
        
        case "*":
            document.getElementById("result").value = a * b;
            break;
                
        case "/":
            document.getElementById("result").value = a/b;
            break;
        
        default:
            alert("+, -, *, / 중 하나를 입력하세요.");
            break;
    }
}