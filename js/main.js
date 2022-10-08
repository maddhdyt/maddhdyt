const toggle = document.querySelector(".nav-toggle")
const menu = document.querySelector(".nav-menu")
const desc_title = document.querySelectorAll(".description_title")
const desc_text = document.querySelectorAll(".description_text")

window.onscroll = function () {
    const header = document.querySelector('.header');
    const fixedNav = header.offsetTop;
  
    if (window.pageYOffset > fixedNav) {
      header.classList.add("header-fixed")
    } else {
      header.classList.remove("header-fixed")
    }
  }

toggle.addEventListener("click", function () {
    menu.classList.toggle("nav-show")
    toggle.classList.toggle("change-bg")
})

desc_title[0].addEventListener("click", function () {
    desc_title[0].classList.toggle("change-bg")
    desc_text[0].classList.toggle("unshow")
    desc_text[1].classList.add("unshow")
    desc_text[2].classList.add("unshow")
})
desc_title[1].addEventListener("click", function () {
    desc_title[1].classList.toggle("change-bg")
    desc_text[1].classList.toggle("unshow")
    desc_text[0].classList.add("unshow")
    desc_text[2].classList.add("unshow")
})
desc_title[2].addEventListener("click", function () {
    desc_title[2].classList.toggle("change-bg")
    desc_text[2].classList.toggle("unshow")
    desc_text[0].classList.add("unshow")
    desc_text[1].classList.add("unshow")
})
