// 🌟 Scroll To Top Button
const scrollTopBtn = document.getElementById("scrollTopBtn");

// Show button when user scrolls down
window.addEventListener("scroll", () => {
  if (window.scrollY > 300) {
    scrollTopBtn.style.display = "block";
  } else {
    scrollTopBtn.style.display = "none";
  }
});

// Smooth scroll to top
scrollTopBtn.addEventListener("click", () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
});


// ☕ Menu Slider Logic
const track = document.querySelector(".menu-track");
const nextBtn = document.querySelector(".next");
const prevBtn = document.querySelector(".prev");

if (track && nextBtn && prevBtn) {
  let index = 0;

  nextBtn.addEventListener("click", () => {
    const items = document.querySelectorAll(".menu-item").length;
    const visibleItems = window.innerWidth < 768 ? 1 : 3; // responsive adjustment

    if (index < items - visibleItems) {
      index++;
      updateSlider();
    }
  });

  prevBtn.addEventListener("click", () => {
    if (index > 0) {
      index--;
      updateSlider();
    }
  });

  function updateSlider() {
    const slideWidth = 320; // width + gap
    track.style.transform = `translateX(-${index * slideWidth}px)`;
  }

  // Optional: Auto-slide every 4 seconds
  let autoSlide = setInterval(() => {
    const items = document.querySelectorAll(".menu-item").length;
    const visibleItems = window.innerWidth < 768 ? 1 : 3;
    if (index < items - visibleItems) {
      index++;
    } else {
      index = 0;
    }
    updateSlider();
  }, 4000);

  // Pause auto-slide on hover
  track.addEventListener("mouseenter", () => clearInterval(autoSlide));
  track.addEventListener("mouseleave", () => {
    autoSlide = setInterval(() => {
      const items = document.querySelectorAll(".menu-item").length;
      const visibleItems = window.innerWidth < 768 ? 1 : 3;
      if (index < items - visibleItems) {
        index++;
      } else {
        index = 0;
      }
      updateSlider();
    }, 4000);
  });
}
