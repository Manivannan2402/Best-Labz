/*
    * 
   * *
  * * *
 * * * *
 */
for(i=0;i<4;i++)
    {
        var s=" "
        for(j=0;j<4;j++)
        {
            if(j<3-i)
                s+=" "
            else
            s+="* "
        }
        console.log(s);
        
    }