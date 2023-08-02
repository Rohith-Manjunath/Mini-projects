const input = document.querySelector("input");
const wrapper = document.querySelector("#wrapper");
const eye = document.querySelector(".fa-eye");
const closedEye = document.querySelector(".fa-eye-slash");
const span = document.querySelector("span");

input.addEventListener("input", () => {
  if (input.value.length >= 1 && input.value.length <= 3) {
    wrapper.style.borderColor = "red";
    span.innerHTML = "weak";
    span.style.color = "red";
  }
  if (input.value.length >= 4 && input.value.length <= 6) {
    wrapper.style.borderColor = "yellow";
    span.innerHTML = "medium";
    span.style.color = "yellow";
  }
  if (input.value.length >= 7 && input.value.length <= 9) {
    wrapper.style.borderColor = "green";
    span.innerHTML = "strong";
    span.style.color = "green";
  }
});

eye.addEventListener("click", () => {
  eye.classList.toggle("opacityZero");
  input.type = "text";

  if (closedEye.classList.toggle("opacityOne")) {
    input.type = "password";
  }
});
