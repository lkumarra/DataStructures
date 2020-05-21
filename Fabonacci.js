function fabonacciRecursive(number) {
    if (number < 2) {
        return number;
    } 
    return fabonacciRecursive(number-1)+fabonacciRecursive(number-2)

}

function fabonacciIterative(number) {
    if (number < 2){
        return number;
    }
    let x = 0;
    let y = 1;
    let z;
    for (let i = 0; i <= number-2; i++) {
        z = x + y;
        x = y;
        y = z;
    }
    return z

}

function fibonacciIterative2(n){
    let arr = [0, 1];
    for (let i = 2; i < n + 1; i++){
      arr.push(arr[i - 2] + arr[i -1]);
    }
   return arr[n];
  }
console.log(fabonacciIterative(3));
//console.log(fabonacciRecursive(5));