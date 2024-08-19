function CodelandUsernameValidation(str) {
  // Rule 1: Check length
  if (str.length < 4 || str.length > 25) {
    return "false";
  }

  // Rule 2: Check if the first character is a letter
  if (!/^[a-zA-Z]/.test(str)) {
    return "false";
  }

  // Rule 3: Check if the username contains only letters, numbers, and underscores
  if (!/^[a-zA-Z0-9_]+$/.test(str)) {
    return "false";
  }

  // Rule 4: Check if the username ends with an underscore
  if (str.endsWith("_")) {
    return "false";
  }

  // If all conditions are met, return true
  return "true";
}
