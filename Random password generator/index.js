const button = document.querySelector("button");
let input = document.querySelector("input");
const copy = document.querySelector(".fa-copy");

const upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const lowerCase = "abcdefghijklmnopqrstuvwxyz";
const number = "0123456789";
const characters = "+_)(*&^%$#@!~?/";

const allChars = upperCase + lowerCase + number + characters;

button.addEventListener("click", () => {
  let password = "";

  while (password.length <= 12) {
    password += allChars[Math.floor(Math.random() * allChars.length)];
  }

  input.value = password;
});

copy.addEventListener("click", () => {
  input.select();
  document.execCommand("copy");
});
