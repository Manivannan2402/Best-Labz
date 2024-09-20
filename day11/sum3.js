//find min and max
var a=[5,1,2,6,8]
var max =a[0]
var min =a[0]
for(i=0;i<a.length;i++)
{
    if(a[i]>max)
        {
        max=a[i]
        }
     if(a[i]<min)
         {
            min=a[i]
         }
        }
        console.log("max:"+max); 
        console.log("min:"+min); 
