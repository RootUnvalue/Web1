sum = 0;
for(i=1; i<=1000; i++)
{
    if((i%3)==0)
        sum += i;
}

document.write("1부터 1000까지의 모든 3의 배수의 합은 " + sum + " 입니다");

/*

for (조건) {
    명령
}

(조건) 이 참일때 명령을 실행해요.


() 안에 조건은 다음과 같이 작성해요.

(i=0; i<n; i++)

이 조건식은 i가 0부터 시작하는데, i가 n보다 작은 경우 {} 의 식을 실행하고 i를 1씩 더하는 것을 의미해요.

*/