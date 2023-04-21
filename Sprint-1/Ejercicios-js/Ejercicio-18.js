function correctParentheses(Parentheses) {
  let count = 0;
  for (const char of Parentheses) {
    if (char == "(") {
      count++;
    } else if (char == ")") {
      count--;
      if (count < 0) return false;
    }
  }
  return count === 0;
}
console.log(correctParentheses("())("));
