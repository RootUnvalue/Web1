var day = prompt("영어로 요일을 입력하세요");

if(day == "Monday")
{
    alert("월요일");
}
else if(day == "Tuesday")
{
    alert("화요일");
}
else if(day == "Wednesday")
{
    alert("수요일");
}
else if(day == "Thursday")
{
    alert("목요일");
}
else if(day == "Friday")
{
    alert("금요일");
}
else if(day == "Saturday")
{
    alert("토요일")
}
else if(day == "Sunday")
{
    alert("일요일");
}
else
{
    alert("알 수 없는 입력 값");
}

/*
if 문은 다음과 같아요.

if (조건1)
{
    명령1
}
else if (조건2)
{
    명령2
}
else
{
    명령3
}

이 식에서 조건1이 참인 경우, 명령1을 실행해요.
만약, 조건1 이 거짓인 경우에는 조건2가 참인지 거짓인지를 보고,
참이면 명령2를 실행하고, 거짓이라면 else 안에 있는 명령3을 실행해요.

*/