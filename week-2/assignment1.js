/*assignment1*/

function max(...numbers) {   
  var maxNum = 0 ;
    for ( var i = 0 ; i < numbers.length ; i += 1){
        if ( maxNum < numbers [i] ) {
            maxNum = numbers [i];
        } 
    }
  return maxNum;
}
console.log(max(1, 2, 4, 5));
console.log(max(5, 2, 7, 1, 6));  