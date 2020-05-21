function selectionSort(array){

    for(let i = 0; i<array.length; i++){
        for(let j = 0; j<array.length; j++){
            if (array[i]<array[j]){
                let a = array[i]
                let b = array[j]
                array[j] = a
                array[i] = b
            }
        }
    }
    return array

}
const numbers = [99, 44, 6, 2, 1, 5, 63, 87, 283, 4, 0]
console.log(selectionSort(numbers))