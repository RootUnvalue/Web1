var delay = prompt("지연시킬 시간(초)를 입력하시오.");
delay *= 1000;
var str = prompt("출력할 문장을 입력하시오.");

function show(){
    document.write(str)
}

setTimeout(show, delay);