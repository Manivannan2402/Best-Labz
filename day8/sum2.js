//write min &max with sort  a=[3,9,8,1,2]
var a=[3,9,8,1,2]
for(i=0;i< a.length;i++)
{
    for(j=i+1;j< a.length;j++)
    {
        if(a[i]>a[j])
        {
            var temp=a[i]
            a[i]=a[j]
            a[j]=temp
        }
    }
}
console.log("min:"+a[0])
console.log("max:"+a[4])