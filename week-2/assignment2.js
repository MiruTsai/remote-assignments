/*assignment2*/

function calculate(action) {

    let result;

    if (action.op === "+") {
        result = action.n1 + action.n2;
    } else if (action.op === "-") {
        result = action.n1 - action.n2;
    } else {
        result = "Not supported";
    }

    return result;
}

/*Method1*/
var action = { op: "+", n1: 2, n2: 1 };
console.log(calculate(action));

/*Method 2*/
console.log(calculate({op: "+", n1: 2, n2: 1}));
