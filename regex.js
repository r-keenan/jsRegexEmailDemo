function regexTest() {
  let regex = /^((?!\.)[\w-_.]*[^.])(@\w+)(\.\w+(\.\w+)?[^.\W])$/gm;
  let input = document.getElementById("inputField").value;
  let output = input.replace(regex, input);
  console.log(output);
}

// let email = "rkeenan@gmail.com";
// let email2 = "rkeenan@gmail.com.com";

// let reEmail = email.replace(regex, email);
// let reEmail2 = email.replace(regex, email2);

// console.log(email);
// console.log(email2);

