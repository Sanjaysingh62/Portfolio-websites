window.addEventListener("scroll", function () {
  var header = document.querySelector("header");
  header.classList.toggle("sticky", window.scrollY > 0);
});

var menu = document.querySelector("#menu");
var ul = document.querySelector("ul");
menu.onclick = () => {
  menu.classList.toggle("fa-times");
  ul.classList.toggle("active");
};

window.onscroll = () => {
  menu.classList.remove("fa-times");
  ul.classList.remove("active");
};

// navbar active on click and when scroll
2;
let sections = document.querySelectorAll("section");
let navlinks = document.querySelectorAll("header ul li a");
window.onscroll = () => {
  menu.classList.remove("fa-times");
  ul.classList.remove("active");
  sections.forEach((sec) => {
    let top = window.scrollY;
    let offset = sec.offset - 150;
    let height = sec.offsetHeight;
    let id = sec.getAttribute("id");

    if (top >= offset && top < offset + height) {
      navlinks.forEach((links) => {
        links.classList.remove("active");
        document
          .querySelector("header ul li a[href*=" + id + "]")
          .classList.add("active");
      });
    }
  });
};

// scroll reveal

ScrollReveal({
  reset: true,
  distance: "80px",
  duration: 2000,
  delay: 200,
});
ScrollReveal().reveal(".content, .heading", { origin: "top" });
ScrollReveal().reveal(
  ".home .img, .service .container, .portfolio .box, .contact form",
  { origin: "bottom" }
);
ScrollReveal().reveal(".about .img, .home .content h1", { origin: "left" });
ScrollReveal().reveal(".about .content p, .home .content p", {
  origin: "right",
});

// typed.js
const typed = new Typed(".multiple-txt", {
  strings: ["Frontend Developer", "Youtuber", "Blogger"],
  typeSpeed: 100,
  backSpeed: 100,
  backdelay: 1000,
  loop: true,
});
