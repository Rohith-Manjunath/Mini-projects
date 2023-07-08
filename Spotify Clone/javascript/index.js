const container = document.querySelector(".right-container");

container.addEventListener("scroll", () => {
  document.querySelector("nav").style.backgroundColor = "rgba(43, 42, 42)";
  document.querySelector("nav").style.transition = "all 1s";
});
