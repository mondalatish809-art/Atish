// ======== SCROLL HEADER EFFECT ========
    window.addEventListener("scroll", () => {
      const header = document.querySelector("header");
      if (window.scrollY > 50) {
        header.style.background = "#14213d";
        header.style.boxShadow = "0 4px 15px rgba(0, 0, 0, 0.3)";
      } else {
        header.style.background = "#0d1b2a";
        header.style.boxShadow = "none";
      }
    });

    // ======== TOGGLE MENU ========
    function toggleMenu() {
      document.querySelector(".nav-links").classList.toggle("active");
    }

    // ======== SEARCH BAR FUNCTION ========
    document.getElementById("searchForm").addEventListener("submit", (e) => {
      e.preventDefault();
      const query = document.getElementById("searchInput").value.trim();
      if (query) {
        alert(`Searching for: ${query}`);
      } else {
        alert("Please type something to search!");
      }
    });

    // ======== CATEGORY CARD EFFECT ========
    document.querySelectorAll(".category-card").forEach((card) => {
      card.addEventListener("mouseenter", () => {
        card.style.boxShadow = "0 12px 40px rgba(0, 180, 216, 0.5)";
      });
      card.addEventListener("mouseleave", () => {
        card.style.boxShadow = "0 8px 20px rgba(0, 0, 0, 0.15)";
      });
    });
