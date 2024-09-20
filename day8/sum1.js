//descending order  a=[6,4,7,2,5]
var a=[6,4,7,2,5]
for(i=0;i< a.length;i++)
{
    for(j=i+1;j< a.length;j++)
    {
        if(a[i]<a[j])
        {
            var temp=a[i]
            a[i]=a[j]
            a[j]=temp
        }
    }
}
console.log(a);
