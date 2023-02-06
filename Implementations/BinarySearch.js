const arrToSearchIn = [5,10,15,20,21,22,22,22,222,222222]


function BinarySearch(arr,element) {
    
    let start = 0
    let end = arr.length - 1
    
    while(start <= end) {
        let mid = Math.floor((start+end)/2)
        
        if(arr[mid] == element) {
            return mid
        }
        
        if(element < arr[mid]) {
            end = mid -1
        }
        else {
            start = mid + 1
        }
    }
    
    return -1
}

console.log(BinarySearch(arrToSearchIn,222))
