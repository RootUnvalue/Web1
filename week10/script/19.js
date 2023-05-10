function max(x, y, z)
{
    if((x>y) && (x>z))
    {
        return x;
    }
    else if((y>x) && (y>z))
    {
        return y;
    }
    else
    {
        return z;
    }

}

function min(x, y, z)
{
    if((x<y) && (x<z))
    {
        return x;
    }
    else if((y<x) && (y<z))
    {
        return y;
    }
    else
    {
        return z;
    }
}

num1 = prompt("첫 번째 수를 입력하시오.");
num2 = prompt("두 번째 수를 입력하시오.");
num3 = prompt("세 번째 수를 입력하시오.");

document.write("가장 큰은 수 : " + max(num1, num2, num3) + "<br>");
document.write("가장 작은 수 : " + min(num1, num2, num3));