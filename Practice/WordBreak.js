function wordBreak(word, dictionary) {
  // array.length = n + 1 => n is the length of the word
  // [false, false, false]
  let array = new Array(word.length + 1).fill(false);
  let hashMap = new Set(dictionary);
  array[0] = true;
  for (let i = 1; i < array.length; i++) {
    for (let j = 0; j < i; j++) {
      if (hashMap.has(word.slice(j, i)) && array[j]) {
        array[i] = true;
        break;
      }
    }
  }
  return array[array.length - 1];
}

function main() {
  let word = "leetcode";
  let dictionary = ["leet", "code"];
  console.log(wordBreak(word, dictionary));
}

main();
