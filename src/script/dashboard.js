function showPage(pageId) {
    const pages = document.querySelectorAll('.page');
    pages.forEach(page => page.classList.add('hidden'));
    document.getElementById(pageId).classList.remove('hidden');
  }

  // nav
  function toggleSidebar() {
    const sidebar = document.getElementById("sidebar");
    const isHidden = sidebar.classList.contains("-translate-x-full");
    sidebar.classList.toggle("-translate-x-full", !isHidden);

    // Animate Hamburger
    const hamburger = document.getElementById("hamburger");
    hamburger.classList.toggle("open");
  }
  // nav end