//Active class
let links = document.querySelectorAll(".nav-link");
let sections = document.querySelectorAll("section");
let scrollToTop = document.querySelector(".scroll-to-top");
let navbar = document.querySelector("nav");

links.forEach((addActive) => {
  addActive.addEventListener("click", function () {
    links.forEach((removeActive) => {
      removeActive.classList.remove("active");
    });
    addActive.classList.add("active");
  });
});
//Data Target
links.forEach((target) => {
  target.addEventListener("click", function (event) {
    event.preventDefault();
    let targetId = "#" + target.getAttribute("data-target");
    let targetSection = document.querySelector(targetId);
    targetSection.scrollIntoView({
      behavior: "smooth",
    });
  });
});
//scrollToTop
// console.log(window);

window.addEventListener("scroll", function () {
  // console.log(window.scrollY);
  if (window.scrollY >= 500) {
    scrollToTop.style.display = "block";
  } else {
    scrollToTop.style.display = "none";
  }
});
scrollToTop.addEventListener("click", function () {
  window.scrollTo(0, 0);
});

// console.log(navbar.offsetHeight); // offsetHeight => calculate height of element

sections.forEach(
  (section) => (section.style.paddingTop = navbar.offsetHeight + "px")
);

//scroll Spy
window.addEventListener("scroll", function () {
  let currentSectionId = "";
  sections.forEach((section) => {
    let rect = section.getBoundingClientRect();
    if (rect.top <= 100 && rect.bottom >= 100) {
      currentSectionId = section.id;
    }
    // console.log(currentSectionId);
  });
  links.forEach((link) => {
    let target = link.getAttribute("data-target");
    if (target == currentSectionId) {
      link.classList.add("active");
    } else {
      link.classList.remove("active");
    }
  });
});

// localStorage
// localStorage.setItem("theme", "light");
// localStorage.setItem("php-diploma", "hello");

// console.log(localStorage.getItem("theme"));
// console.log(localStorage.getItem("php-diploma"));

// localStorage.removeItem("php-diploma");
// localStorage.clear();

//Light & dark theme
let toggleBtn = document.querySelector(".toggle-button");
let toggleIcon = document.querySelector(".toggle-button i");

toggleBtn.addEventListener("click", function () {
  document.body.classList.toggle("dark-mode");
  if (document.body.classList.contains("dark-mode")) {
    toggleIcon.classList.remove("fa-moon");
    toggleIcon.classList.add("fa-sun");
    localStorage.setItem("theme", "dark");
    localStorage.setItem("icon", "dark");
  } else {
    toggleIcon.classList.remove("fa-sun");
    toggleIcon.classList.add("fa-moon");
    localStorage.setItem("theme", "light");
    localStorage.setItem("icon", "light");
  }
});

window.addEventListener("DOMContentLoaded", function () {
  if (
    localStorage.getItem("theme") == "dark" &&
    localStorage.getItem("icon") == "dark"
  ) {
    document.body.classList.add("dark-mode");
    toggleIcon.classList.remove("fa-moon");
    toggleIcon.classList.add("fa-sun");
  }
});
//countdown

let endDate = new Date("2025-07-20T22:00:00").getTime();
let countdownInterval = setInterval(() => {
  let now = new Date().getTime();
  // console.log(now);
  let distance = endDate - now;
  let days = Math.floor(distance / (1000 * 60 * 60 * 24));
  let hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  let minutes = Math.floor((distance % (1000 * 60)) / (1000 * 60));
  let seconds = Math.floor((distance % (1000 * 60)) / 1000);

  document.querySelector(".days").textContent = String(days).padStart(2, "0");
  document.querySelector(".hours").textContent = String(hours).padStart(2, "0");
  document.querySelector(".minutes").textContent = String(minutes).padStart(
    2,
    "0"
  );
  document.querySelector(".seconds").textContent = String(seconds).padStart(
    2,
    "0"
  );

  if (distance < 0) {
    clearInterval(countdownInterval);
    document.querySelector(".time-ended").innerHTML = "Time is ended";
  }
});

// let | const | var

let x = 5;

if (x == 5) {
  let x = 10;
  console.log("blocking scope", x);
}

x = 15;
console.log("global scope", x);

//

const response = {
  data: {
    username: "Pierre",
    password: "123456789",
    email: "pierre@raiseup.com",
    courses: ["frontend", "backend", "api"],
  },
  status: 200,
  message: "user loaded Successfully",
};

const { username, password, email, courses } = response.data;
const [frontend, backend] = response.data.courses;
// console.log(response.data.username);
// console.log(response.data.email);
// console.log(response.data.courses);

console.log("destructing", username);
console.log("destructing", password);
console.log("destructing", email);

// const courseName = courses.forEach((course) => {
//    return course.toUpperCase();
// });
const courseName = courses.map((course) => {
  return course.toUpperCase();
});

console.log(courseName);

//API => Application Program Interface

const userList = document.querySelector("#user-list");

fetch("https://jsonplaceholder.typicode.com/users")
  .then((response) => response.json())
  .then((data) => {
    data.forEach((user) => {
      const li = document.createElement("li");
      li.innerHTML = `${user.name}`;
      userList.appendChild(li);
    });
  })
  .catch((error) => console.log(error));
