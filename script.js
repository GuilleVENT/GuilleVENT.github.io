let videoBtn = document.querySelectorAll(".vidBtn");


videoBtn.forEach((btn) => {
  btn.addEventListener("click", () => {
    document.querySelector(".controls .col .active").classList.remove("active");
    btn.classList.add("active");

    let src = btn.getAttribute("data-src");
    document.querySelector("#videoMenu").src = src;
  });
});
