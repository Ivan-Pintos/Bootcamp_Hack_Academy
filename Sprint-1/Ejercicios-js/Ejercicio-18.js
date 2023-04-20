function correctParentheses(Parentheses) {
  let count = 0;
  let openParentheses = false;

  for (const char of Parentheses) {
    if (char == "(") {
      openParentheses = true;
      count++;
      console.log(1);
    } else if (char == ")" && openParentheses == true) {
      count--;
      console.log(1);
    }
  }
  if (count === 0) {
    return true;
  } else {
    return false;
  }
}
console.log(correctParentheses("(())((()())())"));
