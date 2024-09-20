//multiply of n two digit
var n=1234
var a= 1
var rem
while(n>0)
{
    rem=n%100
    a=a*rem
    n=Math.floor(n/10)
}
console.log(a);
