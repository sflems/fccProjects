function convertToRoman(num) {
  let arr = []
  if (num / 1000 >= 1) {
    for (var i = Math.trunc(num/1000); i > 0; i--) {
        arr.push("M"); 
      }
      console.log(num %=1000)
  }
  if (num / 900 >= 1) {
    for (var i = Math.trunc(num/900); i > 0; i--) {
        arr.push("CM");       
      }
      console.log(num %= 900)
  }
  if (num / 500 >= 1) {
    for (var i = Math.trunc(num/500); i > 0; i--) {
        arr.push("D");       
      }
      console.log(num %= 500)
  }
  if (num / 400 >= 1) {
    for (var i = Math.trunc(num/400); i > 0; i--) {
        arr.push("CD");       
      }
      console.log(num %= 400)
  }
  if (num / 100 >= 1) {
    for (var i = Math.trunc(num/100); i > 0; i--) {
        arr.push("C");       
      }
      console.log(num %= 100)
  }
  if (num / 90 >= 1) {
    for (var i = Math.trunc(num/90); i > 0; i--) {
        arr.push("XC");       
      }
      console.log(num %= 90)
  }
  if (num / 50 >= 1) {
    for (var i = Math.trunc(num/50); i > 0; i--) {
        arr.push("L");       
      }
      console.log(num %= 50)
  }
  if (num / 40 >= 1) {
    for (var i = Math.trunc(num/40); i > 0; i--) {
        arr.push("XL");       
      }
      console.log(num %= 40)
  }
  if (num / 10 >= 1) {
    for (var i = Math.trunc(num/10); i > 0; i--) {
        arr.push("X");       
      }
      console.log(num %= 10)
  }
  if (num / 9 >= 1) {
    for (var i = Math.trunc(num/9); i > 0; i--) {
        arr.push("IX");       
      }
      console.log(num %= 9)
  }
  if (num / 5 >= 1) {
    for (var i = Math.trunc(num/5); i > 0; i--) {
        arr.push("V");       
      }
      console.log(num %= 5)
  }
  if (num / 4 >= 1) {
    for (var i = Math.trunc(num/4); i > 0; i--) {
        arr.push("IV");       
      }
      console.log(num %= 4)
  }
  if (num / 1 >= 1) {
    for (var i = Math.trunc(num/1); i > 0; i--) {
        arr.push("I");       
      }
      console.log(num %= 1)
  }
 console.log(arr.join(""))
 return arr.join("");
}

convertToRoman(2014);
convertToRoman(1023)
