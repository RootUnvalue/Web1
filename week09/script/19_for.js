sum = 0;
for(i=1; i<=1000; i++)
{
    if((i%3)==0)
        sum += i;
}

document.write("1부터 1000까지의 모든 3의 배수의 합은 " + sum + " 입니다");