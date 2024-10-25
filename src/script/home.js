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