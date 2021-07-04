function rot13(str) {
  let newArr = []
  str = [...str].map((a,b) => {
    if (a.match(/[\w]/)) {
      var char = a.charCodeAt(0)
      if (char >=78 && char <= 90) {
        newArr.push(String.fromCharCode(char-13))
      } else {
        newArr.push(String.fromCharCode(char+13))
      }
    } else {
      newArr.push(a)
    }
  })
  console.log(newArr.join(''));
  return newArr.join("");
}
rot13("SERR PBQR PNZC");
rot13("SERR CVMMN!")