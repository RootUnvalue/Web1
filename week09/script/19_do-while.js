i = 1;
sum = 0;

do {
    if((i%3)==0)
        sum += i;
    i++;
} while (i<=1000);
document.write("1부터 1000까지의 모든 3의 배수의 합은 " + sum + " 입니다");