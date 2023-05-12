var n = prompt("입력받을 정수 수");

var arr = new Array;
for(i=0; i<n; i++){
    arr[i] = prompt((i + 1) + "번째 정수를 입력하세요.");
}

var max, min;
for(i=0; i < arr.length; i++){
    if(i==0){
        tmp1 = arr[i];
        tmp2 = arr[i];
    }
    max = Math.max(tmp1, arr[i]);
    tmp1 = max;
    min = Math.min(tmp2, arr[i]);
    tmp2 = min;
}

document.write("입력한 숫자열 중 최고 값: " + max + "<br>" + "입력한 숫자열 중 최소 값: " + min);