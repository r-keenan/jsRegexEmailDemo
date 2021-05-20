function regexTest() {
  let regex =
    /(?:[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])/;
  let input = document.getElementById("inputField").value;
  //let output = input.replace(regex, input);
  if (input.match(regex)) {
    let output = input.replace(regex, input);
    console.log(output);
  } else {
    console.log("This does not match the regex.");
  }
}

// let email = "rkeenan@gmail.com";
// let email2 = "rkeenan@gmail.com.com";

// let reEmail = email.replace(regex, email);
// let reEmail2 = email.replace(regex, email2);

// console.log(email);
// console.log(email2);
