// =========================================
// LOADER
// =========================================

window.addEventListener("load", () => {

  setTimeout(() => {

    document
      .querySelector(".loader")
      .classList.add("hidden");

  }, 3200);

});

// =========================================
// NAVBAR SCROLL
// =========================================

const navbar =
  document.querySelector(".navbar");

window.addEventListener("scroll", () => {

  if (window.scrollY > 50) {

    navbar.classList.add("scrolled");

  } else {

    navbar.classList.remove("scrolled");

  }

});

// =========================================
// MOBILE MENU
// =========================================

const hamburger =
  document.querySelector(".hamburger");

const navLinks =
  document.querySelector(".nav-links");

hamburger.addEventListener("click", () => {

  navLinks.classList.toggle("active");

});

// =========================================
// SCROLL REVEAL
// =========================================

const reveals =
  document.querySelectorAll(".reveal");

const observer =
  new IntersectionObserver(entries => {

    entries.forEach(entry => {

      if (entry.isIntersecting) {

        entry.target.classList.add("active");

      }

    });

  }, {
    threshold: 0.2
  });

reveals.forEach(reveal => {

  observer.observe(reveal);

});

// =========================================
// COUNTER
// =========================================

const counters =
  document.querySelectorAll("[data-count]");

counters.forEach(counter => {

  const updateCounter = () => {

    const target =
      +counter.getAttribute("data-count");

    const current =
      +counter.innerText;

    const increment =
      target / 100;

    if (current < target) {

      counter.innerText =
        Math.ceil(current + increment);

      setTimeout(updateCounter, 30);

    } else {

      counter.innerText = target;

    }

  };

  updateCounter();

});

// =========================================
// BMI CALCULATOR
// =========================================

const calculateBtn =
  document.getElementById("calculateBtn");

calculateBtn.addEventListener("click", () => {

  const height =
    document.getElementById("height").value;

  const weight =
    document.getElementById("weight").value;

  const bmi =
    (weight / ((height / 100) ** 2))
      .toFixed(1);

  const bmiValue =
    document.getElementById("bmiValue");

  const bmiText =
    document.getElementById("bmiText");

  bmiValue.innerText = bmi;

  if (bmi < 18.5) {

    bmiText.innerText =
      "Join DEO GYM muscle gain programs to build strength and size.";

  } else if (bmi < 25) {

    bmiText.innerText =
      "Maintain your physique and achieve aesthetic body goals at DEO GYM.";

  } else {

    bmiText.innerText =
      "Join DEO GYM fat loss transformation programs for healthier fitness.";

  }

});

// =========================================
// GALLERY LIGHTBOX
// =========================================

const galleryItems =
  document.querySelectorAll(".gallery-item");

const lightbox =
  document.querySelector(".lightbox");

const lightboxImg =
  lightbox.querySelector("img");

galleryItems.forEach(item => {

  item.addEventListener("click", () => {

    lightbox.style.display = "flex";

    lightboxImg.src = item.src;

  });

});

document
  .querySelector(".close-lightbox")
  .addEventListener("click", () => {

    lightbox.style.display = "none";

  });

// =========================================
// PLAN AUTO FILL
// =========================================

const chooseBtns =
  document.querySelectorAll(".choose-plan");

const planSelect =
  document.getElementById("plan");

chooseBtns.forEach(btn => {

  btn.addEventListener("click", () => {

    planSelect.value =
      btn.dataset.plan;

    document
      .getElementById("contact")
      .scrollIntoView({
        behavior: "smooth"
      });

  });

});

// =========================================
// WHATSAPP FORM
// =========================================

const bookingForm =
  document.getElementById("bookingForm");

bookingForm.addEventListener("submit", e => {

  e.preventDefault();

  const name =
    document.getElementById("name").value;

  const mobile =
    document.getElementById("mobile").value;

  const gender =
    document.getElementById("gender").value;

  const goal =
    document.getElementById("goal").value;

  const plan =
    document.getElementById("plan").value;

  const date =
    document.getElementById("date").value;

  const message =
`
🏋️ DEO GYM BOOKING

Name: ${name}
Mobile: ${mobile}
Gender: ${gender}
Goal: ${goal}
Plan: ${plan}
Joining Date: ${date}
`;

  const whatsappURL =
`https://wa.me/917376704008?text=${encodeURIComponent(message)}`;

  window.open(whatsappURL, "_blank");

});

// =========================================
// REVIEW AUTO SLIDER
// =========================================

const slider =
  document.querySelector(".review-slider");

let scrollAmount = 0;

setInterval(() => {

  scrollAmount += 380;

  if (
    scrollAmount >= slider.scrollWidth
  ) {

    scrollAmount = 0;

  }

  slider.scrollTo({
    left: scrollAmount,
    behavior: "smooth"
  });

}, 3000);

// =========================================
// BACK TO TOP
// =========================================

const backToTop =
  document.querySelector(".back-to-top");

window.addEventListener("scroll", () => {

  if (window.scrollY > 500) {

    backToTop.style.display = "block";

  } else {

    backToTop.style.display = "none";

  }

});

backToTop.addEventListener("click", () => {

  window.scrollTo({
    top: 0,
    behavior: "smooth"
  });

});

// =========================================
// PARALLAX HERO
// =========================================

window.addEventListener("scroll", () => {

  const hero =
    document.querySelector(".hero");

  hero.style.backgroundPositionY =
    `${window.scrollY * 0.5}px`;

});
