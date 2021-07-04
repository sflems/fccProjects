function palindrome(str) {
  let newStr = str.toLowerCase().replace(/[\_]*[^\w]*/gi, "")
  if (newStr.length % 2 === 0) {
    return newStr.slice(0, newStr.length/2) == newStr.slice(newStr.length/2).split("").reverse().join("")
  } else {
    return newStr.slice(0, newStr.length/2) == newStr.slice((newStr.length/2)+1).split("").reverse().join("")
  }
}


console.log(palindrome("My age is 0, 0 si ega ym."));
console.log(palindrome("race car"));
