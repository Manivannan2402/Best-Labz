//sum of n digit
var n=123
var a= 0
var rem
while(n>0)
{
    rem=n%10
    a=a+rem
    n=Math.floor(n/10)
}
console.log(a);