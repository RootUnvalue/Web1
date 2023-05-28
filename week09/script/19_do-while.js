i = 1;
sum = 0;

do {
    if((i%3)==0)
        sum += i;
    i++;
} while (i<=1000);
document.write("1부터 1000까지의 모든 3의 배수의 합은 " + sum + " 입니다");
/*

do while 문에서는 
do {
    명령
} while (조건)

명령 부분을 무조건 1회 실행을 한 뒤,
(조건) 의 부분이 참이라면 계속 실행해요.

*/