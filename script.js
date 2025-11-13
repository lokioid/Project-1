function scrollToMenu() {
    document.getElementById("menu").scrollIntoView({ behavior: "smooth" });
  }
  
  function shopNow() {
    alert("Fitur toko belum tersedia. Silakan hubungi kami untuk pemesanan.");
  }
  
  // Carousel logic
  const track = document.querySelector(".carousel-track");
  
  function nextSlide() {
    track.scrollBy({ left: 220, behavior: "smooth" });
  }
  
  function prevSlide() {
    track.scrollBy({ left: -220, behavior: "smooth" });
  }
  
  // Form validation
  document.getElementById("contactForm").addEventListener("submit", function (e) {
    e.preventDefault();
    alert("Terima kasih atas pesan Anda!");
  });

  document.addEventListener("DOMContentLoaded", () => {
  const sections = document.querySelectorAll("section");
  const navLinks = document.querySelectorAll("nav ul li a");

  window.addEventListener("scroll", () => {
    let current = "";

    sections.forEach(section => {
      const sectionTop = section.offsetTop;
      const sectionHeight = section.offsetHeight;
      if (pageYOffset >= sectionTop - sectionHeight / 3) {
        current = section.getAttribute("id");
      }
    });

    navLinks.forEach(link => {
      link.classList.remove("active");
      if (link.getAttribute("href") === "#" + current) {
        link.classList.add("active");
      }
    });
  });
});

  