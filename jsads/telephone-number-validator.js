function telephoneCheck(str) {
  let myRegex = /^(1){0,1} {0,1}(\(\d{3}\)|\d{3}){1}[ \-]{0,1}\d{3}[ \-]{0,1}\d{4}$/
  return myRegex.test(str);
}

console.log(telephoneCheck("1 555 555-5555"));