// Select the HTML elements
const slides = document.querySelector(".slides");
const images = document.querySelectorAll(".slides img");
const next = document.getElementById("next");
const prev = document.getElementById("prev");
const dotsContainer = document.getElementById("dots");

let index = 0;

// Create a dot for each image
images.forEach(function (image, i) {
  const dot = document.createElement("span");

  dot.classList.add("dot");

  dot.addEventListener("click", function () {
    index = i;
    showSlide();
  });

  dotsContainer.appendChild(dot);
});

const dots = document.querySelectorAll(".dot");

// Show the selected image
function showSlide() {
  slides.style.transform = "translateX(-" + index * 100 + "%)";

  dots.forEach(function (dot, i) {
    dot.classList.toggle("active", i === index);
  });
}

// Next arrow
next.addEventListener("click", function () {
  index++;

  if (index >= images.length) {
    index = 0;
  }

  showSlide();
});

// Previous arrow
prev.addEventListener("click", function () {
  index--;

  if (index < 0) {
    index = images.length - 1;
  }

  showSlide();
});

// Display the first image
showSlide();
