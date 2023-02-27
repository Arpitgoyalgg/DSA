function reverseWords(arr) {
  // Reverse once to get the words in order
  reverseString(arr, 0, arr.length - 1);

  // Reverse every word
  let start = 0;
  for (let i = 0; i <= arr.length; i++) {
    if (arr[i] == " " || i == arr.length) {
      reverseString(arr, start, i - 1);
      start = i + 1;
    }
  }

  console.log(arr.join(""));
}

function reverseString(message, start, end) {
  let startIndex = start;
  let endIndex = end;

  while (startIndex < endIndex) {
    let temp = message[endIndex];
    message[endIndex] = message[startIndex];
    message[startIndex] = temp;

    startIndex++;
    endIndex--;
  }
}
reverseWords([
  "c",
  "a",
  "k",
  "e",
  " ",
  "p",
  "o",
  "u",
  "n",
  "d",
  " ",
  "s",
  "t",
  "e",
  "a",
  "l",
]);
