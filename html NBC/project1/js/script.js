// Simple animation for the input placeholder + logo

document.addEventListener("DOMContentLoaded", () => {
  const input = document.querySelector("main input");
  const logo = document.querySelector("main img");

  // Animate placeholder text typing effect
  const placeholders = [
    "Search for Restaurants...",
    "Search for Cuisine...",
    "Search for a Dish..."
  ];
  let index = 0;

  setInterval(() => {
    input.setAttribute("placeholder", placeholders[index]);
    index = (index + 1) % placeholders.length;
  }, 3000);

  // Add pulse animation to logo when hovered
  logo.addEventListener("mouseenter", () => {
    logo.style.animation = "pulse 1.5s infinite";
  });

  logo.addEventListener("mouseleave", () => {
    logo.style.animation = "fadeInDown 1.5s ease";
  });
});
