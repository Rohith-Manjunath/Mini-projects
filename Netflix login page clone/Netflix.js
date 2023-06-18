const dropdown = document.querySelector(".globe-dropdown");
const dropdownMenu = document.querySelector(".dropdown");
const dropdown1 = document.querySelector(".globe-dropdown1");
const dropdownMenu1 = document.querySelector(".dropdown1");
const input = document.getElementById("input");
const language = document.getElementById("language");
const language1 = document.getElementById("language1");
const placeholder = document.querySelector("#placeholder");
let bool = true;
let bool1 = true;
let bool2 = true;
const questions = document.querySelector(".questions");
const question_dropdown = document.querySelectorAll("#question-dropdown");
const description = document.querySelectorAll("#description");
const span = document.querySelectorAll("#span");
let show = true;

function showDescription() {
  document.querySelector("body").style.height = "4200px";
  for (let i = 0; i < description.length; i++) {
    if (bool2) {
      description[i].style.fontSize = `${23}px`;
      description[i].style.height = `auto`;
      description[i].style.padding = `26px`;
      description[i].style.opacity = `1`;
      span[i].style.transform = "rotate(40deg)";
      span[i].style.transition = "0.4s";
      description[i].style.transition = "0.2s";
    } else {
      description[i].style.fontSize = `${0}px`;
      description[i].style.height = `${0}px`;
      description[i].style.opacity = `0`;
      description[i].style.padding = `0px`;
      span[i].style.transform = "rotate(0deg)";
    }
  }

  bool2 = !bool2;
}

for (let i = 0; i < question_dropdown.length; i++) {
  question_dropdown[i].addEventListener("click", () => {
    showDescription();
  });
}

function dropdownShow() {
  dropdown.style.outline = "1px solid white";
  dropdown.style.margin = "1px";
  // language.style.backgroundColor="rgb(73, 73, 255)";

  if (bool) {
    dropdownMenu.style.opacity = "1";
  } else {
    dropdownMenu.style.opacity = "0";
  }

  bool = !bool;
}
function dropdownShow1() {
  dropdown1.style.outline = "1px solid white";
  dropdown1.style.margin = "1px";
  // language1.style.backgroundColor="rgb(73, 73, 255)";

  if (bool) {
    dropdownMenu1.style.opacity = "1";
  } else {
    dropdownMenu1.style.opacity = "0";
  }

  bool = !bool;
}

dropdown.addEventListener("click", () => {
  dropdownShow();
});
dropdown1.addEventListener("click", () => {
  dropdownShow1();
});

input.addEventListener("click", () => {
  input.style.outline = "2px solid white";
  placeholder.style.transition = "0.1s";
  placeholder.style.transform = `translate(${-7}px,${-11}px)`;
  placeholder.style.fontSize = "12px";
});
