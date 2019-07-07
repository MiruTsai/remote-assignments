function delayedResult(n1, n2, delayTime,callback) {
    var result = n1+n2+` (${n1}+${n2}) `;
    setTimeout(function(n1,n2){callback(result)},delayTime)
    
    
}

delayedResult(4, 5, 3000, function(result){ console.log(result); }); 

delayedResult(-5, 10, 2000, function(result){ window.alert(result); }); 