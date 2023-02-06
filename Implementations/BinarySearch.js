const arrToSearchIn = [5,10,15,20,21,22,22,22,222,222222]

// Iterative

function binarySearchIterative(arr,element) {
    
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

// Recursive

function binarySearchRecursive(arr, val, start = 0, end = arr.length - 1) {
    const mid = Math.floor((start + end) / 2);
  
    if (val === arr[mid]) {
      return mid;
    }
  
    if (start >= end) {
      return -1;
    }
  
    return val < arr[mid]
      ? binarySearch(arr, val, start, mid - 1)
      : binarySearch(arr, val, mid + 1, end);
  }

console.log(binarySearchIterative(arrToSearchIn,222))
