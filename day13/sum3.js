/* 
   * 
  * *
 *   *
* * * *
*/
var n = 4; 
for ( i = 0; i < n; i++) {
    var str = '';

    for ( j = 0; j < n; j++) {
        if (j < (n - 1) - i) {
            str += ' ';
        } else if( i==n-1||j==(n-1)-i||j==(n-1))
            {
                str+= '* '
            }
            else{
                str+= '  '
             }
            }
    console.log(str);
}