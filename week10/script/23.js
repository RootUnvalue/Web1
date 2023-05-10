var arr = new Array;
arr = prompt("정수를 띄어쓰기 없이 입력하시오.");

var max, min, tmp1 = 0, tmp2 = 9;
for(i=0; i < arr.length; i++){
    max = Math.max(tmp1, arr[i]);
    tmp1 = max;
    min = Math.min(tmp2, arr[i]);
    tmp2 = min;
}

document.write("입력한 숫자열 중 최고 값: " + max + "<br>" + "입력한 숫자열 중 최소 값: " + min);