const menuIcon = document.querySelector(".header__menuicon");
const navbar = document.querySelector(".navbar");
const navbarLinks = document.querySelectorAll(".navbar__link");
const scroller = document.querySelector(".skills__container--row");
const asideCloseButton = document.querySelector(".aside__close");
const showSkillButton = document.querySelector(".show-skill");
const asideContainer = document.querySelector(".aside");

const hideAside = () => {
  asideCloseButton.addEventListener("click", () => {
    asideContainer.style.width = "0%";
    asideContainer.style.height = "0%";
    asideContainer.style.left = "-150%";
  });
};

const showAside = () => {
  showSkillButton.addEventListener("click", () => {
    asideContainer.style.width = "100%";
    asideContainer.style.height = "100%";
    asideContainer.style.left = "0%";
  });
};

function closeNavbar() {
  navbar.style.left = "-100%";
  menuIcon.textContent = "menu";
}
const handleNavbar = () => {
  menuIcon.addEventListener("click", () => {
    if (menuIcon.textContent === "menu") {
      navbar.style.left = "0";
      menuIcon.textContent = "close";
    } else if (menuIcon.textContent === "close") {
      closeNavbar();
    }
  });
};

const hideNavbar = () => {
  navbarLinks.forEach((link) => {
    link.addEventListener("click", () => {
      if (menuIcon.textContent === "close") {
        closeNavbar();
      }
    });
  });
};

function addAnimation() {
  scroller.setAttribute("data-animated", true);
  const scrollerInner = scroller.querySelector(".skillList");
  const scrollerContent = Array.from(scrollerInner.children);
  scrollerContent.forEach((content) => {
    const duplicatedItem = content.cloneNode(true);
    duplicatedItem.setAttribute("aria-hidden", true);
    scrollerInner.appendChild(duplicatedItem);
  });
}

if (!window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
  addAnimation();
}

showAside();
hideAside();
handleNavbar();
hideNavbar();