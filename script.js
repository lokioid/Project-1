function scrollToMenu() {
    document.getElementById("menu").scrollIntoView({ behavior: "smooth" });
  }
  
  function shopNow() {
    alert("Fitur toko belum tersedia. Silakan hubungi kami untuk pemesanan.");
  }
  
  // Carousel logic
  const track = document.querySelector(".carousel-track");
  
function nextSlide(id) {
  const track = document.querySelector(`#${id} .carousel-track`);
  track.scrollBy({ left: 220, behavior: 'smooth' });
}

function prevSlide(id) {
  const track = document.querySelector(`#${id} .carousel-track`);
  track.scrollBy({ left: -220, behavior: 'smooth' });
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

  document.addEventListener("DOMContentLoaded", () => {
    const form = document.getElementById("contactForm");
    const container = document.getElementById("testimonialContainer");
    const prevBtn = document.getElementById("prevBtn");
    const nextBtn = document.getElementById("nextBtn");
    const ratingStars = document.querySelectorAll("#ratingStars span");
    const ratingInput = document.getElementById("ratingInput");
    const nameInput = document.getElementById("nameInput");
    const messageInput = document.getElementById("messageInput");
    let currentIndex = 0;

    function showTestimonial(index) {
      const cards = document.querySelectorAll(".testimonial-card");
      cards.forEach((card, i) => {
        card.classList.toggle("active", i === index);
      });
    }

    prevBtn.onclick = () => {
      const cards = document.querySelectorAll(".testimonial-card");
      currentIndex = (currentIndex - 1 + cards.length) % cards.length;
      showTestimonial(currentIndex);
    };

    nextBtn.onclick = () => {
      const cards = document.querySelectorAll(".testimonial-card");
      currentIndex = (currentIndex + 1) % cards.length;
      showTestimonial(currentIndex);
    };

    // Interaksi klik bintang
    ratingStars.forEach(star => {
      star.addEventListener("click", () => {
        const value = parseInt(star.getAttribute("data-value"));
        ratingInput.value = value;

        ratingStars.forEach(s => {
          const sValue = parseInt(s.getAttribute("data-value"));
          s.classList.toggle("active", sValue <= value);
        });
      });
    });

    // Submit form
    form.onsubmit = e => {
      e.preventDefault();

      const name = nameInput.value.trim();
      const message = messageInput.value.trim();
      const rating = parseInt(ratingInput.value);

      if (!name || !message || isNaN(rating)) {
        alert("Mohon isi semua data dengan benar.");
        return;
      }

      const filled = "★".repeat(rating);
      const empty = "☆".repeat(5 - rating);
      const stars = filled + empty;

      container.insertAdjacentHTML("beforeend", `
        <div class="testimonial-card">
          <h3>${name.toUpperCase()}</h3>
          <p class="stars">${stars}</p>
          <p class="review-text">"${message}"</p>
        </div>
      `);

      currentIndex = document.querySelectorAll(".testimonial-card").length - 1;
      showTestimonial(currentIndex);

      form.reset();
      ratingInput.value = "";
      ratingStars.forEach(s => s.classList.remove("active"));
    };
  });


  function orderNow(button) {
    // Nomor WhatsApp tujuan (format internasional tanpa tanda +)
    let phoneNumber = "629568522888"; // ganti dengan nomor WA kamu

    // Ambil nama menu dan harga dari card yang diklik
    let menuCard = button.closest(".menu-card");
    let menuName = menuCard.querySelector("h3").innerText;
    let price = menuCard.querySelector("p").innerText;

    // Buat pesan otomatis
    let message = `Halo, saya ingin pesan ${menuName} (${price})`;

    // Encode pesan agar aman di URL
    let encodedMessage = encodeURIComponent(message);

    // Buat link WhatsApp
    let waLink = `https://wa.me/${phoneNumber}?text=${encodedMessage}`;

    // Buka WhatsApp
    window.open(waLink, "_blank");
  }

