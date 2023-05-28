var now = new Date();
var day = now.getDay();

switch (day) {
    case 1:
        day = "월";
        break;

    case 2:
        day = "화";
        break;

    case 3:
        day = "수";
        break;

    case 4:
        day = "목";
        break;
    
    case 5:
        day = "금";
        break;

    case 6:
        day = "토";
        break;
    
    default:
        day = "일";
        break;
}

document.write("오늘은 " + now.getFullYear() + "년 " + (now.getMonth() + 1) + "월 " + now.getDate() + "일 (" + day + ") 입니다.");
