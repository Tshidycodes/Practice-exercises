//stacks - last in, first out, uses methods: push,pop,peek,length

//makeApalindrome: words spelled the same backward and forwards

function palindrome(word) {
  let letters = [];
  let reversed = "";

  //put letters of word into a stack
  for (let i = 0; i < word.length; i++) {
    letters.push(word[i]);
  }
  //pop off the stack in reverse order
  for (let i = 0; i < word.length; i++) {
    reversed += letters.pop();
  }
  if (reversed === word) {
    return `${word} is a palindrome`;
  } else {
    return `${word} is not a palindrome`;
  }
}
console.log(palindrome("racecar"));
console.log(palindrome("hen"));

function reverseString(s) {
  let arr = s.split("");
  let reversed = "";
  for (let i = 0; i < s.length; i++) {
    reversed += arr.pop(i);
  }
  return reversed;
}
console.log(reverseString("hello"));
