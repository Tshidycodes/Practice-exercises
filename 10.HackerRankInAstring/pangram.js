function pangram(s) {
  s = s.toLowerCase();
  const uniqueLetters = new Set();

  for (let char of s) {
    if (char >= "a" && char <= "z") {
      uniqueLetters.add(char);
    }
  }
  if (uniqueLetters.size === 26) {
    return "pangram";
  } else {
    return "not pangram";
  }
}

console.log(pangram("The quick brown fox jumps over the lazy dog"));
console.log(pangram("Hello world"));
