// navbar fixed
window.onscroll = function () {
  const header = document.querySelector("header"); // memanggil langsung elementnnya
  const fixedNav = header.offsetTop;

  if (window.scrollY > fixedNav) {
    header.classList.add("navbar-fixed");
  } else {
    header.classList.remove("navbar-fixed");
  }
};
// humburger
const hamburger = document.querySelector("#hamburger"); // via id
const navMenu = document.querySelector("#nav-menu"); // via id

hamburger.addEventListener("click", function () {
  // kalau udah ada kelasnya hilangkan dan kalau belum ada kelasnya tambahin
  hamburger.classList.toggle("hamburger-active");
  // untuk navmenu versi dekstop
  navMenu.classList.toggle("hidden");
});
// nav

// buat efek total project
// window.onload = animateProjectsCount; // Memulai animasi saat halaman dimuat
function animateProjectsCount() {
  const element = document.getElementById("total-projects");
  let startValue = 0; // Memulai dari 0
  const endValue = 50; // Nilai akhir yang diinginkan
  const duration = 10000; // Durasi animasi dalam milidetik (2 detik)
  const stepTime = Math.abs(Math.floor(duration / endValue)); // Waktu per langkah

  const timer = setInterval(() => {
    startValue++;
    element.textContent = `${startValue} Kg`;
    if (startValue >= endValue) {
      clearInterval(timer); // Menghentikan animasi setelah mencapai nilai akhir
    }
  }, stepTime);
}

window.onload = animateProjectsCount; // Memulai animasi saat halaman dimuat
// efek end

// misi kami
let currentSlide = 0;
    const totalSlidesMisi = document.querySelectorAll("#carousel > div > div").length;
    const carousel = document.querySelector("#carousel > div");
    const dots = document.querySelectorAll(".dot");

    function updateCarousel() {
      const offset = currentSlide * -100;
      carousel.style.transform = `translateX(${offset}%)`;
      dots.forEach((dot, index) => {
        dot.classList.toggle("bg-green_gw", index === currentSlide);
        dot.classList.toggle("bg-gray-300", index !== currentSlide);
      });
    }

    function nextSlide() {
      currentSlide = (currentSlide + 1) % totalSlidesMisi;
      updateCarousel();
    }

    function prevSlide() {
      currentSlide = (currentSlide - 1 + totalSlidesMisi) % totalSlidesMisi;
      updateCarousel();
    }

    function goToSlide(index) {
      currentSlide = index;
      updateCarousel();
    }

    updateCarousel();

// misi kami end

// proses pembuatan
function showDescription(title, description) {
  document.getElementById('modal-title').textContent = title;
  document.getElementById('modal-description').textContent = description;
  document.getElementById('overlay').classList.remove('hidden'); // Menampilkan overlay dan modal
}

// Menutup modal
document.getElementById('close').addEventListener('click', () => {
  document.getElementById('overlay').classList.add('hidden'); // Menyembunyikan overlay dan modal
});

// Menutup modal jika klik di luar konten modal
document.getElementById('overlay').addEventListener('click', (e) => {
  if (e.target === document.getElementById('overlay')) {
      document.getElementById('overlay').classList.add('hidden'); // Menyembunyikan overlay dan modal
  }
});
// proses pembuatan end

// our team
let currentIndex = 0;
const slides = document.querySelectorAll('#team-slider > div');
const totalSlidesTeam = slides.length;

function updateSlidePosition() {
  const slider = document.getElementById('team-slider');
  slider.style.transform = `translateX(-${currentIndex * 100}%)`;
}

function nextSlide() {
  currentIndex = (currentIndex + 1) % totalSlidesTeam;
  updateSlidePosition();
}

function prevSlide() {
  currentIndex = (currentIndex - 1 + totalSlidesTeam) % totalSlidesTeam;
  updateSlidePosition();
}
  // our team