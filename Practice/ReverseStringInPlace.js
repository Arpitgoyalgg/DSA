// Why an array of characters instead of a string?

// The goal of this question is to practice manipulating strings in place. Since we're modifying the input, we need a mutable type like an array, instead of JavaScript's immutable strings.

function reverseStringInPlace1(arr) {
  arr.reverse();
  console.log(arr);
}

function reverseStringInPlace2(arr) {
  let leftIndex = 0;
  let rightIndex = arr.length - 1;

  while (leftIndex < rightIndex) {
    let temp = arr[leftIndex];
    arr[leftIndex] = arr[rightIndex];
    arr[rightIndex] = temp;

    leftIndex++;
    rightIndex--;
  }

  console.log(arr);
}

reverseStringInPlace2(["a", "b", "c", "d"]);
