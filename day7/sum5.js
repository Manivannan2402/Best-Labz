/*  *
   **
  ***
 ****  */
  let star = "*";
  for (let i = 3; i >= 0; i--) {
      if (i === 0) {
          console.log(`${star}${star}${star}${star}`);
      } else if (i === 1) {
          console.log(` ${star}${star}${star}`);
      } else if (i === 2) {
          console.log(`  ${star}${star}`);
      } else {
          console.log(`   ${star}`);
      }
  }