//assignment1

function max(...numbers) {   
  var maxNum = 0 ;
    for ( var i = 0 ; i < numbers.length ; i += 1){
        if ( maxNum < numbers [i] ) {
            maxNum = numbers [i];
        } 
    }
  return maxNum;
}
