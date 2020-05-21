function reverseStrig(array){
    let size = array.length;
    let arraynew = []
    for(let i = size-1; i>=0; i--){
        let string = array[i]
        arraynew.push(""+string+"")
    }
    return arraynew
}
console.log(reverseStrig([ 'h','e','l', 'l','o']))