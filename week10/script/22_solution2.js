var today = new Date();
today.setHours(0);
today.setMinutes(0);
today.setSeconds(0);
today.setMilliseconds(0);

var now = new Date();
var time = now.getTime();

var year = Math.floor(time / (1000*86400) / 365);
var month = Math.floor(year / 12) + 1;
var day = Math.floor(time / 1000 / 86400 % 365 / 12);

var now = time - today.getTime();
var hours = Math.floor(now / (1000 * 60 * 60)); // 밀리초 -> 시간
var minutes = Math.floor((now % (1000 * 60 * 60)) / (1000 * 60)); // 시간 -> 분

document.write((1970 + year) + "년 " + month + "월 " + day + "일 입니다.<br>");
document.write(hours + "시 " + minutes + "분 입니다.<br>");
