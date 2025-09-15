const menuLinks = document.querySelectorAll(".nav-links a");
const hamburger = document.querySelector(".hamburger-menu");
const navLinks = document.querySelector(".nav-links");
const menuOverlay = document.querySelector(".menu-overlay");

const mainContent = document.querySelector("main");
const sections = document.querySelectorAll("section.alt");

hamburger.addEventListener("click", () => {
  navLinks.classList.toggle("active");
  hamburger.classList.toggle("active");

  if (navLinks.classList.contains("active")) {
    menuOverlay.style.display = "block";
    mainContent.classList.add("blur");
    sections.forEach((section) => {
      section.classList.add("blur");
    });
  } else {
    menuOverlay.style.display = "none";
    mainContent.classList.remove("blur");
    sections.forEach((section) => {
      section.classList.remove("blur");
    });
  }
});

menuLinks.forEach((link) => {
  link.addEventListener("click", () => {
    navLinks.classList.remove("active");
    hamburger.classList.remove("active");

    mainContent.classList.remove("blur");
    sections.forEach((section) => {
      section.classList.remove("blur");
    });
    menuOverlay.style.display = "none";
  });
});

menuOverlay.addEventListener("click", () => {
  navLinks.classList.remove("active");
  hamburger.classList.remove("active");

  mainContent.classList.remove("blur");
  sections.forEach((section) => {
    section.classList.remove("blur");
  });
  menuOverlay.style.display = "none";
});
window.onscroll = function () {
  scrollFunction();
};

const scrollToTopBtn = document.getElementById("scrollToTopBtn");

function scrollFunction() {
  if (
    document.body.scrollTop > 200 ||
    document.documentElement.scrollTop > 200
  ) {
    scrollToTopBtn.style.display = "block";
  } else {
    scrollToTopBtn.style.display = "none";
  }
}

scrollToTopBtn.addEventListener("click", () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
});
