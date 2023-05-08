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