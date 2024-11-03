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
const totalSlidesMisi = document.querySelectorAll(
  "#carousel > div > div"
).length;
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

function nextSlidemisi() {
  currentSlide = (currentSlide + 1) % totalSlidesMisi;
  updateCarousel();
}

function prevSlidemisi() {
  currentSlide = (currentSlide - 1 + totalSlidesMisi) % totalSlidesMisi;
  updateCarousel();
}

function goToSlidemisi(index) {
  currentSlide = index;
  updateCarousel();
}

updateCarousel();

// misi kami end

// // proses pembuatan
// function showDescription(title, description) {
//   document.getElementById('modal-title').textContent = title;
//   document.getElementById('modal-description').textContent = description;
//   document.getElementById('overlay').classList.remove('hidden'); // Menampilkan overlay dan modal
// }

// // Menutup modal
// document.getElementById('close').addEventListener('click', () => {
//   document.getElementById('overlay').classList.add('hidden'); // Menyembunyikan overlay dan modal
// });

// // Menutup modal jika klik di luar konten modal
// document.getElementById('overlay').addEventListener('click', (e) => {
//   if (e.target === document.getElementById('overlay')) {
//       document.getElementById('overlay').classList.add('hidden'); // Menyembunyikan overlay dan modal
//   }
// });
// // proses pembuatan end

// documentation
const images = [
  "src/assets/images/pexels-sasha-kim-9413760.jpg",
  "src/assets/images/pexels-shvetsa-5830935.jpg",
  "src/assets/images/pexels-greta-hoffman-7728970.jpg",
  "src/assets/images/pexels-introspectivedsgn-10012860.jpg",
];
let currentImageIndex = 0;
let scale = 1;
let isDragging = false;
let startX,
  startY,
  currentX = 0,
  currentY = 0;

function showImage(src) {
  document.getElementById("mainImage").src = src;
}

function nextImage() {
  currentImageIndex = (currentImageIndex + 1) % images.length;
  showImage(images[currentImageIndex]);
}

function prevImage() {
  currentImageIndex = (currentImageIndex - 1 + images.length) % images.length;
  showImage(images[currentImageIndex]);
}

// Open Modal
function openModal(src) {
  document.getElementById("imageModal").classList.remove("hidden");
  document.getElementById("modalImage").src = src;
  scale = 1;
  currentX = currentY = 0;
  document.getElementById(
    "modalImage"
  ).style.transform = `scale(${scale}) translate(0px, 0px)`;
}

// Close Modal
function closeModal() {
  document.getElementById("imageModal").classList.add("hidden");
}

// Zoom In Function
function zoomIn() {
  scale += 0.2;
  updateTransform();
}

// Zoom Out Function
function zoomOut() {
  if (scale > 0.4) {
    scale -= 0.2;
    updateTransform();
  }
}

function updateTransform() {
  const modalImage = document.getElementById("modalImage");
  modalImage.style.transform = `scale(${scale}) translate(${currentX}px, ${currentY}px)`;
}

// Drag Functionality
const modalImage = document.getElementById("modalImage");

modalImage.addEventListener("mousedown", (e) => {
  isDragging = true;
  startX = e.clientX - currentX;
  startY = e.clientY - currentY;
  e.preventDefault();
});

document.addEventListener("mousemove", (e) => {
  if (isDragging) {
    currentX = e.clientX - startX;
    currentY = e.clientY - startY;
    updateTransform();
  }
});

document.addEventListener("mouseup", () => {
  isDragging = false;
});

// Touch events for mobile
modalImage.addEventListener("touchstart", (e) => {
  isDragging = true;
  const touch = e.touches[0];
  startX = touch.clientX - currentX;
  startY = touch.clientY - currentY;
});

document.addEventListener("touchmove", (e) => {
  if (isDragging) {
    const touch = e.touches[0];
    currentX = touch.clientX - startX;
    currentY = touch.clientY - startY;
    updateTransform();
  }
});

document.addEventListener("touchend", () => {
  isDragging = false;
});
// documentation end

// our team
let currentIndex = 0;
const slides = document.querySelectorAll("#team-slider > div");
const totalSlidesTeam = slides.length;

function updateSlidePosition() {
  const slider = document.getElementById("team-slider");
  slider.style.transform = `translateX(-${currentIndex * 100}%)`;
}

function nextSlideteam() {
  currentIndex = (currentIndex + 1) % totalSlidesTeam;
  updateSlidePosition();
}

function prevSlideteam() {
  currentIndex = (currentIndex - 1 + totalSlidesTeam) % totalSlidesTeam;
  updateSlidePosition();
}
// our team

// kursus
const courseSlider = document.getElementById("courseSlider");
const cardWidth = courseSlider.querySelector(".w-72").offsetWidth + 24; // Adjust as necessary

function nextSlideKursus() {
  courseSlider.scrollBy({ left: cardWidth, behavior: "smooth" });
}

function prevSlideKursus() {
  courseSlider.scrollBy({ left: -cardWidth, behavior: "smooth" });
}
// kursus end

// produk
const slider = document.getElementById('productSlider');
let currentPosition = 0;
const cardWidthProduk = 256; // lebar tiap card + margin

document.getElementById('prevBtn').addEventListener('click', () => {
    if (currentPosition > 0) {
        currentPosition--;
        slider.style.transform = `translateX(-${currentPosition * cardWidthProduk}px)`;
    }
});

document.getElementById('nextBtn').addEventListener('click', () => {
    if (currentPosition < slider.childElementCount - 2) {
        currentPosition++;
        slider.style.transform = `translateX(-${currentPosition * cardWidthProduk}px)`;
    }
});

function redirectToProduct(productId) {
    window.location.href = `/product/${productId}`;
}
// produk end

// // testimony
const sliderTesti = document.getElementById('testimony-slider');
  const nextButton = document.getElementById('btn-next-testi');
  const prevButton = document.getElementById('btn-previous-testi');
  let currentIndexTesti = 0;
  const totalSlidesTesti = sliderTesti.children.length;

  function updateSlider() {
    sliderTesti.style.transform = `translateX(-${currentIndexTesti * 100}%)`;
  }

  nextButton.addEventListener('click', () => {
    currentIndexTesti = (currentIndexTesti + 1) % totalSlidesTesti;
    updateSlider();
  });

  prevButton.addEventListener('click', () => {
    currentIndexTesti = (currentIndexTesti - 1 + totalSlidesTesti) % totalSlidesTesti;
    updateSlider();
  });
// // testimony end
