function toggleString(S) {
  let result = "";
  for (let i = 0; i < S.length; i++) {
    const char = S[i];
    if (char === char.toLowerCase()) {
      result += S[i].toUpperCase();
    } else {
      result += char.toLowerCase();
    }
  }
  console.log(result);
}
toggleString("abcdE");
