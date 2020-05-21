function reverseString(s){
    if(s.length<=1){
        return s
    }
    return s[s.length-1]+reverseString(s.substr(0, s.length-1))
}
// let s = 'Lavendra'
// console.log(s.length)
// console.log(s[s.length-1])
// console.log(s.substr(0, s.length-1))
console.log(reverseString('He'))