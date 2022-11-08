import { listSlides } from "./config.js";

const $ = document.querySelector.bind(document);
const $$ = document.querySelectorAll.bind(document);

const handleNavbar = () => {
  const navElement = $$(".nav-link");

  for (let i = 0; i < navElement.length; i++) {
    if (
      window.location.pathname.split("/")[1] ===
      navElement[i].attributes.href.nodeValue.split("/")[1]
    ) {
      navElement[i].style.backgroundColor = "#7d7ddd";
    }
  }
};

const addSlideLink = () => {
  const element = $$(".slide-item");

  for (let i = 0; i < element.length; i++) {
    // element[i].setAttribute("href", listSlides[i]);

    element[i].onclick = () => {
      var currentWindow = window.open(listSlides[i], "_blank", "popup");
      window.currentWindow = currentWindow;

      const x = $("#punch-start-presentation-left");
      console.log(x);
    };
  }
};

function start() {
  addSlideLink();
  handleNavbar();
}

start();
