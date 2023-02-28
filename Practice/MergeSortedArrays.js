function mergeSortedArrays(firstArr, secondArr) {
  let firstArrIndex = 0;
  let secondArrIndex = 0;
  let mergedArray = [];

  for (let i = 0; i < firstArr.length + secondArr.length; i++) {
    if (firstArrIndex >= firstArr.length) {
      mergedArray[i] = secondArr[secondArrIndex];
      secondArrIndex++;
    } else if (secondArrIndex >= secondArr.length) {
      mergedArray[i] = firstArr[firstArrIndex];
      firstArrIndex++;
    } else if (firstArr[firstArrIndex] < secondArr[secondArrIndex]) {
      mergedArray.push(firstArr[firstArrIndex]);
      firstArrIndex++;
    } else {
      mergedArray.push(secondArr[secondArrIndex]);
      secondArrIndex++;
    }
  }

  return mergedArray;
}

const myArray = [3, 4, 6, 10, 11, 15, 16];
const alicesArray = [1, 5, 8, 12, 14, 19, 20, 21];

console.log(mergeSortedArrays(myArray, alicesArray));
