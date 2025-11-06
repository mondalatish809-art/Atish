// Toggle mobile menu
document.addEventListener("DOMContentLoaded", () => {
  const toggle = document.querySelector(".menu-toggle");
  const nav = document.querySelector("nav");

  toggle.addEventListener("click", () => {
    nav.classList.toggle("show");
  });

  // Search form functionality
  const form = document.querySelector(".hero-content form");
  const input = form.querySelector("input");

  form.addEventListener("submit", (e) => {
    e.preventDefault();
    const query = input.value.trim();
    if (!query) {
      input.style.border = "2px solid red";
      setTimeout(() => (input.style.border = "none"), 1000);
      return;
    }
    window.location.href = `search.html?q=${encodeURIComponent(query)}`;
  });
});
