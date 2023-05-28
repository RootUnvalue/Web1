var now = new Date();
var time = now.getTime();

var year = Math.floor(time / (1000 * 86400) / 365) + 1970;
var month = Math.floor((year - 1970) / 12) + 1;
var pday = 0;
for(i=1970; i<=year; i++){
    if((((i % 4) == 0) && ((i%100)!=0))||((i%400)==0)){
        pday++;
    }
}
var day = Math.floor(time / (1000*86400) )- (365*(2022 - 1970 + 1) +pday);
var leafday = day;
var n = 1;
while(leafday > 0){
    switch(n){
        case 1:
            leafday = leafday - 31;
            break;
        
        case 2:
            leafday = leafday - 28; 
            break;
        
        case 3:
            leafday = leafday - 31;
            break;
        case 4:
            leafday = leafday - 30;
            break;
        case 5:
            leafday = leafday - 31;
            break;

    }
    n++;
}
leafday = leafday + 31 + 1;
n--;
document.write("<br> " + n + "<br>" + day + "<br>" + leafday + "<br>");

var hours_12 = Math.floor(time / (1000 * 60 * 60) % 24 % 12) + 9; //12시간 표기
var hours_24 = Math.floor(time / (1000 * 60 * 60) % 24) + 9; //24시간 표기
var minutes = Math.floor((time % (1000 * 60 * 60)) / (1000 * 60)); // 시간 -> 분

meridiem = "오전";
if(hours_12 >= 12){
    hours_12 -= 12;
    meridiem = "오후";
    if(hours_12 == 0){
        hours_12 = 12;
    }
}
if(hours_24 >= 24){
    hours_24 -= 12;
}

document.write(year + "년 " + month + "월 " + day + "일<br>");
document.write("(12시간 표기) " + meridiem + " "+ hours_12 + "시 " + minutes + "분<br>");
document.write("(24시간 표기) " + hours_24 + "시 " + minutes + "분<br>");