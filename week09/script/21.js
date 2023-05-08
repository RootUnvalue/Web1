var row = prompt("행(정수)을 입력하세요.");
var col = prompt("열(정수)을 입력하세요.");

document.write("<table border=\"1\"");
for(i=1; i<=row; i++)
{
    document.write("<tr>");
        for(j=1; j<=col; j++)
        {
            document.write("<td>");
            document.write(i + " 행, " + j +" 열");
            document.write("</td>");
        }
    document.write("</tr>");
}
document.write("</table>")