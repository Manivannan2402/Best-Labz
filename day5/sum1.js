//check whether number is prime or not
var n=4
var b=0
for(var i=2;i<n;i++)
{
    if(n % i  !=0)
        continue
    else
    {
        b=1
        console.log("not a prime number ");
        break
        
    }
}
if(b==0)
{
    console.log("prime number");
    
}
