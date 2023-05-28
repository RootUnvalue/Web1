var day = prompt("영어로 요일을 입력하세요");

switch (day) {
    case "Monday":
        alert("월요일");
        break;
    case "Tuesday":
        alert("화요일");
        break;
    case "Wednesday":
        alert("수요일");
        break;
    case "Thursday":
        alert("목요일");
    case "Friday":
        alert("금요일");
        break;
    case "Saturday":
        alert("토요일");
        break;
    case "Sunday":
        alert("일요일");
    default:
        alert("알 수 없는 입력값")
        break;
}

/*
    switch 문은
    () 에는 변수가 입력되고, 조건식이 없어도 돼요.
    또, case와 default로 if문에서의 if, else if, else 를 대신할 수 있어요.
    case와 default를 끝낼때는 꼭 break; 를 써주어야해요.
    그렇지 않을 경우, 상황에 따라서는 코드가 연속적으로 사용될 수 있으니 주의해야해요.

    () 안의 값에 따라서 다음과 같이 코드가 작성되어 있는 경우를 볼게요.

    switch (name)
    {
        case "민수":
            document.write("민수");
            break;

        case "철수"
            document.write("철수");
            break;
        
        default:
            document.write("우리 반 학생이 아니에요.");
            break;
    }

    이 코드에서 name 이라는 변수에 "민수" 라는 값이 저장되면
    case "민수": 부분을 실행해요.
    만약 nama에 "민수" 나 "철수" 이외의 값이 저장되면
    default: 부분을 실행해요.
    
*/