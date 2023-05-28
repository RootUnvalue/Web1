function show_arr(){
    document.write("arr.length : " + arr.length + "<br>");
    for(i=0; i<arr.length; i++){
        document.write((i + 1) +" 번 값 : " + arr[i] +"<br>");
    }
}

var n = prompt("입력받을 문장의 수");

var arr = new Array;
for(i=0; i<n; i++){
    arr[i] = prompt((i + 1) + "번째 문장을 입력하세요.");
}

arr.sort();
show_arr();
document.write("<br>");
arr.reverse();
show_arr();