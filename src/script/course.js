const materials = [
  { id: "courses1", name: "Pengenalan Alat dan Bahan", completed: false },
  { id: "courses2", name: "Teknik Dasar Penanaman", completed: false },
  { id: "courses3", name: "Perawatan Tanaman", completed: false },
  { id: "uploadPractice", name: "Upload Praktik Berkebun", completed: false },
];

// menampilkan halaman
function showCourse(courseId) {
  const courses = document.querySelectorAll(".course");
  courses.forEach((course) => course.classList.add("hidden"));
  document.getElementById(courseId).classList.remove("hidden");
}

// accorsion
function toggleAccordion(button) {
  const content = button.nextElementSibling; // Ambil elemen konten di bawah tombol

  // Toggle kelas `hidden` untuk menampilkan/menyembunyikan konten
  content.classList.toggle("hidden");
}

// upload praktik
function uploadPractice() {
  const uploadInput = document.getElementById("uploadInput");
  const uploadStatus = document.getElementById("uploadStatus");

  if (uploadInput.files.length > 0) {
    uploadStatus.classList.remove("hidden");
    markAsComplete(materials.length); // Mark the last material as complete
  } else {
    alert("Silakan pilih file untuk diunggah.");
  }
}
// ipload praktik end

// progres bar
// Total jumlah materi dari semua accordion
const totalMaterials = 10; // Update jumlah materi total
let completedMaterials = 0;

// Fungsi untuk menyelesaikan materi
function completeMaterial(materialId, accordionId) {
  const materialStatus = document.getElementById(`status-${materialId}`);

  // Cek jika materi belum selesai
  if (materialStatus && materialStatus.classList.contains("hidden")) {
    materialStatus.classList.remove("hidden");
    completedMaterials++;
    updateProgressBar();
  }

  // Cek jika upload praktik selesai
  if (materialId === "courses10") {
    document.getElementById("mark-uploadPractice").classList.remove("hidden");
    completedMaterials++;
    updateProgressBar();
  }

  // Periksa apakah semua materi dalam accordion selesai
  checkAccordionCompletion(accordionId);
}

// Fungsi untuk mengecek apakah semua materi dalam accordion selesai
function checkAccordionCompletion(accordionId) {
  // Cari semua item dalam accordion tertentu berdasarkan ID accordion
  const accordionItems = document.querySelectorAll(
    `#${accordionId} ~ .accordion-content .text-green-500`
  );

  // Periksa apakah semua item dalam accordion tersebut telah selesai
  const allCompleted = Array.from(accordionItems).every(
    (item) => !item.classList.contains("hidden")
  );

  // Jika semua selesai, tampilkan tanda "Complete" untuk accordion
  if (allCompleted) {
    const mark = document.getElementById(`mark-${accordionId}`);
    if (mark) {
      mark.classList.remove("hidden");
    }
  }
}

// Fungsi untuk memperbarui progress bar
function updateProgressBar() {
  const progressBar = document.getElementById("progressBar");
  const progressPercentage = document.getElementById("progressPercentage");
  const progress = (completedMaterials / totalMaterials) * 100;

  progressBar.style.width = `${progress}%`;
  progressPercentage.textContent = `${Math.round(progress)}%`;

  // Tampilkan tombol Download jika progres 100%
  if (Math.round(progress) === 100) {
    document.getElementById("certificateSection").classList.remove("hidden");
  }
}

// Fungsi untuk mengunduh sertifikat
function downloadCertificate() {
  alert("Sertifikat Anda telah diunduh!");
}

// progres bar end

// humberger
function toggleMenu() {
  const sidebar = document.getElementById("sidebarMenu");
  const isHidden = sidebar.classList.contains("translate-x-full");
  sidebar.classList.toggle("translate-x-full", !isHidden);

  // Animate Hamburger
  const hamburger = document.getElementById("hamburger");
  hamburger.classList.toggle("open");
}

function showSubMaterial(materialIndex, subMaterialName) {
  const mainContent = document.getElementById("mainContent");
  mainContent.innerHTML = `
      <h1 class="font-bold text-2xl">${subMaterialName}</h1>
      <p class="text-gray-600">Ini adalah detail dari submateri <b>${subMaterialName}</b> dalam modul ${
    materials[materialIndex - 1]
  }.</p>
    `;
  markAsComplete(materialIndex);
}

// next dan back
function navigateCourse(direction, currentCourse) {
  const totalCourses = 3; // Total jumlah kursus
  const current = document.getElementById(`courses${currentCourse}`);
  let targetCourse =
    direction === "next" ? currentCourse + 1 : currentCourse - 1;

  // Validasi agar tidak melampaui batas kursus
  if (targetCourse < 1 || targetCourse > totalCourses) return;

  // Sembunyikan kursus saat ini
  current.classList.add("hidden");

  // Tampilkan kursus target
  const target = document.getElementById(`courses${targetCourse}`);
  target.classList.remove("hidden");

  // Perbarui tombol navigasi
  updateButtons(targetCourse, totalCourses);
}

function updateButtons(currentCourse, totalCourses) {
  const prevButton = document.querySelector(
    `#courses${currentCourse} button[onclick*="prev"]`
  );
  const nextButton = document.querySelector(
    `#courses${currentCourse} button[onclick*="next"]`
  );

  // Perbarui tombol Kembali
  if (currentCourse === 1) {
    prevButton.setAttribute("disabled", true);
  } else {
    prevButton.removeAttribute("disabled");
  }

  // Perbarui tombol Lanjut
  if (currentCourse === totalCourses) {
    nextButton.setAttribute("disabled", true);
  } else {
    nextButton.removeAttribute("disabled");
  }
}

// progres

// Inisialisasi state untuk kursus pertama
updateButtons(1, 3);

// kursus
