/* 
* * * * 
 * * *
  * *
   *
   */
var n = 4; 
for (var i = 0; i < n; i++) {
    var s = '';
    for (var j = 0; j < n; j++) {
        if (j < i) {
            s += ' ';
        } else  {
            s += '* ';
        }
    }
    console.log(s);
}