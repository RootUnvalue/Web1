var now = new Date();
var time = now.getTime();

var year = Math.floor(time / (1000*86400) / 365);
var month = Math.floor(year / 12) + 1;
var day = Math.floor(time / 1000 / 86400 % 365 / 12);

var hours_12 = Math.floor(time / (1000 * 60 * 60) % 24 % 12) + 9; //12시간 표기
var hours_24 = Math.floor(time / (1000 * 60 * 60) % 24) + 9; //24시간 표기
var minutes = Math.floor((time % (1000 * 60 * 60)) / (1000 * 60)); // 시간 -> 분

if(hours_12 >= 12){
    hours_12 -= 12;
}
if(hours_24 >= 24){
    hours_24 -= 12;
}

document.write((1970 + year) + "년 " + month + "월 " + day + "일 입니다.<br>");
document.write("12시간 표기 : " + hours_12 + "시 " + minutes + "분 입니다.<br>");
document.write("24시간 표기 : " + hours_24 + "시 " + minutes + "분 입니다.<br>");